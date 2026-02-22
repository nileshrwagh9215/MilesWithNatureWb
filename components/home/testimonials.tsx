"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { testimonials } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F8] py-32">
      {/* Decorative large serif quote in background */}
      <div className="absolute -top-10 left-10 pointer-events-none opacity-[0.03] select-none">
        <span className="font-serif text-[400px] leading-none">“</span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Community Stories"
            title="Echoes of Adventure"
            description="Read about the life-changing moments and summit triumphs shared by our community of trekkers."
            className="text-stone-900"
          />
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/60 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-200/40"
            >
              <div>
                <div className="flex gap-1 mb-8 opacity-60 transition-opacity group-hover:opacity-100">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3 w-3",
                        i < item.rating ? "fill-stone-900 text-stone-900" : "fill-stone-200 text-stone-200"
                      )}
                    />
                  ))}
                </div>
                
                <Quote className="mb-4 h-8 w-8 text-stone-100 transition-colors group-hover:text-stone-200" />
                
                <blockquote className="relative">
                  <p className="font-serif text-lg leading-relaxed tracking-tight text-stone-800 transition-colors group-hover:text-black">
                    {`"${item.quote}"`}
                  </p>
                </blockquote>
              </div>

              <div className="mt-12 flex items-center gap-4 pt-8 border-t border-stone-50">
                <Avatar className="h-12 w-12 border border-stone-100 grayscale transition-all group-hover:grayscale-0">
                  <AvatarFallback className="bg-stone-100 text-xs font-bold text-stone-600">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <p className="text-sm font-bold tracking-tight text-stone-900">
                    {item.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-600 transition-colors">
                    {item.trek}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}