"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Old Manali Road", "Manali, Himachal Pradesh 175131", "India"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@mileswithnature.com", "bookings@mileswithnature.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "Mon - Sat, 9am - 6pm IST"],
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b bg-muted/50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Get in Touch
            </p>
            <h1 className="mt-4 text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Have questions about a trek, need help choosing the right
              adventure, or just want to say hello? We would love to hear from
              you.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Reach Out to Us
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Whether you want to book a trek, partner with us, or just have
                  a chat about the mountains, our team is here to help.
                </p>

                <div className="mt-8 flex flex-col gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {info.title}
                        </h3>
                        {info.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-muted-foreground"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <Card className="border-border/60">
                  <CardContent className="p-6 sm:p-8">
                    {submitted ? (
                      <div className="py-12 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <Send className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                          Message Sent!
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Thank you for reaching out. We will get back to you
                          within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-6"
                          onClick={() => setSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                      >
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Select>
                              <SelectTrigger id="subject">
                                <SelectValue placeholder="Choose a topic" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="booking">
                                  Trek Booking
                                </SelectItem>
                                <SelectItem value="inquiry">
                                  General Inquiry
                                </SelectItem>
                                <SelectItem value="custom">
                                  Custom Trek Request
                                </SelectItem>
                                <SelectItem value="feedback">
                                  Feedback
                                </SelectItem>
                                <SelectItem value="partnership">
                                  Partnership
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your inquiry..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button type="submit" size="lg" className="gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
