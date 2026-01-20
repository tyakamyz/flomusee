import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "GALLERYNOOK | 작가의 향 구독",
  description: "집 안의 한 켠, 매달 한 점의 작품과 그 작품을 닮은 향.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${notoSansKr.variable} antialiased`}
      >
        <MainLayout>
          <Header />
          <main>{children}</main>
          <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
