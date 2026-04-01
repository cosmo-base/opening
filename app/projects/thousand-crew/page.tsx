import { Metadata } from "next"
import { ThousandCrewProject } from "@/components/projects/thousand-crew-project"

export const metadata: Metadata = {
  title: "1000人乗船プロジェクト | Cosmo Base",
  description: "Cosmo Base 最初の1000人の『ファーストクルー』を募集。宇宙への航海は、ここから始まる。",
}

export default function FoundingCrewPage() {
  return <ThousandCrewProject />
}
