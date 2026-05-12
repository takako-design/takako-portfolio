import type { Metadata, Viewport } from "next";
import {
  Inter,
  Instrument_Serif,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";

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
  process.env.NEXT_PUBLIC_SITE_URL || "https://takako-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TAKAKO DESIGN Portfolio",
    template: "%s | TAKAKO DESIGN Portfolio",
  },
  description:
    "介護・医療の現場を20年以上経験した、寄り添えるWebデザイナー。丁寧に寄り添い、心を動かすデザインを。Webサイト・LP・バナー制作承ります。",
  keywords: [
    "Webデザイン",
    "Webデザイナー",
    "ポートフォリオ",
    "LP制作",
    "バナー制作",
    "介護",
    "医療",
    "ホームページ制作",
  ],
  authors: [{ name: "TAKAKO" }],
  creator: "TAKAKO",
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
    siteName: "TAKAKO DESIGN Portfolio",
    title: "TAKAKO DESIGN Portfolio",
    description:
      "介護・医療の現場を20年以上経験した、寄り添えるWebデザイナー。丁寧に寄り添い、心を動かすデザインを。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAKAKO DESIGN Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKAKO DESIGN Portfolio",
    description:
      "介護・医療の現場を20年以上経験した、寄り添えるWebデザイナー。丁寧に寄り添い、心を動かすデザインを。",
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
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
