// App.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./components/Home";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);
  const locoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === "undefined") return;

    let locomotiveScroll;
    let rafId;

    const initScroll = () => {
      try {
        // Kill all existing ScrollTriggers first
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        // Initialize Locomotive Scroll
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1.2, // Reduced for better performance
          smartphone: { smooth: true },
          tablet: { smooth: true },
          resetNativeScroll: true,
          touchMultiplier: 2,
        });

        locoRef.current = locomotiveScroll;

        // Set up ScrollTrigger proxy
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

        // Link Locomotive updates with ScrollTrigger
        locomotiveScroll.on("scroll", () => {
          ScrollTrigger.update();
        });

        // Update locomotive when ScrollTrigger refreshes
        ScrollTrigger.addEventListener("refresh", () => {
          requestAnimationFrame(() => {
            locomotiveScroll.update();
          });
        });

        // Initial refresh with proper timing
        requestAnimationFrame(() => {
          locomotiveScroll.update();
          ScrollTrigger.refresh();
          setIsLoading(false);
          console.log("🚀 Locomotive and ScrollTrigger initialized");
        });

      } catch (error) {
        console.error("Error initializing scroll:", error);
        setIsLoading(false);
      }
    };

    // Wait for DOM to be fully loaded
    if (document.readyState === 'complete') {
      setTimeout(initScroll, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(initScroll, 100);
      });
    }

    // Cleanup function
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      locoRef.current = null;
    };
  }, []);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (locoRef.current && !isLoading) {
        requestAnimationFrame(() => {
          locoRef.current.update();
          ScrollTrigger.refresh();
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoading]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {/* Add loading state to prevent premature trigger creation */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}>
        <Home />
      </div>
    </div>
  );
}

export default App;