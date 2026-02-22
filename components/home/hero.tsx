"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background with subtle parallax-like zoom */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
          alt="Mountain landscape"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </motion.div>

      {/* Modern Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950" />

      <div className="relative z-20 mx-auto max-w-6xl px-6 text-center">
        {/* Animated Badge */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <span className="h-[1px] w-8 bg-secondary/60" />
          <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-secondary">
            Since 2024 • Miles With Nature
          </span>
          <span className="h-[1px] w-8 bg-secondary/60" />
        </motion.div>

        {/* Headline with staggered characters or words */}
        <motion.h1 
          {...fadeIn}
          transition={{ delay: 0.4 }}
          className="text-balance font-serif text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Walk the Trails <br />
          <span className="relative inline-block italic text-secondary">
            Less Traveled
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none">
              <path d="M1 9C50 3 150 3 299 9" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-10 max-w-xl text-pretty text-base leading-relaxed text-zinc-300/90 md:text-lg font-light tracking-wide"
        >
          Escape the noise. Curated trekking experiences designed for the 
          wandering soul across Earth&apos;s most silent peaks.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Button 
            size="lg" 
            asChild 
            className="group relative h-14 overflow-hidden rounded-full bg-white px-10 text-zinc-950 transition-transform hover:scale-105"
          >
            <Link href="/treks">
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                Explore Treks <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            asChild
            className="h-14 rounded-full px-10 text-white hover:bg-white/5 hover:text-white"
          >
            <Link href="/about" className="flex items-center gap-2">
              <Mountain className="h-4 w-4 opacity-60" />
              Our Story
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}