import React from 'react'

const Hero = ({ id }) => {
    return (
        <section id={id} data-scroll-section className=" bg-[rgb(232,232,226)] min-h-screen px-5 py-2 flex flex-col ">



            <div data-scroll data-scroll-speed={-2.4}>
                <div className="topnav z-12 flex justify-between text-lg text-[#5d5956]  py-5  font-semibold ">
                    {/* Left Text */}
                    <div className="w-35 sm:w-100">
                        <p>Web Developer & Designer</p>

                    </div>
                    {/* Right Nav Links */}
                    <div className="  sm:flex sm:gap-6">
                        <ul className="space-y-2 sm:flex leading-5 sm:gap-4">
                            <li><a

                                rel="noopener noreferrer"
                                href="#hero" className="hover:text-black">Projects</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#services" className="hover:text-black">Skills</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#works" className="hover:text-black">About Me</a></li>
                            {/* <li><a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="#about" className="hover:text-black">About</a></li> */}
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#contact" className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* ===== Main Content Wrapper ===== */}
                <div className=" flex flex-col sm:gap-8 mt-20 sm:mt-1 overflow-y-hidden">
                    {/* Left - Name Section */}
                    <div className="name sm:flex sm:gap-3 sm:justify-around sm:text-[6vw] gap-0.5  ">
                        <h1 className="text-[15vw] sm:text-[12vw]  font-semibold leading-none ">HEMANT</h1>
                        <h1 className="text-[15vw] sm:text-[12vw]   font-semibold leading-none">SINGH</h1>
                    </div>


                </div>

                <div className=" flex flex-col sm:flex-row sm:justify-between items-center justify-between sm:pt-[20vh]">

                    {/* Right - Paragraph + Button */}
                    <div className="mt-5 sm:mt-0 sm:max-w-[350px] overflow-y-hidden">
                        <p className="textAndbtn text-gray-600 text-base leading-relaxed text-xl font-normal">
                            Open to job opportunities worldwide. Passionate about building polished,
                            intuitive, and thoughtful digital experiences that leave a mark.
                        </p>
                        <button className=" textAndbtn hidden sm:block mt-6 bg-[#383632] text-white px-6 py-4 rounded-full text-sm font-semibold flex items-center gap-2">
                            CONTACT
                            <i className="ri-arrow-right-up-line"></i>
                        </button>
                    </div>
                    {/* Profile Image */}

                    <div className="hidden flex-1 sm:flex justify-center items-center sm:ml-[12vw]  ">
                        <div className="overflow-y-hidden w-[15vw] h-[15vw]   flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="profile"
                                className="myImage w-full h-full object-cover  rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Available For Work */}
                    <div className="  flex self-end justify-between w-full sm:block  py-5 overflow-y-hidden" >

                        <button className=" textAndbtn self-end sm:hidden block mt-6 bg-[#383632] text-white px-6 py-4 rounded-full text-sm font-semibold flex items-center gap-2">
                            CONTACT
                            <i className="ri-arrow-right-up-line"></i>
                        </button>
                        <div className="textAndbtn self-end text-right text-lg">
                            <p className=" text-gray-500">AVAILABLE FOR</p>
                            <p className=" text-gray-500">WORK</p>
                            <p className="text-4xl font-bold">JUNE</p>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Hero