import { Link } from "@tanstack/react-router";
import arch1 from "@/assets/archive-1.jpg";
import arch2 from "@/assets/archive-2.jpg";
import arch3 from "@/assets/archive-3.jpg";
import campaign from "@/assets/campaign-1.jpg";
import look1 from "@/assets/look-1.jpg";

export function ArchiveTeaser() {
  return (
    <section className="px-5 md:px-12 py-24 md:py-40 bg-off">
      <div className="caption mb-6">Archive</div>
      <h2 className="section-title text-4xl md:text-6xl mb-12">Previous Campaigns</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 -mx-5 md:-mx-12 px-5 md:px-12">
        {[
          { src: arch1, name: "Inner Light", season: "F/W 2025" },
          { src: arch2, name: "Concrete Hours", season: "S/S 2025" },
          { src: arch3, name: "Hand & Thread", season: "F/W 2024" },
          { src: campaign, name: "Veil", season: "S/S 2024" },
          { src: look1, name: "Silhouette", season: "F/W 2023" },
        ].map((c, i) => (
          <Link to="/collections" key={i} className="shrink-0 w-[70vw] md:w-[28vw] group">
            <div className="overflow-hidden mb-3">
              <img src={c.src} alt={c.name} loading="lazy"
                   className="img-hover w-full h-[55svh] object-cover" />
            </div>
            <div className="flex justify-between items-baseline">
              <span className="eyebrow">{c.name}</span>
              <span className="caption">{c.season}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-12 gap-6 caption">
        <span>←</span><span>01 / 12</span><span>→</span>
      </div>
    </section>
  );
}
