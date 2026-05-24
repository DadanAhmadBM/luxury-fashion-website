import hero from "@/assets/hero-new.png";

export function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Editorial cover"
        width={1280}
        height={1600}
        className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
      />
      <div className="absolute inset-0 bg-ink/30" />
      
      {/* Tagline at center-right */}
      <div className="absolute top-1/2 right-5 md:right-12 -translate-y-1/2 z-10 text-paper mix-blend-difference text-right fade-up max-w-[200px] md:max-w-sm">
        <p className="text-sm md:text-lg font-medium tracking-widest uppercase leading-relaxed">
          Redefining modern luxury through timeless silhouettes.
        </p>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between px-5 md:px-12 pt-32 pb-10">
        <h1 className="display text-paper mix-blend-difference text-[18vw] md:text-[14vw] lg:text-[200px] leading-[0.88] fade-up">
          Know <br />
          L'Allure.
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
