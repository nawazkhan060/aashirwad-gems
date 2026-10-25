import { cn } from "../utils/cn";

interface Props {
  id?: string;
  eyebrow: string;
  eyebrowHi?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}

export default function SectionHeading({ id, eyebrow, eyebrowHi, title, subtitle, align = "center", tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500/70")} />
        <p className={cn("text-xs font-bold uppercase tracking-[0.22em]", dark ? "text-gold-300" : "text-maroon-700")}>
          {eyebrow}
          {eyebrowHi && (
            <span lang="hi" className={cn("ml-2 font-hindi text-sm normal-case tracking-normal", dark ? "text-gold-200/80" : "text-maroon-600/70")}>
              · {eyebrowHi}
            </span>
          )}
        </p>
        <span className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500/70")} />
      </div>
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-ivory-50" : "text-maroon-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-ivory-100/75" : "text-maroon-900/70")}>{subtitle}</p>
      )}
    </div>
  );
}
