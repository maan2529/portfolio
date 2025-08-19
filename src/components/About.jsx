import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const About = ({ id, locomotiveReady }) => {
    const triggersRef = useRef([])
    const setupComplete = useRef(false)

    useGSAP(() => {
        // Wait for locomotive to be ready
        if (!locomotiveReady || setupComplete.current) return;

        if (typeof window === "undefined") {
            console.log("❌ ABOUT: Not in browser environment");
            return;
        }

        console.log("🚀 ABOUT: Setting up with locomotive ready");

        const setupTriggers = () => {
            try {
                setupComplete.current = true;

                // Clear previous triggers
                triggersRef.current.forEach(trigger => trigger.kill());
                triggersRef.current = [];

                const forceLayout = () => {
                    const sections = document.querySelectorAll('.technology');

                    if (sections.length === 0) {
                        console.log("❌ ABOUT: No technology sections found");
                        return;
                    }

                    console.log(`🎯 ABOUT: Found ${sections.length} technology sections`);

                    sections.forEach((el, index) => {
                        // Force layout calculation
                        el.style.transform = 'translateZ(0)';

                        // Check parent element
                        if (!el.parentElement) {
                            console.warn(`❌ ABOUT: Parent element not found for section ${index}`);
                            return;
                        }

                        // Get measurements
                        const elRect = el.getBoundingClientRect();
                        const parentRect = el.parentElement.getBoundingClientRect();

                        console.log(`📏 ABOUT: Section ${index} height:`, elRect.height);
                        console.log(`📏 ABOUT: Parent ${index} height:`, parentRect.height);

                        const trigger = ScrollTrigger.create({
                            trigger: el,
                            start: `top ${10 + 16 * index}%`,
                            endTrigger: el.parentElement,
                            end: "bottom bottom",
                            scroller: "[data-scroll-container]",
                            pin: el,
                            pinType: "transform",
                            anticipatePin: 1,
                            refreshPriority: -1,
                            pinSpacing: false,
                            immediateRender: false,
                            onPin: () => {
                                console.log(`📌 ABOUT SECTION ${index} PINNED! ✅`);
                                el.style.zIndex = `${20 + index}`;
                            },
                            onUnpin: () => {
                                console.log(`📌 ABOUT SECTION ${index} UNPINNED! ✅`);
                            },
                            onRefresh: () => {
                                console.log(`🔄 ABOUT: Technology section ${index} refreshed`);
                            }
                        });

                        triggersRef.current.push(trigger);
                    });

                    // Force final refresh after all triggers are created
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                        console.log(`✅ ABOUT SETUP COMPLETE - ${triggersRef.current.length} triggers created`);
                    }, 400);
                };

                // Execute with delay to ensure DOM is stable
                setTimeout(forceLayout, 200);

            } catch (error) {
                console.error("❌ ABOUT: Setup error:", error);
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

    return (
        <section
            id={id}
            data-scroll-section
            className='rounded-tl-4xl rounded-tr-4xl bg-black text-white py-10 px-8 sm:pb-50 font-["DM sans 9pt"]'
        >
            <div>
                <div>
                    <div className="servics text-gray-300 pb-20">
                        <h1 className="text-[15vw] sm:text-[12vw] uppercase font-semibold tracking-tighter text-gray-200">
                            What i do
                        </h1>

                        <div className="py-5 sm:py-10 sm:flex sm:justify-end">
                            <div className="sm:flex sm:w-[55%] sm:justify-end sm:gap-10 sm:text-left">
                                <p className="text-xl mb-3 sm:w-[10%] uppercase">(Services)</p>
                                <div className='sm:w-[90%] pl-10'>
                                    <p className="sm:w-[80%] sm:text-lg">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
                                        tempora ipsam voluptas eligendi dolorem aspernatur illo aperiam deleniti
                                        sed quo dolor id cumque quidem, omnis repellat ea architecto! At, in?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills">
                    <div className="pages flex flex-col gap-2">

                        <div className='technology bg-black'>
                            <hr className="bg-gray-100 h-[1px] opacity-30" />
                            <div className="skillspageOne w-full flex items-start sm:px-10 sm:py-4">
                                <div className="num w-[40%] hidden sm:block text-4xl font-semibold">(01)</div>
                                <div className="tech sm:w-[60%]">
                                    <div className='flex text-4xl font-semibold gap-5 pb-7 pt-4 sm:pt-0 text-gray-200'>
                                        <span className='sm:hidden'>(01)</span>
                                        <h1 className='sm:text-[4vw]'>Full Stack Development</h1>
                                    </div>

                                    <p className='text-sm leading-tight text-gray-300 pb-4 sm:w-[55%] font-semibold sm:leading-5'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?
                                    </p>

                                    <div>
                                        <div className='flex gap-4 items-center sm:text-2xl'>
                                            <p className='text-zinc-400 font-bold text-xl'>01</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center'>
                                            <p className='text-zinc-400 font-bold text-xl'>02</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>MongoDB, PostgreSQL</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center'>
                                            <p className='text-zinc-400 font-bold text-xl'>03</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>AWS, Docker</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='technology bg-black'>
                            <hr className="bg-gray-100 h-[1px] opacity-30" />
                            <div className="skillspageOne w-full flex items-start sm:px-10 sm:py-4">
                                <div className="num w-[40%] hidden sm:block text-4xl font-semibold">(02)</div>
                                <div className="tech sm:w-[60%]">
                                    <div className='flex text-4xl font-semibold gap-5 pb-7 text-gray-200 pt-4 sm:pt-0'>
                                        <span className='sm:hidden'>(02)</span>
                                        <h1 className='sm:text-[4vw]'>Frontend Development</h1>
                                    </div>

                                    <p className='text-sm leading-tight text-gray-300 pb-4 sm:w-[55%] font-semibold sm:leading-5'>
                                        Creating responsive and interactive user interfaces with modern frameworks
                                        and libraries. Focus on performance and user experience.
                                    </p>

                                    <div>
                                        <div className='flex gap-4 items-center sm:text-2xl'>
                                            <p className='text-zinc-400 font-bold text-xl'>01</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Vue.js, Next.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center'>
                                            <p className='text-zinc-400 font-bold text-xl'>02</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>TypeScript, JavaScript</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center'>
                                            <p className='text-zinc-400 font-bold text-xl'>03</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>GSAP, Framer Motion</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='technology bg-black'>
                            <hr className="bg-gray-100 h-[1px] opacity-30" />
                            <div className="skillspageOne w-full flex items-start sm:px-10 sm:py-4">
                                <div className="num w-[40%] hidden sm:block text-4xl font-semibold">(03)</div>
                                <div className="tech sm:w-[60%]">
                                    <div className='flex text-4xl font-semibold gap-5 pb-7 text-gray-200 pt-4 sm:pt-0'>
                                        <span className='sm:hidden'>(03)</span>
                                        <h1 className='sm:text-[4vw]'>UI/UX Design</h1>
                                    </div>

                                    <p className='text-sm leading-tight text-gray-300 pb-4 sm:w-[55%] sm:leading-5 font-semibold'>
                                        Designing intuitive and beautiful user experiences. From wireframes
                                        to high-fidelity prototypes with attention to detail.
                                    </p>

                                    <div>
                                        <div className='flex gap-4 items-center sm:text-2xl'>
                                            <p className='text-zinc-400 font-bold text-xl'>01</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>Figma, Adobe XD</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center'>
                                            <p className='text-zinc-400 font-bold text-xl'>02</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>Prototyping, Wireframing</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center'>
                                            <p className='text-zinc-400 font-bold text-xl'>03</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>User Research, Testing</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;