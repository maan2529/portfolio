import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ id }) => {
    const form = useRef();
    const recaptchaRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
    }, []);

    const onRecaptchaChange = (token) => {
        setRecaptchaToken(token);
        console.log(token);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            setError("Please complete the reCAPTCHA verification");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const currentTime = new Date().toLocaleString();
            const formData = {
                name: form.current.user_name.value,
                email: form.current.user_email.value,
                subject: form.current.subject.value,
                message: form.current.message.value,
                time: currentTime,
                'g-recaptcha-response': recaptchaToken  // Add reCAPTCHA token
            };

            const result = await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formData
            );

            console.log("✅ SUCCESS!", result.text);
            setIsSubmitted(true);
            form.current.reset();
            recaptchaRef.current.reset();
            setRecaptchaToken(null);
            setTimeout(() => setIsSubmitted(false), 3000);
        } catch (error) {
            console.log("❌ FAILED...", error.text);
            setError("Failed to send message. Please try again.");
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
                setRecaptchaToken(null);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id={id}
            data-scroll-section
            className="w-full min-h-screen bg-gradient-to-b from-black/100 to-black/70 px-4 py-12"
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[12vw] md:text-[6vw] font-bold text-gray-200 leading-none text-center mb-10">
                    LET&apos;S <br className="block md:hidden" /> MAKE IT{" "}
                    <br className="block md:hidden" /> HAPPEN
                </h1>

                <div className="w-full max-w-md bg-zinc-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10">
                    <h2 className="text-center text-white text-2xl font-semibold mb-6">
                        Say Hello
                    </h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-200 rounded-lg">
                            {error}
                        </div>
                    )}

                    {isSubmitted && (
                        <div className="mb-4 p-3 bg-green-500/20 border border-green-500 text-green-200 rounded-lg">
                            Message sent successfully!
                        </div>
                    )}
                    {/* Add this right before your submit button */}


                    {/* ✅ Removed "sendForm" — switched to "send" with controlled formData */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col space-y-4 bg-transparent font-['typewriter']"
                    >
                        {/* Name */}
                        <input
                            type="text"
                            name="user_name" // kept name for React form reference, maps to {{name}}
                            placeholder="Drop a name"
                            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            required
                            disabled={isLoading}
                        />

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Wanna hear back? Add your email"
                                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 pr-10"
                                required
                                disabled={isLoading}
                            />
                            <span className="absolute right-3 top-3 text-gray-400">📧</span>
                        </div>

                        {/* Subject */}
                        <div className="relative">
                            <input
                                type="text"
                                name="subject"
                                placeholder="About your message (subject)"
                                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Say hello or drop a note..."
                            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            required
                            disabled={isLoading}
                        ></textarea>
                        {!isSubmitted && (  // Only show if form is not submitted
                            <div className="my-4">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={import.meta.env.VITE_SITE_KEY}
                                    onChange={onRecaptchaChange}
                                />
                            </div>
                        )}
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center ${isLoading
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-white text-black hover:bg-gray-200"
                                }`}
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : isSubmitted ? (
                                "Sent!"
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
