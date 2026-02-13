import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
        alt="Mountain landscape with trekkers"
        fill
        priority
        className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
        sizes="100vw"
      />
      {/* Overlay with radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <span className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 mb-6 animate-in slide-in-from-top duration-700">
          Adventure Awaits
        </span>
        <h1 className="mt-4 text-balance font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
          Walk the Trails <br />
          <span className="text-secondary italic">Less Traveled</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl font-light">
          Join Miles With Nature on curated trekking experiences across the most
          breathtaking mountain ranges. Discover trails, build memories, find
          yourself.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row animate-in slide-in-from-bottom duration-1000">
          <Button size="lg" asChild className="h-14 px-8 text-base font-semibold shadow-xl shadow-primary/20">
            <Link href="/treks">
              Explore Treks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-14 px-8 text-base border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-md"
          >
            <Link href="/about">Our Story</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
