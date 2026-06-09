import Link from "next/link";

const details = [
  {
    label: "Type",
    value: "Self-initiated / Fictional Brand",
  },
  {
    label: "Year",
    value: "2026",
  },
  {
    label: "Category",
    value: "Shopify EC Site / Brand Direction",
  },
  {
    label: "Role",
    value: "Concept / Shopify Design / Product Page Design / Copywriting",
  },
  {
    label: "Tools",
    value:
      "Shopify / Theme Customization / Product Registration / AI-assisted Planning",
  },
];

const projectHighlights = [
  {
    title: "Target",
    text: "誕生日・記念日・母の日・自分へのご褒美など、特別感のあるギフトを探している20〜40代女性を想定。",
  },
  {
    title: "Goal",
    text: "ブランドの世界観を保ちながら、商品内容・価格・用途が伝わり、安心して購入へ進めるEC体験を設計。",
  },
  {
    title: "Expected Action",
    text: "商品詳細の確認、ギフト選択、カート追加までの迷いを減らし、購入につながる導線を目指しました。",
  },
];

const designPoints = [
  {
    title: "Brand Mood",
    text: "アイボリー、ベージュ、ブラッシュピンクを基調に、花と香りのやわらかさが伝わる上品な世界観を設計しました。",
  },
  {
    title: "Gift Selection Flow",
    text: "ギフトシーンを想像しながら商品を選べるよう、トップページから商品詳細までの情報の順番を整理しました。",
  },
  {
    title: "Product Trust",
    text: "価格、数量、商品写真、購入ボタンを見やすく配置し、購入前に必要な情報へ自然に目が届く構成にしました。",
  },
  {
    title: "Mobile UX",
    text: "スマートフォンでも花のビジュアルと文字情報が読みやすく見えるよう、余白、画像位置、文字サイズを調整しました。",
  },
];

