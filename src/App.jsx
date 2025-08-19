// App.jsx - ULTIMATE FIX
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let locomotiveScroll;

    const initScroll = () => {
      try {
        // Kill all existing triggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        ScrollTrigger.clearMatchMedia();
        
        // Initialize Locomotive with production settings
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          smartphone: { smooth: true },
          tablet: { smooth: true },
          resetNativeScroll: true,
          touchMultiplier: 2,
          // Force recalculation
          reloadOnContextChange: true,
        });

        locoRef.current = locomotiveScroll;

        // Enhanced ScrollTrigger proxy
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

        // Critical: Link updates
        locomotiveScroll.on("scroll", ScrollTrigger.update);
        
        ScrollTrigger.addEventListener("refresh", () => {
          locomotiveScroll.update();
        });

        // Force multiple refreshes for production
        const forceRefresh = () => {
          locomotiveScroll.update();
          ScrollTrigger.refresh();
          
          // Second refresh after a delay
          setTimeout(() => {
            locomotiveScroll.update();
            ScrollTrigger.refresh();
            setIsReady(true);
            console.log("🎉 ALL SYSTEMS READY");
          }, 500);
        };

        // Wait for images and fonts
        if (document.readyState === 'complete') {
          setTimeout(forceRefresh, 200);
        } else {
          window.addEventListener('load', () => {
            setTimeout(forceRefresh, 200);
          });
        }

      } catch (error) {
        console.error("❌ Scroll init error:", error);
        setIsReady(true); // Fallback
      }
    };

    // Multiple initialization attempts
    setTimeout(initScroll, 100);

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      locoRef.current = null;
    };
  }, []);

  // Enhanced resize handler
  useEffect(() => {
    const handleResize = () => {
      if (locoRef.current && isReady) {
        setTimeout(() => {
          locoRef.current.update();
          ScrollTrigger.refresh();
        }, 250);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isReady]);

  return (
    <div ref={scrollRef} data-scroll-container>
      <div style={{ 
        opacity: isReady ? 1 : 0.3, 
        transition: 'opacity 0.5s',
        minHeight: '100vh' // Force height calculation
      }}>
        <Home locomotiveReady={isReady} />
      </div>
    </div>
  );
}

export default App;