import { useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { BUSINESS, gemEnquiryHref, telHref, whatsappHref } from "../data/business";
import { CATEGORIES, GEMS, type Gem, type GemCategory } from "../data/gems";
import { ArrowRightIcon, PhoneIcon, SparklesIcon, WhatsAppIcon } from "./Icons";
import OpalArt from "./OpalArt";
import SectionHeading from "./SectionHeading";

const ALSO_AVAILABLE = [
  "Firoza (Turquoise)",
  "Jamunia (Amethyst)",
  "Sunela (Citrine)",
  "Moonstone",
  "Zircon",
  "Tiger's Eye",
  "Sulemani Hakik",
  "Sphatik Mala",
  "Rudraksha Mala",
  "Parad & Sphatik Shivling",
];

function GemCard({ gem }: { gem: Gem }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold-300/40 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-gold">
      <div className="relative aspect-square overflow-hidden bg-neutral-900">
        {gem.art === "opal" ? (
          <OpalArt className="transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <img
            src={gem.image}
            alt={`${gem.nameEn} (${gem.alias}) gemstone`}
            loading="lazy"
            decoding="async"
            width={640}
            height={640}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {gem.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-gold-200 to-gold-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon-950 shadow">
            {gem.tag}
          </span>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
          <span className="h-2.5 w-2.5 rounded-full ring-2 ring-white/30" style={{ background: gem.accent }} />
          <span className="font-medium">{gem.planetEn}</span>
          <span lang="hi" className="font-hindi text-white/80">
            · {gem.planetHi}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-maroon-950">{gem.nameEn}</h3>
            <p className="text-xs font-medium uppercase tracking-wider text-maroon-700/70">{gem.alias}</p>
          </div>
          <p lang="hi" className="shrink-0 font-hindi text-2xl font-semibold leading-none text-maroon-700">
            {gem.nameHi}
          </p>
        </div>

        <ul className="mt-4 space-y-1.5 text-sm text-maroon-900/80">
          {gem.benefits.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {gem.wear && (
          <p className="mt-3 flex items-center gap-1.5 text-xs text-maroon-700/70">
            <SparklesIcon className="h-3.5 w-3.5 text-gold-500" />
            {gem.wear}
          </p>
        )}

        <div className="mt-5 flex gap-2 border-t border-gold-200/70 pt-4">
          <a
            href={gemEnquiryHref(gem.nameEn, gem.nameHi)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-maroon-800 text-sm font-semibold text-ivory-50 transition hover:bg-maroon-700"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            Ask Price on WhatsApp
          </a>
          <a
            href={telHref(BUSINESS.phones[0].tel)}
            aria-label={`Call to enquire about ${gem.nameEn}`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-400/60 text-maroon-800 transition hover:bg-gold-100"
          >
            <PhoneIcon className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </article>
  );
}

const MOBILE_LIMIT = 6;

export default function Collection() {
  const [active, setActive] = useState<GemCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const list = useMemo(() => (active === "all" ? GEMS : GEMS.filter((g) => g.category === active)), [active]);
  const hiddenOnMobile = list.length - MOBILE_LIMIT;

  return (
    <section id="collection" className="relative bg-ivory-50 bg-paisley-light py-20 lg:py-28" aria-labelledby="collection-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="collection-heading"
          eyebrow="Our Collection"
          eyebrowHi="हमारा संग्रह"
          title="Gemstones for every Rashi & every need"
          subtitle="Natural, untreated stones hand-picked for colour, clarity and astrological purity. Every gemstone comes with a certificate and honest guidance on what suits you."
        />

        <div className="mt-10 -mx-4 overflow-x-auto px-4 scrollbar-none sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center" role="tablist" aria-label="Filter collection">
            {CATEGORIES.map((c) => {
              const selected = c.id === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setActive(c.id);
                    setShowAll(false);
                  }}
                  className={cn(
                    "inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border px-5 text-sm font-semibold transition",
                    selected
                      ? "border-maroon-800 bg-maroon-800 text-ivory-50 shadow-lg shadow-maroon-900/20"
                      : "border-gold-300 bg-white text-maroon-800 hover:border-gold-500 hover:bg-gold-50"
                  )}
                >
                  {c.labelEn}
                  <span lang="hi" className={cn("font-hindi text-xs", selected ? "text-gold-200" : "text-maroon-700/60")}>
                    {c.labelHi}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div key={active} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((gem, i) => (
            <div
              key={gem.id}
              className={cn("h-full animate-fade-up", !showAll && i >= MOBILE_LIMIT && "hidden sm:block")}
              style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
            >
              <GemCard gem={gem} />
            </div>
          ))}
        </div>

        {!showAll && hiddenOnMobile > 0 && (
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-maroon-800 bg-white px-6 text-sm font-semibold text-maroon-800 shadow-card transition hover:bg-maroon-50"
            >
              Show {hiddenOnMobile} more gemstones
              <ArrowRightIcon className="h-4 w-4 rotate-90" strokeWidth={2.2} />
            </button>
          </div>
        )}

        <div className="mt-12 rounded-3xl border border-gold-300/50 bg-white/70 p-6 shadow-card backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-maroon-950">
                Looking for something else? <span lang="hi" className="font-hindi text-maroon-700">और भी बहुत कुछ…</span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-maroon-900/75">
                We also stock semi-precious stones, malas and puja items. If it isn't listed here, just ask — we'll source
                it for you.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ALSO_AVAILABLE.map((item) => (
                  <li key={item} className="rounded-full border border-gold-300/60 bg-ivory-100 px-3 py-1 text-xs font-medium text-maroon-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={whatsappHref("Namaste Aashirwad Gems! 🙏 I am looking for a gemstone that is not listed on your website. Can you help me?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 px-6 text-sm font-bold text-maroon-950 shadow-gold transition hover:brightness-105"
            >
              Ask on WhatsApp
              <ArrowRightIcon className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
