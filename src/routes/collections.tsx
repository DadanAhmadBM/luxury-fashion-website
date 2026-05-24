import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import campaign from "@/assets/campaign-1.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import arch1 from "@/assets/archive-1.jpg";
import arch2 from "@/assets/archive-2.jpg";
import arch3 from "@/assets/archive-3.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Archive — Collections · Maison Ciel" },
      { name: "description", content: "The complete archive of Maison Ciel campaigns and collections." },
      { property: "og:title", content: "Archive — Collections · Maison Ciel" },
      { property: "og:description", content: "Browse the archive of every Maison Ciel campaign." },
    ],
  }),
  component: Collections,
});

const items = [
  { src: campaign, name: "Persona", season: "S/S 2026", year: 2026, type: "Campaign", tall: true },
  { src: arch2,    name: "Concrete Hours", season: "S/S 2025", year: 2025, type: "Campaign", tall: false },
  { src: look1,    name: "Silhouette", season: "F/W 2023", year: 2023, type: "Lookbook", tall: true },
  { src: arch1,    name: "Inner Light", season: "F/W 2025", year: 2025, type: "Editorial", tall: true },
  { src: look3,    name: "Veil", season: "S/S 2024", year: 2024, type: "Campaign", tall: true },
  { src: arch3,    name: "Hand & Thread", season: "F/W 2024", year: 2024, type: "Editorial", tall: false },
  { src: look2,    name: "Black Hour", season: "F/W 2022", year: 2022, type: "Lookbook", tall: true },
  { src: look4,    name: "Aperture", season: "S/S 2023", year: 2023, type: "Campaign", tall: true },
];

const filters = ["All", "2026", "2025", "2024", "Campaign", "Lookbook", "Editorial"];

function Collections() {
  const [active, setActive] = useState("All");

  const visible = items.filter((i) => {
    if (active === "All") return true;
    return String(i.year) === active || i.type === active;
  });

  return (
    <Layout>
      <section className="px-5 md:px-12 pt-40 pb-10">
        <div className="caption mb-6">N° of Editions — 12</div>
        <h1 className="display text-6xl md:text-8xl lg:text-[10rem]">Archive.</h1>
      </section>

      <section className="px-5 md:px-12 py-6 border-y border-hair flex flex-wrap gap-x-6 gap-y-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-[11px] uppercase tracking-[0.2em] py-2 transition-opacity ${
              active === f ? "opacity-100 underline underline-offset-4" : "opacity-50 hover:opacity-100"
            }`}
          >
            {f}
          </button>
        ))}
      </section>

      <section className="px-5 md:px-12 py-16 grid grid-cols-12 gap-6">
        {visible.map((c, i) => {
          const col = c.tall ? "col-span-6 md:col-span-4" : "col-span-12 md:col-span-8";
          const h = c.tall ? "h-[70svh]" : "h-[50svh] md:h-[70svh]";
          return (
            <Link to="/campaign" key={i} className={`${col} group`}>
              <div className="overflow-hidden mb-4">
                <img src={c.src} alt={c.name} loading="lazy"
                     className={`img-hover w-full ${h} object-cover`} />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-[0.04em]">{c.name}</h3>
                <span className="caption">{c.season}</span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="px-5 md:px-12 py-10 flex justify-center gap-6 caption">
        <span>←</span><span>01 / 12</span><span>→</span>
      </section>
    </Layout>
  );
}
