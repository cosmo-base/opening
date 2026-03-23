"use client"

import { Share2,Rocket } from "lucide-react"

const snsLinks = [
  { name: "X", url: "https://x.com/CosmoBase" },
  { name: "Instagram", url: "https://instagram.com/cosmobase.official/" },
  { name: "note", url: "https://note.com/cosmobase" },
];


export function FooterCtaSection() {
  return (
    <footer className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(0, 242, 254, 0.12) 0%, rgba(79, 172, 254, 0.06) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,242,254,0.4) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
          一緒に宇宙を楽しみませんか？
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl text-pretty max-w-xl">
          最初の1000人には特別な特典をご用意しています。まずは気軽にのぞいてみてください。
        </p>

        {/* Big CTA */}
        <a href="https://discord.gg/spv3TBRpFU">
          <button
            className="group relative inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg md:text-xl font-bold text-primary-foreground transition-all duration-300 animate-glow-pulse hover:scale-105 cursor-pointer"
            style={{ background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", }}
          >
            <span>Cosmo Baseをのぞいてみる（無料・特典あり）</span>
            <Rocket className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </a>

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
                  <img src={`/opening/${sns.name}.png`} alt={`${sns.name} icon`} className="max-w-full max-h-full"/>
                </div>
                <span>{sns.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

        {/* Bottom copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 w-full">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Cosmo Base. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
