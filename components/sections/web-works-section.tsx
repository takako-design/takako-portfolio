"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type UIEvent } from "react";
import { LineReveal, TextReveal } from "@/components/text-reveal";

type Project = {
  title: string;
  client: string;
  year: string;
  role: string;
  stack: string;
  designPoint: string;
  description: string[];
  liveHref: string;
  caseHref: string;
  imageSrc: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: "LENTO BLOOM",
    client: "フラワーギフトブランド",
    year: "2026",
    role: "Concept / Shopify Design / Copywriting",
    stack: "Shopify / Theme Customization",
    designPoint: "贈る相手やシーンを想像しながら、安心して選べるECサイトへ。",
    description: [
      "花と香りのギフトを扱う、架空のShopify ECサイトです。誕生日や記念日、自分へのご褒美など、特別感のある贈り物を探す女性を想定して制作しました。",
      "商品写真、コピー、余白、配色を統一し、上質でやわらかな世界観を設計。商品一覧だけでなく、詳細ページや購入前の確認項目まで整え、迷わず選べる導線を意識しています。",
    ],
    liveHref: "https://p7vd1p-7p.myshopify.com/",
    caseHref: "/works/lento-bloom",
    imageSrc: "/works/lento-bloom-home-pc.webp",
    imageAlt: "LENTO BLOOM - Shopify EC Site",
  },
  {
    title: "NO.8 HAIR SALON",
    client: "プライベート美容室",
    year: "2026",
    role: "Concept / Web Design",
    stack: "WordPress / Lab23",
    designPoint:
      "完全予約制・一席のみの特別感を、静かな余白と予約導線で伝える。",
    description: [
      "大型サロンではなく、一人のスタイリストに丁寧に任せたい女性へ向けたプライベート美容室サイトです。落ち着いた空間で過ごす“自分だけの時間”が伝わるよう設計しました。",
      "黒とゴールド、セリフ体のタイポグラフィ、余白を活かしてモードな印象に。メニュー・アクセス・予約導線を整理し、初めての方でも迷わず来店予約へ進める構成にしています。",
    ],
    liveHref: "https://no8-hair.lentodesign.com/",
    caseHref: "/works/no8-hair-salon",
    imageSrc: "/works/featured-no8-full.webp",
    imageAlt: "No.8 hair salon - フルページ",
  },
  {
    title: "MÉLIA NOIR",
    client: "ファッションブランド",
    year: "2026",
    role: "Concept / Web Design / Copy / Visual Direction",
    stack: "Next.js / TypeScript / Tailwind CSS",
    designPoint: "商品を並べるだけでなく、ブランドの憧れまで伝えるLPへ。",
    description: [
      "甘さと強さ、静けさと華やかさを重ねた、架空のファッションブランドLPです。上品さとモード感を両立したい大人女性を想定して制作しました。",
      "黒・ベージュ・ゴールドを基調に、余白、写真、タイポグラフィを丁寧に設計。Collectionページや商品詳細まで展開し、ブランドの空気感を感じながら回遊できる構成にしています。",
    ],
    liveHref: "https://melia-noir.lentodesign.com/",
    caseHref: "/works/melia-noir",
    imageSrc: "/works/melia-noir-full.webp",
    imageAlt: "MÉLIA NOIR - フルページ",
  },
];

type ProjectInfoProps = {
  project: Project;
  isInView: boolean;
  index: number;
};

function ProjectInfo({ project, isInView, index }: ProjectInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.25 + index * 0.08,
      }}
      className="max-w-[470px] font-sans"
    >
      <h3 className="mb-8 font-serif text-[clamp(40px,4.1vw,60px)] font-normal leading-[0.95] tracking-[-0.045em] text-foreground">
        <TextReveal delay={0.45}>{project.title}</TextReveal>
      </h3>

      <dl className="mb-8 grid grid-cols-[72px_1fr] gap-x-5 gap-y-3.5 text-[14px] leading-[1.85] md:text-[15px]">
        <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
          Client
        </dt>
        <dd className="font-light tracking-[0.01em] text-foreground/64">
          {project.client}
        </dd>

        <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
          Year
        </dt>
        <dd className="font-light tabular-nums tracking-[0.01em] text-foreground/64">
          {project.year}
        </dd>

        <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
          Role
        </dt>
        <dd className="font-light tracking-[0.01em] text-foreground/64">
          {project.role}
        </dd>

        <dt className="font-light uppercase tracking-[0.24em] text-foreground/45">
          Stack
        </dt>
        <dd className="font-light tracking-[0.01em] text-foreground/64">
          {project.stack}
        </dd>
      </dl>

      <div className="mb-7 border-l border-foreground/15 pl-5">
        <p className="mb-2 text-[11px] font-light uppercase tracking-[0.28em] text-foreground/40">
          Design Point
        </p>
        <p className="font-serif text-[20px] font-normal leading-[1.75] tracking-[-0.035em] text-foreground/84 md:text-[21px]">
          {project.designPoint}
        </p>
      </div>

      <div className="mb-8 space-y-4 text-[14px] font-light leading-[2.05] tracking-[0.015em] text-foreground/70 md:text-[15px]">
        {project.description.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href={project.liveHref}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1.5 text-[13px] font-light uppercase tracking-[0.2em] text-foreground/74 transition-colors hover:border-foreground hover:text-foreground"
        >
          Visit Live Site
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href={project.caseHref}
          className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-1.5 text-[13px] font-light uppercase tracking-[0.2em] text-foreground/74 transition-colors hover:border-foreground hover:text-foreground"
        >
          View Case Study
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}

type ScrollableProjectImageProps = {
  project: Project;
  isInView: boolean;
  index: number;
};

function ScrollableProjectImage({
  project,
  isInView,
  index,
}: ScrollableProjectImageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2 + index * 0.08,
      }}
      className="overflow-hidden rounded-[2px] border border-foreground/10 bg-background shadow-[0_18px_45px_-24px_rgba(0,0,0,0.22),0_8px_22px_-18px_rgba(0,0,0,0.12)]"
    >
      <div
        onScroll={handleScroll}
        data-lenis-prevent
        className="refined-scroll h-[500px] overflow-y-auto md:h-[640px] lg:h-[660px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="w-full"
          loading="lazy"
        />
      </div>

      <div className="relative h-px w-full bg-foreground/5">
        <div
          className="absolute left-0 top-0 h-full bg-foreground/35 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="flex items-center justify-between border-t border-foreground/10 px-4 py-2.5">
        <p className="text-[11px] font-light uppercase tracking-[0.24em] text-foreground/38 transition-colors duration-300">
          {isAtEnd ? "— End of the page —" : "↓ Scroll to see the full page"}
        </p>
        <span className="text-[11px] font-light tabular-nums tracking-[0.24em] text-foreground/28">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </motion.div>
  );
}

export function WebWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
        <LineReveal>
          <span className="mb-9 block text-[13px] font-light uppercase leading-none tracking-[0.28em] text-foreground/45">
            Selected Work
          </span>
        </LineReveal>

        <div className="space-y-24 md:space-y-28">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid gap-11 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16"
            >
              <div className="order-2 lg:order-1 lg:col-span-4">
                <ProjectInfo
                  project={project}
                  isInView={isInView}
                  index={index}
                />
              </div>

              <div className="order-1 lg:order-2 lg:col-span-8">
                <ScrollableProjectImage
                  project={project}
                  isInView={isInView}
                  index={index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
