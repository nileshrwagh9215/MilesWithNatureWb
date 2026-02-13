import { Star } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { testimonials } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Testimonials() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          label="Stories from the Trail"
          title="Echoes of Adventure"
          description="Read about the life-changing moments and summit triumphs shared by our community of trekkers."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((item, index) => (
            <Card key={item.name} className="border-border/40 bg-card shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl group">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < item.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
                
                <blockquote className="mt-4">
                   <p className="text-base leading-relaxed text-foreground/80 italic font-light">
                    {`"${item.quote}"`}
                  </p>
                </blockquote>

                <div className="mt-10 flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-primary/20 p-0.5">
                      <AvatarFallback className="bg-primary/10 text-sm font-bold text-primary">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1 text-white">
                       <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs font-medium text-primary uppercase tracking-widest">{item.trek}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
