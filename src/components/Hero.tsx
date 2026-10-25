import heroImg from "../assets/hero.jpg";
import { BUSINESS, telHref, whatsappHref } from "../data/business";
import { CheckIcon, ExternalLinkIcon, NavigationIcon, PhoneIcon, ShieldCheckIcon, SparklesIcon, WhatsAppIcon } from "./Icons";

const HIGHLIGHTS = [
  { en: "100% Natural & Pure", hi: "शुद्ध व प्राकृतिक" },
  { en: "Lab Certified Stones", hi: "प्रमाणित रत्न" },
  { en: "Honest Rashi Guidance", hi: "सही सलाह" },
  { en: "Fair, Transparent Prices", hi: "उचित दाम" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-maroon-950 bg-mandala text-ivory-50"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-maroon-600/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
            <SparklesIcon className="h-3.5 w-3.5" />
            Itwari, Nagpur · Trusted Gemstone Shop
          </span>

          <h1 id="hero-heading" className="mt-6">
            <span
              lang="hi"
              className="block font-hindi text-5xl font-bold leading-[1.35] pt-3 pb-1 text-gold-gradient animate-shine sm:text-6xl sm:leading-[1.3] sm:pt-4 lg:text-7xl"
            >
              आशीर्वाद जेम्स
            </span>
            <span className="mt-2 block font-display text-2xl font-medium text-ivory-50 sm:text-3xl lg:text-4xl">
              Aashirwad Gems &amp; Jewellers
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-100/80 sm:text-lg">
            100% pure, natural &amp; certified gemstones for every Rashi — Navratna, Rudraksha, Sphatik Shree Yantra and
            made-to-order rings &amp; pendants. Honest guidance and fair prices, trusted by families across Nagpur.
          </p>
          <p lang="hi" className="mt-2 max-w-xl font-hindi text-sm text-gold-200/80 sm:text-base">
            हर राशि के लिए 100% शुद्ध एवं प्रमाणित रत्न — नवरत्न, रुद्राक्ष, स्फटिक श्री यंत्र व अंगूठी-लॉकेट।
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={telHref(BUSINESS.phones[0].tel)}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 px-6 text-sm font-bold text-maroon-950 shadow-gold transition hover:brightness-105 active:scale-[0.98]"
            >
              <PhoneIcon className="h-4.5 w-4.5" strokeWidth={2.2} />
              Call {BUSINESS.phones[0].display}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1fbf5b] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={BUSINESS.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ivory-100/25 px-6 text-sm font-semibold text-ivory-50 transition hover:border-gold-400/70 hover:bg-ivory-50/5 active:scale-[0.98]"
            >
              <NavigationIcon className="h-4.5 w-4.5" />
              Get Directions
            </a>
          </div>

          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h.en} className="flex items-center gap-2.5">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400/20 text-gold-300 ring-1 ring-gold-400/40">
                  <CheckIcon className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-ivory-100/90">
                  {h.en} <span lang="hi" className="font-hindi text-ivory-100/50">· {h.hi}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-300/30 via-transparent to-gold-500/20 blur-xl" />
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 p-[2px] shadow-2xl shadow-maroon-950/60">
              <div className="overflow-hidden rounded-[calc(1.75rem-2px)] bg-maroon-900">
                <img
                  src={heroImg}
                  alt="Navratna gemstones — ruby, pearl, coral, emerald, yellow sapphire, diamond, blue sapphire, hessonite and cat's eye on velvet"
                  width={1400}
                  height={933}
                  className="aspect-[4/3] w-full object-cover sm:aspect-[3/2] lg:aspect-[4/3]"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="absolute -left-3 top-6 animate-float rounded-2xl border border-gold-400/40 bg-maroon-950/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                  <ShieldCheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ivory-50">100% Pure</p>
                  <p lang="hi" className="font-hindi text-xs text-gold-200">शुद्ध एवं प्राकृतिक</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 bottom-8 animate-float-slow rounded-2xl border border-gold-400/40 bg-maroon-950/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                  <SparklesIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ivory-50">9 Navratna + More</p>
                  <p lang="hi" className="font-hindi text-xs text-gold-200">नवरत्न · रुद्राक्ष · स्फटिक</p>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS.maps.place}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-gold-400/50 bg-ivory-50 px-4 py-2 text-xs font-semibold text-maroon-900 shadow-lg transition hover:bg-gold-100"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#4285F4] text-[10px] font-black text-white">G</span>
              Find us on Google Maps
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
