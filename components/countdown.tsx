"use client";

import { useState, useEffect } from "react";
import { Clock, Rocket, Sparkles } from "lucide-react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  // 🔥 追加：オープンしたかどうかを判定するスイッチ
  const [isOpened, setIsOpened] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
    // ターゲット日時「2026年4月1日 00:00:00」
    const targetDate = new Date("2026-03-01T00:00:00+09:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // 🔥 オープン時間を過ぎたら、タイマーを止めて「オープン状態」にする！
      if (distance < 0) {
        clearInterval(timer);
        setIsOpened(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <div className="h-32 w-full"></div>;

  // ==========================================
  // 🌟 分岐A：オープン後の「お祝い画面」
  // ==========================================
  if (isOpened) {
    return (
      <section className="relative z-20 -mt-12 mb-20 flex justify-center px-4 md:px-6 w-full max-w-4xl mx-auto animate-fade-in">
        <div className="glass rounded-2xl p-8 md:p-12 flex flex-col items-center shadow-[0_0_50px_rgba(0,242,254,0.3)] border border-cyan/50 w-full text-center">
          
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500 tracking-wider">
              Cosmo Base is NOW OPEN!
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          
          <p className="text-gray-300 md:text-lg mb-8">
            あなたのご参加をお待ちしています！
          </p>

          <a href="https://discord.gg/spv3TBRpFU" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(79,172,254,0.4)] transform transition hover:scale-105">
              <Rocket className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              コミュニティーに参加する
            </button>
          </a>
        </div>
      </section>
    );
  }

  // ==========================================
  // ⏳ 分岐B：オープン前の「カウントダウン画面」（先ほどと同じ）
  // ==========================================
  return (
    <section className="relative z-20 -mt-12 mb-20 flex justify-center px-4 md:px-6 w-full max-w-4xl mx-auto">
      <div className="glass rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,254,0.1)] border border-cyan/20 w-full">
        
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-cyan animate-pulse" />
          <h2 className="text-sm md:text-lg font-bold text-foreground tracking-widest">
            Cosmo Base 正式オープンまで
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full">
          {/* 日 */}
          <div className="flex flex-col items-center w-16 sm:w-20 md:w-24">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan drop-shadow-lg">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-cyan mt-1 md:mt-2 font-bold tracking-widest">DAYS</span>
          </div>
          <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-cyan/40 animate-pulse pb-4 sm:pb-6 md:pb-8">:</span>

          {/* 時間 */}
          <div className="flex flex-col items-center w-16 sm:w-20 md:w-24">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan drop-shadow-lg">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-cyan mt-1 md:mt-2 font-bold tracking-widest">HOURS</span>
          </div>
          <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-cyan/40 animate-pulse pb-4 sm:pb-6 md:pb-8">:</span>

          {/* 分 */}
          <div className="flex flex-col items-center w-16 sm:w-20 md:w-24">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan drop-shadow-lg">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-cyan mt-1 md:mt-2 font-bold tracking-widest">MINS</span>
          </div>
          <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-cyan/40 animate-pulse pb-4 sm:pb-6 md:pb-8">:</span>

          {/* 秒 */}
          <div className="flex flex-col items-center w-16 sm:w-20 md:w-24">
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan drop-shadow-lg tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-cyan mt-1 md:mt-2 font-bold tracking-widest">SECS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
