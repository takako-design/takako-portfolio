import Link from "next/link";

const colors = [
  {
    name: "Noir Black",
    hex: "#171312",
    text: "静けさ、芯の強さ、上質な緊張感を表すメインカラー。",
  },
  {
    name: "Soft Ivory",
    hex: "#F4EFE8",
    text: "余白とやわらかさをつくる、ブランド全体のベースカラー。",
  },
  {
    name: "Warm Beige",
    hex: "#CBB7A0",
    text: "女性らしさと温度感を添えるニュートラルカラー。",
  },
  {
    name: "Muted Gold",
    hex: "#B9A06C",
    text: "控えめな華やかさと、ラグジュアリーな余韻を表現。",
  },
];

const keywords = [
  "Quiet Luxury",
  "Soft Strength",
  "Feminine Mode",
  "Editorial",
  "Minimal",
  "Refined",
];

export default function MeliaNoirBrandDirectionPage() {
  return (
    <main className="melia-brand-page">
      <section className="melia-brand-hero">
        <p className="melia-brand-kicker">MÉLIA NOIR</p>
        <h1>
          Brand Direction
          <span>静けさの中に、やわらかな強さを。</span>
        </h1>
        <p className="melia-brand-lead">
          MÉLIA NOIRは、黒の持つ凛とした美しさに、
          やわらかな光・余白・繊細なディテールを重ねた
          架空のレディースファッションブランドです。
          甘さに寄りすぎず、強さを硬く見せすぎない、
          静かで上質な女性像を軸にデザインしました。
        </p>

        <div className="melia-brand-links">
          <Link href="/works/melia-noir">Back to Case Study</Link>
          <Link href="/works">View All Works</Link>
        </div>
      </section>

      <section className="melia-brand-section">
        <div className="melia-brand-section-head">
          <p>01</p>
          <h2>Concept</h2>
        </div>
        <div className="melia-brand-concept">
          <p>
            ブランドコンセプトは、
            <strong>「静かな強さを、美しくまとう。」</strong>
          </p>
          <p>
            視線を強く奪うデザインではなく、余白・光・素材感によって、
            見る人の記憶に静かに残る世界観を目指しました。
            黒を中心にしながらも重く見せず、ベージュやアイボリーの光で
            女性らしい柔らかさを加えています。
          </p>
        </div>
      </section>

      <section className="melia-brand-section">
        <div className="melia-brand-section-head">
          <p>02</p>
          <h2>Keywords</h2>
        </div>
        <div className="melia-brand-keywords">
          {keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>

      <section className="melia-brand-section">
        <div className="melia-brand-section-head">
          <p>03</p>
          <h2>Color Palette</h2>
        </div>

        <div className="melia-brand-colors">
          {colors.map((color) => (
            <div className="melia-brand-color-card" key={color.name}>
              <div
                className="melia-brand-color"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <h3>{color.name}</h3>
                <p className="melia-brand-hex">{color.hex}</p>
                <p>{color.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="melia-brand-section melia-brand-grid">
        <div>
          <div className="melia-brand-section-head">
            <p>04</p>
            <h2>Typography</h2>
          </div>
          <p className="melia-brand-text">
            英字は細めで余白を感じるセリフ体・モダンなサンセリフを中心に。
            日本語は大きく主張させすぎず、行間を広めにとることで、
            静かで洗練された印象に整えています。
          </p>
        </div>

        <div className="melia-brand-type-sample">
          <p>MÉLIA NOIR</p>
          <h3>Quiet Luxury</h3>
          <span>静けさの中に、やわらかな強さを。</span>
        </div>
      </section>

      <section className="melia-brand-section melia-brand-grid">
        <div>
          <div className="melia-brand-section-head">
            <p>05</p>
            <h2>Image Direction</h2>
          </div>
          <p className="melia-brand-text">
            写真は、商品を説明するためだけではなく、
            ブランドの空気感を伝えるために使用しています。
            黒のサテン、淡い自然光、ベージュの背景、繊細なゴールドを組み合わせ、
            ファッションエディトリアルのような余韻を意識しました。
          </p>
        </div>

        <div className="melia-brand-image-note">
          <p>Image Mood</p>
          <ul>
            <li>soft natural light</li>
            <li>black satin texture</li>
            <li>ivory / beige background</li>
            <li>delicate gold accents</li>
            <li>generous negative space</li>
          </ul>
        </div>
      </section>

      <section className="melia-brand-section">
        <div className="melia-brand-section-head">
          <p>06</p>
          <h2>Design Rule</h2>
        </div>

        <div className="melia-brand-rules">
          <div>
            <h3>余白を広く取る</h3>
            <p>
              高級感を出すため、要素を詰め込まず、視線がゆっくり流れる設計に。
            </p>
          </div>
          <div>
            <h3>文字は小さく、でも読める濃度に</h3>
            <p>
              世界観を保ちながら、必要な情報はしっかり読めるバランスに調整。
            </p>
          </div>
          <div>
            <h3>装飾より質感で見せる</h3>
            <p>
              派手なあしらいではなく、写真・色・間隔・タイポグラフィで表現。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
