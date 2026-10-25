import { useState } from "react";
import { cn } from "../utils/cn";
import { BUSINESS, telHref, whatsappHref } from "../data/business";
import { RASHIS, gemById } from "../data/gems";
import { ArrowRightIcon, PhoneIcon, SparklesIcon, WhatsAppIcon } from "./Icons";
import OpalArt from "./OpalArt";
import SectionHeading from "./SectionHeading";

export default function RashiGuide() {
  const [selectedId, setSelectedId] = useState(RASHIS[0].id);
  const rashi = RASHIS.find((r) => r.id === selectedId)!;
  const gem = gemById(rashi.gemId);
  const alt = rashi.altGemId ? gemById(rashi.altGemId) : undefined;

  const message = `Namaste Aashirwad Gems! 🙏 My Rashi is ${rashi.nameHi} (${rashi.nameEn}). Please guide me about ${gem.nameEn} (${gem.nameHi}) — quality, certification and price.`;

  return (
    <section id="rashi" className="relative overflow-hidden bg-maroon-950 bg-mandala py-20 text-ivory-50 lg:py-28" aria-labelledby="rashi-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-maroon-600/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="rashi-heading"
          tone="dark"
          eyebrow="Rashi Ratna Guide"
          eyebrowHi="राशि रत्न मार्गदर्शिका"
          title="Which gemstone is right for you?"
          subtitle="Tap your Rashi (moon sign) to see its ruling planet and the gemstone traditionally recommended for it."
        />

        <div className="mt-12 grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6" role="tablist" aria-label="Select your Rashi">
          {RASHIS.map((r) => {
            const selected = r.id === selectedId;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setSelectedId(r.id)}
                className={cn(
                  "group relative flex flex-col items-center rounded-2xl border px-2 py-3.5 text-center transition-all duration-300 sm:py-4",
                  selected
                    ? "border-gold-300 bg-gradient-to-b from-gold-200 via-gold-300 to-gold-500 text-maroon-950 shadow-gold scale-[1.03]"
                    : "border-ivory-100/10 bg-ivory-50/[0.04] text-ivory-50 hover:border-gold-400/50 hover:bg-ivory-50/[0.08]"
                )}
              >
                <span className={cn("text-2xl leading-none sm:text-3xl", selected ? "text-maroon-900" : "text-gold-300")} aria-hidden>
                  {r.symbol}
                </span>
                <span lang="hi" className="mt-2 font-hindi text-base font-semibold leading-none sm:text-lg">
                  {r.nameHi}
                </span>
                <span className={cn("mt-1 text-[11px] font-medium uppercase tracking-wider", selected ? "text-maroon-800" : "text-ivory-100/60")}>
                  {r.nameEn}
                </span>
                <span className={cn("mt-1 hidden text-[10px] sm:block", selected ? "text-maroon-800/80" : "text-ivory-100/40")}>{r.dates}</span>
              </button>
            );
          })}
        </div>

        <div key={rashi.id} className="mt-8 animate-fade-up">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 p-[1.5px] shadow-2xl shadow-maroon-950/60">
            <div className="grid overflow-hidden rounded-[calc(1.75rem-1.5px)] bg-maroon-900/95 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[4/3] bg-neutral-900 lg:aspect-auto lg:min-h-[380px]">
                {gem.art === "opal" ? (
                  <OpalArt />
                ) : (
                  <img
                    src={gem.image}
                    alt={`${gem.nameEn} (${gem.nameHi}) recommended for ${rashi.nameEn}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-maroon-950/80 px-4 py-2.5 backdrop-blur">
                  <span className="text-3xl text-gold-300" aria-hidden>
                    {rashi.symbol}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-200">Your Rashi</p>
                    <p className="font-hindi text-lg font-semibold leading-tight">
                      {rashi.nameHi} <span className="font-sans text-sm font-medium text-ivory-100/70">({rashi.nameEn})</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">Recommended Gemstone · अनुशंसित रत्न</p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {gem.nameEn}{" "}
                  <span lang="hi" className="font-hindi text-gold-gradient">
                    {gem.nameHi}
                  </span>
                </h3>

                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl border border-ivory-100/10 bg-ivory-50/[0.04] p-3.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-ivory-100/50">Ruling Planet · स्वामी ग्रह</dt>
                    <dd className="mt-1 font-semibold text-ivory-50">
                      {rashi.lordEn} <span lang="hi" className="font-hindi text-gold-200">({rashi.lordHi})</span>
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-ivory-100/10 bg-ivory-50/[0.04] p-3.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-ivory-100/50">How to wear · कैसे पहनें</dt>
                    <dd className="mt-1 font-semibold text-ivory-50">{gem.wear}</dd>
                  </div>
                </dl>

                <ul className="mt-5 space-y-2 text-sm text-ivory-100/85">
                  {gem.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <SparklesIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {alt && (
                  <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3.5 py-1.5 text-xs text-gold-100">
                    <span className="font-semibold">Also consider:</span> {alt.nameEn}{" "}
                    <span lang="hi" className="font-hindi">
                      ({alt.nameHi})
                    </span>
                  </p>
                )}

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1fbf5b]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Ask about {gem.alias} for {rashi.nameEn}
                    <ArrowRightIcon className="h-4 w-4" strokeWidth={2.2} />
                  </a>
                  <a
                    href={telHref(BUSINESS.phones[0].tel)}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-gold-400/50 px-5 text-sm font-semibold text-gold-100 transition hover:bg-gold-400/10"
                  >
                    <PhoneIcon className="h-4 w-4" strokeWidth={2.2} />
                    Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-ivory-100/50">
          Recommendations follow traditional Vedic astrology (Rashi lord). Your ideal stone also depends on your Kundali / birth
          chart and current planetary periods — visit us for a free, no-obligation consultation before you buy.
          <span lang="hi" className="mt-1 block font-hindi text-ivory-100/60">
            खरीदने से पहले अपनी कुंडली के अनुसार निःशुल्क परामर्श के लिए हमसे मिलें।
          </span>
        </p>
      </div>
    </section>
  );
}
