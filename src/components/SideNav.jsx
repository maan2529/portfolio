import { div, h1 } from 'motion/react-client'
import React, { useState } from 'react'
import { useScroll } from '../context/ScrollProvider';

const SideNav = ({ isOpen, setSideNav }) => {
    const { locomotive } = useScroll();

    const handleScroll = (id) => {
        if (locomotive) {
            // Use Locomotive Scroll for smooth scrolling
            locomotive.scrollTo(`#${id}`, {
                duration: 1000,
                easing: [0.25, 0.0, 0.35, 1.0]
            });
        } else {
            // Fallback to native scroll
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
        setSideNav(false)
    };
    return (
        isOpen &&
        <div className='absolute z-[100]  w-full h-screen bg-black/10 backdrop-blur-md border border-black/400 shadow-lg   '>

            <div className='w-[100%]  h-[100%] flex  pl-10 pt-10 sm:pl-[50%] text-4xl  md:text-[6vw] font-extrabold text-white leading-[13vw] md:leading-[6vw] mt-[40%] sm:mt-[5%] '>
                <div className='flex flex-col w-[50vw] h-[50vh] sm:h-[90vh] '>
                    <div className=''>

                        <div className="w-1/2">

                            <ul className="space-y-1 ">
                                <li><a
                                    onClick={() => handleScroll('projects')}

                                    className="hover:text-black">Projects</a></li>
                                <li><a
                                    onClick={() => handleScroll('skills')}
                                    
                                    className="hover:text-black">Skills</a></li>
                            <li><a
                                onClick={() => handleScroll('about')}
                                className="hover:text-black">About Me</a></li>

                            <li><a
                                onClick={() => handleScroll('contact')}
                                className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className=' text-xs font-[typewriter] pt-30 md:pt-10'>
                    <div className='py-3'>

                        <h1 className='uppercase'>email address</h1>
                        <p>hemantrd2529@gmail.com</p>
                    </div>
                    
                </div>
            </div>


        </div>

        </div >
    )
}

export default SideNav