"use client"

import { useState } from "react"
import { Search, Eye, CheckCircle2, Clock, XCircle } from "lucide-react"
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
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Booking {
  id: string
  name: string
  email: string
  phone: string
  trek: string
  date: string
  participants: number
  status: "Confirmed" | "Pending" | "Cancelled"
  totalAmount: number
  notes: string
}

const initialBookings: Booking[] = [
  {
    id: "BK-001",
    name: "Ananya Joshi",
    email: "ananya@email.com",
    phone: "+91 98765 11111",
    trek: "Kedarkantha Summit",
    date: "2026-03-15",
    participants: 3,
    status: "Confirmed",
    totalAmount: 25500,
    notes: "Vegetarian meals preferred.",
  },
  {
    id: "BK-002",
    name: "Rahul Verma",
    email: "rahul@email.com",
    phone: "+91 98765 22222",
    trek: "Hampta Pass Crossing",
    date: "2026-06-20",
    participants: 2,
    status: "Pending",
    totalAmount: 19000,
    notes: "First-time trekkers, need extra guidance.",
  },
  {
    id: "BK-003",
    name: "Meera Patel",
    email: "meera@email.com",
    phone: "+91 98765 33333",
    trek: "Valley of Flowers",
    date: "2026-07-10",
    participants: 5,
    status: "Confirmed",
    totalAmount: 37500,
    notes: "",
  },
  {
    id: "BK-004",
    name: "Vikram Singh",
    email: "vikram@email.com",
    phone: "+91 98765 44444",
    trek: "Kedarkantha Summit",
    date: "2026-01-25",
    participants: 1,
    status: "Cancelled",
    totalAmount: 8500,
    notes: "Cancelled due to schedule conflict.",
  },
  {
    id: "BK-005",
    name: "Priya Sharma",
    email: "priya@email.com",
    phone: "+91 98765 55555",
    trek: "Hampta Pass Crossing",
    date: "2026-07-01",
    participants: 4,
    status: "Pending",
    totalAmount: 38000,
    notes: "Requested pickup from Manali bus stand.",
  },
]

const statusConfig = {
  Confirmed: { icon: CheckCircle2, className: "bg-green-100 text-green-800" },
  Pending: { icon: Clock, className: "bg-amber-100 text-amber-800" },
  Cancelled: { icon: XCircle, className: "bg-red-100 text-red-800" },
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.trek.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "All" || b.status === statusFilter
    return matchesSearch && matchesStatus
  })

  function updateStatus(id: string, status: Booking["status"]) {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    )
    if (selectedBooking?.id === id) {
      setSelectedBooking((prev) => (prev ? { ...prev, status } : null))
    }
  }

  return (
    <div>
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">
          Bookings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          View and manage trek bookings from trekkers.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="Confirmed">Confirmed</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {(["Confirmed", "Pending", "Cancelled"] as const).map((status) => {
          const count = bookings.filter((b) => b.status === status).length
          const config = statusConfig[status]
          return (
            <div
              key={status}
              className="rounded-lg border border-border/60 bg-card p-4"
            >
              <div className="flex items-center gap-2">
                <config.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{status}</span>
              </div>
              <p className="mt-1 font-serif text-2xl font-bold text-foreground">
                {count}
              </p>
            </div>
          )
        })}
      </div>

      {/* Table */}
      <div className="mt-6 rounded-xl border border-border/60 bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Trek</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Pax</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden lg:table-cell">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => {
              const config = statusConfig[booking.status]
              return (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {booking.id}
                  </TableCell>
                  <TableCell className="font-medium text-foreground">
                    {booking.name}
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {booking.trek}
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground md:table-cell">
                    {new Date(booking.date).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground md:table-cell">
                    {booking.participants}
                  </TableCell>
                  <TableCell>
                    <Badge className={`${config.className} border-0 text-xs`}>
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden text-foreground lg:table-cell">
                    {"INR "}
                    {booking.totalAmount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedBooking(booking)}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View booking {booking.id}</span>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
            {filteredBookings.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="py-8 text-center text-muted-foreground">
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Booking Detail Dialog */}
      <Dialog
        open={!!selectedBooking}
        onOpenChange={(open) => { if (!open) setSelectedBooking(null) }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif">
              Booking {selectedBooking?.id}
            </DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="flex flex-col gap-4 pt-2">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium text-foreground">{selectedBooking.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{selectedBooking.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{selectedBooking.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Trek</p>
                  <p className="font-medium text-foreground">{selectedBooking.trek}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <p className="font-medium text-foreground">
                    {new Date(selectedBooking.date).toLocaleDateString("en-IN", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Participants</p>
                  <p className="font-medium text-foreground">{selectedBooking.participants}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Amount</p>
                  <p className="font-medium text-foreground">
                    {"INR "}
                    {selectedBooking.totalAmount.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <Badge className={`${statusConfig[selectedBooking.status].className} border-0 text-xs`}>
                    {selectedBooking.status}
                  </Badge>
                </div>
              </div>
              {selectedBooking.notes && (
                <div className="text-sm">
                  <p className="text-muted-foreground">Notes</p>
                  <p className="mt-1 rounded-md bg-muted/50 p-3 text-foreground">
                    {selectedBooking.notes}
                  </p>
                </div>
              )}
              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  onClick={() => updateStatus(selectedBooking.id, "Confirmed")}
                  disabled={selectedBooking.status === "Confirmed"}
                  className="flex-1"
                >
                  Confirm
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateStatus(selectedBooking.id, "Pending")}
                  disabled={selectedBooking.status === "Pending"}
                  className="flex-1"
                >
                  Set Pending
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateStatus(selectedBooking.id, "Cancelled")}
                  disabled={selectedBooking.status === "Cancelled"}
                  className="flex-1 text-destructive hover:text-destructive"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
