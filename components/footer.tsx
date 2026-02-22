"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, MapPin, Instagram, Mountain } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { href: "/treks", label: "Upcoming Treks" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/safety", label: "Safety Guidelines" },
  { href: "/contact", label: "Contact Us" },
]

export function Footer() {
  const pathname = usePathname()

  if (pathname.startsWith("/admin")) return null

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20">
                <Mountain className="h-6 w-6" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                Miles <span className="text-primary italic">With Nature</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
              "To climb mountains is to discover what they are made of, and what you are made of."
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We are a passionate group of trekkers based in Pune, exploring the
              magnificent Sahyadri ranges and forts of Maharashtra. Join us to
              discover the Western Ghats.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/miles_with_nature?igsh=MTFwdmoxMmQ2eGVkbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+917020212486" className="hover:text-primary transition-colors">+91 70202 12486</a>
                  <a href="tel:+919561026436" className="hover:text-primary transition-colors">+91 95610 26436</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Instagram className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://www.instagram.com/miles_with_nature?igsh=MTFwdmoxMmQ2eGVkbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @miles_with_nature
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>2026 Miles With Nature. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/safety" className="transition-colors hover:text-primary">
              Safety Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
