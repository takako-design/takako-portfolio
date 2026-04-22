'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  once?: boolean
}

export function TextReveal({ children, className = '', delay = 0, once = true }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const words = children.split(' ')

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: delay + wordIndex * 0.05,
                },
              },
            }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  )
}

interface CharacterRevealProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export function CharacterReveal({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: CharacterRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const characters = children.split('')

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: delay + index * staggerDelay,
                },
              },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

interface LineRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function LineReveal({ children, className = '', delay = 0, once = true }: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
