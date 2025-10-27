import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger)

const ScrollContext = createContext()

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

export const ScrollProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false)
  const locomotiveRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !scrollRef.current) return

    let locomotiveScroll

    const initScroll = async () => {
      try {
        // Clean up any existing instances
        if (locomotiveRef.current) {
          await locomotiveRef.current.destroy()
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        ScrollTrigger.clearMatchMedia()

        // Initialize Locomotive Scroll
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          smartphone: { smooth: true },
          tablet: { smooth: true },
          resetNativeScroll: true,
          touchMultiplier: 2,
          reloadOnContextChange: true,
        })

        locomotiveRef.current = locomotiveScroll

        // Setup ScrollTrigger proxy
        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true })
              : locomotiveScroll.scroll.instance.scroll.y
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
          pinType: 'transform',
        })

        // Set default scroller for all ScrollTrigger instances
        ScrollTrigger.defaults({ scroller: scrollRef.current })

        // Link Locomotive Scroll updates with ScrollTrigger
        locomotiveScroll.on('scroll', ScrollTrigger.update)

        ScrollTrigger.addEventListener('refresh', () => {
          locomotiveScroll.update()
        })

        // Wait for page to be ready
        const waitForReady = () => {
          if (document.readyState === 'complete') {
            // Single refresh after everything is loaded
            requestAnimationFrame(() => {
              locomotiveScroll.update()
              ScrollTrigger.refresh()
              setIsReady(true)
            })
          } else {
            window.addEventListener('load', () => {
              requestAnimationFrame(() => {
                locomotiveScroll.update()
                ScrollTrigger.refresh()
                setIsReady(true)
              })
            }, { once: true })
          }
        }

        waitForReady()

      } catch (error) {
        console.error('Scroll initialization error:', error)
        setIsReady(true) // Fallback for error cases
      }
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initScroll, 100)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
      if (locomotiveScroll) {
        locomotiveScroll.destroy()
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      ScrollTrigger.clearMatchMedia()
      locomotiveRef.current = null
    }
  }, [])

  // Handle window resize
  useEffect(() => {
    if (!isReady || !locomotiveRef.current) return

    const handleResize = () => {
      locomotiveRef.current.update()
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isReady])

  const value = {
    isReady,
    locomotive: locomotiveRef.current,
    scrollElement: scrollRef,
  }

  return (
    <ScrollContext.Provider value={value}>
      <div ref={scrollRef} data-scroll-container>
        <div style={{
          opacity: isReady ? 1 : 0.3,
          transition: 'opacity 0.5s ease',
          minHeight: '100vh'
        }}>
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
