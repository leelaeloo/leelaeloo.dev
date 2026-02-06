import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이태수 | Cloud Engineer",
  description: "클라우드 인프라를 설계하고 운영하는 엔지니어입니다.",
  keywords: ["Cloud Engineer", "DevOps", "Infrastructure", "Kubernetes", "Docker"],
  authors: [{ name: "이태수" }],
  openGraph: {
    title: "이태수 | Cloud Engineer",
    description: "클라우드 인프라를 설계하고 운영하는 엔지니어입니다.",
    url: "https://leelaeloo.dev",
    siteName: "leelaeloo.dev",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="overflow-y-scroll">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
