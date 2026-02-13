import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  MapPin,
  Clock,
  TrendingUp,
  Users,
  Calendar,
  IndianRupee,
  Check,
  ArrowLeft,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { treks } from "@/lib/data"

interface TrekPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: TrekPageProps): Promise<Metadata> {
  const { slug } = await params
  const trek = treks.find((t) => t.slug === slug)
  if (!trek) return { title: "Trek Not Found" }
  return {
    title: `${trek.title} | Miles With Nature`,
    description: trek.shortDescription,
  }
}

export function generateStaticParams() {
  return treks.map((trek) => ({ slug: trek.slug }))
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-amber-100 text-amber-800",
  Challenging: "bg-orange-100 text-orange-800",
  Extreme: "bg-red-100 text-red-800",
}

export default async function TrekDetailPage({ params }: TrekPageProps) {
  const { slug } = await params
  const trek = treks.find((t) => t.slug === slug)

  if (!trek) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-end overflow-hidden">
          <Image
            src={trek.image}
            alt={trek.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 lg:px-8">
            <Link
              href="/treks"
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All Treks
            </Link>
            <Badge
              className={`${difficultyColors[trek.difficulty]} border-0`}
            >
              {trek.difficulty}
            </Badge>
            <h1 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {trek.title}
            </h1>
            <div className="mt-3 flex items-center gap-1.5 text-sm text-white/80">
              <MapPin className="h-4 w-4" />
              <span>{trek.location}</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { icon: Clock, label: "Duration", value: trek.duration },
                    {
                      icon: TrendingUp,
                      label: "Altitude",
                      value: trek.altitude,
                    },
                    {
                      icon: Calendar,
                      label: "Best Season",
                      value: trek.bestSeason,
                    },
                    {
                      icon: Users,
                      label: "Group Size",
                      value: trek.groupSize,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-border/60 bg-card p-4"
                    >
                      <stat.icon className="h-5 w-5 text-primary" />
                      <p className="mt-2 text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    About This Trek
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {trek.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Highlights
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {trek.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary */}
                <div className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Day-by-Day Itinerary
                  </h2>
                  <div className="mt-6 flex flex-col gap-4">
                    {trek.itinerary.map((day) => (
                      <div
                        key={day.day}
                        className="flex gap-4 rounded-lg border border-border/60 bg-card p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">
                            {day.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <Card className="sticky top-24 border-border/60">
                  <CardContent className="p-6">
                    <div className="flex items-baseline gap-1">
                      <IndianRupee className="h-5 w-5 text-primary" />
                      <span className="font-serif text-3xl font-bold text-primary">
                        {trek.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        / person
                      </span>
                    </div>

                    <Separator className="my-6" />

                    <h3 className="text-sm font-semibold text-foreground">
                      What is Included
                    </h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {trek.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Separator className="my-6" />

                    <Button className="w-full" size="lg" asChild>
                      <Link href="/contact">Book This Trek</Link>
                    </Button>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      Contact us with any questions before booking.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
