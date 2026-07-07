import Link from "next/link";

const caseMeta = [
  "Role：Planning / Design / Coding / Writing",
  "Tools：Figma / VS Code / React / CSS",
  "Type：Care Facility Website",
  "Target：親の施設選びを検討する40〜60代のご家族",
  "Mood：北欧インテリア / 花柄 / 色のある暮らし",
  "Goal：見学予約前の不安をやわらげる導線設計",
];

const challengeItems = [
  {
    title: "Target",
    text: "親の施設選びを検討している40〜60代のご家族。安全性だけでなく、本人が心地よく暮らせるか、施設の雰囲気に安心できるかを重視する方を想定しました。北欧インテリアや花柄、色のある暮らしを好む方にも親しみやすく感じてもらえる世界観を意識しています。",
  },
  {
    title: "Goal",
    text: "見学予約や問い合わせの前に感じる不安をやわらげ、施設での暮らしを前向きにイメージできるサイトにすることを目指しました。",
  },
  {
    title: "Challenge",
    text: "介護施設らしい信頼感を保ちながら、堅くなりすぎず、暮らしのあたたかさや人の気配が伝わる表現に整えることを課題としました。",
  },
];

const designPoints = [
  {
    title: "情報を段階的に届ける設計",
    text: "初めて訪れるご家族が安心して読み進められるよう、施設の雰囲気、暮らしの様子、サポート内容、アクセス、見学予約へと自然に進める構成にしました。",
  },
  {
    title: "北欧らしい明るさと安心感の両立",
    text: "介護施設としての信頼感を保ちながら、花や色を感じるビジュアルで、暮らしに前向きな印象を加えました。施設を“管理される場所”ではなく、“その人らしく過ごせる住まい”として伝えることを意識しています。",
  },
  {
    title: "不安をやわらげるコピー",
    text: "専門的・事務的になりやすい情報も、ご家族の気持ちに寄り添う言葉で整理し、問い合わせ前の心理的なハードルを下げることを意識しました。",
  },
  {
    title: "スマートフォンでの読みやすさ",
    text: "施設探しはスマートフォンで比較・確認されることも多いため、文字サイズ、余白、ボタンの押しやすさを整え、必要な情報へ迷わず進める導線を意識しました。",
  },
];

export default function KukkaLivingPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#17130f]">
      <section className="px-6 pb-24 pt-32 md:px-10 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
            Web Design / Case Study
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="font-serif text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
                KUKKA
                <br />
                LIVING
              </h1>

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.06em] text-[#4f4944] md:text-base">
                介護施設のあたたかさと安心感を、
                <br className="hidden md:block" />
                花や色のある暮らしの明るさとともに伝えるWebサイト。
              </p>
            </div>

            <div className="border-l border-[#ded7ca] pl-6 text-xs font-light leading-[2] tracking-[0.08em] text-[#6d655b]">
              {caseMeta.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-[#e7e1d7] bg-white shadow-[0_20px_60px_rgba(40,30,20,0.08)]">
            <div className="aspect-[16/10] w-full overflow-hidden md:aspect-[16/8]">
              <img
                src="/works/featured-kukka-full.jpg"
                alt="KUKKA LIVING website mockup"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
              Overview
            </p>
          </div>

          <div className="space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
            <p>
              KUKKA
              LIVINGは、介護施設を想定して制作した自主制作のWebサイトです。
              施設選びに不安を抱えるご家族が、設備やサービス内容だけでなく、
              そこで過ごす日々の空気やあたたかさまで想像できるよう、
              情報設計・コピー・ビジュアルの見せ方を整えました。
            </p>

            <p>
              介護施設のWebサイトは、情報量が多くなりやすく、
              堅い印象や事務的な印象になってしまうことがあります。
              そのため、必要な情報をわかりやすく整理しながら、
              「ここなら安心できそう」と感じてもらえる構成を意識しました。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
            Target / Goal / Challenge
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {challengeItems.map((item) => (
              <div
                key={item.title}
                className="border border-[#e4ddd2] bg-white/65 p-7 md:p-8"
              >
                <p className="mb-5 font-serif text-2xl font-light tracking-tight text-[#17130f]">
                  {item.title}
                </p>
                <p className="text-sm font-light leading-[2] tracking-[0.06em] text-[#4f4944]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
              Background
            </p>
          </div>

          <div className="space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
            <p>
              介護の現場で働く中で感じてきたのは、
              施設選びには「情報のわかりやすさ」だけでなく、
              そこに流れる空気や人のあたたかさが大切だということです。
            </p>

            <p>
              ご家族にとって施設選びは、不安や迷いを伴うものです。
              だからこそ、KUKKA LIVINGでは、サービス内容をただ並べるのではなく、
              暮らしのイメージが自然に伝わるように構成しました。
            </p>

            <p>
              また、北欧インテリアやテキスタイルのように、
              日常の中に色や柄を取り入れて楽しむ感覚をヒントに、
              介護施設であっても明るく前向きな暮らしを想像できる表現を目指しました。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
              Design Concept
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-light leading-[1.4] tracking-tight text-[#17130f] md:text-5xl">
              安心が、
              <br />
              彩りのある日常に変わる場所。
            </h2>

            <div className="mt-10 space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
              <p>
                余白を広く取り、淡いベージュを基調にすることで、
                清潔感とやわらかさを両立しました。
              </p>

              <p>
                そこに花や色を感じるビジュアルを加えることで、
                介護施設に対する不安をやわらげながら、
                「ここでの暮らしが少し楽しみになる」ような前向きな印象を目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
            Design Point
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {designPoints.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#e4ddd2] bg-white/65 p-7 md:p-9"
              >
                <p className="mb-6 font-serif text-3xl font-light text-[#d5c9ba]">
                  {String(index + 1).padStart(2, "0")}
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

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
              Expected Effect
            </p>
          </div>

          <div className="space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
            <p>
              施設の雰囲気や価値観が伝わりやすくなることで、
              見学予約前の不安軽減につながるサイトを目指しました。
            </p>

            <p>
              価格や設備だけで比較されるのではなく、
              「本人らしく、安心して暮らせる場所」として印象に残るように設計しています。
            </p>

            <p>
              北欧デザインのような明るさや、花のある暮らしが好きな方にも、
              介護施設を前向きな選択肢として受け止めてもらえる表現を意識しました。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-20 md:px-10 lg:px-16 lg:pb-36">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#ded7ca] pt-10 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-xs font-light uppercase tracking-[0.3em] text-[#6d655b] transition hover:text-[#17130f]"
          >
            Back to Top
          </Link>

          <a
            href="http://kukka.lentodesign.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit border border-[#17130f] px-6 py-3 text-xs font-light uppercase tracking-[0.25em] transition hover:bg-[#17130f] hover:text-white"
          >
            View Site
          </a>
        </div>
      </section>
    </main>
  );
}
