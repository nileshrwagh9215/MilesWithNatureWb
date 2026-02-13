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
import { blogPosts as initialPosts, type BlogPost } from "@/lib/data"

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [search, setSearch] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase())
  )

  function handleDelete(slug: string) {
    setPosts((prev) => prev.filter((p) => p.slug !== slug))
  }

  function handleEdit(post: BlogPost) {
    setEditingPost(post)
    setDialogOpen(true)
  }

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get("title") as string
    const author = formData.get("author") as string
    const category = formData.get("category") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string

    if (editingPost) {
      setPosts((prev) =>
        prev.map((p) =>
          p.slug === editingPost.slug
            ? { ...p, title, author, category, excerpt, content }
            : p
        )
      )
    } else {
      const newPost: BlogPost = {
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        title,
        author,
        category,
        excerpt,
        content,
        date: new Date().toISOString().split("T")[0],
        image: "/images/trek-1.jpg",
      }
      setPosts((prev) => [...prev, newPost])
    }

    setEditingPost(null)
    setDialogOpen(false)
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">
            Manage Blog Posts
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Create, edit, or remove blog articles.
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) setEditingPost(null) }}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-serif">
                {editingPost ? "Edit Post" : "Create New Post"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue={editingPost?.title ?? ""} required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" name="author" defaultValue={editingPost?.author ?? ""} required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" name="category" defaultValue={editingPost?.category ?? ""} required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" name="excerpt" rows={2} defaultValue={editingPost?.excerpt ?? ""} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" name="content" rows={8} defaultValue={editingPost?.content ?? ""} required />
              </div>
              <Button type="submit" className="mt-2">
                {editingPost ? "Save Changes" : "Publish Post"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative mt-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search posts..."
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
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">Author</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.slug}>
                <TableCell>
                  <div className="relative h-10 w-10 overflow-hidden rounded-md">
                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="40px" />
                  </div>
                </TableCell>
                <TableCell className="max-w-[200px] font-medium text-foreground">
                  <span className="line-clamp-1">{post.title}</span>
                </TableCell>
                <TableCell className="hidden text-muted-foreground sm:table-cell">{post.author}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </TableCell>
                <TableCell className="hidden text-muted-foreground md:table-cell">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit {post.title}</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(post.slug)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                      <span className="sr-only">Delete {post.title}</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredPosts.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="py-8 text-center text-muted-foreground">
                  No posts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
