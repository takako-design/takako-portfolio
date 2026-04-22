'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CharacterReveal, LineReveal } from '@/components/text-reveal'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center px-6 pt-24 md:px-12"
    >
      <motion.div
        style={{ opacity, y }}
        className="mx-auto w-full max-w-[1440px]"
      >
        {/* Main Title */}
        <div className="mb-8 overflow-hidden">
          <h1 className="font-serif leading-display">
            <span className="block text-[clamp(48px,12vw,180px)] tracking-tight">
              <CharacterReveal delay={0.3} staggerDelay={0.04}>
                TAKAKO
              </CharacterReveal>
            </span>
            <span className="block text-[clamp(48px,12vw,180px)] tracking-tight">
              <CharacterReveal delay={0.6} staggerDelay={0.04}>
                DESIGN
              </CharacterReveal>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-xl md:ml-auto md:mr-24">
          <LineReveal delay={1.2}>
            <p className="font-serif text-lg leading-relaxed tracking-wide text-foreground/80 md:text-xl">
              丁寧に寄り添い、心を動かすデザインを。
            </p>
          </LineReveal>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-6 flex flex-col items-center gap-2 md:right-12"
      >
        <span className="text-xs font-light uppercase tracking-widest text-foreground/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="h-8 w-px bg-foreground/30"
        />
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-6 right-6 h-px origin-left bg-border md:left-12 md:right-12"
      />
    </section>
  )
}
