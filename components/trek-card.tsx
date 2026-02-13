import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, TrendingUp, IndianRupee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Trek } from "@/lib/data"

const difficultyColors: Record<string, string> = {
  Easy: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  Moderate: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Challenging: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  Extreme: "bg-rose-500/10 text-rose-600 border-rose-500/20",
}

export function TrekCard({ trek }: { trek: Trek }) {
  return (
    <Link href={`/treks/${trek.slug}`} className="group block">
      <Card className="overflow-hidden border-border/40 bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 rounded-2xl group">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={trek.image.startsWith("/") ? `https://images.unsplash.com/photo-1551632432-c735e8299278?auto=format&fit=crop&q=80&w=800` : trek.image} 
            alt={trek.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <Badge
            className={`absolute left-4 top-4 px-3 py-1 font-bold text-[10px] uppercase tracking-wider backdrop-blur-md border ${difficultyColors[trek.difficulty]}`}
          >
            {trek.difficulty}
          </Badge>
          
          {trek.featured && (
            <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-lg">
              Featured
            </div>
          )}
        </div>
        
        <CardContent className="p-6 relative">
          <div className="flex items-center gap-2 mb-3">
             <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-3 w-3 text-primary" />
             </div>
             <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{trek.location}</span>
          </div>
          
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {trek.title}
          </h3>
          
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2 min-h-[40px]">
            {trek.shortDescription}
          </p>
          
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/30 pt-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Duration</span>
              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {trek.duration}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Altitude</span>
              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                <TrendingUp className="h-3.5 w-3.5 text-primary" />
                {trek.altitude}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xl font-bold text-foreground flex items-baseline gap-1">
              <IndianRupee className="h-4 w-4 text-primary" />
              {trek.price.toLocaleString()}
              <span className="text-[10px] font-normal text-muted-foreground lowercase">/ person</span>
            </span>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
               {/* <ArrowRight className="h-4 w-4" /> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
