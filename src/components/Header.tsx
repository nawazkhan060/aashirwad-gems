import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { BUSINESS, telHref, whatsappHref } from "../data/business";
import { GemIcon, MenuIcon, PhoneIcon, WhatsAppIcon, XIcon } from "./Icons";

const NAV = [
  { href: "#collection", label: "Collection", hi: "संग्रह" },
  { href: "#rashi", label: "Rashi Guide", hi: "राशि" },
  { href: "#why-us", label: "Why Us", hi: "क्यों हम" },
  { href: "#visit", label: "Visit Us", hi: "पता" },
  { href: "#faq", label: "FAQ", hi: "प्रश्न" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${BUSINESS.nameEn} home`}>
      <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 shadow-gold ring-1 ring-gold-200/60 transition-transform group-hover:scale-105">
        <GemIcon className="h-6 w-6 text-maroon-900" strokeWidth={2} />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-lg font-semibold tracking-wide sm:text-xl",
            dark ? "text-maroon-900" : "text-ivory-50"
          )}
        >
          Aashirwad Gems
        </span>
        <span className={cn("block font-hindi text-xs pt-0.5 leading-normal", dark ? "text-maroon-700" : "text-gold-300")}>
          आशीर्वाद जेम्स एंड ज्वेलर्स
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-gold-400/20 bg-maroon-950/90 shadow-lg shadow-maroon-950/30 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-ivory-100/85 transition hover:text-gold-200"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-ivory-100/20 px-4 text-sm font-medium text-ivory-50 transition hover:border-gold-400/60 hover:bg-ivory-50/5"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href={telHref(BUSINESS.phones[0].tel)}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-4 text-sm font-semibold text-maroon-950 shadow-gold transition hover:brightness-105"
          >
            <PhoneIcon className="h-4 w-4" strokeWidth={2.2} />
            {BUSINESS.phones[0].display}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-ivory-100/15 text-ivory-50 md:hidden"
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-gold-400/10 bg-maroon-950/95 backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ivory-50 transition hover:bg-ivory-50/5"
            >
              {item.label}
              <span className="font-hindi text-sm text-gold-300">{item.hi}</span>
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-gold-400/10 pt-3">
            <a
              href={telHref(BUSINESS.phones[0].tel)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 text-sm font-semibold text-maroon-950"
            >
              <PhoneIcon className="h-4 w-4" strokeWidth={2.2} /> Call Now
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
