import Link from "next/link";

export default function MeliaNoirPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#17130f]">
      <section className="px-6 pb-24 pt-32 md:px-10 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
            LP Design / Case Study
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="font-serif text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
                MÉLIA
                <br />
                NOIR
              </h1>

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.08em] text-[#4f4942] md:text-base">
                静かな強さと女性らしさをまとう、
                <br className="hidden md:block" />
                ファッションブランドのLP。
              </p>
            </div>

            <div className="border-l border-[#ded7ca] pl-6 text-xs font-light leading-[2] tracking-[0.08em] text-[#6d655b]">
              <p>Role：Brand Direction / LP Design / Coding</p>
              <p>Tools：Figma / VS Code / React / CSS</p>
              <p>Type：Luxury Fashion Landing Page</p>
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-[#e7e1d7] bg-white shadow-[0_20px_60px_rgba(40,30,20,0.08)]">
            <div className="aspect-[16/10] w-full overflow-hidden md:aspect-[16/8]">
              <img
                src="/works/featured-melia-noir-wide.webp"
                alt="MÉLIA NOIR landing page mockup"
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
              MÉLIA
              NOIRは、架空のラグジュアリーファッションブランドを想定して制作したLPです。
              ブラック・アイボリー・ベージュを基調に、静けさの中に凛とした存在感が伝わる世界観を設計しました。
            </p>

            <p>
              商品をただ紹介するのではなく、ブランドの空気感や美意識そのものが伝わるよう、
              写真・余白・言葉・タイポグラフィのバランスを丁寧に整えています。
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
              ファッションブランドのLPでは、商品写真を並べるだけではなく、
              どんな人に、どんな気分で選ばれるブランドなのかを伝えることが大切です。
            </p>

            <p>
              MÉLIA
              NOIRでは、甘さに寄せすぎず、女性らしさの中に芯の強さを感じられるように、
              色数を抑え、余白を広く使い、静かな高級感を表現しました。
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
              黒に、
              <br />
              やわらかな強さを。
            </h2>

            <div className="mt-10 space-y-8 text-sm font-light leading-[2.2] tracking-[0.08em] text-[#4f4942] md:text-base">
              <p>
                コンセプトは、静かな美しさと芯のある女性らしさ。
                黒を主役にしながら、アイボリーやベージュの余白で重たくなりすぎない印象に整えました。
              </p>

              <p>
                写真は大きく見せつつも、余白を残すことで、
                ラグジュアリーなファッション誌のような余韻を意識しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
              AI-assisted Process
            </p>
          </div>

          <div className="space-y-8 text-sm font-light leading-[2.2] tracking-[0.08em] text-[#4f4942] md:text-base">
            <p>
              制作初期のコンセプト整理、コピーのブラッシュアップ、ビジュアルの方向性検討、
              実装時のコード修正補助にAIを活用しました。
            </p>

            <p>
              AIの提案をそのまま使用するのではなく、ブランドの世界観・余白・可読性・導線設計に合わせて取捨選択し、
              最終的なデザイン判断とトーン調整は自身で行いました。
            </p>
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
              "ブラックを主役に、アイボリーとベージュで上質な抜け感を演出",
              "セリフ体と繊細な余白で、ラグジュアリーなブランド感を表現",
              "写真のトーンを統一し、LP全体に一貫した世界観を設計",
              "商品紹介よりもブランドの空気感が伝わる構成を意識",
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
            href="https://melia-noir.lentodesign.com/"
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
