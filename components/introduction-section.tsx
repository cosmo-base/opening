import { Globe, Satellite,Rocket } from "lucide-react"

export function IntroductionSection() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,242,254,0.3) 50%, transparent 100%)", }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Globe className="h-5 w-5 text-cyan" />
          <span className="text-sm font-semibold tracking-widest uppercase text-cyan">
            About Cosmo Base
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-balance">
          宇宙を気軽に楽しめる場所
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
          Cosmo Baseは、「宇宙ってなんかいいな」という気持ちがあれば誰でも参加できるコミュニティーです。
          <br className="hidden md:block" />
          宇宙のニュースが好きな方も、ロケットの打ち上げ動画にワクワクする方も、
          <br className="hidden md:block" />
          同じ気持ちを持つ仲間と気軽につながれる場所です。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-3">
            <Satellite className="h-5 w-5 text-neon-blue" />
            <span className="text-sm text-foreground font-medium">
              わかりやすい宇宙情報
            </span>
          </div>
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-3">
            <Globe className="h-5 w-5 text-neon-blue" />
            <span className="text-sm text-foreground font-medium">
              気軽につながれる仲間
            </span>
          </div>
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-3">
            <Rocket className="h-5 w-5 text-neon-blue" />
            <span className="text-sm text-foreground font-medium">
              体験から広がる興味
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
