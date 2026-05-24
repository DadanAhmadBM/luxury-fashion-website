import { useEffect, useState } from "react";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import campaign from "@/assets/campaign-1.jpg";
import arch1 from "@/assets/archive-1.jpg";

const looks = [
  { src: look1, title: "Look 01 — Wool Sentinel", desc: "Double-faced wool coat over tonal trouser. The opening statement of the collection." },
  { src: look2, title: "Look 02 — Black Tailored", desc: "Peak-lapel jacket with relaxed trouser. The everyday uniform, made architectural." },
  { src: look3, title: "Look 03 — Stand Collar", desc: "Standing collar in coated cotton. Light as silhouette, weight as posture." },
  { src: look4, title: "Look 04 — Wind Shirt", desc: "Oversized poplin shirt, caught mid-movement. Function as drama." },
  { src: campaign, title: "Look 05 — Veil", desc: "Draped panels framing the face. Tailoring as portraiture." },
  { src: arch1, title: "Look 06 — Knit Belt", desc: "Ribbed cashmere under wool coat. Hand-finished leather belt." },
];

export function LookbookViewer() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % looks.length);
  const prev = () => setI((p) => (p - 1 + looks.length) % looks.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const look = looks[i];

  return (
    <section className="pt-24 min-h-[100svh] grid grid-cols-12 gap-0">
      {/* LEFT META */}
      <aside className="hidden md:flex col-span-3 lg:col-span-2 flex-col border-r border-hair p-8">
        {[
          ["Collection", "Persona"],
          ["Edition", "S/S 2026"],
          ["Lineup", "01 – 24"],
          ["Looks", String(i + 1).padStart(2, "0")],
        ].map(([k, v]) => (
          <div key={k} className="border-t border-hair py-5 first:border-t-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-mid mb-1">{k}</div>
            <div className="text-[13px] uppercase tracking-[0.05em]">{v}</div>
          </div>
        ))}
      </aside>

      {/* CENTER LOOK */}
      <div className="col-span-12 md:col-span-7 lg:col-span-8 relative bg-off">
        <div className="relative h-[80svh] md:h-[calc(100svh-6rem)] overflow-hidden">
          <img
            key={i}
            src={look.src}
            alt={look.title}
            className="absolute inset-0 w-full h-full object-cover fade-up"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 bg-gradient-to-t from-paper/90 to-transparent">
          <div className="max-w-md">
            <div className="caption mb-2">Look {String(i + 1).padStart(2, "0")} / {String(looks.length).padStart(2, "0")}</div>
            <p className="text-sm leading-[1.7]">{look.desc}</p>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={prev} aria-label="Previous" className="text-2xl">←</button>
            <span className="caption">{String(i + 1).padStart(2, "0")} / {String(looks.length).padStart(2, "0")}</span>
            <button onClick={next} aria-label="Next" className="text-2xl">→</button>
          </div>
        </div>
      </div>

      {/* RIGHT THUMBS */}
      <aside className="hidden md:flex col-span-2 flex-col gap-3 p-4 border-l border-hair overflow-y-auto max-h-[calc(100svh-6rem)]">
        {looks.map((l, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`relative aspect-[3/4] overflow-hidden transition-opacity ${
              i === idx ? "opacity-100" : "opacity-40 hover:opacity-80"
            }`}
          >
            {i === idx && <span className="absolute left-0 top-0 bottom-0 w-px bg-ink z-10" />}
            <img src={l.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </aside>
    </section>
  );
}
