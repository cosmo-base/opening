import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP, Geist_Mono } from 'next/font/google'
import './globals.css'

// ゴシック体
const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: '--font-noto-sans-jp',
});

// 明朝体
const notoSerifJP = Noto_Serif_JP({ 
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-noto-serif-jp',
});

// コード表示用
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Cosmo Base - 宇宙コミュニティ 2026年4月1日 正式オープン',
  description: '宇宙への航海は、ここから始まる。宇宙産業・ビジネス・技術に関心を持つ人々が集うコミュニティ「Cosmo Base」2026年4月1日 正式オープン。',
  icons: {
    icon: [
      {
        url: '/CosmoBase icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/CosmoBase icon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/CosmoBase icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#090a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // htmlタグに両方のフォント変数を注入！
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}