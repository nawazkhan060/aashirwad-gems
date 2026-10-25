import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { BUSINESS, telHref, whatsappHref } from "../data/business";
import {
  CheckIcon,
  ClockIcon,
  CopyIcon,
  ExternalLinkIcon,
  MapPinIcon,
  NavigationIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";
import SectionHeading from "./SectionHeading";

const fmt = (mins: number) => {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h}:${m.toString().padStart(2, "0")} ${suffix}`;
};

function useOpenStatus() {
  const compute = () => {
    const now = new Date();
    // IST is UTC+5:30 with no daylight saving.
    const ist = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60_000);
    const day = ist.getDay();
    const mins = ist.getHours() * 60 + ist.getMinutes();
    const today = BUSINESS.schedule[day];

    if (today && mins >= today.open && mins < today.close) {
      return { open: true, label: `Open now · closes ${fmt(today.close)}` };
    }
    if (today && mins < today.open) {
      return { open: false, label: `Closed · opens today ${fmt(today.open)}` };
    }
    for (let i = 1; i <= 7; i++) {
      const next = BUSINESS.schedule[(day + i) % 7];
      if (next) {
        return { open: false, label: `Closed · opens ${i === 1 ? "tomorrow" : "soon"} ${fmt(next.open)}` };
      }
    }
    return { open: false, label: "Closed" };
  };

  const [status, setStatus] = useState(compute);
  useEffect(() => {
    const t = setInterval(() => setStatus(compute()), 60_000);
    return () => clearInterval(t);
  }, []);
  return status;
}

function CopyAddressButton() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const text = `${BUSINESS.nameEn}\n${BUSINESS.addressEn}\n${BUSINESS.maps.place}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition",
        copied ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-gold-400/60 bg-white text-maroon-800 hover:bg-gold-50"
      )}
      aria-live="polite"
    >
      {copied ? <CheckIcon className="h-4 w-4" strokeWidth={2.5} /> : <CopyIcon className="h-4 w-4" />}
      {copied ? "Address copied!" : "Copy address"}
    </button>
  );
}

