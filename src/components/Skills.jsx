import React from "react"

const Skills = ({ id }) => {
    return (
        <section id={id} data-scroll-section className="bg-black text-white py-16 sm:pt-15 px-14 lg:px-20">

            <h2 className="text-center lg:text-right text-4xl sm:text-[8vw] font-bold mb-10">Skills</h2>
            <div className="flex flex-col-reverse sm:flex-row  justify-between gap-12 w-full ">

                {/* LEFT BIG TEXT */}
                <div className="text-gray-200 font-bold text-[14vw] sm:text-[8vw]  leading-none uppercase tracking-tight w-full lg:w-[60%] ">
                    <h1>Devel</h1>
                    <h1>Oper</h1>
                    <h1>Designer</h1>
                    <h1>Creator/</h1>
                </div>

                {/* RIGHT SKILLS */}
                <div className="flex-1 text-gray-400 w-full lg:w-[40%]">

                    {/* Skills Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-10 text-gray-400 text-md">

                        {/* Languages & Tools */}
                        <div>
                            <h3 className="hidden lg:block font-semibold text-white mb-4">Languages & Tools</h3>
                            <ul className="space-y-2">

                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>Typescript</li>
                                <li>Git</li>
                                <li>Github</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                {/* <li>Docker</li>
                                <li>Firebase</li> */}
                            </ul>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div>
                            <h3 className="hidden lg:block font-semibold text-white mb-4">Frameworks & Libraries</h3>
                            <ul className="space-y-2">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Bootstrap</li>
                                <li>TailwindCSS</li>
                                <li>Tanstack Query</li>
                                <li>Framer Motion</li>
                                <li>GSAP</li>
                            </ul>
                        </div>

                        {/* Core CS Concepts */}
                        <div>
                            <h3 className="hidden lg:block font-semibold text-white mb-4">Core CS Concepts</h3>
                            <ul className="space-y-2">
                                <li>DSA</li>
                                <li>OOP</li>
                                <li>Operating Systems</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
