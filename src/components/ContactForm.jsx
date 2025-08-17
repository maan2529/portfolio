import React from "react";

const ContactForm = () => {
    return (
        <section data-scroll-section className="w-full min-h-screen  bg-gradient-to-b from-black/100 to-black/70 px-4 py-12">

            <div className="flex flex-col items-center justify-center">
                {/* Heading */}
                <h1 className="text-[12vw] md:text-[6vw] font-bold text-gray-200 leading-none text-center mb-10">
                    LET&apos;S <br className="block md:hidden" /> MAKE IT <br className="block md:hidden" /> HAPPEN
                </h1>

                {/* Contact Card */}
                <div className="w-full max-w-md bg-zinc-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 ">
                    <h2 className="text-center text-white text-2xl font-semibold mb-6">
                        Say Hello
                    </h2>

                    <form className="flex flex-col space-y-4 bg-transparent font-['typewriter'] ">
                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Drop a name"
                            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Wanna hear back? Add your email"
                                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <span className="absolute right-3 top-3 text-gray-400">📧</span>
                        </div>

                        {/* Message */}
                        <textarea
                            rows="4"
                            placeholder="Say hello or drop a note..."
                            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        ></textarea>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
