"use client"

import Link from "next/link"
import {Rocket,ArrowLeft,ArrowRight,Share2,Award,BadgeCheck,MessageSquare,Star,ClipboardList,Forward,Inbox} from "lucide-react"
import { StarField } from "@/components/star-field"
import { AutoLink } from "@/components/auto-link"

// Simulated current count
const currentCount = 36

const snsLinks = [
  { name: "X", url: "https://x.com/CosmoBase" },
  { name: "Instagram", url: "https://instagram.com/cosmobase.official/" },
  { name: "note", url: "https://note.com/cosmobase" },
];

const benefits = [
  {
    icon: Award,
    title: "ファーストクルー 証明書",
    description: "初期メンバー限定・シリアルナンバー付き",
  },
  {
    icon: BadgeCheck,
    title: "限定SNSバッジ",
    description: "プロフィール用画像・SNSで使用可能",
  },
  {
    icon: MessageSquare,
    title: "限定チャンネル招待",
    description: "初期メンバー専用空間",
  },
  {
    icon: Star,
    title: "特別ロール",
    description: "コミュニティ内で特別表示",
  },
  {
    icon: Inbox,
    title: '"ほしい"ができる意見箱',
    description: "Cosmo Baseの未来を共に作る",
  },
  {
    icon: Forward,
    title: "コンテンツの先行体験",
    description: "Cosmo Baseの新規コンテンツを体験",
  },
]

const steps = [
  { step: "STEP 1", text: "コミュニティ参加" },
  { step: "STEP 2", text: "特設フォーム回答" },
  { step: "STEP 3", text: "特典付与" },
]

export function FoundingCrewProject() {
  const progress = (currentCount / 1000) * 100

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <StarField />
      {/* Back link */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-foreground hover:text-cyan transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>トップに戻る</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <Rocket className="h-5 w-5 text-cyan" />
            <span className="text-sm font-semibold tracking-widest uppercase text-cyan">
              1000 Crew Project
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground text-balance mb-6">
            宇宙への旅
            <br />
            ここから始まる
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
            'Cosmo Base 最初の1000人の"ファーストクルー"を募集'
          </p>
          <AutoLink> 
            <button
              className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-primary-foreground transition-all duration-300 animate-glow-pulse hover:scale-105 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", }}>
              <span>ファーストクルーとして参加する</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </AutoLink>
        </div>
      </section>

      {/* Project Explanation */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)", }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            1000人乗船プロジェクト
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-pretty">
            Cosmo Baseの宇宙コミュニティには、
            <br />
            最初の1000人だけが参加できる
            <br />
            特別なポジションがあります。
          </p>
          <p className="text-2xl md:text-3xl font-bold text-cyan mb-6">
            それが "ファーストクルー"
          </p>
          <p className="text-lg text-muted-foreground">
            宇宙コミュニティの未来を
            <br />
            最初に創るメンバーです。
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)", }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ファーストクルー 特典
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(79, 172, 254, 0.1)", }}
                  >
                    <Icon className="h-7 w-7 text-neon-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)", }}
        />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              参加方法
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="glass rounded-2xl p-6 flex-1 text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                  style={{ background: "rgba(0, 242, 254, 0.15)", color: "#00f2fe", }}
                >
                  {index + 1}
                </div>
                <p className="text-xs text-cyan font-semibold tracking-wider uppercase mb-2">
                  {item.step}
                </p>
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Counter */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)", }}
        />
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            現在の乗船者
          </h2>

          <div className="glass rounded-2xl p-8">
            <div className="text-5xl md:text-6xl font-bold text-cyan mb-4">
              {currentCount.toString().padStart(3, "0")}
              <span className="text-muted-foreground text-3xl"> / 1000</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)",
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              残り {1000 - currentCount} 枠
            </p>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)", }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10">
            ファーストクルーとして乗船する
          </h2>

          <AutoLink> 
            <button
              className="group relative inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg md:text-xl font-bold text-primary-foreground transition-all duration-300 animate-glow-pulse hover:scale-105 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", }}>
              <span>今すぐ参加する</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </AutoLink>
        </div>
      </section>

      {/* SNS Share */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-4">
            {snsLinks.map((sns) => (
              <a
                key={sns.name}
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass rounded-full px-6 py-3 text-sm text-foreground hover:text-cyan transition-colors cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img
                    src={`/opening/${sns.name}.png`}
                    alt={`${sns.name} icon`}
                    className="max-w-full max-h-full"
                  />
                </div>
                <span>{sns.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 text-center">
        <div className="mt-8 pt-8 border-t border-border/50 w-full">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Cosmo Base. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
