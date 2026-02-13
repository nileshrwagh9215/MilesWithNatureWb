"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Pencil, Trash2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { treks as initialTreks, type Trek } from "@/lib/data"

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-amber-100 text-amber-800",
  Challenging: "bg-orange-100 text-orange-800",
  Extreme: "bg-red-100 text-red-800",
}

export default function AdminTreksPage() {
  const [trekList, setTrekList] = useState<Trek[]>(initialTreks)
  const [search, setSearch] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingTrek, setEditingTrek] = useState<Trek | null>(null)

  const filteredTreks = trekList.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase())
  )

  function handleDelete(slug: string) {
    setTrekList((prev) => prev.filter((t) => t.slug !== slug))
  }

  function handleEdit(trek: Trek) {
    setEditingTrek(trek)
    setDialogOpen(true)
  }

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get("title") as string
    const location = formData.get("location") as string
    const duration = formData.get("duration") as string
    const altitude = formData.get("altitude") as string
    const difficulty = formData.get("difficulty") as Trek["difficulty"]
    const price = Number(formData.get("price"))
    const description = formData.get("description") as string

    if (editingTrek) {
      setTrekList((prev) =>
        prev.map((t) =>
          t.slug === editingTrek.slug
            ? { ...t, title, location, duration, altitude, difficulty, price, description, shortDescription: description.slice(0, 150) }
            : t
        )
      )
    } else {
      const newTrek: Trek = {
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        title,
        location,
        duration,
        altitude,
        difficulty,
        price,
        image: "/images/trek-1.jpg",
        shortDescription: description.slice(0, 150),
        description,
        highlights: [],
        itinerary: [],
        bestSeason: "Year Round",
        groupSize: "8-15 people",
        includes: [],
      }
      setTrekList((prev) => [...prev, newTrek])
    }

    setEditingTrek(null)
    setDialogOpen(false)
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">
            Manage Treks
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Add, edit, or remove trekking packages.
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) setEditingTrek(null) }}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Trek
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-serif">
                {editingTrek ? "Edit Trek" : "Add New Trek"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Trek Name</Label>
                <Input id="title" name="title" defaultValue={editingTrek?.title ?? ""} required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" defaultValue={editingTrek?.location ?? ""} required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" name="duration" placeholder="e.g. 6 Days" defaultValue={editingTrek?.duration ?? ""} required />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="altitude">Altitude</Label>
                  <Input id="altitude" name="altitude" placeholder="e.g. 12,500 ft" defaultValue={editingTrek?.altitude ?? ""} required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select name="difficulty" defaultValue={editingTrek?.difficulty ?? "Moderate"}>
                    <SelectTrigger id="difficulty">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Moderate">Moderate</SelectItem>
                      <SelectItem value="Challenging">Challenging</SelectItem>
                      <SelectItem value="Extreme">Extreme</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price">Price (INR)</Label>
                  <Input id="price" name="price" type="number" defaultValue={editingTrek?.price ?? ""} required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" rows={4} defaultValue={editingTrek?.description ?? ""} required />
              </div>
              <Button type="submit" className="mt-2">
                {editingTrek ? "Save Changes" : "Create Trek"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative mt-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search treks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <div className="mt-6 rounded-xl border border-border/60 bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Image</TableHead>
              <TableHead>Trek Name</TableHead>
              <TableHead className="hidden sm:table-cell">Location</TableHead>
              <TableHead className="hidden md:table-cell">Duration</TableHead>
              <TableHead className="hidden md:table-cell">Difficulty</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTreks.map((trek) => (
              <TableRow key={trek.slug}>
                <TableCell>
                  <div className="relative h-10 w-10 overflow-hidden rounded-md">
                    <Image src={trek.image} alt={trek.title} fill className="object-cover" sizes="40px" />
                  </div>
                </TableCell>
                <TableCell className="font-medium text-foreground">{trek.title}</TableCell>
                <TableCell className="hidden text-muted-foreground sm:table-cell">{trek.location}</TableCell>
                <TableCell className="hidden text-muted-foreground md:table-cell">{trek.duration}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge className={`${difficultyColors[trek.difficulty]} border-0 text-xs`}>
                    {trek.difficulty}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">
                  {"INR "}
                  {trek.price.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(trek)}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit {trek.title}</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(trek.slug)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                      <span className="sr-only">Delete {trek.title}</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredTreks.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="py-8 text-center text-muted-foreground">
                  No treks found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
