"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
          "ontouchstart" in window,
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Magnetic effect for links and buttons
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], [data-magnetic]')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full bg-white"
          animate={{
            width: isHovering ? 80 : 20,
            height: isHovering ? 80 : 20,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </>
  );
}
