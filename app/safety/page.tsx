import type { Metadata } from "next"
import Image from "next/image"
import {
  Mountain,
  Droplets,
  Cloud,
  Heart,
  Users,
  Utensils,
  ShieldCheck,
  AlertTriangle,
  Phone,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { safetyTips } from "@/lib/data"

export const metadata: Metadata = {
  title: "Safety Guidelines | Miles With Nature",
  description:
    "Your safety is our top priority. Read our comprehensive trekking safety guidelines before you hit the trail.",
}

const iconMap: Record<string, typeof Mountain> = {
  mountain: Mountain,
  droplets: Droplets,
  cloud: Cloud,
  heart: Heart,
  users: Users,
  utensils: Utensils,
}

const faqs = [
  {
    question: "What happens if someone gets altitude sickness?",
    answer:
      "Our guides are trained in recognizing AMS symptoms. If anyone shows signs, we immediately halt ascent. Mild cases are treated with rest, hydration, and medication. For severe cases, we begin descent immediately and coordinate emergency evacuation if needed.",
  },
  {
    question: "Is there phone network on the treks?",
    answer:
      "Most high-altitude trails have limited or no cellular coverage. Our team carries satellite communication devices and walkie-talkies for emergency communication. We recommend informing your family of this before the trek.",
  },
  {
    question: "What medical facilities are available?",
    answer:
      "All our trek leaders are certified in wilderness first aid. We carry comprehensive first aid kits and basic medications. For serious emergencies, we coordinate helicopter evacuation to the nearest hospital.",
  },
  {
    question: "Should I get travel or trekking insurance?",
    answer:
      "We strongly recommend getting travel insurance that covers high-altitude trekking and emergency evacuation. We can recommend specific policies that cover the altitude ranges of our treks.",
  },
  {
    question: "Are there age restrictions for treks?",
    answer:
      "Most of our moderate treks are suitable for ages 14-60. Easy treks can accommodate ages 10-65. For challenging and extreme treks, we require a fitness certificate and prior trekking experience. Contact us for specific trek requirements.",
  },
]

export default function SafetyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b bg-muted/50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-6 text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Safety Guidelines
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Your safety is our top priority. We follow strict protocols and
              equip every trek with experienced guides and emergency support.
              Please read these guidelines carefully before your trek.
            </p>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              label="Essential Tips"
              title="Stay Safe on the Trail"
              description="Follow these guidelines to ensure a safe and enjoyable trekking experience."
            />

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {safetyTips.map((tip) => {
                const Icon = iconMap[tip.icon] || Mountain
                return (
                  <Card key={tip.title} className="border-border/60">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                        {tip.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Safety Equipment */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="/images/safety-gear.jpg"
                  alt="Professional trekking safety equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeader
                  label="Our Equipment"
                  title="Professional Gear for Your Safety"
                  align="left"
                />
                <div className="mt-6 space-y-4">
                  {[
                    "Comprehensive Wilderness First Aid Kits",
                    "Satellite Communication & Walkie-Talkies",
                    "Oxygen Cylinders (for high-altitude treks)",
                    "High-strength Climbing Ropes & Harnesses",
                    "Emergency Rescue Stretchers",
                    "Aed & Basic Life Support Equipment",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                        <ShieldCheck className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Info */}
        <section className="border-y bg-destructive/5 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-7 w-7 text-destructive" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-bold text-foreground">
              Emergency Contact
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              In case of emergency during a trek, contact our 24/7 emergency
              line:
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-destructive">
              <Phone className="h-5 w-5" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <SectionHeader
              label="Have Questions?"
              title="Safety FAQs"
              description="Common questions about safety on our treks."
            />

            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
