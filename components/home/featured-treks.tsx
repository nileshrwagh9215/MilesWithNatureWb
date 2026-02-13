import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { TrekCard } from "@/components/trek-card"
import { treks } from "@/lib/data"

export function FeaturedTreks() {
  return (
    <section className="bg-muted/30 py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            label="Upcoming expeditions"
            title="Featured Adventures"
            description="From snow-capped summits to lush green valleys, explore our handpicked treks designed for those who seek the extraordinary."
            align="left"
            className="md:mx-0 md:text-left"
          />
          <Button variant="outline" size="lg" asChild className="hidden md:flex gap-2 rounded-full px-8">
            <Link href="/treks">
              View All Treks
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {treks
            .filter((trek) => trek.featured)
            .slice(0, 3)
            .map((trek) => (
              <TrekCard key={trek.slug} trek={trek} />
            ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Button variant="outline" size="lg" asChild className="gap-2 w-full">
            <Link href="/treks">
              View All Treks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
