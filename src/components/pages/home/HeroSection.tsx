import hero from "@/assets/hero-1.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Editorial cover"
        width={1280}
        height={1600}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-paper/10" />
      <div className="relative z-10 h-full flex flex-col justify-between px-5 md:px-12 pt-32 pb-10">
        <h1 className="display text-paper mix-blend-difference text-[18vw] md:text-[14vw] lg:text-[200px] leading-[0.88] fade-up">
          Know <br />
          ciel.
        </h1>
        <div className="flex items-end justify-between">
          <div className="caption text-paper mix-blend-difference max-w-xs">
            Edition N°07 · Spring 2026<br />
            Photography — Sienna Marchetti
          </div>
          <div className="caption text-paper mix-blend-difference flex items-center gap-3">
            <span className="block w-px h-12 bg-current opacity-60" />
            <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
