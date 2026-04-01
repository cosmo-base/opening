"use client"

import Link from "next/link"
import { Sparkles, Users, Unlock, Rocket, HelpCircle, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ProjectCard {
  id: string
  icon: LucideIcon
  title: string
  description: string
  accent: string
  comingSoon?: boolean
  href?: string
}

const projects: ProjectCard[] = [
  {
    id: "space-type",
    icon: Sparkles,
    title: "あなたの宇宙タイプは？ - 宇宙タイプ診断 -",
    description:
      "かんたんな質問に答えるだけで、あなたにピッタリの宇宙の楽しみ方がわかります。まずは気軽にやってみよう！",
    accent: "#00f2fe",
    href: "/projects/space-type",
  },
  {
    id: "thousand-crew",
    icon: Users,
    title: "1000人乗船プロジェクト",
    description:
      "最初の1000人には特別な「ファーストクルー」の称号をプレゼント。限定バッジや参加証明書など、うれしい特典つきです。",
    accent: "#4facfe",
    href: "/projects/thousand-crew",
  },
  {
    id: "cosmo-base-week",
    icon: Unlock,
    title: "Cosmo Base Week (4/20〜4/26)",
    description:
      "まだメンバーじゃなくても大丈夫。SNS等でコンテンツを無料で体験できます。",
    accent: "#00f2fe",
    href: "/projects/cosmo-base-week",
  },
  {
    id: "space-event",
    icon: Rocket,
    title: "宇宙知っトク 出張イベント (開催日未定)",
    description:
      "Cosmo Base 内でのイベントをオフライン開催。Cosmo Baseの使い方についても紹介。初出し情報も？",
    accent: "#4facfe",
    href: "/projects/space-event",
  },
  {
    id: "coming-soon-1",
    icon: HelpCircle,
    title: "企画準備中...",
    description:
      "新しい企画を準備しています。どんな内容になるかお楽しみに！",
    accent: "#4facfe",
    comingSoon: true,
  },
  {
    id: "coming-soon-2",
    icon: HelpCircle,
    title: "企画準備中...",
    description:
      "まだまだ楽しい企画を計画中です。続報をお待ちください！",
    accent: "#00f2fe",
    comingSoon: true,
  },
]

function ProjectCardItem({ project }: { project: ProjectCard }) {
  const Icon = project.icon
  const cardContent = (
    <>
      {/* Coming Soon badge */}
      {project.comingSoon && (
        <span
          className="absolute top-4 right-4 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
          style={{background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40`,}}
        >
          Coming Soon
        </span>
      )}

      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{background: `${project.accent}15`, boxShadow: `0 0 20px ${project.accent}10`,}}
      >
        <Icon className="h-6 w-6" style={{ color: project.accent }} />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        {project.description}
      </p>

      {/* View details link */}
      {project.href && (
        <div
          className="flex items-center gap-2 text-sm font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: project.accent }}
        >
          <span>詳しく見る</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      )}

      {/* Bottom accent line */}
      <div
        className="h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{background: `linear-gradient(90deg, ${project.accent}, transparent)`,}}
      />
    </>
  )

  if (project.href) {
    return (
      <Link href={project.href} className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-5 group relative cursor-pointer">
        {cardContent}
      </Link>
    )
  }

  return (
    <div className={`glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-5 group relative ${project.comingSoon ? "opacity-60" : ""}`}>
      {cardContent}
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{background:"linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)",}}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Rocket className="h-5 w-5 text-cyan" />
            <span className="text-sm font-semibold tracking-widest uppercase text-cyan">
              Launch Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            オープニング記念企画
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto text-pretty">
            どれも初心者の方が楽しめるものばかり。気になるものからチェックしてみてください。
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
