import { Metadata } from "next"
import { FoundingCrewProject } from "@/components/projects/founding-crew-project"

export const metadata: Metadata = {
  title: "1000人乗船プロジェクト | Cosmo Base",
  description: "Cosmo Base 最初の1000人の『ファーストクルー』を募集。宇宙への航海は、ここから始まる。",
}

export default function FoundingCrewPage() {
  return <FoundingCrewProject />
}
