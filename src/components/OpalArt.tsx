/**
 * A CSS-rendered opal cabochon used in place of a photograph.
 * Layers of conic + radial gradients mimic opal's "play of colour".
 */
export default function OpalArt({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,#2a2a2e_0%,#141416_55%,#0a0a0b_100%)] " +
        className
      }
      role="img"
      aria-label="Opal gemstone illustration"
    >
      {/* soft reflection on the slate */}
      <div className="absolute bottom-[14%] h-[14%] w-[52%] rounded-[100%] bg-black/70 blur-xl" />
      <div className="absolute bottom-[16%] h-[8%] w-[46%] rounded-[100%] bg-cyan-200/20 blur-md" />

      {/* opal body */}
      <div className="relative h-[46%] w-[62%] rounded-[50%] shadow-[0_18px_40px_-10px_rgba(0,0,0,0.9),inset_0_-10px_24px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-0 rounded-[50%] bg-[conic-gradient(from_210deg_at_45%_55%,#ff8fc8,#ffd978,#7dffc0,#6fd1ff,#b28cff,#ff8fc8)]" />
        <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.85),rgba(255,255,255,0.4)_30%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0)_75%)]" />
        <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(circle_at_70%_65%,rgba(120,255,210,0.55),transparent_35%),radial-gradient(circle_at_25%_70%,rgba(255,160,220,0.55),transparent_32%),radial-gradient(circle_at_60%_25%,rgba(150,200,255,0.6),transparent_30%)] mix-blend-screen blur-[2px]" />
        <div className="absolute inset-[6%] rounded-[50%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.35),rgba(255,255,255,0)_70%)]" />
        {/* speckle flashes */}
        <div className="absolute left-[22%] top-[36%] h-[10%] w-[12%] rotate-12 rounded-full bg-fuchsia-300/70 blur-[1px]" />
        <div className="absolute left-[55%] top-[55%] h-[9%] w-[14%] -rotate-12 rounded-full bg-emerald-200/80 blur-[1px]" />
        <div className="absolute left-[40%] top-[22%] h-[8%] w-[10%] rounded-full bg-sky-200/80 blur-[1px]" />
        <div className="absolute left-[66%] top-[32%] h-[7%] w-[9%] rounded-full bg-amber-200/80 blur-[1px]" />
        {/* glossy highlight */}
        <div className="absolute left-[14%] top-[12%] h-[22%] w-[34%] rounded-[50%] bg-white/80 blur-[3px]" />
        <div className="absolute inset-0 rounded-[50%] ring-1 ring-white/40" />
      </div>
    </div>
  );
}
