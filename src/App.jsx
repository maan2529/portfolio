// App.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./components/Home";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);
  const locoRef = useRef(null);

  useEffect(() => {
    // Check if we're in browser environment (SSR fix)
    if (typeof window === "undefined") return;

    let locomotiveScroll;

    // Small delay to ensure DOM is ready (Vercel fix)
    const initScroll = () => {
      // 1) Initialize Locomotive Scroll
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1.5,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        // Add these for better production performance
        resetNativeScroll: true,
        touchMultiplier: 2,
      });

      locoRef.current = locomotiveScroll;

      // 2) Set up ScrollTrigger proxy
      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
      });

      // 3) CRITICAL: Link Locomotive updates with ScrollTrigger
      locomotiveScroll.on("scroll", ScrollTrigger.update);

      // 4) Update locomotive when ScrollTrigger refreshes
      ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());

      // 5) Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    };

    // Initialize with small delay for production
    const timeoutId = setTimeout(initScroll, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (locomotiveScroll) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        locomotiveScroll.destroy();
      }
      locoRef.current = null;
    };
  }, []);

  // Add window resize handler for better responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (locoRef.current) {
        locoRef.current.update();
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Home />
    </div>
  );
}

export default App;