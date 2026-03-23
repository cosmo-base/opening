"use client"

import Link from "next/link"
import { Rocket, Calendar, MapPin, Clock, Users, Mic, MessageCircle, ArrowLeft, ArrowRight, CheckCircle, } from "lucide-react"
import { StarField } from "@/components/star-field"

const eventDetails = [
  {
    icon: Calendar,
    label: "開催日",
    value: "5月頃",
  },
  {
    icon: Clock,
    label: "時間",
    value: "未定",
  },
  {
    icon: MapPin,
    label: "場所",
    value: "オフライン開催（会場未定）",
  },
  {
    icon: Users,
    label: "参加費",
    value: "無料",
  },
]

const contents = [
  {
    icon: Mic,
    title: "トークセッション",
    description: "宇宙業界で活躍するゲストのお話を聞けます",
  },
  {
    icon: MessageCircle,
    title: "Q&Aタイム",
    description: "気になることを直接質問できます",
  },
  {
    icon: Users,
    title: "交流タイム",
    description: "参加者同士でゆるく交流できます",
  },
]

export function SpaceEvent() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <StarField />

      {/* Back link */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/"
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-foreground hover:text-cyan transition-colors">
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
              Space Event
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground text-balance mb-6">
            Cosmo Baseで宇宙知っトク<br />出張イベント
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty">
            Cosmo Base 内でのイベントをオフライン開催。<br />Cosmo Baseの使い方についても紹介。初出し情報も？
          </p>

          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-10">
            <Calendar className="h-5 w-5 text-cyan" />
            <span className="text-foreground font-medium">開催日未定</span>
          </div>

          <div className="block">
            <a >
              <button
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-primary-foreground transition-all duration-300 animate-glow-pulse hover:scale-105 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", }}>
                <span>情報を受け取る</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)", }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Cosmo Baseで宇宙知っトクとは？
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-12 text-pretty">
            宇宙のことをもっと知りたい人のための、
            <br />
            気軽に参加できるオフラインイベントです。
            <br />
            専門知識がなくても大丈夫。初心者の方も大歓迎です。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["参加無料", "初心者歓迎", "オフライン開催"].map((item) => (
              <div key={item} className="glass rounded-full px-6 py-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)", }}
        />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              イベント概要
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventDetails.map((detail) => {
              const Icon = detail.icon
              return (
                <div
                  key={detail.label}
                  className="glass-card rounded-2xl p-5 text-center"
                >
                  <Icon className="h-6 w-6 text-cyan mx-auto mb-3" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {detail.label}
                  </p>
                  <p className="text-foreground font-medium">{detail.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contents Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{background:"linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)",}}
        />
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              イベント内容
            </h2>
            <p className="text-muted-foreground">
              以下のようなコンテンツを予定しています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contents.map((content) => {
              const Icon = content.icon
              return (
                <div
                  key={content.title}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(0, 242, 254, 0.1)", }}
                  >
                    <Icon className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {content.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {content.description}
                  </p>
                </div>
              )
            })}
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            開催が決まったらお知らせします
          </h2>
          <p className="text-muted-foreground mb-10">
            通知登録しておくと、開催日が決まり次第ご連絡します
          </p>

          <a>
            <button
              className="group relative inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg md:text-xl font-bold text-primary-foreground transition-all duration-300 animate-glow-pulse hover:scale-105 cursor-pointer"
              style={{background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",}}
            >
              <span>情報を受け取る</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </a>
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
