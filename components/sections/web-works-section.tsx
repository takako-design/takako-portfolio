"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LineReveal, TextReveal } from "@/components/text-reveal";

export function WebWorksSection() {
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

  const isAtEnd = scrollProgress >= 95;

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-[var(--section-gap)] md:px-12"
    >
      {/* 極細スクロールバー用のローカルスタイル */}
      <style jsx>{`
        .refined-scroll-gold::-webkit-scrollbar {
          width: 4px;
        }
        .refined-scroll-gold::-webkit-scrollbar-track {
          background: transparent;
        }
        .refined-scroll-gold::-webkit-scrollbar-thumb {
          background: rgba(201, 169, 110, 0.4);
          border-radius: 2px;
          transition: background 0.3s ease;
        }
        .refined-scroll-gold::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 169, 110, 0.7);
        }
        .refined-scroll-gold {
          scrollbar-width: thin;
          scrollbar-color: rgba(201, 169, 110, 0.4) transparent;
          overscroll-behavior: contain;
        }
      `}</style>

      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <LineReveal>
          <span className="mb-8 block text-sm font-light uppercase tracking-widest text-foreground/50">
            Selected Work
          </span>
        </LineReveal>

        {/* Main Content Grid - 左右反転: 情報(左) + 画像(右) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Project Info (Left) */}
          <div className="order-2 flex flex-col justify-end lg:order-1 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5,
              }}
            >
              <h3 className="mb-8 font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
                <TextReveal delay={0.7}>No.8 hair salon</TextReveal>
              </h3>

              <dl className="mb-8 space-y-4 text-sm">
                <div className="flex gap-4">
                  <dt className="w-16 font-light uppercase tracking-widest text-foreground/50">
                    Client
                  </dt>
                  <dd className="font-light">プライベート美容室</dd>
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
                  <dd className="font-light">WordPress / Lab23</dd>
                </div>
              </dl>

              <div className="mb-8 space-y-4 font-light leading-relaxed text-foreground/70">
                <p>
                  KUKKA
                  LIVINGで向き合った「介護の温かさ」とは真逆の、NYモードの削ぎ落とされた世界観。この大胆な振れ幅こそ、「寄り添い」を軸にしたデザインの柔軟性だと考えています。
                </p>
                <p>
                  「完全予約制・1席のみ」というオーナーの哲学を、ブラック×ゴールドの配色、セリフ体のタイポグラフィ、余白を贅沢に使ったレイアウトで表現。「美容室らしくない」ビジュアルで、30〜40代の働く女性が求める"自分だけの時間"を訴求しました。
                </p>
                <p className="text-foreground/80">
                  介護の現場で学んだ「一人ひとりに寄り添う姿勢」は、どんなジャンルのデザインにも通じる——それを証明した作品です。
                </p>
              </div>

              {/* Live Site Link - ゴールドアクセント */}
              <a
                href="https://no8-hair.lentodesign.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b border-[#C9A96E]/40 pb-1 text-sm font-light uppercase tracking-widest text-foreground/90 transition-colors hover:border-[#C9A96E]"
              >
                Visit Live Site
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Image Column (Right) - フルページ画像 */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              }}
              className="overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15),0_10px_25px_-15px_rgba(0,0,0,0.08)]"
            >
              {/* Scrollable Image Area */}
              <div
                onScroll={handleScroll}
                data-lenis-prevent
                className="refined-scroll-gold h-[500px] overflow-y-auto md:h-[700px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/works/featured-no8-full.jpg"
                  alt="No.8 hair salon - フルページ"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Progress Bar - ゴールドアクセント */}
              <div className="relative h-[2px] w-full bg-foreground/5">
                <div
                  className="absolute left-0 top-0 h-full bg-[#C9A96E] transition-[width] duration-150 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Caption with dynamic text + percentage */}
              <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
                <p className="text-xs font-light uppercase tracking-widest text-foreground/40 transition-colors duration-300">
                  {isAtEnd
                    ? "— End of the page —"
                    : "↓ Scroll to see the full page"}
                </p>
                <span className="text-xs font-light tabular-nums tracking-widest text-foreground/30">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-12 lg:gap-8">
          {/* Project Info (Left) */}
          <div className="order-2 flex flex-col justify-end lg:order-1 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5,
              }}
            >
              <h3 className="mb-8 font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
                <TextReveal delay={0.7}>MÉLIA NOIR</TextReveal>
              </h3>

              <dl className="mb-8 space-y-4 text-sm">
                <div className="flex gap-4">
                  <dt className="w-16 font-light uppercase tracking-widest text-foreground/50">
                    Client
                  </dt>
                  <dd className="font-light">架空ファッションブランド</dd>
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
                  <dd className="font-light">
                    Concept / Web Design / Copy / Visual Direction
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-16 font-light uppercase tracking-widest text-foreground/50">
                    Stack
                  </dt>
                  <dd className="font-light">
                    Next.js / TypeScript / Tailwind CSS
                  </dd>
                </div>
              </dl>

              <div className="mb-8 space-y-4 font-light leading-relaxed text-foreground/70">
                <p>
                  MÉLIA
                  NOIRは、甘さと強さ、静けさと華やかさを重ねた架空のファッションブランドLPです。
                </p>
                <p>
                  黒・ベージュ・ゴールドを基調に、余白、写真、タイポグラフィを丁寧に設計し、ファッション誌のような世界観を目指しました。
                </p>
                <p className="text-foreground/80">
                  商品をただ見せるのではなく、ブランドの空気感や憧れまで伝わるよう、CollectionページやDress
                  / Blouse / Jewelryの詳細ページまで展開しています。
                </p>
              </div>

              {/* Live Site Link - ゴールドアクセント */}
              <a
                href="https://melia-noir.lentodesign.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b border-[#C9A96E]/40 pb-1 text-sm font-light uppercase tracking-widest text-foreground/90 transition-colors hover:border-[#C9A96E]"
              >
                Visit Live Site
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Image Column (Right) - フルページ画像 */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              }}
              className="overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15),0_10px_25px_-15px_rgba(0,0,0,0.08)]"
            >
              {/* Scrollable Image Area */}
              <div
                onScroll={handleScroll}
                data-lenis-prevent
                className="refined-scroll-gold h-[500px] overflow-y-auto md:h-[700px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/works/melia-noir-full.webp"
                  alt="MÉLIA NOIR - フルページ"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Progress Bar - ゴールドアクセント */}
              <div className="relative h-[2px] w-full bg-foreground/5">
                <div
                  className="absolute left-0 top-0 h-full bg-[#C9A96E] transition-[width] duration-150 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Caption with dynamic text + percentage */}
              <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
                <p className="text-xs font-light uppercase tracking-widest text-foreground/40 transition-colors duration-300">
                  {isAtEnd
                    ? "— End of the page —"
                    : "↓ Scroll to see the full page"}
                </p>
                <span className="text-xs font-light tabular-nums tracking-widest text-foreground/30">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
