'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { LineReveal, TextReveal } from '@/components/text-reveal'
import { Marquee } from '@/components/marquee'

const timeline = [
  {
    year: '2003-',
    title: '介護の世界へ',
    description: '介護福祉士として医療・介護現場で20年以上の経験を積む',
  },
  {
    year: '2020-',
    title: 'デザインとの出会い',
    description: 'Web制作を独学で学び始め、技術の習得に没頭',
  },
  {
    year: '2024-',
    title: 'フリーランスとして独立',
    description: '介護現場の経験を活かした寄り添うデザインを提供',
  },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <>
      {/* Marquee Divider */}
      <div className="overflow-hidden border-y border-border py-6">
        <Marquee className="font-serif text-2xl tracking-tight text-foreground/20 md:text-4xl">
          Design with Empathy — Design with Purpose — Design with Care
        </Marquee>
      </div>

      <section
        ref={containerRef}
        id="about"
        className="relative px-6 py-[var(--section-gap)] md:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Section Title */}
          <div className="mb-16 md:mb-24">
            <LineReveal>
              <span className="mb-4 block text-sm font-light uppercase tracking-widest text-foreground/50">
                About
              </span>
            </LineReveal>
            <h2 className="font-serif text-[clamp(40px,6vw,80px)] leading-display tracking-tight">
              <TextReveal delay={0.2}>About Me</TextReveal>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              className="relative lg:col-span-4"
            >
              <div className="grain relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden grayscale md:max-w-[320px]">
                <Image
                  src="/about/profile.jpg"
                  alt="TAKAKO プロフィール"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 260px, 320px"
                />
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
              className="flex flex-col justify-center lg:col-span-8"
            >
              <h3 className="mb-8 font-serif text-2xl leading-relaxed tracking-tight md:text-3xl">
                なぜ介護からデザインへ?
              </h3>

              <p className="mb-8 font-light leading-relaxed text-foreground/70">
                20年以上の介護経験の中で、私は「伝えたい想いが届かない」もどかしさを何度も目にしてきました。
                素晴らしいサービスを持っているのに、それを正しく表現できていない。
                そんな事業者さんの力になりたいと思い、Webデザインの世界へ飛び込みました。
              </p>

              <p className="mb-12 font-light leading-relaxed text-foreground/70">
                現場を知っているからこそ、クライアントの「言葉にならない想い」を汲み取ることができる。
                技術力と寄り添う姿勢、その両輪でお客様のビジネスを支えていきます。
              </p>

              {/* Quote */}
              <blockquote className="relative border-l-2 border-accent py-4 pl-8">
                <p className="font-serif text-xl italic leading-relaxed tracking-tight md:text-2xl">
                  {'"誰かの「伝えたい」を、誰かの「見つけた」に変える仕事。"'}
                </p>
              </blockquote>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mt-24 md:mt-32">
            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.6 + index * 0.1,
                  }}
                  className="group"
                >
                  <span className="mb-4 block font-serif text-4xl text-accent md:text-5xl">
                    {item.year}
                  </span>
                  <h4 className="mb-3 font-serif text-xl tracking-tight">
                    {item.title}
                  </h4>
                  <p className="font-light leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
