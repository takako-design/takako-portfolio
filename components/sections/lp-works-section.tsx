"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LineReveal } from "@/components/text-reveal";

const featuredLpWork = {
  title: "LUNÉA PILATES",
  category: "Private Pilates Studio LP",
  label: "Featured LP / 架空サイト",
  catch:
    "呼吸・姿勢・心を整えるというコンセプトを軸に、初めての方でも安心して体験予約へ進めるよう設計した女性専用プライベートピラティススタジオLP。",
  image: "/works/lp-lunea-pilates1.webp",
  url: "https://lunea-pilates-lp.vercel.app/",
  tags: ["Wellness", "Reservation Flow", "Sage Design"],
};

const lpWorks = [
  {
    id: 1,
    title: "Wish Manifest Sound",
    category: "Healing Program LP",
    catch:
      "忙しい毎日に、そっと寄り添うヒーリング。音×心理×意識で、願いが静かに動き出す。",
    image: "/works/lp-wish.jpg",
    url: "https://tldh412.wixsite.com/wish-manuest-sound",
  },
  {
    id: 2,
    title: "日本酒ガトーショコラ",
    category: "Gift Product LP",
    catch:
      "和と洋、交わる至福のひと切れ。三木市の大吟古酒とヴァローナ。大切な人への贈り物に。",
    image: "/works/lp-sake.jpg",
    url: "https://tldh412.wixsite.com/my-site-5",
  },
  {
    id: 3,
    title: "Bloom Insta Support",
    category: "SNS Service LP",
    catch:
      "頑張らない発信で、信頼されるアカウントへ。個人事業主のための、やさしいInstagram運用代行。",
    image: "/works/lp-bloom.jpg",
    url: "https://tldh412.wixsite.com/bloom_insta",
  },
];

