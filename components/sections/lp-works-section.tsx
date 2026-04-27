'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LineReveal, TextReveal } from '@/components/text-reveal'

const lpWorks = [
  {
    id: 1,
    title: 'Wish Manifest Sound',
    category: 'Healing Program LP',
    catch: '忙しい毎日に、そっと寄り添うヒーリング。音×心理×意識で、願いが静かに動き出す。',
    image: '/works/lp-wish.jpg',
    url: 'https://tldh412.wixsite.com/wish-manuest-sound',
  },
  {
    id: 2,
    title: '日本酒ガトーショコラ',
    category: 'Gift Product LP',
    catch: '和と洋、交わる至福のひと切れ。三木市の大吟古酒とヴァローナ。大切な人への贈り物に。',
    image: '/works/lp-sake.jpg',
    url: 'https://tldh412.wixsite.com/my-site-5',
  },
  {
    id: 3,
    title: 'Bloom Insta Support',
    category: 'SNS Service LP',
    catch: '頑張らない発信で、信頼されるアカウントへ。個人事業主のための、やさしいInstagram運用代行。',
    image: '/works/lp-bloom.jpg',
    url: 'https://tldh412.wixsite.com/bloom_insta',
  },
]

export function LpWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-[var(--section-gap)] md:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <LineReveal>
          <span className="mb-8 block text-sm font-light uppercase tracking-widest text-foreground/50">
            LP Works
          </span>
        </LineReveal>

        {/* Section Heading */}
        <h2 className="mb-6 font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
          <TextReveal delay={0.2}>Landing Pages</TextReveal>
        </h2>

        {/* Intro Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          className="mb-16 max-w-2xl space-y-4 font-light leading-relaxed text-foreground/70 md:mb-20"
        >
          <p className="text-base md:text-lg">
            想いや魅力が、きちんと届くように。
          </p>
          <p className="text-base md:text-lg">
            言葉と世界観を整えた、LPデザインです。
          </p>
        </motion.div>

        {/* Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 gap-y-20 gap-x-6 md:grid-cols-3 md:gap-6">
          {lpWorks.map((work, index) => (
            <motion.a
              key={work.id}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5 + index * 0.15,
              }}
              className="group block"
            >
              {/* Image Card - 上部のみ表示(固定高さ) */}
              <div className="relative overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15),0_10px_25px_-15px_rgba(0,0,0,0.08)] transition-shadow duration-500 group-hover:shadow-[0_25px_60px_-20px_rgba(201,157,168,0.25),0_15px_30px_-15px_rgba(201,157,168,0.15)]">
                <div className="h-[380px] overflow-hidden md:h-[420px] lg:h-[460px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.image}
                    alt={`${work.title} - LP`}
                    className="w-full object-cover object-top transition-transform duration-[4500ms] ease-out group-hover:-translate-y-[40%]"
                    style={{ objectPosition: 'top' }}
                    loading="lazy"
                  />
                </div>

                {/* Bottom Accent Line - ダスティーローズ */}
                <div className="relative h-[2px] w-full bg-foreground/5">
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#C99DA8] transition-[width] duration-700 ease-out group-hover:w-full" />
                </div>

                {/* Hover Hint */}
                <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
                  <p className="text-xs font-light uppercase tracking-widest text-foreground/40">
                    Visit Site
                  </p>
                  <span className="text-xs font-light text-foreground/30 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#C99DA8]">
                    →
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="mt-6">
                <span className="mb-3 block text-xs font-light uppercase tracking-widest text-foreground/50">
                  {work.category}
                </span>
                <h3 className="mb-4 font-serif text-xl tracking-tight transition-colors duration-300 group-hover:text-[#C99DA8] md:text-2xl">
                  {work.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-foreground/70">
                  {work.catch}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
