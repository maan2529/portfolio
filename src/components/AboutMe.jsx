import React from "react";

const AboutMe = ({ id }) => {
    return (
        <section id={id} data-scroll-section className="bg-black text-white px-6 sm:px-10 lg:px-20 py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">

                {/* LEFT IMAGE */}
                <div className="w-full lg:w-[40%] flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1754951661102-341dfb58bd26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
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
                        <div className="sm:w-[20%] text-sm tracking-wider uppercase text-gray-400">
                            (About Me)
                        </div>

                        {/* RIGHT PARAGRAPH */}
                        <div className="sm:w-[80%] space-y-4 leading-relaxed text-gray-300">
                            <p>
                                I am a passionate Software Engineer with a knack for building
                                full-stack web applications using modern technologies like
                                Next.js and Tailwind CSS. My journey in tech began with a
                                curiosity for solving real-world problems through innovative
                                solutions, which evolved into a love for crafting user-centric
                                digital experiences.
                            </p>
                            <p>
                                Beyond coding, I thrive in collaborative environments and enjoy
                                tackling challenging problems with creative solutions. I aim to
                                contribute to impactful projects that make a difference in
                                users' lives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