export function LpWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const featuredScrollRef = useRef<HTMLDivElement>(null);
  const [featuredScrollProgress, setFeaturedScrollProgress] = useState(0);
  const [isFeaturedAtEnd, setIsFeaturedAtEnd] = useState(false);

  const handleFeaturedScroll = () => {
    const element = featuredScrollRef.current;
    if (!element) return;

    const maxScroll = element.scrollHeight - element.clientHeight;
    const progress = maxScroll > 0 ? (element.scrollTop / maxScroll) * 100 : 0;

    setFeaturedScrollProgress(progress);
    setIsFeaturedAtEnd(progress > 98);
  };

  useEffect(() => {
    handleFeaturedScroll();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-[var(--section-gap)] md:px-12"
    >
      <style jsx>{`
        .refined-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .refined-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .refined-scroll::-webkit-scrollbar-thumb {
          background: rgba(201, 169, 110, 0.42);
          border-radius: 2px;
          transition: background 0.3s ease;
        }
        .refined-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 157, 168, 0.62);
        }
        .refined-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(201, 169, 110, 0.42) transparent;
          overscroll-behavior: contain;
        }
      `}</style>

      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <LineReveal>
          <span className="mb-9 block text-[13px] font-light uppercase leading-none tracking-[0.28em] text-foreground/45">
            LP Works
          </span>
        </LineReveal>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{
            duration: 0.85,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className="mb-6 overflow-visible pb-5 pr-5 font-serif text-[clamp(42px,5vw,72px)] font-normal leading-[1.18] tracking-[-0.035em] text-foreground md:mb-7 md:pb-6"
        >
          Landing Pages
        </motion.h2>

        {/* Intro Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.4,
          }}
          className="mb-14 max-w-xl space-y-3 text-[14px] font-light leading-[2.05] tracking-[0.015em] text-foreground/65 md:mb-16 md:text-[15px]"
        >
          <p>想いや魅力が、きちんと届くように。</p>
          <p>世界観、言葉、導線を整えたLPデザインです。</p>
        </motion.div>

        {/* Featured LP */}
        <motion.a
          href={featuredLpWork.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="group mb-60 grid overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_18px_45px_-24px_rgba(0,0,0,0.22),0_8px_22px_-18px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_26px_64px_-26px_rgba(201,157,168,0.32),0_12px_30px_-18px_rgba(201,169,110,0.18)] md:grid-cols-[1.35fr_0.9fr]"
        >
          <div className="relative overflow-hidden bg-foreground/5">
            <div
              ref={featuredScrollRef}
              onScroll={handleFeaturedScroll}
              onWheel={(event) => {
                event.preventDefault();
                event.stopPropagation();

                const element = featuredScrollRef.current;
                if (!element) return;

                element.scrollTop += event.deltaY;
                handleFeaturedScroll();
              }}
              className="refined-scroll h-[340px] cursor-ns-resize overflow-y-scroll overscroll-contain md:h-[460px] lg:h-[500px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredLpWork.image}
                alt={`${featuredLpWork.title} - LP`}
                className="w-full"
                loading="lazy"
                onLoad={handleFeaturedScroll}
              />
            </div>

            <div className="relative h-[2px] w-full bg-foreground/5">
              <div
                className="absolute left-0 top-0 h-full bg-[#C9A96E] transition-[width] duration-150 ease-out"
                style={{ width: `${featuredScrollProgress}%` }}
              />
            </div>

            <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
              <p className="text-[11px] font-light uppercase tracking-[0.24em] text-foreground/38 transition-colors duration-300">
                {isFeaturedAtEnd
                  ? "→ End of the page"
                  : "↓ Scroll to see the full page"}
              </p>
              <span className="text-[11px] font-light tabular-nums tracking-[0.24em] text-foreground/28">
                {Math.round(featuredScrollProgress)}%
              </span>
            </div>

            <div className="absolute left-5 top-5 rounded-full border border-white/45 bg-white/78 px-4 py-2 text-[10px] font-light uppercase tracking-[0.24em] text-foreground/52 backdrop-blur-sm">
              {featuredLpWork.label}
            </div>
          </div>

          <div className="flex flex-col justify-between px-7 py-8 font-sans md:px-10 md:py-10 lg:px-12">
            <div>
              <span className="mb-5 block text-[11px] font-light uppercase tracking-[0.28em] text-foreground/40">
                {featuredLpWork.category}
              </span>

              <h3 className="mb-5 font-serif text-[clamp(34px,3.3vw,48px)] font-normal leading-[0.98] tracking-[-0.045em] text-foreground transition-colors duration-300 group-hover:text-[#C99DA8]">
                {featuredLpWork.title}
              </h3>

              <p className="max-w-xl text-[14px] font-light leading-[2.05] tracking-[0.015em] text-foreground/70 md:text-[15px]">
                {featuredLpWork.catch}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredLpWork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/10 px-3 py-1.5 text-[10px] font-light uppercase tracking-[0.18em] text-foreground/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-foreground/10 pt-5">
              <p className="text-[13px] font-light uppercase tracking-[0.2em] text-foreground/70">
                Visit Site
              </p>
              <span className="text-lg font-light text-foreground/35 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#C99DA8]">
                →
              </span>
            </div>
          </div>
        </motion.a>

        {/* Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 gap-y-20 gap-x-6 md:grid-cols-3 md:gap-6">
          {lpWorks.map((work, index) => (
            <motion.a
              key={work.id}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.65 + index * 0.15,
              }}
              className="group block"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_18px_45px_-24px_rgba(0,0,0,0.22),0_8px_22px_-18px_rgba(0,0,0,0.12)] transition-shadow duration-500 group-hover:shadow-[0_25px_60px_-20px_rgba(201,157,168,0.25),0_15px_30px_-15px_rgba(201,157,168,0.15)]">
                <div className="h-[380px] overflow-hidden md:h-[420px] lg:h-[460px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.image}
                    alt={`${work.title} - LP`}
                    className="w-full object-cover object-top transition-transform duration-[6500ms] ease-out group-hover:translate-y-[calc(-100%_+_380px)] md:group-hover:translate-y-[calc(-100%_+_420px)] lg:group-hover:translate-y-[calc(-100%_+_460px)]"
                    style={{ objectPosition: "top" }}
                    loading="lazy"
                  />
                </div>

                {/* Bottom Accent Line */}
                <div className="relative h-[2px] w-full bg-foreground/5">
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#C99DA8] transition-[width] duration-700 ease-out group-hover:w-full" />
                </div>

                {/* Hover Hint */}
                <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
                  <p className="text-[13px] font-light uppercase tracking-[0.2em] text-foreground/70">
                    Visit Site
                  </p>
                  <span className="text-xs font-light text-foreground/30 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#C99DA8]">
                    →
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="mt-6">
                <span className="mb-3 block text-[11px] font-light uppercase tracking-[0.26em] text-foreground/42">
                  {work.category}
                </span>
                <h3 className="mb-4 font-serif text-[24px] font-normal leading-[1.05] tracking-[-0.04em] text-foreground transition-colors duration-300 group-hover:text-[#C99DA8] md:text-[28px]">
                  {work.title}
                </h3>
                <p className="text-[14px] font-light leading-[2.05] tracking-[0.015em] text-foreground/68">
                  {work.catch}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
