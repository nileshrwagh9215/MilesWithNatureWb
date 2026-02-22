"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/treks", label: "Treks" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/safety", label: "Safety" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-full max-w-9xl px-6 lg:px-12">
      <nav className="flex items-center justify-between rounded-full px-6 py-2.5 bg-white/90 backdrop-blur-md border border-stone-200/50 shadow-xl shadow-stone-900/5 transition-all duration-500">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white transition-all duration-500">
            <Mountain className="h-5 w-5" />
          </div>

          <span className="font-serif text-xl font-medium tracking-tight text-stone-900">
            Miles with{" "}
            <span className="italic text-stone-500">
              Nature
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 text-stone-900 hover:text-stone-600"
                >
                  {link.label}

                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-stone-900"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Button
            size="sm"
            asChild
            className="rounded-full px-6 text-[11px] font-bold uppercase tracking-widest bg-stone-900 text-white hover:bg-stone-800 transition-all duration-500"
          >
            <Link href="/treks">Book Now</Link>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-stone-100 text-stone-900"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-full flex-col border-l border-stone-200 bg-white p-0 sm:w-[380px]"
            >
              {/* Header */}
              <SheetHeader className="p-10 pb-6 text-left">
                <SheetTitle className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400">
                  Navigation
                </SheetTitle>
              </SheetHeader>

              {/* Navigation Links */}
              <div className="flex-1 px-10">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block text-4xl font-medium tracking-tighter transition-colors duration-300",
                          pathname === link.href
                            ? "text-stone-900"
                            : "text-stone-300 hover:text-stone-600"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-10 pt-6 border-t border-stone-50">
                <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-widest text-stone-400">
                  <span>Maharashtra</span>
                  <span className="h-px w-8 bg-stone-200" />
                  <span>Archive 2026</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
}