export default function VisitUs() {
  const status = useOpenStatus();

  return (
    <section id="visit" className="relative bg-ivory-100 bg-paisley-light py-20 lg:py-28" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="visit-heading"
          eyebrow="Visit Our Shop"
          eyebrowHi="हमारी दुकान पर आएँ"
          title="Find us in Itwari, Nagpur"
          subtitle="On Nikalas Mandir Road, right opposite Jai Hotel in the heart of Nagpur's jewellery market. Tap once for directions, a call, or WhatsApp."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Info card */}
          <div className="flex flex-col rounded-[2rem] border border-gold-300/50 bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold text-maroon-950">
                {BUSINESS.nameEn}
              </h3>
              <span
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                  status.open ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-rose-50 text-rose-700 ring-1 ring-rose-200"
                )}
              >
                <span className={cn("h-2 w-2 rounded-full", status.open ? "bg-emerald-500 animate-pulse" : "bg-rose-500")} />
                {status.open ? "Open" : "Closed"}
              </span>
            </div>
            <p lang="hi" className="font-hindi text-lg text-maroon-700">
              {BUSINESS.nameHi}
            </p>

            <div className="mt-6 flex gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-maroon-50 text-maroon-700 ring-1 ring-maroon-100">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-maroon-700/60">Address · पता</p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-maroon-950">{BUSINESS.addressEn}</p>
                <p lang="hi" className="font-hindi text-sm leading-relaxed text-maroon-800/80">
                  {BUSINESS.addressHi}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-2.5 py-1 text-xs font-semibold text-maroon-800 ring-1 ring-gold-300">
                  📍 Landmark: {BUSINESS.landmarkEn}
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <a
                href={BUSINESS.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 px-5 text-sm font-bold text-maroon-950 shadow-gold transition hover:brightness-105 sm:col-span-2"
              >
                <NavigationIcon className="h-4.5 w-4.5" strokeWidth={2.2} />
                Get Directions (Google Maps)
              </a>
              <a
                href={BUSINESS.maps.place}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-gold-400/60 bg-white px-4 text-sm font-semibold text-maroon-800 transition hover:bg-gold-50"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Open in Google Maps
              </a>
              <CopyAddressButton />
            </div>

            <div className="mt-7 flex gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-maroon-50 text-maroon-700 ring-1 ring-maroon-100">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-maroon-700/60">Call us · फ़ोन करें</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {BUSINESS.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={telHref(p.tel)}
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-maroon-800 px-4 text-sm font-semibold text-ivory-50 transition hover:bg-maroon-700"
                    >
                      <PhoneIcon className="h-4 w-4" strokeWidth={2.2} />
                      {p.display}
                    </a>
                  ))}
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white transition hover:bg-[#1fbf5b]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-maroon-50 text-maroon-700 ring-1 ring-maroon-100">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-maroon-700/60">Opening hours · समय</p>
                <p className={cn("mt-1 text-sm font-semibold", status.open ? "text-emerald-700" : "text-rose-700")}>{status.label}</p>
                <dl className="mt-2 divide-y divide-gold-200/70 rounded-2xl border border-gold-200/70 bg-ivory-50 text-sm">
                  {BUSINESS.hours.map((h) => (
                    <div key={h.days} className="flex items-center justify-between gap-4 px-4 py-2.5">
                      <dt className="text-maroon-900">
                        {h.days} <span lang="hi" className="font-hindi text-maroon-700/60">({h.daysHi})</span>
                      </dt>
                      <dd className="font-semibold text-maroon-950">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-xs text-maroon-700/60">{BUSINESS.hoursNote}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col">
            <div className="relative flex-1 rounded-[2rem] bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 p-[2px] shadow-2xl shadow-maroon-900/20">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[calc(2rem-2px)] bg-ivory-200 sm:min-h-[420px] lg:min-h-full">
                <iframe
                  title="Aashirwad Gems location on Google Maps — Nikalas Mandir Road, Itwari, Nagpur"
                  src={BUSINESS.maps.embed}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href={BUSINESS.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-gold-300/50 bg-white p-3.5 shadow-card transition hover:border-gold-500 hover:shadow-gold"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#4285F4]/10 text-[#4285F4]">
                  <NavigationIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-maroon-950">Navigate</span>
                  <span className="block text-xs text-maroon-700/70">Turn-by-turn in Maps app</span>
                </span>
              </a>
              <a
                href={telHref(BUSINESS.phones[0].tel)}
                className="flex items-center gap-3 rounded-2xl border border-gold-300/50 bg-white p-3.5 shadow-card transition hover:border-gold-500 hover:shadow-gold"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-maroon-50 text-maroon-700">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-maroon-950">Can't find us?</span>
                  <span className="block text-xs text-maroon-700/70">Call &amp; we'll guide you</span>
                </span>
              </a>
              <a
                href={whatsappHref("Namaste! 🙏 Please share your shop location on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-gold-300/50 bg-white p-3.5 shadow-card transition hover:border-gold-500 hover:shadow-gold"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-maroon-950">Get location pin</span>
                  <span className="block text-xs text-maroon-700/70">Sent to you on WhatsApp</span>
                </span>
              </a>
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-maroon-900/80 sm:grid-cols-2">
              <li className="flex gap-2 rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-gold-200/70">
                <span aria-hidden>🛺</span>
                <span>
                  <strong className="font-semibold text-maroon-950">By auto / taxi:</strong> say{" "}
                  <em lang="hi" className="font-hindi not-italic">
                    "निकलस मंदिर रोड, जय होटल के सामने, इतवारी"
                  </em>
                </span>
              </li>
              <li className="flex gap-2 rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-gold-200/70">
                <span aria-hidden>🚉</span>
                <span>
                  <strong className="font-semibold text-maroon-950">By train:</strong> Itwari is a short ride from Nagpur Junction &amp;
                  Itwari Railway Station.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
