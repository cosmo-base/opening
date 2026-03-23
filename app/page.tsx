import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { ProjectsSection } from "@/components/projects-section"
import { FooterCtaSection } from "@/components/footer-cta-section"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <IntroductionSection />
      <ProjectsSection />
      <FooterCtaSection />
    </main>
  )
}
