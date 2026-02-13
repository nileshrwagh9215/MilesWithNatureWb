import { Map, FileText, ClipboardList, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { treks, blogPosts } from "@/lib/data"

const stats = [
  {
    title: "Active Treks",
    value: treks.length.toString(),
    icon: Map,
    description: "Currently listed treks",
  },
  {
    title: "Blog Posts",
    value: blogPosts.length.toString(),
    icon: FileText,
    description: "Published articles",
  },
  {
    title: "Bookings",
    value: "24",
    icon: ClipboardList,
    description: "This month",
  },
  {
    title: "Trekkers",
    value: "156",
    icon: Users,
    description: "Registered this month",
  },
]

export default function AdminDashboardPage() {
  return (
    <div>
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back! Here is an overview of your trekking operations.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border/60">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
              </div>
              <p className="mt-2 font-serif text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-10">
        <h2 className="font-serif text-xl font-bold text-foreground">
          Recent Activity
        </h2>
        <div className="mt-4 rounded-xl border border-border/60 bg-card">
          <div className="divide-y divide-border/50">
            {[
              {
                action: "New booking received",
                detail: "Kedarkantha Summit - 3 trekkers",
                time: "2 hours ago",
              },
              {
                action: "Blog post published",
                detail: "Essential Trekking Gear Guide",
                time: "1 day ago",
              },
              {
                action: "New inquiry",
                detail: "Custom trek request for Ladakh",
                time: "2 days ago",
              },
              {
                action: "Booking confirmed",
                detail: "Valley of Flowers - 5 trekkers",
                time: "3 days ago",
              },
              {
                action: "Review received",
                detail: "5 star rating for Hampta Pass trek",
                time: "4 days ago",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