const processItems = [
  {
    title: "Concept Making",
    text: "花と香りを組み合わせたギフトブランドとして、贈る相手やシーンが自然に浮かぶブランドコンセプトを整理しました。",
  },
  {
    title: "Information Design",
    text: "かわいさだけで終わらず、用途・価格・配送・ラッピングなど、購入判断に必要な情報が伝わる構成を意識しました。",
  },
  {
    title: "AI-assisted Direction",
    text: "商品コピーや画像トーンの検討にAIを活用し、最終的な表現・余白・導線はブランドの上質感に合わせて調整しました。",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-[#b99a88]">
      {children}
    </p>
  );
}

function SectionShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.35fr_0.65fr]">
        <div>
          <SectionLabel>{label}</SectionLabel>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function BrowserFrame({
  src,
  alt,
  label,
  imageClassName = "",
}: {
  src: string;
  alt: string;
  label: string;
  imageClassName?: string;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-[3px] border border-[#e4ddd2] bg-white shadow-[0_24px_80px_rgba(54,43,33,0.09)]">
        <div className="flex h-8 items-center gap-2 border-b border-[#eee8df] bg-[#fbfaf6] px-4">
          <span className="h-2 w-2 rounded-full bg-[#d8c8bd]" />
          <span className="h-2 w-2 rounded-full bg-[#e5d9cf]" />
          <span className="h-2 w-2 rounded-full bg-[#eee6dd]" />
        </div>
        <div className="max-h-[560px] overflow-hidden bg-white">
          <img
            src={src}
            alt={alt}
            className={`w-full object-cover object-top ${imageClassName}`}
          />
        </div>
      </div>
      <p className="mt-4 text-xs font-light uppercase tracking-[0.3em] text-[#a49687]">
        {label}
      </p>
    </div>
  );
}

function MobileFrame({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div>
      <div className="mx-auto max-w-[230px] rounded-[30px] border border-[#dfd6ca] bg-[#f7f1eb] p-3 shadow-[0_24px_80px_rgba(54,43,33,0.1)]">
        <div className="max-h-[620px] overflow-hidden rounded-[21px] bg-white">
          <img src={src} alt={alt} className="w-full object-cover object-top" />
        </div>
      </div>
      <p className="mt-4 text-center text-xs font-light uppercase tracking-[0.3em] text-[#a49687]">
        {label}
      </p>
    </div>
  );
}

export default function LentoBloomPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf6] text-[#17130f]">
      <section className="relative px-6 pb-20 pt-28 md:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute right-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[#ead8cd]/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-18%] left-[-14%] h-[420px] w-[420px] rounded-full bg-[#f0e7df]/60 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-[#b99a88]">
                Shopify EC Site / Case Study
              </p>

              <h1 className="font-serif text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
                LENTO
                <br />
                BLOOM
              </h1>

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.06em] text-[#4f4944] md:text-base">
                花と香りで、
                <br />
                想いを美しく届けるShopify ECサイト。
              </p>

              <p className="mt-5 max-w-xl text-sm font-light leading-[2.1] tracking-[0.06em] text-[#6d655b] md:text-base">
                商品を並べるだけでなく、贈る相手やシーンを想像しながら選べるように、ブランドの世界観と購入導線を整えました。
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://p7vd1p-7p.myshopify.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-[#b9985f] bg-[#b9985f] px-6 py-3 text-xs font-light uppercase tracking-[0.25em] text-white transition hover:-translate-y-0.5 hover:bg-[#a98950]"
                >
                  Visit Live Site
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center border border-[#ded7ca] px-6 py-3 text-xs font-light uppercase tracking-[0.25em] text-[#6d655b] transition hover:-translate-y-0.5 hover:border-[#b9985f] hover:text-[#17130f]"
                >
                  Back to Top
                </Link>
              </div>

              <div className="mt-10 space-y-3 border-l border-[#ded7ca] pl-6 text-xs font-light leading-[2] tracking-[0.08em] text-[#6d655b]">
                {details.map((item) => (
                  <p key={item.label}>
                    <span className="text-[#9d877b]">{item.label}</span>：
                    {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[640px]">
              <div className="overflow-hidden rounded-[4px] border border-[#e7e1d7] bg-white shadow-[0_28px_90px_rgba(54,43,33,0.11)]">
                <div className="aspect-[4/3] overflow-hidden md:aspect-[1.05/1]">
                  <img
                    src="/works/lento-bloom-hero.webp"
                    alt="LENTO BLOOM Shopify EC site hero visual"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell label="Overview">
        <div className="space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
          <p>
            LENTO BLOOMは、花と香りのギフトを扱う架空のShopify
            ECサイトです。大切な人へ贈る特別なギフトを、ただ購入するのではなく、“想いを選び、届ける体験”として感じてもらえるように設計しました。
          </p>

          <p>
            商品写真、コピー、余白、購入導線を一貫して整え、ブランドの上質さと、購入前の不安をやわらげる見やすさを両立しています。
          </p>
        </div>
      </SectionShell>

      <section className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {projectHighlights.map((item) => (
              <div
                key={item.title}
                className="border border-[#e4ddd2] bg-white/75 p-7 shadow-[0_18px_50px_rgba(54,43,33,0.04)]"
              >
                <h2 className="mb-5 font-serif text-2xl font-light tracking-tight text-[#17130f]">
                  {item.title}
                </h2>
                <p className="text-sm font-light leading-[2] tracking-[0.06em] text-[#4f4944]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionShell label="Design Concept">
        <h2 className="font-serif text-3xl font-light leading-[1.4] tracking-tight text-[#17130f] md:text-5xl">
          想いに、
          <br />
          花と香りの余白を。
        </h2>

        <div className="mt-10 space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
          <p>
            コンセプトは、花と言葉で気持ちをやさしく届けること。ギフトを選ぶ時間そのものが心地よい体験になるように、淡い色合いと余白を活かしたデザインで構成しました。
          </p>

          <p>
            フラワーギフトの華やかさを感じさせながらも、ECサイトとして商品が見やすく、購入まで迷わず進めるように、情報設計と導線を整理しています。
          </p>
        </div>
      </SectionShell>

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Design Point</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2">
            {designPoints.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#e4ddd2] bg-white/75 p-7 shadow-[0_18px_50px_rgba(54,43,33,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(54,43,33,0.08)] md:p-8"
              >
                <p className="mb-6 font-serif text-3xl font-light text-[#d6c1b7]">
                  0{index + 1}
                </p>

                <h3 className="mb-4 text-base font-light leading-[1.8] tracking-[0.08em] text-[#17130f]">
                  {item.title}
                </h3>

                <p className="text-sm font-light leading-[2] tracking-[0.06em] text-[#4f4944]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Process</SectionLabel>

          <div className="grid gap-6 md:grid-cols-3 md:gap-7">
            {processItems.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#e4ddd2] bg-white/65 p-7 shadow-[0_18px_50px_rgba(54,43,33,0.035)] md:p-9"
              >
                <p className="mb-7 font-serif text-3xl font-light text-[#d6c1b7]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mb-5 text-base font-light leading-[1.8] tracking-[0.06em] text-[#17130f]">
                  {item.title}
                </h3>

                <p className="text-sm font-light leading-[2.15] tracking-[0.045em] text-[#4f4944]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Screens</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[0.66fr_0.34fr] lg:items-start">
            <BrowserFrame
              src="/works/lento-bloom-home-pc.webp"
              alt="LENTO BLOOM top page desktop"
              label="Top Page / Desktop"
            />

            <MobileFrame
              src="/works/lento-bloom-home-sp.webp"
              alt="LENTO BLOOM top page mobile"
              label="Top Page / Mobile"
            />
          </div>

          <div className="mt-16">
            <BrowserFrame
              src="/works/lento-bloom-product-pc.webp"
              alt="LENTO BLOOM product detail page"
              label="Product Detail Page / Desktop"
              imageClassName="max-h-none"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-10 md:px-10 lg:px-16 lg:pb-36">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#ded7ca] pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-light uppercase tracking-[0.35em] text-[#b99a88]">
              Next Action
            </p>
            <p className="text-sm font-light leading-[2] tracking-[0.06em] text-[#4f4944]">
              ブランドの世界観と、購入までの導線を両立したShopify ECサイト。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://p7vd1p-7p.myshopify.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[#b9985f] bg-[#b9985f] px-6 py-3 text-xs font-light uppercase tracking-[0.25em] text-white transition hover:-translate-y-0.5 hover:bg-[#a98950]"
            >
              Visit Live Site
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-[#ded7ca] px-6 py-3 text-xs font-light uppercase tracking-[0.25em] text-[#6d655b] transition hover:-translate-y-0.5 hover:border-[#b9985f] hover:text-[#17130f]"
            >
              Back to Top
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
