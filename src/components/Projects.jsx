import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Projects = ({ id, locomotiveReady }) => {
    const [currentNum, setCurrentNum] = useState(1)
    const numberRef = useRef(null)
    const mainDiv = useRef(null)
    const staticPage = useRef(null)
    const triggersRef = useRef([])
    const setupComplete = useRef(false)

    useGSAP(() => {
        // Wait for locomotive to be ready
        if (!locomotiveReady || setupComplete.current) return;

        if (!mainDiv.current || !staticPage.current || typeof window === "undefined") {
            console.log("❌ Projects: Elements not ready");
            return;
        }

        console.log("🚀 PROJECTS: Setting up with locomotive ready");

        const setupTriggers = () => {
            try {
                setupComplete.current = true;

                // Clear existing
                triggersRef.current.forEach(trigger => trigger.kill());
                triggersRef.current = [];

                // Force height recalculation
                const forceLayout = () => {
                    mainDiv.current.style.transform = 'translateZ(0)';
                    staticPage.current.style.transform = 'translateZ(0)';

                    // Create pin trigger with explicit measurements
                    const triggerRect = mainDiv.current.getBoundingClientRect();
                    const pinRect = staticPage.current.getBoundingClientRect();

                    console.log("📏 Trigger height:", triggerRect.height);
                    console.log("📏 Pin height:", pinRect.height);

                    const pinTrigger = ScrollTrigger.create({
                        trigger: mainDiv.current,
                        start: "top -70%",
                        end: "bottom bottom",
                        pin: staticPage.current,
                        scroller: "[data-scroll-container]",
                        pinType: "transform",
                        anticipatePin: 1,
                        refreshPriority: -1,
                        pinSpacing: false,
                        // Force refresh on creation
                        immediateRender: false,
                        onPin: () => {
                            console.log("📌 PROJECTS PINNED! ✅");
                            staticPage.current.style.zIndex = "10";
                        },
                        onUnpin: () => {
                            console.log("📌 PROJECTS UNPINNED! ✅");
                        },
                        onRefresh: () => {
                            console.log("🔄 Projects pin refreshed");
                        }
                    });

                    triggersRef.current.push(pinTrigger);

                    // Project number triggers
                    setTimeout(() => {
                        const projectElements = document.querySelectorAll(".project");
                        console.log(`🎯 Creating triggers for ${projectElements.length} projects`);

                        projectElements.forEach((el, i) => {
                            const rect = el.getBoundingClientRect();
                            console.log(`📏 Project ${i + 1} height:`, rect.height);

                            const projectTrigger = ScrollTrigger.create({
                                trigger: el,
                                start: "top center",
                                scroller: "[data-scroll-container]",
                                onEnter: () => {
                                    console.log(`🎯 ENTERING PROJECT ${i + 1} ✅`);
                                    setCurrentNum(i + 1);
                                },
                                onEnterBack: () => {
                                    console.log(`🎯 ENTERING BACK PROJECT ${i + 1} ✅`);
                                    setCurrentNum(i + 1);
                                },
                            });

                            triggersRef.current.push(projectTrigger);
                        });

                        // Force final refresh
                        setTimeout(() => {
                            ScrollTrigger.refresh();
                            console.log("✅ PROJECTS SETUP COMPLETE");
                        }, 200);

                    }, 300);
                };

                // Execute with delay
                setTimeout(forceLayout, 100);

            } catch (error) {
                console.error("❌ Projects setup error:", error);
                setupComplete.current = false;
            }
        };

        setupTriggers();

        return () => {
            triggersRef.current.forEach(trigger => trigger.kill());
            triggersRef.current = [];
            setupComplete.current = false;
        };
    }, [locomotiveReady]); // Depend on locomotiveReady

    // Number animation
    useEffect(() => {
        if (numberRef.current) {
            gsap.fromTo(
                numberRef.current,
                { y: "100%", opacity: 0 },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 1.4,
                    ease: "cubic-bezier(0.76, 0, 0.24, 1)"
                }
            );
        }
    }, [currentNum]);

    return (
        <section id={id} data-scroll-section>
            <div data-scroll data-scroll-speed={-0.7}>
                <hr className="block sm:hidden bg-gray-100 h-[1px] opacity-20" />
                <div ref={mainDiv} className="relative mainDiv bg-black text-white py-10 px-5 sm:px-8 min-h-screen">
                    {/* Top heading */}
                    <div className="servics text-gray-300 pb-20">
                        <h1 className="text-[15vw] sm:text-[9vw] uppercase font-semibold tracking-tighter leading-none text-gray-200">
                            Selected Works
                        </h1>
                        <div className="py-5 sm:py-12 sm:flex sm:justify-end">
                            <div className="sm:flex sm:w-[50%] sm:justify-end sm:gap-10 sm:text-left">
                                <p className="text-xl mb-3 sm:w-[10%] uppercase">(Projects)</p>
                                <div className="sm:w-[90%] pl-10">
                                    <p className="sm:w-[70%] sm:text-xl">
                                        Thoughtfully crafted digital experiences that blend utility
                                        and aesthetics into something functional, memorable, and
                                        refined.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Two-column layout */}
                    <div className="flex">
                        {/* LEFT — stays pinned */}
                        <div ref={staticPage} className="staticPage hidden h-[80vh] sm:w-[40%] sm:flex sm:items-start sm:justify-center sm:text-[18vw] font-light text-gray-400 font-['montrealMono']">
                            <span className="overflow-hidden h-[1em] leading-none">
                                <span ref={numberRef}>
                                    {String(currentNum).padStart(2, '0')}
                                </span>
                            </span>
                        </div>

                        {/* RIGHT — scrolls normally */}
                        <div className="pageOne w-full sm:w-[60%] space-y-40">
                            <a href="">
                                <div className='mb-15'>
                                    <div data-index="1" className="project h-screen flex items-center justify-center bg-gray-800">
                                        <h2 className="text-4xl">Project One</h2>
                                    </div>
                                    <div className='sm:flex sm:justify-between sm:py-3'>
                                        <div className='mt-5 sm:mt-0'>
                                            <p className='text-lg font-bold'>Web Development</p>
                                            <h2 className='text-2xl font-semibold'>Movie Recommendation</h2>
                                        </div>
                                        <div className='flex justify-start mt-5 sm:mt-0 sm:justify-center items-end gap-5'>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 bg-transparent flex justify-center items-center text-sm w-fit h-fit'>Development</div>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 flex justify-center items-center text-sm w-fit h-fit bg-gray-500'>2025</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="">
                                <div className='mb-15'>
                                    <div data-index="2" className="project h-screen flex items-center justify-center bg-gray-700">
                                        <h2 className="text-4xl">Project Two</h2>
                                    </div>
                                    <div className='sm:flex sm:justify-between sm:py-3'>
                                        <div className='mt-5 sm:mt-0'>
                                            <p className='text-lg font-bold'>Web Development</p>
                                            <h2 className='text-2xl font-semibold'>Movie Recommendation</h2>
                                        </div>
                                        <div className='flex justify-start mt-5 sm:mt-0 sm:justify-center items-end gap-5'>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 bg-transparent flex justify-center items-center text-sm w-fit h-fit'>Development</div>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 flex justify-center items-center text-sm w-fit h-fit bg-gray-500'>2025</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="">
                                <div className='mb-15'>
                                    <div data-index="3" className="project h-screen flex items-center justify-center bg-gray-600">
                                        <h2 className="text-4xl">Project Three</h2>
                                    </div>
                                    <div className='sm:flex sm:justify-between sm:py-3'>
                                        <div className='mt-5 sm:mt-0'>
                                            <p className='text-lg font-bold'>Web Development</p>
                                            <h2 className='text-2xl font-semibold'>Movie Recommendation</h2>
                                        </div>
                                        <div className='flex justify-start mt-5 sm:mt-0 sm:justify-center items-end gap-5'>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 bg-transparent flex justify-center items-center text-sm w-fit h-fit'>Development</div>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 flex justify-center items-center text-sm w-fit h-fit bg-gray-500'>2025</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;