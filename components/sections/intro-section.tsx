'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TextReveal, LineReveal } from '@/components/text-reveal'

const strengths = [
  {
    number: '01',
    title: '想いに寄り添い、本質を見つめる。',
    description: 'まだ言葉になっていない想いや、大切にしたい価値観まで。対話を通して丁寧にくみ取り、その人らしさの核を見つけていきます。',
  },
  {
    number: '02',
    title: '魅力が伝わる、世界観へ整える。',
    description: '色、余白、写真、言葉、構成を丁寧に選びながら、ブランドの空気感や魅力が自然に伝わるデザインへ整えます。',
  },
  {
    number: '03',
    title: '長く愛される、美しさを大切にする。',
    description: '一瞬の印象だけで終わらない、時間が経っても心に残る美しさを。信頼感と品のあるデザインで、ブランドの土台づくりを支えます。',
  },
]

export function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-[var(--section-gap)] md:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Title */}
        <div className="mb-24 md:mb-32">
          <LineReveal>
            <span className="mb-4 block text-sm font-light uppercase tracking-widest text-foreground/50">
              Why Me
            </span>
          </LineReveal>
          <h2 className="font-serif text-[clamp(40px,6vw,80px)] leading-display tracking-tight">
            <TextReveal delay={0.2}>Why Me.</TextReveal>
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-12">
          {strengths.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3 + index * 0.15,
              }}
              className="group"
            >
              <span className="mb-6 block font-serif text-6xl text-accent/40 transition-colors group-hover:text-accent md:text-7xl lg:text-8xl">
                {item.number}
              </span>
              <h3 className="mb-4 font-serif text-xl tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="font-light leading-relaxed text-foreground/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
