import { CertificateIcon, HandHeartIcon, RingIcon, ScaleIcon, ShieldCheckIcon } from "./Icons";

const ITEMS = [
  { icon: ShieldCheckIcon, en: "100% Natural Stones", hi: "100% प्राकृतिक रत्न" },
  { icon: CertificateIcon, en: "Certificate with Every Gem", hi: "हर रत्न के साथ प्रमाण पत्र" },
  { icon: HandHeartIcon, en: "Free Rashi Consultation", hi: "निःशुल्क राशि परामर्श" },
  { icon: RingIcon, en: "Custom Rings & Pendants", hi: "अंगूठी व लॉकेट बनवाएँ" },
  { icon: ScaleIcon, en: "Honest, Fair Pricing", hi: "ईमानदार, उचित दाम" },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 border-b border-gold-300/40 bg-ivory-100" aria-label="Why customers trust us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 divide-gold-300/40 md:grid-cols-5 md:divide-x">
          {ITEMS.map(({ icon: Icon, en, hi }, i) => (
            <li
              key={en}
              className={
                "flex items-center gap-3 px-3 py-5 sm:px-5 " +
                (i === ITEMS.length - 1 ? "col-span-2 justify-center md:col-span-1 md:justify-start" : "")
              }
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-100 to-gold-200 text-maroon-800 ring-1 ring-gold-400/50">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight text-maroon-900">{en}</p>
                <p lang="hi" className="font-hindi text-xs leading-tight text-maroon-700/80">
                  {hi}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
