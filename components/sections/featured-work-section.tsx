'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
// import { MagneticButton } from '@/components/magnetic-button'
import { LineReveal, TextReveal } from '@/components/text-reveal'

export function FeaturedWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  // スクロール進捗を0〜100のパーセンテージで管理
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const maxScroll = el.scrollHeight - el.clientHeight
    if (maxScroll <= 0) {
      setScrollProgress(0)
      return
    }
    const progress = (el.scrollTop / maxScroll) * 100
    setScrollProgress(Math.min(100, Math.max(0, progress)))
  }

  // 95%以上で「終わり」扱い
  const isAtEnd = scrollProgress >= 95

  return (
    <section
      ref={containerRef}
      id="works"
      className="relative px-6 py-[var(--section-gap)] md:px-12"
    >
      {/* 極細スクロールバー用のローカルスタイル */}
      <style jsx>{`
        .refined-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .refined-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .refined-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 2px;
          transition: background 0.3s ease;
        }
        .refined-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
        .refined-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
          overscroll-behavior: contain;
        }
      `}</style>

      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <LineReveal>
          <span className="mb-8 block text-sm font-light uppercase tracking-widest text-foreground/50">
            Featured Project
          </span>
        </LineReveal>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Image Column - フルページ画像のみ */}
          <div className="lg:col-span-8">
            {/* Full Page Screenshot - 内部スクロール + プログレスバー + 終了検知 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              className="overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15),0_10px_25px_-15px_rgba(0,0,0,0.08)]"
            >
              {/* Scrollable Image Area - 500px → 700px に背伸ばし */}
              <div
                onScroll={handleScroll}
                data-lenis-prevent
                className="refined-scroll h-[500px] overflow-y-auto md:h-[700px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/works/featured-kukka-full.jpg"
                  alt="KUKKA LIVING - フルページ"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Progress Bar */}
              <div className="relative h-[2px] w-full bg-foreground/5">
                <div
                  className="absolute left-0 top-0 h-full bg-foreground/40 transition-[width] duration-150 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Caption with dynamic text + percentage */}
              <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
                <p className="text-xs font-light uppercase tracking-widest text-foreground/40 transition-colors duration-300">
                  {isAtEnd
                    ? '— End of the page —'
                    : '↓ Scroll to see the full page'}
                </p>
                <span className="text-xs font-light tabular-nums tracking-widest text-foreground/30">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-end lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            >
              <h3 className="mb-8 font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
                <TextReveal delay={0.7}>KUKKA LIVING</TextReveal>
              </h3>

              <dl className="mb-8 space-y-4 text-sm">
                <div className="flex gap-4">
                  <dt className="w-16 font-light uppercase tracking-widest text-foreground/50">
                    Client
                  </dt>
                  <dd className="font-light">介護付き有料老人ホーム</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-16 font-light uppercase tracking-widest text-foreground/50">
                    Year
                  </dt>
                  <dd className="font-light">2026</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-16 font-light uppercase tracking-widest text-foreground/50">
                    Role
                  </dt>
                  <dd className="font-light">Concept / Web Design</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-16 font-light uppercase tracking-widest text-foreground/50">
                    Stack
                  </dt>
                  <dd className="font-light">WordPress / Lightning</dd>
                </div>
              </dl>

              <div className="mb-8 space-y-4 font-light leading-relaxed text-foreground/70">
                <p>
                  介護の現場で20年以上、たくさんのご家族の「施設選び」に立ち会ってきました。その経験から痛感していたのは、「本当に伝えたい温かさ」が、従来の介護施設サイトではなかなか届かないということ。
                </p>
                <p>
                  KUKKA LIVINGでは、マリメッコの世界観をベースに「花を選ぶ暮らし」というコンセプトを立て、配色・写真トーン・言葉選びまで一貫させました。「介護施設のサイト」ではなく「住まいのサイト」として設計することで、ご家族の不安をやわらげる導線を目指しています。
                </p>
                <p className="text-foreground/80">
                  現場で見てきた景色があるからこそ作れた、私の原点です。
                </p>
              </div>

              {/* Live Site Link */}
              <a
                href="https://kukka.lentodesign.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1 text-sm font-light uppercase tracking-widest transition-colors hover:border-foreground"
              >
                Visit Live Site
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Case Study Button - 詳細ページ準備後に有効化 */}
              {/* <MagneticButton
                href="/works/kukka-living"
                className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1 text-sm font-light uppercase tracking-widest transition-colors hover:border-foreground"
              >
                View Case Study
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </MagneticButton> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
