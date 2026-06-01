import type { Metadata, Viewport } from "next";
import {
  Inter,
  Instrument_Serif,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-noto-sans",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-noto-serif",
});

// サイトのベースURL(後でドメイン取得したら差し替え)
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.lentodesign.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LENTO DESIGN | Web Design Portfolio",
    template: "%s | LENTO DESIGN",
  },
  description:
    "想いに寄り添い、美しく伝わるデザインを。女性向け・上質感のあるWebサイト、LP、バナー制作を行うWebデザイナーのポートフォリオです。",
  keywords: [
    "Webデザイン",
    "Webデザイナー",
    "ポートフォリオ",
    "LP制作",
    "バナー制作",
    "ホームページ制作",
    "女性向けデザイン",
    "上質なデザイン",
  ],
  authors: [{ name: "TAKAKO TANAKA" }],
  creator: "LENTO DESIGN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "LENTO DESIGN",
    title: "LENTO DESIGN | Web Design Portfolio",
    description:
      "想いに寄り添い、美しく伝わるデザインを。女性向け・上質感のあるWebサイト、LP、バナー制作を行うWebデザイナーのポートフォリオです。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LENTO DESIGN Web Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LENTO DESIGN | Web Design Portfolio",
    description:
      "想いに寄り添い、美しく伝わるデザインを。女性向け・上質感のあるWebサイト、LP、バナー制作を行うWebデザイナーのポートフォリオです。",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${instrumentSerif.variable} ${notoSansJP.variable} ${notoSerifJP.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
