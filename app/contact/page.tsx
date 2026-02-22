"use client";

import { useState, useMemo } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { maharashtraTrekNames } from "@/lib/data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
const contactOptions = [
  {
    icon: Phone,
    title: "Call for Enquiry",
    subtitle: "Speak directly with our trekking experts",
    action: "Call Now",
    contact: "+91 98765 43210",
    availability: "Mon - Sat, 9am - 6pm IST",
    href: "tel:+919876543210",
    bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/20 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "Chat on WhatsApp",
    subtitle: "Get instant replies to your queries",
    action: "Start Chat",
    contact: "WhatsApp Business",
    availability: "24/7 Available",
    href: "https://wa.me/917020212486?text=Hi! I am interested in joining a trek with Miles With Nature. Can you share more details?",
    bgGradient: "bg-gradient-to-br from-green-500 to-green-600",
    iconBg: "bg-green-500/20 text-green-600",
  },
  {
    icon: Send,
    title: "Send Us a Message",
    subtitle: "Detailed inquiries and custom requests",
    action: "Fill Form",
    contact: "Contact Form",
    availability: "Response within 24 hours",
    href: "#contact-form",
    bgGradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    iconBg: "bg-orange-500/20 text-orange-600",
  },
];

const officeInfo = {
  address: ["Old Manali Road", "Manali, Himachal Pradesh 175131", "India"],
  email: ["hello@mileswithnature.com", "bookings@mileswithnature.com"],
  phone: "+91 98765 43210",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [trekSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    trek: "",
    subject: "",
    message: "",
  });

  const filteredTreks = useMemo(() => {
    if (!trekSearch) return maharashtraTrekNames;
    return maharashtraTrekNames.filter((trek) =>
      trek.toLowerCase().includes(trekSearch.toLowerCase()),
    );
  }, [trekSearch]);

  function handleInputChange(field: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  function formatWhatsAppMessage() {
    const subjectLabels: { [key: string]: string } = {
      booking: "🏔️ Trek Booking",
      inquiry: "❓ General Inquiry",
      custom: "🎯 Custom Trek Request",
      group: "👥 Group Booking",
      feedback: "💬 Feedback",
      partnership: "🤝 Partnership",
    };

    const cityLabels: { [key: string]: string } = {
      pune: "🏢 Pune",
      mumbai: "🏙️ Mumbai",
      solapur: "🏡 Solapur",
    };

    const trekLabels: { [key: string]: string } = maharashtraTrekNames.reduce(
      (acc, trek) => {
        acc[trek.toLowerCase()] = `🏔️ ${trek}`;
        return acc;
      },
      {} as { [key: string]: string },
    );

    const message = `🌟 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}${formData.phone ? `\n📱 *Phone:* ${formData.phone}` : ""}${formData.city ? `\n🏠 *City:* ${cityLabels[formData.city] || formData.city}` : ""}${formData.trek ? `\n🏔️ *Interested Trek:* ${trekLabels[formData.trek] || formData.trek}` : ""}
📋 *Subject:* ${subjectLabels[formData.subject] || formData.subject}

💬 *Message:*
${formData.message}

---
_Sent via Miles With Nature Contact Form_`;

    return encodeURIComponent(message);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Create WhatsApp link with formatted message
    const whatsappMessage = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/917020212486?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Show success state
    setSubmitted(true);

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        trek: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden from-primary/5 via-muted/30 to-accent/5 py-24 lg:py-32">
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div> */}
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">
              Get in Touch
            </span>
            <h1 className="text-balance font-serif text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl leading-[1.1]">
              Let&apos;s Start Your
              <br />
              <span className="text-primary italic">Adventure</span> Together
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl font-light">
              Ready to explore the mountains? Choose how you&apos;d like to
              connect with our trekking experts and let&apos;s plan your next
              unforgettable journey.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Choose Your Preferred Way
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                How Would You Like to
                <span className="text-primary italic block">
                  {" "}
                  Connect With Us?
                </span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-20">
              {contactOptions.map((option, index) => (
                <Card
                  key={option.title}
                  className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl shadow-black/5 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${option.bgGradient}`}
                  />
                  <CardContent className="relative p-8">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${option.iconBg} mb-6 group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}
                    >
                      <option.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 mb-4 text-sm leading-relaxed">
                      {option.subtitle}
                    </p>
                    <div className="space-y-1 mb-6">
                      <p className="text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300">
                        {option.contact}
                      </p>
                      <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                        {option.availability}
                      </p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-primary/20 bg-transparent text-primary hover:bg-primary hover:text-white group-hover:border-white/30 group-hover:text-white group-hover:hover:bg-white/20 transition-all duration-300"
                      onClick={(e) => {
                        if (option.href === "#contact-form") {
                          e.preventDefault();
                          document
                            .getElementById("contact-form")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {option.href.startsWith("#") ? (
                        <span>{option.action}</span>
                      ) : (
                        <a
                          href={option.href}
                          target={
                            option.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            option.href.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                        >
                          {option.action}
                        </a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Information */}
            <div className="from-muted/30 to-muted/10 rounded-3xl p-8 lg:p-12 mb-20">
              <div className="text-center mb-12">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Visit Our Office
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Planning a trek in person? Drop by our office in the heart of
                  Manali for personalized guidance and local insights.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Our Address
                  </h4>
                  {officeInfo.address.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Email Us
                  </h4>
                  {officeInfo.email.map((email) => (
                    <p key={email} className="text-sm text-muted-foreground">
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    </p>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href={`tel:${officeInfo.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {officeInfo.phone}
                    </a>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Mon - Sat, 9am - 6pm IST
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact-form">
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Send Us a Detailed Message
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have specific questions about a trek, need a custom itinerary,
                  or want to discuss group bookings? We&apos;re here to help
                  with all the details.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl shadow-black/5">
                  <CardContent className="p-8 sm:p-12">
                    {submitted ? (
                      <div className="py-12 text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full from-green-400 to-green-600 text-white mb-6">
                          <MessageCircle className="h-8 w-8" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                          Message Sent to WhatsApp!
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          Your message has been forwarded to our WhatsApp. Our
                          team will respond to you shortly.
                        </p>
                        <p className="text-sm text-muted-foreground mb-8">
                          If WhatsApp didn't open automatically, you can also
                          call us directly or visit our office.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button
                            variant="outline"
                            onClick={() => setSubmitted(false)}
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            Send Another Message
                          </Button>
                          <Button asChild>
                            <a href="/treks">Explore Our Treks</a>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label
                              htmlFor="name"
                              className="text-sm font-medium text-foreground"
                            >
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                              placeholder="Enter your full name"
                              required
                              className="h-11 bg-white/50 border-border/50 focus:bg-white transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium text-foreground"
                            >
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              placeholder="your.email@example.com"
                              required
                              className="h-11 bg-white/50 border-border/50 focus:bg-white transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label
                              htmlFor="phone"
                              className="text-sm font-medium text-foreground"
                            >
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                              }
                              placeholder="+91 XXXXX XXXXX"
                              className="h-11 bg-white/50 border-border/50 focus:bg-white transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="city"
                              className="text-sm font-medium text-foreground"
                            >
                              Your City
                            </Label>
                            <Select
                              value={formData.city}
                              onValueChange={(value) =>
                                handleInputChange("city", value)
                              }
                            >
                              <SelectTrigger
                                id="city"
                                className="h-11 bg-white/50 border-border/50 focus:bg-white transition-all"
                              >
                                <SelectValue placeholder="Select your city" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pune">🏢 Pune</SelectItem>
                                <SelectItem value="mumbai">
                                  🏙️ Mumbai
                                </SelectItem>
                                <SelectItem value="solapur">
                                  🏡 Solapur
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label
                              htmlFor="trek"
                              className="text-sm font-medium text-foreground"
                            >
                              Interested Trek
                            </Label>
                      
                            <div className="space-y-2">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className="h-11 w-full justify-between bg-white/50 border-border/50 focus:bg-white transition-all"
                                  >
                                    {formData.trek || "Select a trek"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </PopoverTrigger>

                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Search trek..." />
                                    <CommandEmpty>No trek found.</CommandEmpty>

                                    <CommandGroup className="max-h-60 overflow-y-auto">
                                      {filteredTreks.map((trek) => (
                                        <CommandItem
                                          key={trek}
                                          value={trek}
                                          onSelect={() =>
                                            handleInputChange("trek", trek)
                                          }
                                        >
                                          <Check
                                            // className={cn(
                                            //   "mr-2 h-4 w-4",
                                            //   formData.trek === trek
                                            //     ? "opacity-100"
                                            //     : "opacity-0",
                                            // )}
                                          />
                                          🏔️ {trek}
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="subject"
                              className="text-sm font-medium text-foreground"
                            >
                              Subject *
                            </Label>
                            <Select
                              value={formData.subject}
                              onValueChange={(value) =>
                                handleInputChange("subject", value)
                              }
                              required
                            >
                              <SelectTrigger
                                id="subject"
                                className="h-11 bg-white/50 border-border/50 focus:bg-white transition-all"
                              >
                                <SelectValue placeholder="What can we help you with?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="booking">
                                  🏔️ Trek Booking
                                </SelectItem>
                                <SelectItem value="inquiry">
                                  ❓ General Inquiry
                                </SelectItem>
                                <SelectItem value="custom">
                                  🎯 Custom Trek Request
                                </SelectItem>
                                <SelectItem value="group">
                                  👥 Group Booking
                                </SelectItem>
                                <SelectItem value="feedback">
                                  💬 Feedback
                                </SelectItem>
                                <SelectItem value="partnership">
                                  🤝 Partnership
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="message"
                            className="text-sm font-medium text-foreground"
                          >
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            value={
                              formData.message ||
                              "Tell us about your trekking plans, questions, or special requirements. The more details you share, the better we can assist you!"
                            }
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            placeholder="Tell us about your trekking plans, questions, or special requirements. The more details you share, the better we can assist you!"
                            rows={6}
                            required
                            className="bg-white/50 border-border/50 focus:bg-white transition-all resize-none"
                          />
                        </div>

                        <div className="pt-4">
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 gap-3 from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg font-semibold shadow-xl shadow-green-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30"
                          >
                            <MessageCircle className="h-5 w-5" />
                            Send to WhatsApp
                          </Button>
                          <p className="text-xs text-muted-foreground text-center mt-3">
                            By sending this message, you agree to our privacy
                            policy. We respect your privacy and will never share
                            your information.
                          </p>
                        </div>
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
  );
}
