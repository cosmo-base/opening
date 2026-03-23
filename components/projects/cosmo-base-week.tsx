"use client"

import Link from "next/link"
import { Unlock, Calendar, MessageCircle, BookOpen, Users, ArrowLeft, ArrowRight, CheckCircle, Library, LibraryBig, } from "lucide-react"
import { StarField } from "@/components/star-field"

const snsLinks = [
  { name: "X", url: "https://x.com/CosmoBase" },
  { name: "Instagram", url: "https://instagram.com/cosmobase.official/" },
  { name: "note", url: "https://note.com/cosmobase" },
];

const features = [
  {
    icon: MessageCircle,
    title: "Cosmo Baseで宇宙知っトク",
    catchCopy: "普段はコミュニティー内だけ。この1週間だけ、外部で開催。",
    description:
      "Cosmo Base内で開催している週1の人気イベント「Cosmo Baseで宇宙知っトク」を、期間限定で視聴できます。テーマは近日公開。SNSをご確認ください。",
  },
  {
    icon: BookOpen,
    title: "週刊宇宙ニュース",
    catchCopy: "宇宙のニュースを、今だけ公開。",
    description:
      "毎週更新される「週刊宇宙ニュース」のスライドを、特別に外部公開します。宇宙産業の最新動向、注目のミッション、知っておきたいトピックをコンパクトにまとめた資料で宇宙を楽しんでください。",
  },
  {
    icon: Library,
    title: "Cosmo Base Library",
    catchCopy: "普段は会員限定の図書館を、1週間だけ開放。",
    description:
      "Cosmo Base内に蓄積された宇宙関連の資料・レポート・まとめの一部を、期間限定で閲覧できます。宇宙に興味があるけど何から始めていいかわからない…という方にもおすすめの入門資料が揃っています。",
  },
]

export function CosmoBaseWeek() {
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
            <Unlock className="h-5 w-5 text-cyan" />
            <span className="text-sm font-semibold tracking-widest uppercase text-cyan">
              Cosmo Base Week
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground text-balance mb-6">
            宇宙を、1週間だけ解放
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty">
            普段は入れない場所が、今だけ開く。
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            4/20〜4/26の1週間、Cosmo Baseの一部コンテンツをSNS等で無料体験できます。
          </p>

          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-10">
            <Calendar className="h-5 w-5 text-cyan" />
            <span className="text-foreground font-medium">2026年 4月20日〜26日</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Cosmo Base Weekとは？
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-12 text-pretty">
            「宇宙のコミュニティって、どんな雰囲気なんだろう？」
            <br />
            そんな方のために、1週間だけCosmo Baseを開放します。
            <br />
            SNS等から、コミュニティーの雰囲気をちょっとだけ覗いてみてください。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["参加無料", "登録不要", "期間限定"].map((item) => (
              <div
                key={item}
                className="glass rounded-full px-6 py-3 flex items-center gap-2"
              >
                <CheckCircle className="h-4 w-4 text-cyan" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              体験できるコンテンツ
            </h2>
            <p className="text-muted-foreground">
              期間中、以下のコンテンツを無料でお試しいただけます
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="glass-card rounded-2xl p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(0, 242, 254, 0.1)",
                      }}
                    >
                      <Icon className="h-7 w-7 text-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-cyan font-medium mb-3">
                        {feature.catchCopy}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Closing notice */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm glass rounded-full px-6 py-3 inline-block">
              この期間が終わると、再びCosmo Baseは通常運用に戻ります。お見逃しなく。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(79,172,254,0.3) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            4月20日、お待ちしています
          </h2>
          <p className="text-muted-foreground mb-10">
            SNSをチェックしてお待ちください。
          </p>
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
                    src={`/${sns.name}.png`}
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
