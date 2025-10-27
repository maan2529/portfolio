import React, { useEffect, useState } from "react";
import { useScroll } from '../context/ScrollProvider';

const Navigation = () => {
    const [time, setTime] = useState("");
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
    };
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                    timeZoneName: "short",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer data-scroll-section className="bg-[#f5f5f0] text-gray-800 py-12 px-6 md:px-20">
            <div className="">

                <div className="flex gap-10">
                    {/* Menu */}
                    <div className="w-1/2">
                        <h3 className="font-bold text-lg mb-3 border-b border-gray-300 pb-1">
                            Menu
                        </h3>
                        <ul className="space-y-2">
                            <li><button
                                onClick={() => handleScroll('hero')}
                                className="hover:text-black text-left">Home</button></li>
                            <li><button
                                onClick={() => handleScroll('about')}
                                className="hover:text-black text-left">Services</button></li>
                            <li><button
                                onClick={() => handleScroll('projects')}
                                className="hover:text-black text-left">Projects</button></li>
                            <li><button
                                onClick={() => handleScroll('skills')}
                                className="hover:text-black text-left">Skills</button></li>
                            <li><button
                                onClick={() => handleScroll('aboutme')}
                                className="hover:text-black text-left">About</button></li>
                            <li><button
                                onClick={() => handleScroll('contact')}
                                className="hover:text-black text-left">Contact</button></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="w-1/2">
                        <h3 className="font-bold text-lg mb-3 border-b border-gray-300 pb-1">
                            Socials
                        </h3>
                        <ul className="space-y-2">
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/hemant-singh-137b01228"
                                className="hover:text-black">LinkedIn</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/_hemant_1213_?igsh=MXZmdDd3Z2U1aTB4" className="hover:text-black">Instagram</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/maan2529" className="hover:text-black">Github</a></li>
                        </ul>

                        {/* Local Time */}
                        <div className="flex flex-col justify-start mt-20 sm:mt-15">
                            <h3 className="font-semibold text-lg mb-2">LOCAL TIME</h3>
                            <p className="text-gray-600 text-sm">{time}</p>
                        </div>
                    </div>

                </div>



            </div>

            {/* Scroll to Top Button */}
            <div className="fixed bottom-6 right-6">
                <button
                    onClick={() => handleScroll('hero')}
                    className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-md hover:bg-gray-400 transition"
                >
                    ↑
                </button>
            </div>
        </footer>
    );
};

export default Navigation;
