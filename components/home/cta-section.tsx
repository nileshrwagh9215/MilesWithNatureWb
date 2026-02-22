"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Subtle parallax for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={containerRef} className="px-6 py-24 sm:px-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-100 min-h-[500px] flex items-center">
        {/* Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=2070"
            alt="Mountain summit"
            fill
            className="object-cover opacity-90 brightness-90"
            sizes="100vw"
          />
        </motion.div>

        {/* Sophisticated Light Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-8 lg:px-16 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <Compass className="h-5 w-5 text-stone-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-300">
                Ready for the journey?
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl font-light leading-[1.1] text-white sm:text-6xl lg:text-7xl"
            >
              The Mountains Are <br />
              <span className="italic text-stone-300">Calling You</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-lg text-lg font-light leading-relaxed text-stone-200/90"
            >
              Whether you are a seasoned trekker or stepping onto a trail for the
              first time, your perfect expedition starts here.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row"
            >
              <Button 
                size="lg" 
                asChild 
                className="h-14 rounded-full bg-white px-10 text-stone-900 hover:bg-stone-100 transition-transform hover:scale-105 active:scale-95"
              >
                <Link href="/treks" className="font-bold tracking-tight">
                  Book Your Adventure
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 rounded-full border-white/30 bg-white/10 px-10 text-white backdrop-blur-md hover:bg-white hover:text-stone-900"
              >
                <Link href="/contact" className="font-medium">Inquire Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Abstract Corner Element */}
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>
    </section>
  )
}