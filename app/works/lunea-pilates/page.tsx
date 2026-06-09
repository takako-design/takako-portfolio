import Link from "next/link";

const caseMeta = [
  "Role：Planning / Design / Coding / Writing",
  "Tools：Figma / VS Code / Next.js / Tailwind CSS",
  "Type：Private Pilates Studio LP",
  "Target：姿勢や体型の変化が気になり始めた30〜40代女性",
  "Mood：Sage Green / Wellness / Quiet Luxury",
  "Goal：体験予約への心理的ハードルを下げる導線設計",
];

const challengeItems = [
  {
    title: "Target",
    text: "姿勢の崩れ、肩こり、運動不足、体型の変化が気になり始めた30〜40代女性。大人数のスタジオよりも、静かな空間で自分のペースで身体を整えたい方を想定しました。",
  },
  {
    title: "Goal",
    text: "初めての方が不安を感じにくく、レッスン内容・料金・スタジオの雰囲気を理解した上で、体験予約へ進みやすいLPにすることを目指しました。",
  },
  {
    title: "Challenge",
    text: "美容・健康系のLPとして清潔感と信頼感を保ちながら、事務的になりすぎず、女性が前向きな気持ちで一歩踏み出せるやわらかさを表現することを課題としました。",
  },
];

const designPoints = [
  {
    title: "初心者の不安をやわらげるファーストビュー",
    text: "女性専用・完全予約制・体験レッスンの情報を早い段階で伝えることで、初めての方が安心して読み進められるようにしました。",
  },
  {
    title: "予約まで自然につながる情報設計",
    text: "Concept、Studio、Program、Instructor、Price、Voice、Access、Reservationの順に配置し、検討から予約までの流れが自然につながる構成にしました。",
  },
  {
    title: "セージグリーンでつくる清潔感と上質感",
    text: "美容・健康系の信頼感を保ちながら、やさしく洗練された印象になるよう、セージグリーン、アイボリー、ベージュを中心に配色しました。",
  },
  {
    title: "スマートフォンでの読みやすさ",
    text: "LPはスマートフォンで閲覧されることが多いため、文字サイズ、余白、ボタンの押しやすさ、CTAの配置を意識して調整しました。",
  },
];

export default function LuneaPilatesPage() {
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
                LUNÉA
                <br />
                PILATES
              </h1>

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.06em] text-[#4f4944] md:text-base">
                女性専用プライベートピラティススタジオとして、
                <br className="hidden md:block" />
                初めての方でも安心して体験予約へ進めるLP。
              </p>
            </div>

            <div className="border-l border-[#ded7ca] pl-6 text-xs font-light leading-[2] tracking-[0.08em] text-[#6d655b]">
              {caseMeta.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-[#e7e1d7] bg-white shadow-[0_20px_60px_rgba(40,30,20,0.08)]">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#f3eee7] md:aspect-[16/8]">
              <img
                src="/works/lp-lunea-pilates.webp"
                alt="LUNÉA PILATES landing page mockup"
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
              LUNÉA
              PILATESは、女性専用プライベートピラティススタジオを想定して制作したLPです。
              初めてピラティスを検討する方が、レッスン内容や料金、スタジオの雰囲気を安心して確認でき、
              自然に体験予約へ進める構成を目指しました。
            </p>

            <p>
              ピラティスに興味はあっても、「自分にできるか不安」「大人数のスタジオは緊張する」「料金や予約の流れがわかりにくい」と感じる方は少なくありません。
              そのため、LUNÉA
              PILATESでは、安心感・清潔感・やさしい高級感を軸に、情報の順番と見せ方を整えました。
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
              ピラティススタジオを探す方は、効果や料金だけでなく、「自分に合う雰囲気か」「初心者でも大丈夫か」「無理なく続けられそうか」を重視します。
            </p>

            <p>
              そのため、LUNÉA
              PILATESでは、ファーストビューで女性専用・完全予約制・体験レッスンという安心材料を伝え、
              読み進める中でスタジオの空気感、プログラム、インストラクター、料金、予約の流れが自然に理解できる構成にしました。
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
              静かに整い、
              <br />
              自分らしい美しさへ。
            </h2>

            <div className="mt-10 space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
              <p>
                セージグリーンやアイボリーを基調に、清潔感とやわらかさを両立しました。
                余白を広く取り、情報を詰め込みすぎないことで、呼吸が整うような静かな印象を目指しています。
              </p>

              <p>
                また、ピラティスの機能的な説明だけでなく、「ここなら自分のペースで始められそう」と感じてもらえるよう、
                コピーや写真の見せ方にも安心感を持たせました。
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
              体験予約前に必要な情報をわかりやすく整理することで、
              「自分にもできそう」「一度体験してみたい」と感じてもらいやすいLPを目指しました。
            </p>

            <p>
              世界観の美しさだけでなく、料金・レッスン内容・安心材料・予約導線を整えることで、
              初めての方の心理的ハードルを下げ、体験予約への行動につながる設計を意識しています。
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
            href="https://lunea-pilates-lp.vercel.app/"
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
