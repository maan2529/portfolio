// App.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./components/Home";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null); // yahi aapka custom scroller hai
  const locoRef = useRef(null);   // instance store karne ke liye

  useEffect(() => {
    // 1) Locomotive init
    locoRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.5,               // speed feel tweak
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // 2) ScrollTrigger ko bolo ki window ki jagah ye scroller use kare
    locoRef.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          // programmatic scroll
          locoRef.current.scrollTo(value, { duration: 0, disableLerp: true });
        } else {
          return locoRef?.current?.scroll?.instance?.scroll?.y;
        }
      },
      getBoundingClientRect() {
        // viewport size
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // agar container par transform apply hota hai to "transform", warna "fixed"
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    // 3) Images/fonts load hone ke baad heights sahi kar do
    const onRefresh = () => locoRef.current.update();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh(); // IMPORTANT

    // Cleanup
    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      locoRef.current?.destroy();
      locoRef.current = null;
    };
  }, []);


  return (
    <div ref={scrollRef} data-scroll-container>
      
      <Home />
    </div>
  );
}

export default App;
