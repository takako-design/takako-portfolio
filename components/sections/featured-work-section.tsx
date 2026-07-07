"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
// import { MagneticButton } from '@/components/magnetic-button'
import { LineReveal, TextReveal } from "@/components/text-reveal";

export function FeaturedWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // スクロール進捗を0〜100のパーセンテージで管理
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const progress = (el.scrollTop / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  // 95%以上で「終わり」扱い
  const isAtEnd = scrollProgress >= 95;

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
          background: rgba(0, 0, 0, 0.14);
          border-radius: 2px;
          transition: background 0.3s ease;
        }
        .refined-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.28);
        }
        .refined-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.14) transparent;
          overscroll-behavior: contain;
        }
      `}</style>

      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <LineReveal>
          <span className="mb-9 block text-[13px] font-light uppercase tracking-[0.28em] text-foreground/45">
            Featured Project
          </span>
        </LineReveal>

        {/* Main Content Grid */}
        <div className="grid gap-11 lg:grid-cols-[minmax(0,1.72fr)_minmax(360px,470px)] lg:items-start lg:gap-12 xl:gap-16">
          {/* Image Column - フルページ画像のみ */}
          <div>
            {/* Full Page Screenshot - 内部スクロール + プログレスバー + 終了検知 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              }}
              className="overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_18px_45px_-24px_rgba(0,0,0,0.22),0_8px_22px_-18px_rgba(0,0,0,0.12)]"
            >
              {/* Scrollable Image Area */}
              <div
                onScroll={handleScroll}
                data-lenis-prevent
                className="refined-scroll h-[500px] overflow-y-auto md:h-[640px] lg:h-[660px]"
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
              <div className="relative h-px w-full bg-foreground/5">
                <div
                  className="absolute left-0 top-0 h-full bg-foreground/35 transition-[width] duration-150 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Caption with dynamic text + percentage */}
              <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
                <p className="text-[11px] font-light uppercase tracking-[0.24em] text-foreground/38 transition-colors duration-300">
                  {isAtEnd
                    ? "— End of the page —"
                    : "↓ Scroll to see the full page"}
                </p>
                <span className="text-[11px] font-light tabular-nums tracking-[0.24em] text-foreground/28">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5,
              }}
            >
              <h3 className="mb-8 font-serif text-[clamp(42px,4.5vw,64px)] leading-[0.95] tracking-[-0.04em] text-foreground">
                <TextReveal delay={0.7}>KUKKA LIVING</TextReveal>
              </h3>

              <dl className="mb-8 grid grid-cols-[72px_1fr] gap-x-5 gap-y-3.5 text-[14px] leading-relaxed md:text-[15px]">
                <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
                  Client
                </dt>
                <dd className="font-light tracking-[0.01em] text-foreground/66">
                  介護付き有料老人ホーム
                </dd>

                <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
                  Year
                </dt>
                <dd className="font-light tracking-[0.01em] text-foreground/66">
                  2026
                </dd>

                <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
                  Role
                </dt>
                <dd className="font-light tracking-[0.01em] text-foreground/66">
                  Concept / Web Design
                </dd>

                <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
                  Stack
                </dt>
                <dd className="font-light tracking-[0.01em] text-foreground/66">
                  WordPress / Lightning
                </dd>
              </dl>

              <div className="mb-7 border-l border-foreground/15 pl-5">
                <p className="mb-2 text-[11px] font-light uppercase tracking-[0.28em] text-foreground/40">
                  Design Point
                </p>
                <p className="font-serif text-[20px] leading-[1.75] tracking-tight text-foreground/84 md:text-[21px]">
                  介護施設を、安心して選べる「住まい」として伝える。
                </p>
              </div>

              <div className="mb-8 space-y-4 text-[14px] font-light leading-[2.05] tracking-[0.02em] text-foreground/70 md:text-[15px]">
                <p>
                  介護の現場で20年以上、ご家族の「施設選び」に立ち会ってきました。その中で感じていたのは、設備や料金だけでは届かない「暮らしの温かさ」を、もっと丁寧に伝える必要があるということ。
                </p>
                <p>
                  KUKKA
                  LIVINGでは、マリメッコの世界観をベースに「花を選ぶ暮らし」をコンセプトに設計。配色・写真トーン・言葉選びを一貫させ、見学前の不安をやわらげる導線を目指しました。
                </p>
                <p className="text-foreground/78">
                  介護の現場を知っているからこそ作れた、私の原点です。
                </p>
              </div>

              {/* Live Site Link */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="http://kukka.lentodesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1.5 text-[13px] font-light uppercase tracking-[0.2em] text-foreground/74 transition-colors hover:border-foreground hover:text-foreground"
                >
                  Visit Live Site
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/works/kukka-living"
                  className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1.5 text-[13px] font-light uppercase tracking-[0.2em] text-foreground/74 transition hover:border-foreground hover:text-foreground"
                >
                  View Case Study
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
