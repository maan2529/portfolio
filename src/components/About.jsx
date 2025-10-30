import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useScroll } from '../context/ScrollProvider'

gsap.registerPlugin(ScrollTrigger)

const About = ({ id }) => {
    const sectionRef = useRef(null)
    const { isReady } = useScroll()

    useGSAP(() => {
        if (!isReady) return

        const sections = gsap.utils.toArray('.technology', sectionRef.current)
        if (!sections.length) return

        sections.forEach((el, index) => {
            // Optimal staggered pinning positions for smooth user experience
            const pinPositions = [10, 25, 40]; // 1st: early, 2nd: mid, 3rd: later
            const startPosition = pinPositions[index] || 10;

            ScrollTrigger.create({
                trigger: el,
                start: `top ${startPosition}%`,
                endTrigger: el.parentElement,
                end: 'bottom bottom',
                pin: el,
                pinSpacing: false,
                anticipatePin: 0, // Precise timing - no anticipation
                refreshPriority: -1,
                immediateRender: false,
                onEnter: () => {
                    el.style.zIndex = `${20 + index}`
                },
                onLeaveBack: () => {
                    el.style.zIndex = `${20 + index}`
                }
            })
        })

        ScrollTrigger.refresh()
    }, [isReady])

    return (
        <section
            id={id}
            data-scroll-section
            ref={sectionRef}
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
                                        I build modern, responsive, and scalable web applications. From crafting clean frontend interfaces to developing secure backend APIs, I focus on delivering smooth, efficient, and reliable digital experiences.
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
                                        I specialize in building complete web solutions — from dynamic frontends to powerful backends and databases. My focus is on writing clean, efficient code and creating applications that are scalable, secure, and easy to maintain.
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
    )
}

export default About