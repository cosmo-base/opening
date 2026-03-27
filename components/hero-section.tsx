"use client"

import { Rocket, ArrowLeft } from "lucide-react"
import { StarField } from "./star-field"
import { AutoLink } from "./auto-kink"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0"
        style={{background:"radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0, 242, 254, 0.08) 0%, rgba(79, 172, 254, 0.04) 40%, transparent 70%)",}}
        aria-hidden="true"
      />
      {/* Star field canvas */}
      <StarField />

     {/* Back link */}
      <div className="fixed top-6 left-6 z-50">
        <a href="https://fsifofficial.github.io/CosmoBase/"
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-foreground hover:text-cyan transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Cosmo Baseホームページに戻る</span>
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="glass rounded-full px-5 py-2 mb-8 inline-flex items-center gap-2">
          <Rocket className="h-4 w-4 text-cyan" />
          <span className="text-sm font-medium text-cyan tracking-wide">
            2026.4.1 GRAND OPEN
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground text-balance mb-6">
          <span className="block">宇宙って、</span>
          <span className="block mt-2">もっとおもしろい。</span>
        </h1>

        {/* Sub heading with glow text */}
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-4 text-pretty">
          ちょっと気になる、から始めよう。
        </p>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mb-10 text-pretty">
          2026年4月1日、宇宙が身近になるコミュニティー『Cosmo Base』がオープン。<br/>オープン記念企画を実施中！！
        </p>

        {/* CTA Button */}
        <AutoLink> 
          <button
            className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 animate-glow-pulse hover:scale-105 cursor-pointer"
            style={{background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",}}
          >
            <span>コミュニティーに参加する（無料）</span>
            <Rocket className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </AutoLink>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
