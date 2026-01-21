"use client";

import { motion } from "framer-motion";
import { Server, Shield, Zap, Globe, Bot, ChevronRight, Terminal, Database, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
            <div className="relative w-10 h-10">
              <Image
                src="https://r2.diamondhost.tw/logo.webp"
                alt="Diamond Hosting Logo"
                fill
                className="object-contain"
              />
            </div>
            <span>鑽石託管</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <Link href="#features" className="hover:text-cyan-400 transition-colors">特色優勢</Link>
            <Link href="#minecraft" className="hover:text-cyan-400 transition-colors">Minecraft 託管</Link>
            <Link href="#web" className="hover:text-cyan-400 transition-colors">網頁託管</Link>
          </div>
          <Link href="https://store.diamondhost.tw" target="_blank" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors">
            立即開始
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] z-0" />

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            台灣節點穩定運行中
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            打造你的<br />
            <span className="text-gradient">方塊世界，快如鑽石</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            專為 Minecraft 玩家打造的極速託管服務。擁有台灣在地節點、軍規級 DDoS 防護與獨家 AI 智能助手。
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="https://store.diamondhost.tw" target="_blank" className="w-full md:w-auto px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group">
              查看方案 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-medium">
              了解更多
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[#0a0a0a] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">為什麼選擇鑽石託管？</h2>
            <p className="text-gray-400">不只是主機，更是您最強大的技術後盾</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-cyan-400" />}
              title="台灣在地節點"
              desc="低延遲、零卡頓。我們的伺服器位於台灣，為本地玩家提供極致的連線體驗。"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-purple-400" />}
              title="強效 DDoS 防護"
              desc="無懼攻擊。專業級的防火牆與流量清洗技術，確保您的伺服器 24/7 全天候在線。"
            />
            <FeatureCard
              icon={<Bot className="w-6 h-6 text-green-400" />}
              title="AI 智能助手"
              desc="獨家功能。遇到插件報錯？伺服器崩潰？AI 助手隨時為您分析日誌並提供解決方案。"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="頂級硬體效能"
              desc="搭載 Intel Core i9-14900KF 旗艦處理器與企業級 NVMe SSD，為您的伺服器提供極致算力。"
            />
            <FeatureCard
              icon={<Terminal className="w-6 h-6 text-pink-400" />}
              title="Pterodactyl 面板"
              desc="直觀、強大。業界標準的翼龍面板，管理伺服器就像玩遊戲一樣簡單。"
            />
            <FeatureCard
              icon={<Code className="w-6 h-6 text-blue-400" />}
              title="一鍵更換核心"
              desc="想玩模組？想開 Paper 服？後台一鍵切換伺服器版本與核心，無需繁瑣設定。"
            />
          </div>
        </div>
      </section>

      {/* Minecraft Product Section */}
      <section id="minecraft" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-bold mb-6">
                最熱門選擇
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Minecraft 專用託管</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                無論是與好友的生存冒險，還是千人同遊的小遊戲伺服器，我們都有適合您的方案。
              </p>

              <ul className="space-y-4 mb-8">
                <ListItem>搭載 Intel Core i9-14900KF 旗艦處理器</ListItem>
                <ListItem>台灣極速線路，Ping 值低至 20ms</ListItem>
                <ListItem>支援所有版本 (Java / Bedrock)</ListItem>
                <ListItem>自動備份系統，資料安全無憂</ListItem>
                <ListItem>高品質 MySQL 資料庫</ListItem>
              </ul>

              <Link href="https://store.diamondhost.tw" target="_blank" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors w-full md:w-auto text-center">
                查看 Minecraft 方案
              </Link>
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
              <div className="relative glass-panel p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
                    <Server />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">標準版伺服器</h3>
                    <p className="text-sm text-gray-400">適合 10-50 人小型社群</p>
                  </div>
                  <div className="ml-auto text-2xl font-bold text-green-400">
                    $139<span className="text-sm text-gray-500">/月起</span>
                  </div>
                </div>
                {/* Visual Placeholder for Panel */}
                <div className="space-y-3">
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                  <div className="h-2 bg-white/10 rounded-full w-1/2" />
                  <div className="h-2 bg-white/10 rounded-full w-5/6" />
                </div>
                <div className="mt-6 p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-sm text-green-400">
                  {">"} Timings: Ultra Fast<br />
                  {">"} AI Assistant: Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Hosting Section */}
      <section id="web" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6">
                開發者首選
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">專業網頁託管</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                使用美國高性能節點，搭載 DirectAdmin 面板。適合架設形象官網、部落格或論壇。
              </p>

              <ul className="space-y-4 mb-8">
                <ListItem>美國節點，全球連線穩定</ListItem>
                <ListItem>DirectAdmin 中文面板，操作簡易</ListItem>
                <ListItem>一鍵安裝 WordPress 等應用</ListItem>
                <ListItem>免費 SSL 憑證</ListItem>
              </ul>

              <Link href="https://store.diamondhost.tw" target="_blank" className="inline-block px-8 py-4 bg-transparent border border-white/20 font-bold rounded-xl hover:bg-white/5 transition-colors w-full md:w-auto text-center">
                查看網頁方案
              </Link>
            </div>

            <div className="flex-1">
              <div className="glass-card p-1 rounded-2xl">
                <div className="bg-[#050505] rounded-xl p-6 aspect-video flex flex-col items-center justify-center border border-white/5">
                  <Database className="w-16 h-16 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold">DirectAdmin Panel</h3>
                  <p className="text-gray-500 text-sm mt-2">安全 · 快速 · 穩定</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Company Info */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 font-bold text-xl tracking-tighter mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="https://r2.diamondhost.tw/logo.webp"
                  alt="Diamond Hosting Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span>鑽石託管</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              捷上科技有限公司成立於 2020 年，並於 2022 年推出鑽石託管品牌，致力於為玩家提供最優質、穩定的伺服器託管服務。
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <Link href="https://discord.gg/EuH6qm7jPp" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                DC
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">產品服務</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="https://store.diamondhost.tw/store/tw-extreme" className="hover:text-white transition-colors">Minecraft 託管</Link></li>
              <li><Link href="https://diamondhost.xn--hoq.tw/" className="hover:text-white transition-colors">網頁託管</Link></li>
              <li><Link href="https://store.diamondhost.tw/store/ssl-certificates" className="hover:text-white transition-colors">SSL 憑證</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">公司資訊</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>捷上科技有限公司</li>
              <li>統一編號：83081372</li>
              <li>公司成立：2020</li>
              <li>託管服務：2022 起</li>
              <li><Link href="https://docs.diamondhost.tw/docs/policies/terms-of-service" target="_blank" className="hover:text-white transition-colors">服務條款</Link></li>
              <li><Link href="https://docs.diamondhost.tw/docs/policies/privacy-policy" target="_blank" className="hover:text-white transition-colors">隱私權政策</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          &copy; 2022-2026 Diamond Hosting. Operated by Jetsion Co., Ltd.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="glass-card p-8 rounded-2xl group">
      <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-gray-300">
      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
      </div>
      {children}
    </li>
  );
}
