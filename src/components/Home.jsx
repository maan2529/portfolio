// Home.jsx
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
import Hero from './Hero'
import Starter from './Starter'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import AboutMe from './AboutMe'
import ContactForm from './ContactForm'
import Navigation from './Navigation'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {


    return (
        <div className='bg-[#E8E8E2] font-["DM-Sans"]'>

            {/* <Starter /> */}
            <Hero />
            <About />
            <Projects />
            <Skills />
            <AboutMe />
            <ContactForm />
            <Navigation />
        </div>
    )
}
