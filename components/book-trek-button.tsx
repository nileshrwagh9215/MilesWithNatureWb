"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface BookTrekButtonProps {
  trekName: string;
  className?: string;
}
import { whatsappNumber } from "@/lib/data";
export function BookTrekButton({ trekName, className }: BookTrekButtonProps) {
  const pathname = usePathname();

  const handleBookClick = () => {
    const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}`;
    const message = `🌟 Trek Booking Inquiry

I am interested in booking the following trek:
🏔️ ${trekName}

Please share the available dates and further details.

---
Sent via Miles With Nature Website  - ${currentUrl}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      className={`gap-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg shadow-green-600/20 ${className}`}
      size="lg"
      onClick={handleBookClick}
    >
      <MessageCircle className="h-5 w-5" />
      Book This Trek
    </Button>
  );
}
