import React from "react";
import hemant2 from "../assets/myImages/hemant2.png";
const AboutMe = ({ id }) => {
    return (
        <section id={id} data-scroll-section className="bg-black text-white px-6 sm:px-10 lg:px-20 py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">

                {/* LEFT IMAGE */}
                <div className="w-full lg:w-[40%] flex justify-center">
                    <img
                        src={hemant2}
                        alt="About Me"
                        className="rounded-xl object-cover w-full max-w-md lg:max-w-full"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-[60%] flex flex-col gap-8">
                    {/* TOP BIG LINE */}
                    <h1 className="text-xl sm:text-xl  font-medium leading-snug text-gray-100">
                        I'm a software engineer driven by a passion for turning ideas into
                        <br /> clean, intuitive digital experiences.
                    </h1>

                    {/* ABOUT ME SECTION */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-gray-300">
                        {/* LEFT SMALL TITLE */}
                        <div className="sm:w-[20%] text-lg font-bold tracking-wider uppercase text-gray-400">
                            (About Me)
                        </div>

                        {/* RIGHT PARAGRAPH */}
                        <div className="sm:w-[80%] space-y-4 leading-relaxed text-gray-300 text-lg">
                            <p>
                                I’m a 2025 Computer Science graduate and a passionate Software Engineer who loves building full-stack web applications using modern technologies like React, Node.js, Express, and MongoDB.

                                What started as a curiosity to understand how websites work turned into a strong interest in developing efficient, scalable, and user-focused digital products. I enjoy transforming ideas into real-world solutions that not only function well but also provide a smooth user experience.
                            </p>
                            <p>
                                Beyond coding, I enjoy collaborating with teams, learning new technologies, and taking on challenges that push me to grow as a developer. My goal is to contribute to impactful projects where I can build clean, reliable systems and continue improving my craft every day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
