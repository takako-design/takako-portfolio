import Link from "next/link";

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

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.08em] text-[#4f4942] md:text-base">
                介護施設のあたたかさと安心感を、
                <br className="hidden md:block" />
                やさしく伝えるWebサイト。
              </p>
            </div>

            <div className="border-l border-[#ded7ca] pl-6 text-xs font-light leading-[2] tracking-[0.08em] text-[#6d655b]">
              <p>Role：Planning / Design / Coding / Writing</p>
              <p>Tools：Figma / VS Code / React / CSS</p>
              <p>Type：Care Facility Website</p>
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

          <div className="space-y-8 text-sm font-light leading-[2.2] tracking-[0.08em] text-[#4f4942] md:text-base">
            <p>
              KUKKA LIVINGは、介護施設を想定して制作したWebサイトです。
              施設の雰囲気やサービス内容をわかりやすく伝えながら、
              利用者さまやご家族が安心して問い合わせできるよう、
              やわらかな色合いと読みやすい情報設計を意識しました。
            </p>

            <p>
              介護施設のWebサイトでは、情報量が多くなりやすく、
              堅い印象や事務的な印象になってしまうことがあります。
              そのため、必要な情報を整理しながら、
              やさしさや信頼感が自然に伝わる構成を目指しました。
            </p>
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

          <div className="space-y-8 text-sm font-light leading-[2.2] tracking-[0.08em] text-[#4f4942] md:text-base">
            <p>
              介護の現場で働く中で感じてきたのは、
              施設選びには「情報のわかりやすさ」だけでなく、
              そこに流れる空気や人のあたたかさが大切だということです。
            </p>

            <p>
              KUKKA LIVINGでは、安心感・清潔感・親しみやすさを軸に、
              初めてサイトを訪れる方にも穏やかに伝わるデザインを目指しました。
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
              静かに伝わる場所。
            </h2>

            <div className="mt-10 space-y-8 text-sm font-light leading-[2.2] tracking-[0.08em] text-[#4f4942] md:text-base">
              <p>
                余白を広く取り、淡いグリーンやベージュを基調にすることで、
                清潔感とやわらかさを両立しました。
              </p>

              <p>
                写真や文字の見せ方も、強く主張しすぎず、
                施設の穏やかな空気が伝わるように整えています。
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
            {[
              "ご家族が安心して読み進められるよう、情報を段階的に配置",
              "介護施設らしい信頼感と、暮らしに近いあたたかさを両立",
              "余白と配色で、やさしく落ち着いた印象を演出",
              "スマートフォンでも読みやすい文字サイズと導線を意識",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-[#e4ddd2] bg-white/60 p-6 md:p-8"
              >
                <p className="mb-6 font-serif text-3xl font-light text-[#d5c9ba]">
                  0{index + 1}
                </p>
                <p className="text-sm font-light leading-[2] tracking-[0.08em] text-[#4f4942]">
                  {item}
                </p>
              </div>
            ))}
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
            href="https://kukka.lentodesign.com/"
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
