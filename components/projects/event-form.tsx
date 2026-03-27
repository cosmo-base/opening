"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, User } from "lucide-react";

export function EventForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

// ==========================================
    // GoogleフォームのID
    // ==========================================
    const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSf9fHApH4jMQVEG0Z4X7ibEBxOmH_-tyq2FJsU3ZZGzYQE9Tg/formResponse";
    const NAME_ENTRY_ID = "entry.963632499";   // ニックネーム
    const EMAIL_ENTRY_ID = "entry.2076757045"; // メールアドレス

    // 送信用のデータを作成
    const formData = new FormData();
    formData.append(NAME_ENTRY_ID, name);
    formData.append(EMAIL_ENTRY_ID, email);

    try {
      // Googleフォームへデータを送信
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors", // 🔥 これが必須！ブラウザのエラー（CORS）を回避する魔法
        body: formData,
      });

      // Googleフォームの場合、no-corsモードだと常に「成功」として扱われるため
      // エラーを厳密に拾えませんが、基本的にはデータは届きます。
      setIsSubmitted(true);
    } catch (error) {
      console.error("送信エラー:", error);
      alert("通信エラーが発生しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // 以下、見た目（UI）のコードは前回と全く同じです
  // ==========================================
  
  // 送信完了後の画面
  if (isSubmitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center max-w-md mx-auto w-full animate-fade-in border border-cyan/30 shadow-[0_0_30px_rgba(0,242,254,0.1)]">
        <CheckCircle className="w-16 h-16 text-cyan mx-auto mb-4 animate-bounce" />
        <h3 className="text-xl font-bold text-foreground mb-2">登録完了しました！</h3>
        <p className="text-gray-300 text-sm">
          イベントの準備が整い次第、<br />ご入力いただいたメールアドレス宛に<br />優先してご案内をお送りします。
        </p>
      </div>
    );
  }

  // 入力フォーム画面
  return (
    <div className="glass rounded-2xl p-6 md:p-8 max-w-md mx-auto w-full border border-cyan/20 shadow-lg relative overflow-hidden">
      {/* 背景の装飾光 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50"></div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400 mb-2">
          最新情報を受け取る
        </h2>
        <p className="text-sm text-gray-400 text-balance">
          「宇宙知っトク出張イベント」の詳細が決まり次第、メールでお知らせします。（無料）
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ニックネーム入力 */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-bold text-cyan tracking-wider">ニックネーム (必須)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent transition-all"
              placeholder="コスモ太郎"
            />
          </div>
        </div>

        {/* メールアドレス入力 */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-bold text-cyan tracking-wider">メールアドレス (必須)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-transparent transition-all"
              placeholder="hello@example.com"
            />
          </div>
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group relative w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan hover:from-blue-500 hover:to-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan focus:ring-offset-gray-900 transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)] ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}`}
        >
          {isSubmitting ? (
            <span className="animate-pulse">送信中...</span>
          ) : (
            <>
              お知らせを受け取る
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
      <p className="text-[10px] text-gray-500 text-center mt-4">
        ※ご登録いただいた情報は本イベントのお知らせのみに使用します。
      </p>
    </div>
  );
}
