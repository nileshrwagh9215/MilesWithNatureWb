"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { galleryImages } from "@/lib/data"
import { cn } from "@/lib/utils"

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b bg-muted/50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Captured Moments
            </p>
            <h1 className="mt-4 text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Gallery
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              A visual journey through the mountains, forests, and valleys we
              have explored together.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filteredImages.map((image, index) => (
                <button
                  key={image.src + index}
                  onClick={() => setLightboxImage(image.src)}
                  className="group relative mb-4 block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={index % 3 === 0 ? 800 : index % 3 === 1 ? 400 : 600}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-all duration-300 group-hover:bg-black/30">
                    <span className="translate-y-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {image.alt}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-primary py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Ready to Capture Your Own Moments?
            </h2>
            <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
              Join us on our next expedition and experience the breathtaking
              beauty of nature firsthand.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/treks">
                  Explore All Treks <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={lightboxImage}
              alt="Gallery image enlarged"
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
