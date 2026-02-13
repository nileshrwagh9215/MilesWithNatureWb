import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mountain, Heart, TreePine, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Miles With Nature",
  description:
    "Learn about our mission to connect people with the mountains through safe, sustainable, and unforgettable trekking experiences.",
}

const values = [
  {
    icon: Mountain,
    title: "Adventure",
    description:
      "We believe in pushing boundaries and discovering what lies beyond the next ridge. Every trek is an opportunity for growth.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "The mountains are not just our workplace, they are our home. We bring genuine love for the outdoors to every expedition.",
  },
  {
    icon: TreePine,
    title: "Sustainability",
    description:
      "We practice and preach Leave No Trace principles. Our treks are designed to minimize environmental impact.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Trekking is better together. We foster a welcoming community where lifelong friendships are formed on the trail.",
  },
]

const stats = [
  { value: "200+", label: "Treks Completed" },
  { value: "3,000+", label: "Happy Trekkers" },
  { value: "50+", label: "Unique Routes" },
  { value: "8+", label: "Years Experience" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/about-team.jpg"
            alt="Our trekking team at a campsite"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Our Story
            </p>
            <h1 className="mt-4 text-balance font-serif text-4xl font-bold text-white sm:text-5xl">
              Miles With Nature
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/80">
              Born from a love for the mountains and a desire to share the magic
              of the trails with fellow adventurers.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <SectionHeader
                  label="Who We Are"
                  title="A Team of Mountain Enthusiasts"
                  align="left"
                />
                <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Miles With Nature was founded with a simple belief: the
                    mountains have the power to transform lives. What started as
                    a small group of friends exploring local trails has grown
                    into a community of thousands of passionate trekkers.
                  </p>
                  <p>
                    Our team comprises experienced mountaineers, certified
                    wilderness first responders, and nature enthusiasts who have
                    spent years exploring the Himalayas and beyond. We combine
                    this deep local knowledge with meticulous safety planning to
                    create trekking experiences that are both thrilling and
                    secure.
                  </p>
                  <p>
                    We are committed to responsible tourism. Every trek we
                    organize follows strict environmental guidelines, supports
                    local communities, and aims to leave the mountains better
                    than we found them.
                  </p>
                </div>
                <Button asChild className="mt-8 gap-2">
                  <Link href="/treks">
                    See Our Treks <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Campsite in mountain valley at dusk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-muted/50 py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              label="Our Values"
              title="What Drives Us Forward"
              description="These core principles guide every decision we make and every trail we choose."
            />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border/60 bg-card p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              label="The Team"
              title="Meet Our Expert Guides"
              description="Our experienced leaders ensure your safety and make every trek memorable."
            />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sagar Shinde",
                  role: "Lead Trekker & Founder",
                  image: "/images/team-1.jpg",
                  bio: "With over 10 years of experience in the Sahyadris, Sagar has led 200+ treks.",
                },
                {
                  name: "Anjali Deshmukh",
                  role: "Safety Expert",
                  image: "/images/team-2.jpg",
                  bio: "Certified Wilderness First Responder with a passion for mountain flora.",
                },
                {
                  name: "Vikram Pawar",
                  role: "Senior Guide",
                  image: "/images/team-3.jpg",
                  bio: "Expert in navigation and historical knowledge of Maratha forts.",
                },
              ].map((member) => (
                <div key={member.name} className="group overflow-hidden rounded-2xl bg-card border border-border/60">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
