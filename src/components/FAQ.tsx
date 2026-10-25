import { useState } from "react";
import { cn } from "../utils/cn";
import { whatsappHref } from "../data/business";
import { ChevronDownIcon, WhatsAppIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "How do I know the gemstone is genuine?",
    hi: "रत्न असली है, यह कैसे पता चलेगा?",
    a: "Every stone we sell is natural and comes with a lab certificate. You are welcome to compare pieces under light and loupe at the shop, and to get the stone re-tested at any independent gem lab — we stand by what we sell.",
  },
  {
    q: "Which gemstone should I wear for my Rashi?",
    hi: "मेरी राशि के लिए कौन सा रत्न सही है?",
    a: "Use the Rashi Guide above for the traditional recommendation, then visit us or send your birth details on WhatsApp. We check your Kundali and current planetary period before suggesting the stone, its weight and the metal to set it in — the consultation is free.",
  },
  {
    q: "Do you make rings, pendants and bracelets?",
    hi: "क्या आप अंगूठी, लॉकेट व ब्रेसलेट बनाते हैं?",
    a: "Yes. We set gemstones in gold, silver and panchdhatu rings or pendants, made to your finger size, usually within 3–7 days. Open-back settings are available so the stone touches the skin as per Vedic practice.",
  },
  {
    q: "What is the price range?",
    hi: "रत्नों की कीमत कितनी होती है?",
    a: "Prices depend on the stone, its weight (ratti / carat), origin, colour and clarity. We keep natural stones across budgets — from affordable substitutes like Opal and Sunela to premium Ceylon Pukhraj and Neelam. Message us on WhatsApp with your requirement for a clear quote.",
  },
  {
    q: "Do you energise (pran-pratishtha) the stone before wearing?",
    hi: "क्या रत्न की प्राण-प्रतिष्ठा की जाती है?",
    a: "On request, yes. We also guide you on the correct day, time, finger and mantra for wearing each stone so that you can perform the vidhi at home.",
  },
  {
    q: "Can I order from outside Nagpur?",
    hi: "क्या नागपुर के बाहर से ऑर्डर कर सकते हैं?",
    a: "Yes. Share your requirement on WhatsApp, we'll send photos/videos of available stones with their certificates, and ship securely across India once you confirm.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              id="faq-heading"
              align="left"
              eyebrow="FAQ"
              eyebrowHi="अक्सर पूछे जाने वाले प्रश्न"
              title="Questions people ask before buying a gemstone"
              subtitle="Still unsure? Send us a message — we reply in Hindi, Marathi or English."
            />
            <a
              href={whatsappHref("Namaste Aashirwad Gems! 🙏 I have a question about gemstones.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1fbf5b]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Ask a question on WhatsApp
            </a>
          </div>

          <div className="divide-y divide-gold-200 rounded-3xl border border-gold-200 bg-ivory-50">
            {FAQS.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span>
                      <span className="block font-display text-lg font-semibold text-maroon-950">{item.q}</span>
                      <span lang="hi" className="mt-0.5 block font-hindi text-sm text-maroon-700/70">
                        {item.hi}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-300 text-maroon-800 transition-transform duration-300",
                        open && "rotate-180 bg-maroon-800 text-ivory-50"
                      )}
                    >
                      <ChevronDownIcon className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={cn("grid transition-all duration-300 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-relaxed text-maroon-900/75 sm:px-6 sm:text-base">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
