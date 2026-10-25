import { CertificateIcon, GemIcon, HandHeartIcon, HeartIcon, RingIcon, ShieldCheckIcon, SparklesIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    icon: ShieldCheckIcon,
    title: "100% Natural & Untreated",
    hi: "शुद्ध व प्राकृतिक",
    text: "Only natural, unheated stones — no glass-filled, synthetic or dyed imitations. What you see is what the earth made.",
  },
  {
    icon: CertificateIcon,
    title: "Certificate with Every Stone",
    hi: "प्रमाण पत्र के साथ",
    text: "Each gemstone comes with a lab certificate. You are free to get it re-tested at any gem lab of your choice.",
  },
  {
    icon: HandHeartIcon,
    title: "Honest Rashi Guidance",
    hi: "सही व ईमानदार सलाह",
    text: "We suggest the stone that suits you — not the costliest one. Free consultation based on your Rashi or Kundali.",
  },
  {
    icon: RingIcon,
    title: "Made-to-Order Jewellery",
    hi: "अंगूठी व लॉकेट",
    text: "Rings, pendants & bracelets crafted in gold, silver or panchdhatu, in the correct metal for your planet.",
  },
  {
    icon: SparklesIcon,
    title: "Energised Before Wearing",
    hi: "प्राण-प्रतिष्ठा सहित",
    text: "Guidance on the right day, finger and mantra. Stones are energised (pran-pratishtha) on request before you wear them.",
  },
  {
    icon: HeartIcon,
    title: "Trusted in Itwari, Nagpur",
    hi: "इतवारी का भरोसेमंद नाम",
    text: "A family-run shop in Nagpur's jewellery hub on Nikalas Mandir Road. Walk in, compare and buy with confidence.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Share your Rashi or Kundali",
    hi: "राशि / कुंडली बताएँ",
    text: "Send it on WhatsApp or visit us. We'll tell you which stone, weight and metal suits you.",
  },
  {
    n: "02",
    title: "See & compare natural stones",
    hi: "रत्न देखें व तुलना करें",
    text: "Choose from certified pieces across budgets. Check colour, clarity and the certificate yourself.",
  },
  {
    n: "03",
    title: "Get it set & wear it right",
    hi: "अंगूठी बनवाएँ व सही दिन पहनें",
    text: "We set it in a ring or pendant to your size and guide you on the right day and vidhi to wear it.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-white py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Aashirwad Gems"
          eyebrowHi="क्यों चुनें हमें"
          title="Purity you can verify, guidance you can trust"
          subtitle="Buying a gemstone is a matter of faith. We earn it the honest way — natural stones, certificates, fair prices and advice that puts you first."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, hi, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-gold-200 bg-ivory-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-gold"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-200/40 blur-2xl transition group-hover:bg-gold-300/60" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300 shadow-lg shadow-maroon-900/30">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-semibold text-maroon-950">{title}</h3>
              <p lang="hi" className="relative font-hindi text-sm text-maroon-700/80">
                {hi}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-maroon-900/75">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-maroon-950 bg-mandala p-6 text-ivory-50 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">How it works · कैसे खरीदें</p>
              <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Three simple steps to the right stone</h3>
            </div>
            <p className="max-w-md text-sm text-ivory-100/70">No pressure, no jargon — just clear advice in Hindi, Marathi or English.</p>
          </div>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.n} className="relative rounded-3xl border border-gold-400/20 bg-ivory-50/[0.04] p-6">
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-gold-400/60 to-transparent md:block" />
                )}
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-semibold text-gold-gradient">{s.n}</span>
                  <GemIcon className="h-5 w-5 text-gold-400/70" />
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold">{s.title}</h4>
                <p lang="hi" className="font-hindi text-sm text-gold-200/80">
                  {s.hi}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
