import { Metadata } from "next"
import { CosmoBaseWeek } from "@/components/projects/cosmo-base-week"

export const metadata: Metadata = {
  title: "Cosmo Base Week | Cosmo Base",
  description: "宇宙を、1週間だけ解放する。期間限定で宇宙コンテンツを無料体験。",
}

export default function CosmoBaseWeekPage() {
  return <CosmoBaseWeek />
}
