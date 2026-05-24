import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { Link } from "@tanstack/react-router";
import campaign from "@/assets/campaign-1.jpg";
import look1 from "@/assets/look-1.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import arch2 from "@/assets/archive-2.jpg";

export const Route = createFileRoute("/campaign")({
  head: () => ({
    meta: [
      { title: "Persona, Reframed — Campaign S/S 2026 · Maison Ciel" },
      { name: "description", content: "A study in surface and shadow. The Spring/Summer 2026 campaign by Maison Ciel." },
      { property: "og:title", content: "Persona, Reframed — Campaign S/S 2026" },
      { property: "og:description", content: "A study in surface and shadow." },
    ],
  }),
  component: CampaignPage,
});

function Credits() {
  const rows = [
    ["Photography", "Sienna Marchetti"],
    ["Styling", "Léon Aubert"],
    ["Models", "Iva K., Théo M."],
    ["Hair", "Maya Iwasaki"],
    ["Make-up", "Noor El-Amin"],
    ["Photography Assistant", "Junichi Sato"],
  ];
  return (
    <div className="md:ml-auto md:max-w-sm w-full">
      {rows.map(([label, name]) => (
        <div key={label} className="flex justify-between border-t border-hair py-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-mid">{label}</span>
          <span className="text-[10px] uppercase tracking-[0.12em] font-bold">{name}</span>
        </div>
      ))}
    </div>
  );
}

function CampaignPage() {
  return (
    <Layout>
      {/* HERO */}
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

      {/* DEEP DIVE */}
      <section className="px-5 md:px-12 py-24 md:py-40">
        <h2 className="section-title text-3xl md:text-5xl lg:text-6xl mb-16 max-w-4xl">
          A deeper look <br /> inside the campaign.
        </h2>
        <div className="relative grid grid-cols-12 gap-6 mb-20">
          <img src={look1} alt="Detail 1" loading="lazy"
               className="col-span-12 md:col-span-7 w-full h-[70svh] object-cover" />
          <img src={look3} alt="Detail 2" loading="lazy"
               className="col-span-10 col-start-3 md:col-span-5 md:col-start-7 md:-mt-24 md:translate-y-12 w-full h-[60svh] object-cover relative z-10" />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="caption mb-4">Highlights</div>
            <p className="text-base leading-[1.7] text-ink/80">
              Twenty-four looks. Six fabrics. A monochrome palette that
              refuses ornament. The collection moves between drape and
              architecture — between body and frame.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="caption mb-4">Design philosophy</div>
            <p className="text-base leading-[1.7] text-ink/80">
              We design clothes the way a director composes a shot. Cut
              defines the silhouette; light defines the cut. Every garment
              should photograph as well as it wears.
            </p>
          </div>
        </div>
      </section>

      <Marquee text="Persona · S/S 2026 · A Deeper Look" />

      {/* CREDITS */}
      <section className="px-5 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <img src={arch2} alt="Full bleed" loading="lazy"
               className="w-full h-[60svh] md:h-[80svh] object-cover" />
        </div>
        <div className="col-span-12 md:col-span-5 flex items-end">
          <Credits />
        </div>
      </section>

      {/* RELATED */}
      <section className="px-5 md:px-12 py-24 border-t border-hair">
        <div className="caption mb-6">Related</div>
        <h3 className="section-title text-3xl md:text-5xl mb-12">More Campaigns</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { src: look4, name: "Veil", season: "S/S 2024" },
            { src: look1, name: "Concrete Hours", season: "S/S 2025" },
            { src: campaign, name: "Inner Light", season: "F/W 2025" },
            { src: arch2, name: "Hand & Thread", season: "F/W 2024" },
          ].map((c, i) => (
            <Link to="/collections" key={i} className="group">
              <div className="overflow-hidden mb-3">
                <img src={c.src} alt={c.name} loading="lazy"
                     className="img-hover w-full h-[45svh] object-cover" />
              </div>
              <div className="flex justify-between">
                <span className="eyebrow">{c.name}</span>
                <span className="caption">{c.season}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
