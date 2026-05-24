import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import designer from "@/assets/designer.jpg";
import look1 from "@/assets/look-1.jpg";
import arch1 from "@/assets/archive-1.jpg";
import arch3 from "@/assets/archive-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Ciel" },
      { name: "description", content: "Maison Ciel is the studio of designer Aurélien Ciel — a story of monochrome and craft." },
      { property: "og:title", content: "About — Maison Ciel" },
      { property: "og:description", content: "The studio of Aurélien Ciel — monochrome, craft, restraint." },
    ],
  }),
  component: About,
});

const timeline = [
  ["1999", "Aurélien Ciel apprentices at a Paris atelier."],
  ["2007", "Founds Maison Ciel from a single studio in the Marais."],
  ["2012", "First runway show. Defines the house language."],
  ["2016", "Opens flagship store on Rue de Seine."],
  ["2020", "Receives the Andam fashion prize."],
  ["Present", "Twenty-four looks per season. No more, no less."],
];

function About() {
  return (
    <Layout>
      {/* SECTION A */}
      <section className="relative px-5 md:px-12 pt-40 pb-24 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <h1 className="display text-7xl md:text-[12rem] leading-[0.88]">
            Know <br /> ciel.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-5 md:pt-32">
          <div className="caption mb-4">The Studio</div>
          <p className="text-base leading-[1.7] text-ink/80 mb-4">
            Maison Ciel is the studio of designer Aurélien Ciel — a small
            atelier in Paris that produces two collections a year and
            nothing else.
          </p>
          <p className="text-base leading-[1.7] text-ink/80">
            Our practice is rooted in restraint. We design in monochrome
            because color is a decision we have already made. We work in
            wool, cotton, leather, and silk because everything else is
            already perfect.
          </p>
        </div>
        <div className="col-span-12 mt-12 relative h-[70svh]">
          <img src={look1} alt="Portrait" loading="lazy"
               className="absolute right-0 top-0 w-3/4 h-full object-cover" />
          <img src={arch1} alt="Detail" loading="lazy"
               className="absolute left-0 bottom-0 w-1/3 h-2/3 object-cover" />
        </div>
      </section>

      {/* SECTION B */}
      <section className="px-5 md:px-12 py-24 md:py-32 bg-off">
        <h2 className="section-title text-4xl md:text-7xl mb-16">
          Ciel is <br /> Aurélien Ciel.
        </h2>
        <div className="grid grid-cols-12 gap-6">
          <img src={designer} alt="Designer portrait" loading="lazy"
               className="col-span-12 md:col-span-5 w-full h-[70svh] object-cover" />
          <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
            <img src={arch3} alt="Detail" loading="lazy" className="w-full h-1/2 object-cover" />
            <img src={look1} alt="Detail" loading="lazy" className="w-full h-1/2 object-cover" />
          </div>
          <div className="col-span-12 md:col-span-4 md:pl-8 flex flex-col justify-end gap-4">
            <p className="text-base leading-[1.7] text-ink/80">
              Born in Lyon, trained in Antwerp. Aurélien spent a decade
              cutting patterns for other houses before opening his own.
            </p>
            <p className="text-base leading-[1.7] text-ink/80">
              The collections are personal — closer to a private notebook
              than a commercial line. Each look is conceived as a self
              portrait of a person we know but have never met.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-5 md:px-12 py-24 md:py-40">
        <div className="caption mb-12">Timeline</div>
        <div className="space-y-0">
          {timeline.map(([year, text], i) => {
            const active = year === "2012";
            return (
              <div
                key={i}
                className="grid grid-cols-12 gap-6 items-center py-6 md:py-8 border-t border-hair last:border-b"
              >
                <div
                  className={`col-span-3 md:col-span-2 font-display font-bold tracking-[0.04em] ${
                    active ? "text-4xl md:text-6xl" : "text-base md:text-xl text-mid"
                  }`}
                >
                  {year}
                </div>
                <div className="hidden md:block col-span-4 border-t border-hair" />
                <p
                  className={`col-span-9 md:col-span-6 text-sm md:text-base leading-[1.7] ${
                    active ? "text-ink" : "text-ink/70"
                  }`}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 md:px-12 py-24 md:py-32 bg-ink text-paper">
        <div className="caption !text-paper/60 mb-6">Contact</div>
        <h2 className="section-title text-4xl md:text-7xl mb-12 max-w-4xl">
          Write to the studio.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[11px] tracking-[0.15em] uppercase">
          <div>
            <div className="text-paper/60 mb-3">Press</div>
            <div>press@maisonciel.com</div>
          </div>
          <div>
            <div className="text-paper/60 mb-3">Studio</div>
            <div>studio@maisonciel.com</div>
          </div>
          <div>
            <div className="text-paper/60 mb-3">Address</div>
            <div>12 Rue de Seine<br />75006 Paris</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
