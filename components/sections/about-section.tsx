'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { LineReveal, TextReveal } from '@/components/text-reveal'
import { Marquee } from '@/components/marquee'

const timeline = [
  {
    year: 'Apparel',
    title: 'アパレル業界',
    description: 'ファッションやブランドの世界で、美意識や印象づくりに触れてきました。',
  },
  {
    year: 'Care',
    title: '介護福祉',
    description: '介護福祉の現場で、言葉にならない想いや小さな変化をくみ取る力を培ってきました。',
  },
  {
    year: 'Design',
    title: 'Webデザイン',
    description: 'これまでの経験で育ててきた対話力と美意識を活かし、想いが伝わるWebデザインを制作しています。',
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
                想いを丁寧にくみ取り、美しく伝わるかたちへ。
              </h3>

              <p className="mb-8 font-light leading-relaxed text-foreground/70">
                想いや魅力を丁寧にすくい上げ、見る人の心に届くデザインへ整えるWebデザインを制作しています。
      　　　　　</p>

              <p className="mb-12 font-light leading-relaxed text-foreground/70">
                ただ綺麗に見せるだけではなく、その人らしさやブランドの空気感が自然に伝わること。言葉、余白、色、写真、構成のひとつひとつを丁寧に選びながら、長く愛される印象をつくっていきます。
              </p>
　　　　　　　　
              <p className="mb-12 font-light leading-relaxed text-foreground/70">
                まだ言葉になっていない想いも、対話を重ねる中で少しずつ輪郭が見えてくるものだと思っています。大切にしていること、届けたい人、残したい印象を一緒に見つめながら、美しく伝わるかたちへ整えます。
     　　　　　 </p>
              
              {/* Quote */}
              <blockquote className="relative border-l-2 border-accent py-4 pl-8">
                <p className="font-serif text-xl italic leading-relaxed tracking-tight md:text-2xl">
                  {'"想いに寄り添い、美しく伝わるデザインを。"'}
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
