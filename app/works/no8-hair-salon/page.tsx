import Link from "next/link";

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

              <p className="mt-8 max-w-xl text-sm font-light leading-[2.1] tracking-[0.08em] text-[#4f4942] md:text-base">
                完全予約制の静けさと、
                <br className="hidden md:block" />
                NYモードの美意識を映すヘアサロンサイト。
              </p>
            </div>

            <div className="border-l border-[#ded7ca] pl-6 text-xs font-light leading-[2] tracking-[0.08em] text-[#6d655b]">
              <p>Role：Concept / Web Design</p>
              <p>Tools：WordPress / Lab23</p>
              <p>Type：Private Hair Salon Website</p>
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-[#e7e1d7] bg-white shadow-[0_20px_60px_rgba(40,30,20,0.08)]">
            <div className="aspect-[16/10] w-full overflow-hidden md:aspect-[16/8]">
              <img
                src="/works/featured-no8-full.jpg"
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

          <div className="space-y-8 text-sm font-light leading-[2.2] tracking-[0.08em] text-[#4f4942] md:text-base">
            <p>
              No.8 hair
              salonは、完全予約制・1席のみのプライベート美容室を想定して制作したWebサイトです。
              ただ髪を整える場所ではなく、訪れる人が静かに自分を整えられる場所として見えるよう、
              余白・暗さ・光のコントラストを大切にしました。
            </p>

            <p>
              KUKKA
              LIVINGとは対照的に、甘さを抑えたブラックとゴールドを基調にし、
              都会的で洗練された印象を設計しています。
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
              美容室のWebサイトでは、明るく親しみやすい印象に寄せることが多くあります。
              しかしNo.8では、あえて静けさや緊張感を残すことで、
              “大人が通いたくなる隠れ家サロン”としての空気感を表現しました。
            </p>

            <p>
              完全予約制という特徴が伝わるように、情報量を詰め込みすぎず、
              ひとつひとつの要素が丁寧に見えるレイアウトを意識しています。
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

            <div className="mt-10 space-y-8 text-sm font-light leading-[2.2] tracking-[0.08em] text-[#4f4942] md:text-base">
              <p>
                コンセプトは、NYモードのような削ぎ落とされた美しさ。
                ブラックを基調にしながら、ゴールドのアクセントで上質感を加えました。
              </p>

              <p>
                写真を大きく見せるのではなく、余白の中に配置することで、
                サロンの静けさや特別感が伝わるようにしています。
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
              "完全予約制・1席のみの特別感が伝わるよう、余白を贅沢に設計",
              "ブラックとゴールドで、都会的で上質な印象を演出",
              "セリフ体のタイポグラフィで、モード感と静かな緊張感を表現",
              "情報を絞ることで、サロンの世界観に集中できる構成に調整",
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
            href="https://no8-hair.lentodesign.com/"
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
