import Link from "next/link";

const details = [
  {
    label: "Client",
    value: "フラワーギフトブランド",
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
    value: "Shopify / Theme Customization / Product Registration",
  },
];

const designPoints = [
  {
    title: "Brand Mood",
    text: "アイボリー、ベージュ、ブラッシュピンクを基調に、花と香りのやわらかさが伝わる上品な世界観を設計しました。",
  },
  {
    title: "EC Flow",
    text: "トップページから商品詳細、カートまでの流れを整理し、ギフトを選ぶユーザーが迷わず購入へ進める導線を意識しました。",
  },
  {
    title: "Product Page",
    text: "商品写真、価格、数量選択、カート導線を見やすく配置し、購入前に必要な情報へ自然に目が届くレイアウトにしました。",
  },
  {
    title: "Mobile View",
    text: "スマートフォンでも世界観が崩れないよう、画像の見え方、余白、文字サイズを調整し、読みやすさを整えました。",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-[#b39a8f]">
      {children}
    </p>
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
      <div className="overflow-hidden rounded-[2px] border border-[#e5ded3] bg-white shadow-[0_22px_70px_rgba(54,43,33,0.08)]">
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
      <p className="mt-4 text-xs font-light uppercase tracking-[0.24em] text-[#9c8f7e]">
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
      <div className="mx-auto max-w-[240px] rounded-[28px] border border-[#dfd6ca] bg-[#f7f1eb] p-3 shadow-[0_22px_70px_rgba(54,43,33,0.1)]">
        <div className="max-h-[620px] overflow-hidden rounded-[20px] bg-white">
          <img src={src} alt={alt} className="w-full object-cover object-top" />
        </div>
      </div>
      <p className="mt-4 text-center text-xs font-light uppercase tracking-[0.24em] text-[#9c8f7e]">
        {label}
      </p>
    </div>
  );
}

export default function LentoBloomPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#17130f]">
      <section className="px-6 pb-20 pt-28 md:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-[#b39a8f]">
                Shopify EC Site / Case Study
              </p>

              <h1 className="font-serif text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
                LENTO
                <br />
                BLOOM
              </h1>

              <p className="mt-8 max-w-md text-sm font-light leading-[2.1] tracking-[0.08em] text-[#4f4942] md:text-base">
                花と香りで、
                <br />
                想いを美しく届けるShopify ECサイト。
              </p>

              <div className="mt-10 space-y-3 border-l border-[#ded7ca] pl-5 text-xs font-light leading-[1.9] tracking-[0.08em] text-[#6d655b]">
                {details.map((item) => (
                  <p key={item.label}>
                    <span className="text-[#9d877b]">{item.label}</span>：
                    {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[620px] overflow-hidden rounded-[2px] border border-[#e7e1d7] bg-white shadow-[0_24px_80px_rgba(54,43,33,0.1)]">
              <div className="h-[540px] overflow-hidden md:h-[600px]">
                <img
                  src="/works/lento-bloom-hero.webp"
                  alt="LENTO BLOOM Shopify EC site hero visual"
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
          </div>

          <div className="space-y-8 text-[13px] font-normal leading-[2.05] tracking-[0.06em] text-[#4f4942] md:text-[15px]">
            <p>
              LENTO BLOOMは、花と香りのギフトを扱う架空のShopify
              ECサイトです。大切な人へ贈る特別なギフトを、ただ購入するのではなく、“想いを選び、届ける体験”として感じてもらえるように設計しました。
            </p>

            <p>
              商品写真、コピー、余白、購入導線を一貫して整え、ブランドの上質さと、購入前の不安をやわらげる見やすさを両立しています。
            </p>

            <p>
              単に商品を並べるだけではなく、贈る相手を思い浮かべながら、自然に商品を選べるECサイトを目指しました。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <SectionLabel>Design Concept</SectionLabel>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-light leading-[1.45] tracking-tight text-[#17130f] md:text-5xl">
              想いに、
              <br />
              花と香りの余白を。
            </h2>

            <div className="mt-10 space-y-8 text-[13px] font-normal leading-[2.05] tracking-[0.06em] text-[#4f4942] md:text-[15px]">
              <p>
                コンセプトは、花と言葉で気持ちをやさしく届けること。ギフトを選ぶ時間そのものが、やさしく心地よい体験になるように、淡い色合いと余白を活かしたデザインで構成しました。
              </p>

              <p>
                フラワーギフトの華やかさを感じさせながらも、ECサイトとして商品が見やすく、購入まで迷わず進めるように、情報設計と導線を整理しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <SectionLabel>AI-assisted Process</SectionLabel>
          </div>

          <div className="space-y-8 text-[13px] font-normal leading-[2.05] tracking-[0.06em] text-[#4f4942] md:text-[15px]">
            <p>
              制作初期のブランドコンセプト整理、商品コピーのブラッシュアップ、
              商品画像の方向性検討、Shopifyの商品ページ構成の整理にAIを活用しました。
            </p>

            <p>
              AIの提案をそのまま使用するのではなく、ギフトECとしての見やすさ、
              購入導線、ブランドの上質感に合わせて取捨選択し、最終的なデザイン判断と
              トーン調整は自身で行いました。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Design Point</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2">
            {designPoints.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#e4ddd2] bg-white/70 p-7 md:p-8"
              >
                <p className="mb-8 font-serif text-4xl font-light text-[#d9c7bd]">
                  0{index + 1}
                </p>

                <h3 className="mb-4 text-sm font-normal tracking-[0.16em] text-[#2f2924]">
                  {item.title}
                </h3>

                <p className="text-[13px] font-normal leading-[2.05] tracking-[0.06em] text-[#4f4942]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
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

      <section className="px-6 pb-28 pt-16 md:px-10 lg:px-16 lg:pb-36">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#ded7ca] pt-10 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-xs font-light uppercase tracking-[0.3em] text-[#6d655b] transition hover:text-[#17130f]"
          >
            Back to Top
          </Link>
        </div>
      </section>
    </main>
  );
}
