import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "FLOMUSÉE | 꽃과 예술이 만나는 구독 뮤지엄",
  description:
    "계절 꽃과 작가 오브제를 함께 큐레이션하는 구독형 뮤지엄 FLOMUSÉE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
