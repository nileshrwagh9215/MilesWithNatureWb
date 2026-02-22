"use client"

import { motion } from "framer-motion"
import { Mountain, Shield, Users, Compass } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const features = [
  { icon: Mountain, title: "Curated Trails", description: "Handpicked routes through stunning landscapes." },
  { icon: Shield, title: "Safety First", description: "Comprehensive safety protocols and certified guides." },
  { icon: Users, title: "Small Groups", description: "Intimate groups of 8-15 for a personal connection." },
  { icon: Compass, title: "Expert Guides", description: "Years of Himalayan experience at your side." },
]

export function Features() {
  return (
    <section className="bg-[#F9F9F8] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="The Miles Advantage"
          title="Engineered for Nature"
          className="text-stone-900"
        />

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-stone-200/50 transition-colors group-hover:bg-stone-900 group-hover:text-white">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">{feature.description}</p>
              <div className="mt-6 h-[1px] w-full bg-stone-200 transition-colors group-hover:bg-stone-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}