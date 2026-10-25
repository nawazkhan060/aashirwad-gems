import { useEffect, useState } from "react";
import { BUSINESS, whatsappHref } from "../data/business";
import { SparklesIcon, WhatsAppIcon, XIcon } from "./Icons";

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (isOpen) return;

    // Trigger popup every 60 seconds (1 minute)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const quickMessages = [
    { label: "💎 Stone Price Quote", text: "Namaste! 🙏 I would like a price quote for gemstones." },
    { label: "🪐 Free Rashi Guidance", text: "Namaste! 🙏 I need guidance on which gemstone suits my Rashi / Kundali." },
    { label: "📍 Shop Location", text: "Namaste! 🙏 Please send your shop location on Nikalas Mandir Road, Itwari." },
  ];

  if (!isOpen) return null;

  return (
    <aside
      role="dialog"
      aria-labelledby="wa-popup-title"
      aria-modal="false"
      className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-sm animate-fade-up sm:bottom-6 sm:left-auto sm:right-6 sm:w-96"
    >
      <div className="overflow-hidden rounded-2xl border border-gold-400/40 bg-maroon-950/95 text-ivory-50 shadow-2xl shadow-black/60 backdrop-blur-xl ring-1 ring-gold-400/20">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-gold-400/20 bg-gradient-to-r from-[#128C7E] to-[#25D366] px-4 py-3 text-white">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#25D366] shadow">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#128C7E] bg-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight tracking-wide">Aashirwad Gems</p>
              <p className="flex items-center gap-1 text-[11px] text-emerald-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200 animate-pulse" />
                Online Now · Replies in 5 mins
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close WhatsApp popup"
            className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-black/20 hover:text-white active:scale-95"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-4">
          {/* Chat Bubble Greeting */}
          <div className="rounded-xl border border-gold-400/15 bg-maroon-900/60 p-3 shadow-inner">
            <p id="wa-popup-title" className="text-sm font-medium leading-relaxed text-ivory-100">
              <span className="font-hindi text-base font-bold text-gold-300">नमस्ते! 🙏</span>
              <br />
              Need help choosing the right certified gemstone or checking prices?
            </p>
            <p lang="hi" className="mt-1 font-hindi text-xs text-gold-200/80">
              व्हाट्सऐप पर तुरंत निःशुल्क सलाह व लाइव फोटो/वीडियो प्राप्त करें।
            </p>
          </div>

          {/* Quick inquiry pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {quickMessages.map((msg, i) => (
              <a
                key={i}
                href={whatsappHref(msg.text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="inline-flex items-center gap-1 rounded-full border border-gold-400/25 bg-gold-400/10 px-2.5 py-1 text-[11px] font-medium text-gold-200 transition-colors hover:border-gold-300 hover:bg-gold-400/20 active:scale-95"
              >
                <span>{msg.label}</span>
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={whatsappHref("Namaste Aashirwad Gems! 🙏 I am looking for 100% natural certified gemstone recommendations.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#20ba58] to-[#25D366] px-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:brightness-105 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>WhatsApp Us Now · व्हाट्सऐप करें</span>
            </a>
            <button
              onClick={handleClose}
              className="py-1 text-center text-xs text-ivory-100/50 transition-colors hover:text-ivory-100/80"
            >
              Remind me later
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
