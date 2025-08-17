import React, { useEffect, useState } from "react";

const Navigation = () => {
    const [time, setTime] = useState("");

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
                            <li><a href="#home" className="hover:text-black">Home</a></li>
                            <li><a href="#services" className="hover:text-black">Services</a></li>
                            <li><a href="#works" className="hover:text-black">Works</a></li>
                            <li><a href="#about" className="hover:text-black">About</a></li>
                            <li><a href="#contact" className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="w-1/2">
                        <h3 className="font-bold text-lg mb-3 border-b border-gray-300 pb-1">
                            Socials
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-black">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-black">Instagram</a></li>
                            <li><a href="#" className="hover:text-black">Github</a></li>
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
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-md hover:bg-gray-400 transition"
                >
                    ↑
                </button>
            </div>
        </footer>
    );
};

export default Navigation;
