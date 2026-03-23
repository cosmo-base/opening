import { Metadata } from "next"
import { SpaceEvent } from "@/components/projects/space-event"

export const metadata: Metadata = {
  title: "宇宙知っトク 出張イベント | Cosmo Base",
  description: "宇宙産業の未来を語り、挑戦者が集う。Cosmo Baseの宇宙知っトク。",
}

export default function SpaceEventPage() {
  return <SpaceEvent />
}
