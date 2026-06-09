import Link from "next/link";

const caseMeta = [
  "Role：Brand Direction / LP Design / Coding / Writing",
  "Tools：Figma / VS Code / React / CSS",
  "Type：Luxury Fashion Landing Page",
  "Target：上品さとモード感を大切にする20〜40代女性",
  "Mood：Quiet Luxury / Feminine Mode / Editorial",
  "Goal：ブランドの世界観を伝え、Collectionへの興味を高める設計",
];

const projectDetails = [
  {
    title: "Target",
    text: "上品さとモード感を両立したファッションを好む20〜40代女性。トレンドだけでなく、自分らしい美しさや洗練された印象を大切にする方を想定しました。",
  },
  {
    title: "Goal",
    text: "商品そのものだけでなく、ブランドの空気感や憧れまで伝え、Collectionページへの回遊や購入意欲につながるLPにすることを目指しました。",
  },
  {
    title: "Challenge",
    text: "黒を主役にしながら重く見せすぎず、甘さと強さ、静けさと華やかさのバランスを取り、上質な女性像として成立させることを課題にしました。",
  },
];

const designPoints = [
  {
    title: "黒を主役にしたブランド設計",
    text: "ブラックを軸に、アイボリーとベージュを重ねることで、強さだけでなく、余白・抜け感・女性らしさが伝わるトーンに整えました。",
  },
  {
    title: "エディトリアル感のある余白",
    text: "商品情報を詰め込みすぎず、写真とコピーが静かに響く間をつくることで、ラグジュアリーなファッション誌のような余韻を目指しました。",
  },
  {
    title: "ブランドムードを伝える導線",
    text: "CollectionやLookbookへ自然に進めるよう、商品説明より先に世界観を伝え、見た人が“どんな印象になれるか”を想像できる構成にしました。",
  },
  {
    title: "可読性と繊細さの両立",
    text: "細い文字組みや小さなラベルで上質感を保ちながら、本文は行間・文字間・濃度を調整し、スマートフォンでも読みやすいバランスにしています。",
  },
];

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

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.06em] text-[#4f4944] md:text-base">
                静かな強さと女性らしさをまとう、
                <br className="hidden md:block" />
                ラグジュアリーファッションブランドのLP。
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

          <div className="space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
            <p>
              MÉLIA
              NOIRは、大人女性向けのラグジュアリーファッションブランドを想定して制作した自主制作LPです。
              商品そのものだけでなく、ブランドの世界観や、身にまとうことで生まれる印象まで伝わることを意識しました。
            </p>

            <p>
              ブラック・アイボリー・ベージュを基調に、甘さと強さ、静けさと華やかさのバランスを調整。
              写真・余白・コピー・タイポグラフィを一貫させることで、静かな高級感が伝わるLPに整えています。
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
            {projectDetails.map((item) => (
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
              ファッションブランドのLPでは、商品写真を並べるだけではなく、
              「どんな人に、どんな気分で選ばれるブランドなのか」を伝えることが大切です。
            </p>

            <p>
              MÉLIA
              NOIRでは、甘さに寄りすぎず、女性らしさの中に芯の強さを感じられるように、
              色数を抑え、余白を広く使い、静かな存在感を表現しました。
            </p>

            <p>
              さらに、Collection・Lookbook・Featureへ自然に視線が流れるように、
              ブランド認知から商品理解へつながる順番を意識しています。
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

            <div className="mt-10 space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
              <p>
                コンセプトは、静かな美しさと芯のある女性らしさ。
                黒を主役にしながら、アイボリーやベージュの余白で重たくなりすぎない印象に整えました。
              </p>

              <p>
                写真は大きく見せつつも、余白を残すことで、
                ラグジュアリーなファッション誌のような余韻を感じられるビジュアルを目指しています。
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

          <div className="space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
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
              ブランドの世界観を一貫して伝えることで、商品単体の魅力だけでなく、
              「このブランドを身にまといたい」と感じてもらえる印象設計を目指しました。
            </p>

            <p>
              Collectionページへの回遊や商品理解を促し、ブランド認知から購入意欲につながるLPとして設計しています。
              数値実績を盛るのではなく、想定課題に対する導線設計と表現意図が伝わる構成にしました。
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
