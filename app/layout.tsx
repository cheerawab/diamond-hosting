import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "鑽石託管 (Diamond Hosting) | 台灣極速 Minecraft 伺服器 & 網頁託管",
  description: "鑽石託管 (Diamond Hosting) 提供專業 Minecraft 伺服器託管與 DirectAdmin 網頁主機。擁有台灣低延遲節點 (20-30ms)、DDoS 抗攻擊防護、Pterodactyl 面板、一鍵更換核心與 AI 智能助手。由捷上科技有限公司 (統編: 83081372) 營運，公司成立於 2020 年，託管服務始於 2022 年。",
  keywords: "Minecraft 託管, Minecraft Hosting, 台灣麥塊主機, 台灣伺服器, 抗攻擊, DDoS 防護, 網頁託管, Web Hosting, DirectAdmin, Pterodactyl, 捷上科技有限公司, 鑽石託管",
  openGraph: {
    title: "鑽石託管 - 打造你的方塊世界",
    description: "台灣節點、極速體驗。立即開始您的 Minecraft 伺服器之旅。",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "https://r2.diamondhost.tw/logo.webp",
        width: 800,
        height: 800,
        alt: "Diamond Hosting Logo",
      },
    ],
  },
  icons: {
    icon: "https://r2.diamondhost.tw/logo.webp",
    shortcut: "https://r2.diamondhost.tw/logo.webp",
    apple: "https://r2.diamondhost.tw/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
