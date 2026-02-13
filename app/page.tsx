import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { FeaturedTreks } from "@/components/home/featured-treks"
import { Testimonials } from "@/components/home/testimonials"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturedTreks />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
