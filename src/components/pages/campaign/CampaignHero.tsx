import campaign from "@/assets/campaign-1.jpg";

export function CampaignHero() {
  return (
    <section className="relative h-[100svh] bg-ink text-paper overflow-hidden">
      <img src={campaign} alt="Campaign hero" loading="eager"
           className="absolute inset-0 w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="display text-[22vw] md:text-[16vw] text-paper mix-blend-difference leading-[0.85]">
          Persona
        </h1>
      </div>
      <div className="absolute top-28 right-5 md:right-12 caption text-paper/80">
        Fall / Winter — wait — Spring/Summer 2026
      </div>
      <div className="absolute bottom-10 left-5 md:left-12 max-w-xs">
        <div className="caption mb-3 text-paper/70">Our Campaign</div>
        <p className="text-paper text-sm leading-[1.7]">
          A study in surface and shadow.<br />
          Tailoring as portraiture.<br />
          Posture as statement.
        </p>
      </div>
    </section>
  );
}
