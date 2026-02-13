import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-32 mx-4 mb-8 rounded-3xl">
      <Image
        src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=2070"
        alt="Sunset from mountain summit"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            The Mountains Are <br />
            <span className="text-secondary italic">Calling You</span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80 font-light">
            Whether you are a seasoned trekker or stepping onto a trail for the
            first time, we have the perfect trek waiting for you. Join our next expedition.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row">
            <Button size="lg" asChild className="h-14 px-8 text-base font-bold shadow-2xl">
              <Link href="/treks">
                Book Your Adventure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 px-8 text-base border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-md"
            >
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative pulse element */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block">
         <div className="h-64 w-64 rounded-full border border-white/10 animate-pulse" />
         <div className="absolute inset-0 h-64 w-64 rounded-full border border-white/5 scale-125 transition-transform" />
      </div>
    </section>
  )
}
