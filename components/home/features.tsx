import { Mountain, Shield, Users, Compass } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const features = [
  {
    icon: Mountain,
    title: "Curated Trails",
    description:
      "Handpicked routes through some of the most stunning landscapes, from gentle valley walks to challenging summit climbs.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Experienced guides, comprehensive safety protocols, and emergency support to ensure every trek is as safe as it is memorable.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Intimate groups of 8-15 trekkers for a more personal experience. Build lasting friendships on the trail.",
  },
  {
    icon: Compass,
    title: "Expert Guides",
    description:
      "Our team of certified mountain guides brings years of Himalayan experience to lead you through every adventure.",
  },
]

export function Features() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <SectionHeader
          label="Why Trek With Us"
          title="Engineered for the Great Outdoors"
          description="We combine deep local knowledge, uncompromising safety, and a genuine passion for the mountains to provide transformative trekking journeys."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:bg-card hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80">
                {feature.description}
              </p>
              <div className="mt-6 h-1 w-0 bg-primary/20 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
