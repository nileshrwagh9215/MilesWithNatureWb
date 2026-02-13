import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { TrekCard } from "@/components/trek-card"
import { treks } from "@/lib/data"

export const metadata: Metadata = {
  title: "Treks | Miles With Nature",
  description:
    "Browse our curated collection of trekking adventures across the most beautiful mountain ranges in India.",
}

export default function TreksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b bg-muted/50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Adventures
            </p>
            <h1 className="mt-4 text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Explore Our Treks
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              From beginner-friendly valley walks to challenging summit climbs,
              find the perfect trek that matches your spirit of adventure.
            </p>
          </div>
        </section>

        {/* Treks Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {treks.map((trek) => (
                <TrekCard key={trek.slug} trek={trek} />
              ))}
            </div>

            {treks.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
                  No treks available at the moment. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
