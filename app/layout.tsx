import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { WhatsAppButton } from "@/components/whatsapp-button"

import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Miles With Nature | Trekking Adventures",
  description:
    "Discover breathtaking treks across the most beautiful mountain ranges. Join Miles With Nature for unforgettable trekking experiences.",
}

export const viewport: Viewport = {
  themeColor: "#2d6a4f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
