"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { TrekCard } from "@/components/trek-card"
import { treks } from "@/lib/data"

export function FeaturedTreks() {
  const featured = treks.filter(t => t.featured).slice(0, 3)

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeader
            label="Expeditions"
            title="Featured Adventures"
            align="left"
            className="md:mx-0"
          />
          <Link href="/treks" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-stone-900">
            View All <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((trek, index) => (
            <motion.div
              key={trek.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:shadow-2xl hover:shadow-stone-200/50"
            >
              <TrekCard trek={trek} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}