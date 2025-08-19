import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import SideNav from './SideNav'

const About = ({ id }) => {

    useGSAP(() => {
        const sections = gsap.utils.toArray('.technology');

        sections.forEach((el, index) => {
            ScrollTrigger.create({
                trigger: el,
                // start: `top ${10 + 16 * index}%`,   // pin start point
                start: `top 40%%`, //test
                endTrigger: el.parentElement,       // parent ko end trigger banaya
                end: "bottom bottom",                  // parent ke bottom ke bottom me 
                scroller: "[data-scroll-container]",
                pin: el,
                pinType: "transform",
                anticipatePin: 1,
                refreshPriority: -1,
                pinSpacing: false,


                //------
                scrub: true,
                markers: true,
                // overlap effect ke liye
            });
        });
    }, []);


    return (
        <section id={id} data-scroll-section className='rounded-tl-4xl rounded-tr-4xl  bg-black text-white py-10 px-8 sm:pb-50 font-["DM sans 9pt"]' >

            <div >

                <div>
                    <div className="servics text-gray-300 pb-20">
                        <h1 className="text-[15vw] sm:text-[12vw] uppercase font-semibold tracking-tighter text-gray-200">
                            What i do
                        </h1>

                        <div className="py-5  sm:py-10 sm:flex sm:justify-end">
                            <div className=" sm:flex sm:w-[55%] sm:justify-end sm:gap-10 sm:text-left">
                                <p className="text-xl mb-3 sm:w-[10%] uppercase">(Services)</p>
                                <div className='sm:sm:w-[90%] pl-10'>
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
                            <hr className=" bg-gray-100 h-[1px] opacity-30" />
                            <div className="skillspageOne  w-full  flex items-start sm:px-10 sm:py-4 ">

                                <div className="num w-[40%] hidden sm:block text-4xl font-semibold ">(01)</div>
                                <div className="tech sm:w-[60%] ">
                                    <div className='flex text-4xl font-semibold gap-5 pb-7 pt-4 sm:pt-0 text-gray-200'>
                                        <span className='sm:hidden'>(01)</span>
                                        <h1 className='sm:text-[4vw]'> Full Stack Development</h1>
                                    </div>

                                    <p className='text-sm leading-tight text-gray-300 pb-4 sm:w-[55%] font-semibold sm:leading-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?</p>

                                    <div>
                                        <div className='flex gap-4 items-center sm:text-2xl'>
                                            <p className='text-zinc-400 font-bold text-xl'>01</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center '>
                                            <p className='text-zinc-400 font-bold text-xl'>02</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center '>
                                            <p className='text-zinc-400 font-bold text-xl '>03</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className='technology bg-black'>
                            <hr className=" bg-gray-100 h-[1px] opacity-30" />
                            <div className="skillspageOne  w-full  flex items-start sm:px-10 sm:py-4 ">

                                <div className="num w-[40%] hidden sm:block text-4xl font-semibold ">(02)</div>
                                <div className="tech sm:w-[60%] ">
                                    <div className='flex text-4xl font-semibold gap-5 pb-7  text-gray-200 pt-4 sm:pt-0'>
                                        <span className='sm:hidden'>(02)</span>
                                        <h1 className='sm:text-[4vw]'> Full Stack Development</h1>
                                    </div>

                                    <p className='text-sm leading-tight text-gray-300 pb-4 sm:w-[55%] font-semibold sm:leading-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?</p>

                                    <div>
                                        <div className='flex gap-4 items-center sm:text-2xl'>
                                            <p className='text-zinc-400 font-bold text-xl'>01</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center '>
                                            <p className='text-zinc-400 font-bold text-xl'>02</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center '>
                                            <p className='text-zinc-400 font-bold text-xl '>03</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='technology bg-black'>
                            <hr className=" bg-gray-100 h-[1px] opacity-30" />
                            <div className="skillspageOne  w-full  flex items-start sm:px-10 sm:py-4 ">

                                <div className="num w-[40%] hidden sm:block text-4xl font-semibold ">(03)</div>
                                <div className="tech sm:w-[60%] ">
                                    <div className='flex text-4xl font-semibold gap-5 pb-7 text-gray-200 pt-4 sm:pt-0'>
                                        <span className='sm:hidden'>(03)</span>
                                        <h1 className='sm:text-[4vw]'> Full Stack Development</h1>
                                    </div>

                                    <p className='text-sm leading-tight text-gray-300 pb-4 sm:w-[55%] sm:leading-5 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, minus?</p>

                                    <div>
                                        <div className='flex gap-4 items-center sm:text-2xl'>
                                            <p className='text-zinc-400 font-bold text-xl'>01</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center '>
                                            <p className='text-zinc-400 font-bold text-xl'>02</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
                                        </div>
                                        <hr className="my-4 bg-gray-100 h-[1px] opacity-30" />
                                        <div className='flex gap-4 items-center '>
                                            <p className='text-zinc-400 font-bold text-xl '>03</p>
                                            <h1 className='text-xl font-semibold text-gray-400 sm:text-2xl'>React, Node.js, Express.js</h1>
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