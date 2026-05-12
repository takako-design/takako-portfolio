"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LineReveal, TextReveal } from "@/components/text-reveal";

const categories = ["All", "Event", "Food", "Lifestyle", "Public"];

const bannerWorks = [
  { id: 2, category: "Event", image: "/works/banner-2.png" }, // 夏の義民祭
  { id: 4, category: "Event", image: "/works/banner-4.png" }, // きらきらアート展
  { id: 8, category: "Food", image: "/works/banner-8.png" }, // 美酒
  { id: 3, category: "Food", image: "/works/banner-3.png" }, // さつま芋 50%
  { id: 12, category: "Food", image: "/works/banner-12.png" }, // 心和む一杯
  { id: 11, category: "Lifestyle", image: "/works/banner-11.png" }, // 癒香空間

  { id: 6, category: "Event", image: "/works/banner-6.png" }, // DOG RUN
  { id: 10, category: "Lifestyle", image: "/works/banner-10.png" }, // かご雑貨
  { id: 18, category: "Food", image: "/works/banner-18.png" }, // 長治煎餅
  { id: 1, category: "Event", image: "/works/banner-1.png" }, // SKATE
  { id: 15, category: "Food", image: "/works/banner-15.png" }, // 米粉の生どらやき
  { id: 22, category: "Public", image: "/works/banner-22.png" }, // 中央図書館まつり

  { id: 5, category: "Public", image: "/works/banner-5.png" },
  { id: 7, category: "Food", image: "/works/banner-7.png" },
  { id: 9, category: "Public", image: "/works/banner-9.png" },
  { id: 13, category: "Public", image: "/works/banner-13.png" },
  { id: 14, category: "Lifestyle", image: "/works/banner-14.png" },
  { id: 16, category: "Food", image: "/works/banner-16.png" },
  { id: 17, category: "Event", image: "/works/banner-17.png" },
  { id: 19, category: "Food", image: "/works/banner-19.png" },
  { id: 20, category: "Event", image: "/works/banner-20.png" },
  { id: 21, category: "Food", image: "/works/banner-21.png" },
  { id: 23, category: "Lifestyle", image: "/works/banner-23.png" },
  { id: 24, category: "Event", image: "/works/banner-24.png" },
];

export function BannerWorksSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredWorks =
    activeCategory === "All"
      ? bannerWorks
      : bannerWorks.filter((work) => work.category === activeCategory);

  const displayedWorks = filteredWorks.slice(0, 12);

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-[var(--section-gap)] md:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <LineReveal>
              <span className="mb-4 block text-sm font-light uppercase tracking-widest text-foreground/50">
                Banner Design
              </span>
            </LineReveal>
            <div className="flex items-baseline gap-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
                className="font-serif text-[clamp(80px,15vw,200px)] leading-none text-accent/30"
              >
                50+
              </motion.span>
              <h2 className="font-serif text-[clamp(32px,4vw,56px)] leading-display tracking-tight">
                <TextReveal delay={0.3}>Banners</TextReveal>
              </h2>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-light uppercase tracking-widest transition-colors ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground/60 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Banner Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.03,
                }}
                className="group relative aspect-square cursor-pointer overflow-hidden"
              >
                <Image
                  src={work.image}
                  alt={`バナーデザイン ${work.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
