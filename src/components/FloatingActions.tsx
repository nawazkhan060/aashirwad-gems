import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { BUSINESS, telHref, whatsappHref } from "../data/business";
import { NavigationIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop / tablet WhatsApp FAB */}
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(
          "fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 md:grid",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>

      {/* Mobile sticky action bar */}
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-400/30 bg-maroon-950/95 backdrop-blur-md md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-3 divide-x divide-gold-400/15">
          <a href={telHref(BUSINESS.phones[0].tel)} className="flex flex-col items-center gap-1 py-2.5 text-ivory-50 active:bg-ivory-50/10">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold-200 to-gold-500 text-maroon-950">
              <PhoneIcon className="h-4.5 w-4.5" strokeWidth={2.2} />
            </span>
            <span className="text-[11px] font-semibold">Call Now</span>
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-ivory-50 active:bg-ivory-50/10"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </span>
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>
          <a
            href={BUSINESS.maps.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-ivory-50 active:bg-ivory-50/10"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#4285F4] text-white">
              <NavigationIcon className="h-4.5 w-4.5" strokeWidth={2.2} />
            </span>
            <span className="text-[11px] font-semibold">Directions</span>
          </a>
        </div>
      </nav>
    </>
  );
}
