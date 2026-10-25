import { BUSINESS, telHref, whatsappHref } from "../data/business";
import { Logo } from "./Header";
import { ClockIcon, ExternalLinkIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

const LINKS = [
  { href: "#collection", label: "Our Collection" },
  { href: "#rashi", label: "Rashi Ratna Guide" },
  { href: "#why-us", label: "Why Aashirwad Gems" },
  { href: "#visit", label: "Visit / Directions" },
  { href: "#faq", label: "FAQ" },
];

const GEM_LINKS = ["Pukhraj (Yellow Sapphire)", "Neelam (Blue Sapphire)", "Panna (Emerald)", "Manik (Ruby)", "Moonga (Red Coral)", "Moti (Pearl)", "Gomed (Hessonite)", "Lehsunia (Cat's Eye)", "Opal", "Rudraksha", "Sphatik Shree Yantra"];

export default function Footer() {
  return (
    <footer className="relative bg-maroon-950 bg-mandala text-ivory-100">
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 md:pb-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory-100/70">
              100% pure, natural and certified gemstones in Itwari, Nagpur. Navratna, Rudraksha, Sphatik and made-to-order
              jewellery — with honest Rashi guidance and fair prices.
            </p>
            <p lang="hi" className="mt-2 max-w-sm font-hindi text-sm text-gold-200/80">
              विश्वास के साथ शुद्ध रत्न — आपके आशीर्वाद के लिए।
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={telHref(BUSINESS.phones[0].tel)}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-gold-200 to-gold-500 px-4 text-sm font-semibold text-maroon-950"
              >
                <PhoneIcon className="h-4 w-4" strokeWidth={2.2} /> Call Now
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory-100/80 transition hover:text-gold-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">Gemstones</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {GEM_LINKS.map((g) => (
                <li key={g}>
                  <a href="#collection" className="text-ivory-100/80 transition hover:text-gold-200">
                    {g}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">Contact</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <div>
                  <p className="text-ivory-100/90">{BUSINESS.addressEn}</p>
                  <p lang="hi" className="font-hindi text-ivory-100/60">
                    {BUSINESS.addressHi}
                  </p>
                  <a
                    href={BUSINESS.maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-gold-200 hover:text-gold-100"
                  >
                    Get directions <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <div className="space-y-1">
                  {BUSINESS.phones.map((p) => (
                    <a key={p.tel} href={telHref(p.tel)} className="block text-ivory-100/90 hover:text-gold-200">
                      +91 {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <div className="space-y-0.5 text-ivory-100/90">
                  {BUSINESS.hours.map((h) => (
                    <p key={h.days}>
                      {h.days}: <span className="text-ivory-100/70">{h.time}</span>
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gold-400/15 pt-6 text-xs text-ivory-100/50">
          <p>
            Gemstone benefits described on this page are based on traditional Vedic astrology beliefs and are shared for
            informational purposes only. They are not a substitute for medical, legal or financial advice.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {BUSINESS.nameEn}, Nagpur. All rights reserved.</p>
            <p lang="hi" className="font-hindi text-gold-200/70">
              ॐ · शुभ लाभ · नागपुर से सप्रेम
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
