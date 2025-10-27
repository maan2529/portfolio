// Home.jsx
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
import { useScroll } from '../context/ScrollProvider'
import Hero from './Hero'
import Starter from './Starter'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import AboutMe from './AboutMe'
import ContactForm from './ContactForm'
import Navigation from './Navigation'
import SideNav from './SideNav'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const { isReady } = useScroll()
    const [sideNav, setSideNav] = useState(false)

    return (
        <div className='relative bg-[#E8E8E2] font-["DM-Sans"]'>
            <button
                onClick={() => setSideNav(prev => !prev)}
                className="fixed top-14 right-10 z-[99999999] p-3  rounded-full shadow-lg cursor-pointer opacity-100 bg-zinc-100/70"
            >
                <svg width="35" height="35" viewBox="0 0 35 35">
                    {/* Top line */}
                    <line
                        x1="2" y1="13.5" x2="33" y2="13.5"
                        stroke="black" strokeWidth="2" strokeLinecap="round"
                        style={{
                            transformOrigin: "50% 50%",
                            transform: sideNav ? "translateY(8px) rotate(45deg)" : "none",
                            transition: "transform 0.3s ease"
                        }}
                    />
                    {/* Bottom line */}
                    <line
                        x1="2" y1="21.5" x2="33" y2="21.5"
                        stroke="black" strokeWidth="2" strokeLinecap="round"
                        style={{
                            transformOrigin: "50% 50%",
                            transform: sideNav ? "translateY(-8px) rotate(-45deg)" : "none",
                            transition: "transform 0.3s ease"
                        }}
                    />
                </svg>
            </button>

            <SideNav isOpen={sideNav} setSideNav={setSideNav} />

            <Hero id={"hero"} />
            <About id={"about"} />
            <Projects id={"projects"} />
            <Skills id={"skills"} />
            <AboutMe id={"aboutme"} />
            <ContactForm id={"contact"} />
            <Navigation />

        </div>
    )
}
