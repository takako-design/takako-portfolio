'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'

interface MarqueeProps {
  children: string
  speed?: number
  className?: string
  repeat?: number
}

export function Marquee({ children, speed = 50, className = '', repeat = 4 }: MarqueeProps) {
  const baseX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      baseX.set(0)
    }
  }, [baseX])

  useAnimationFrame((_, delta) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const moveBy = (delta / 1000) * speed
    baseX.set(baseX.get() - moveBy)

    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth / repeat
      if (Math.abs(baseX.get()) >= textWidth) {
        baseX.set(0)
      }
    }
  })

  const x = useTransform(baseX, (v) => `${v}px`)

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <motion.span
        ref={textRef}
        style={{ x }}
        className="inline-block"
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="inline-block">
            {children}
            <span className="mx-8 inline-block text-accent">{'/'}</span>
          </span>
        ))}
      </motion.span>
    </div>
  )
}
