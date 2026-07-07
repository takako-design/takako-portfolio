import Link from "next/link";

const caseMeta = [
  "Role：Concept / Web Design",
  "Tools：WordPress / Lab23",
  "Type：Private Hair Salon Website",
  "Scope：Visual Direction / UI Design",
];

const projectDetails = [
  {
    title: "Target",
    text: "大型サロンが苦手で、落ち着いた空間で丁寧に施術を受けたい30〜40代女性。技術力だけでなく、空間・接客・自分に合う提案を重視する方を想定しました。",
  },
  {
    title: "Goal",
    text: "価格比較ではなく、「ここで過ごしたい」と感じてもらい、完全予約制・1席のみの特別感から予約へ進みやすくすることを目指しました。",
  },
  {
    title: "Mood",
    text: "NYモード、隠れ家感、静けさ、黒、ゴールド、余白、洗練。甘さを抑えた大人の雰囲気を軸に、静かな上質感を表現しました。",
  },
];

const designPoints = [
  {
    title: "特別感を伝える余白設計",
    text: "完全予約制・1席のみのプライベート感が伝わるよう、情報を詰め込まず、ひとつひとつの要素が静かに見える余白を設計しました。",
  },
  {
    title: "黒とゴールドによる上質感",
    text: "ブラックを基調に、ゴールドを最小限のアクセントとして使用。派手さではなく、大人が通いたくなる都会的な印象を目指しました。",
  },
  {
    title: "セリフ体でつくるモード感",
    text: "繊細なセリフ体と細い文字組みにより、NYモードのような静かな緊張感と洗練された世界観を表現しています。",
  },
  {
    title: "予約まで迷わない導線",
    text: "メニュー、ギャラリー、アクセス、予約導線をシンプルに整理し、初めて訪れる方が必要な情報を迷わず確認できる構成にしました。",
  },
];

export default function No8HairSalonPage() {
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
                No.8
                <br />
                hair salon
              </h1>

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.06em] text-[#4f4944] md:text-base">
                完全予約制の静けさと、
                <br className="hidden md:block" />
                NYモードの美意識を映すヘアサロンサイト。
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
                src="/works/featured-no8-full.webp"
                alt="No.8 hair salon website mockup"
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
              No.8 hair
              salonは、完全予約制・1席のみのプライベート美容室を想定して制作したWebサイトです。
              ただ髪を整える場所ではなく、訪れる人が静かに自分を整えられる場所として見えるよう、
              余白・暗さ・光のコントラストを大切にしました。
            </p>

            <p>
              一般的な美容室サイトの明るく親しみやすい印象とは少し距離を置き、
              ブラックとゴールド、細い文字組み、落ち着いた写真の見せ方で、
              大人が通いたくなる隠れ家サロンの空気感を表現しています。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-light uppercase tracking-[0.35em] text-[#9c8f7e]">
            Target / Goal / Mood
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
              美容室選びでは、技術力だけでなく「自分に合う空間か」「落ち着いて過ごせるか」も大切な判断材料になります。
              No.8では、完全予約制・マンツーマンという特徴が自然に伝わるよう、
              情報量を絞り、静かな余白の中で世界観を感じられる構成にしました。
            </p>

            <p>
              初めて訪れる方が予約前に不安を感じにくいよう、メニュー・ギャラリー・アクセス・予約導線をシンプルに整理。
              世界観の美しさと、行動しやすさの両立を意識しています。
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
              静けさの中に、
              <br />
              鋭さを宿す。
            </h2>

            <div className="mt-10 space-y-8 text-sm font-light leading-[2.15] tracking-[0.06em] text-[#4f4944] md:text-base">
              <p>
                コンセプトは、NYモードのような削ぎ落とされた美しさ。
                ブラックを基調にしながら、ゴールドをアクセントとして効かせ、
                サロンの静けさと上質感が伝わるトーンに整えました。
              </p>

              <p>
                写真を大きく主張させるのではなく、余白の中に置くことで、
                「慌ただしい日常から少し離れて、自分のための時間を過ごす」印象をつくっています。
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
              価格やメニューだけで比較されるのではなく、「この空間で過ごしたい」「この人に任せたい」と感じてもらうことで、
              予約への心理的ハードルを下げることを目指しました。
            </p>

            <p>
              サロンの空気感、完全予約制の安心感、マンツーマンの特別感を一貫して伝えることで、
              指名予約やリピートにつながる印象設計を意識しています。
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
            href="http://no8-hair.lentodesign.com/"
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
