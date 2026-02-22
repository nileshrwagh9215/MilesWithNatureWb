"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, TrendingUp, IndianRupee, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Trek } from "@/lib/data"

const difficultyColors: Record<string, string> = {
  Easy: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Moderate: "bg-blue-50 text-blue-700 border-blue-100",
  Challenging: "bg-orange-50 text-orange-700 border-orange-100",
  Extreme: "bg-rose-50 text-rose-700 border-rose-100",
}

export function TrekCard({ trek }: { trek: Trek }) {
  return (
    <Link href={`/treks/${trek.slug}`} className="group block">
      <div className="relative overflow-hidden bg-white border border-stone-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1">
        
        <div className="relative overflow-hidden">
          <Image
            src={trek.image.startsWith("/") ? `https://images.unsplash.com/photo-1551632432-c735e8299278?auto=format&fit=crop&q=80&w=800` : trek.image} 
            alt={trek.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 from-black/20 via-transparent to-transparent opacity-60" />

          {/* Floating Badges */}
          <div className="absolute left-5 top-5 flex flex-col gap-2">
            <Badge
              variant="outline"
              className={`w-fit px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md transition-colors ${difficultyColors[trek.difficulty]}`}
            >
              {trek.difficulty}
            </Badge>
            
            {trek.featured && (
              <Badge className="w-fit bg-stone-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl">
                Featured
              </Badge>
            )}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
             <MapPin className="h-3 w-3 text-stone-400" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
               {trek.location}
             </span>
          </div>
          
          <h3 className="font-serif text-2xl font-medium tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
            {trek.title}
          </h3>
          
          <p className="mt-4 text-sm leading-relaxed text-stone-500 line-clamp-2 font-light">
            {trek.shortDescription}
          </p>
          
          {/* Specs Grid */}
          <div className="mt-8 grid grid-cols-2 gap-6 border-y border-stone-50 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-50">
                <Clock className="h-3.5 w-3.5 text-stone-600" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-tighter text-stone-400 leading-none">Duration</p>
                <p className="text-sm font-medium text-stone-800">{trek.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-50">
                <TrendingUp className="h-3.5 w-3.5 text-stone-600" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-tighter text-stone-400 leading-none">Elevation</p>
                <p className="text-sm font-medium text-stone-800">{trek.altitude}</p>
              </div>
            </div>
          </div>
          
          {/* Footer / Pricing */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Price per person</span>
              <span className="text-xl font-medium text-stone-900 flex items-center gap-0.5">
                <IndianRupee className="h-3.5 w-3.5" />
                {trek.price.toLocaleString()}
              </span>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-100 bg-white transition-all duration-500 group-hover:bg-stone-900 group-hover:text-white group-hover:rotate-45">
               <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}