import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/lib/data"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Miles With Nature`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main>
        <article className="py-16">
          <div className="mx-auto max-w-3xl px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <Badge className="mt-6 bg-primary text-primary-foreground border-0">
              {post.category}
            </Badge>
            <h1 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <Separator className="my-8" />

            <div className="prose prose-sm max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3
                      key={index}
                      className="mt-8 font-serif text-xl font-semibold text-foreground first:mt-0"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  )
                }
                if (paragraph.startsWith("**")) {
                  const parts = paragraph.split("**")
                  return (
                    <p
                      key={index}
                      className="mt-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      <strong className="font-semibold text-foreground">
                        {parts[1]}
                      </strong>
                      {parts[2]}
                    </p>
                  )
                }
                return (
                  <p
                    key={index}
                    className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
