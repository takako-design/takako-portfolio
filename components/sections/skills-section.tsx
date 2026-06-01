"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LineReveal, TextReveal } from "@/components/text-reveal";

const skillGroups = [
  {
    title: "Design",
    description: "世界観・構成・見せ方を整える領域",
    items: [
      "Web Design",
      "LP Design",
      "Banner Design",
      "Brand Direction",
      "Visual Direction",
      "Copywriting",
    ],
  },
  {
    title: "Tools",
    description: "制作・実装・公開に使用しているツール",
    items: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "Canva",
      "WordPress",
      "Shopify",
      "VS Code",
      "GitHub",
      "Vercel",
    ],
  },
  {
    title: "Coding",
    description: "デザインをWeb上に実装するための技術",
    items: [
      "HTML",
      "CSS / SCSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI-assisted Workflow",
    description: "AIを活用した制作補助",
    items: [
      "ChatGPT",
      "Codex",
      "Claude Code",
      "Direction",
      "Copywriting",
      "Coding Assist",
      "Debugging",
      "Prompt Design",
    ],
  },
];

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative border-t border-border px-6 py-[var(--section-gap)] md:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 md:mb-24">
          <LineReveal>
            <span className="mb-4 block text-sm font-light uppercase tracking-widest text-foreground/50">
              Design Scope
            </span>
          </LineReveal>

          <h2 className="font-serif text-[clamp(40px,6vw,80px)] leading-display tracking-tight">
            <TextReveal delay={0.2}>Skills & Tools</TextReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4,
            }}
            className="mt-8 max-w-2xl font-light leading-relaxed text-foreground/65"
          >
            ブランドの世界観づくりから、Webデザイン、実装、公開まで。
            AIも制作フローに取り入れながら、目的に合わせて美しく伝わる形へ整えます。
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5 + index * 0.1,
              }}
              className="group border border-border bg-background/40 p-6 transition-colors hover:border-accent/60 md:p-8"
            >
              <p className="mb-6 font-serif text-4xl font-light text-accent/60">
                0{index + 1}
              </p>

              <h3 className="mb-3 font-serif text-2xl tracking-tight">
                {group.title}
              </h3>

              <p className="mb-8 min-h-[3rem] text-sm font-light leading-relaxed text-foreground/55">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-foreground/10 bg-foreground/[0.02] px-3 py-2 text-[11px] font-light uppercase tracking-[0.16em] text-foreground/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
