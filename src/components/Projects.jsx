import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useScroll } from '../context/ScrollProvider'

gsap.registerPlugin(ScrollTrigger)

const Projects = ({ id }) => {
    const [currentNum, setCurrentNum] = useState(1)
    const numberRef = useRef(null)
    const mainDiv = useRef(null)
    const staticPage = useRef(null)
    const { isReady } = useScroll()

    useGSAP(() => {
        if (!isReady || !mainDiv.current || !staticPage.current) return

        const cleanupFunctions = []

        // Pin the left section
        const pinTrigger = ScrollTrigger.create({
            trigger: mainDiv.current,
            start: "top -60%",
            end: "bottom bottom",
            pin: staticPage.current,
            pinSpacing: false,
            anticipatePin: 1,
            refreshPriority: -1,
            immediateRender: false,
            onEnter: () => {
                staticPage.current.style.zIndex = "10"
            },
            onLeave: () => {
                staticPage.current.style.removeProperty('z-index')
            },
            onLeaveBack: () => {
                staticPage.current.style.removeProperty('z-index')
            }
        })

        cleanupFunctions.push(() => pinTrigger.kill())

        // Project number triggers
        const projectElements = gsap.utils.toArray('.project', mainDiv.current)
        projectElements.forEach((el, index) => {
            const trigger = ScrollTrigger.create({
                trigger: el,
                start: "top center",
                onEnter: () => setCurrentNum(index + 1),
                onEnterBack: () => setCurrentNum(index + 1)
            })

            cleanupFunctions.push(() => trigger.kill())
        })

        // Cleanup function
        return () => {
            cleanupFunctions.forEach(cleanup => cleanup())
            if (staticPage.current) {
                staticPage.current.style.removeProperty('z-index')
            }
        }
    }, [isReady])

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
            )
        }
    }, [currentNum])

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
                            <a target='_blank' href="https://trip-booking-x1lh.onrender.com">
                                <div className='mb-15'>
                                    <div data-index="1" className="project h-screen flex items-center justify-center bg-gray-800">
                                        {/* <h2 className="text-4xl">Project One</h2> */}
                                        <img className='w-[100%] h-[100%]' src="/FlightLogDepartureTicketAnimation.gif" alt="Flight Ticket animation" />

                                    </div>
                                    <div className='sm:flex sm:justify-between sm:py-3'>
                                        <div className='mt-5 sm:mt-0'>
                                            <p className='text-lg font-bold'>Web Development </p>
                                            <h2 className='text-2xl font-semibold'>Trip and Ticket booking system</h2>
                                        </div>
                                        <div className='flex justify-start mt-5 sm:mt-0 sm:justify-center items-end gap-5'>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 bg-transparent flex justify-center items-center text-sm w-fit h-fit'>Development</div>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 flex justify-center items-center text-sm w-fit h-fit bg-gray-500'>2025</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a target='_blank' href="https://github.com/maan2529/chat-gpt-clone">
                                <div className='mb-15'>
                                    <div data-index="2" className="project h-screen flex items-center justify-center bg-gray-700">
                                        {/* <h2 className="text-4xl">Project Two</h2> */}
                                        <img className='w-[100%] h-[100%]' src="/genAiChatApp.gif" alt="Flight Ticket animation" />
                                    </div>
                                    <div className='sm:flex sm:justify-between sm:py-3'>
                                        <div className='mt-5 sm:mt-0'>
                                            <p className='text-lg font-bold'>Web Development & GEN AI</p>
                                            <h2 className='text-2xl font-semibold'>Movie Recommendation</h2>
                                        </div>
                                        <div className='flex justify-start mt-5 sm:mt-0 sm:justify-center items-end gap-5'>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 bg-transparent flex justify-center items-center text-sm w-fit h-fit'>Development</div>
                                            <div className='px-3 py-1 rounded-full border-1 border-zinc-200 flex justify-center items-center text-sm w-fit h-fit bg-gray-500'>2025</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* <a href="">
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
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects