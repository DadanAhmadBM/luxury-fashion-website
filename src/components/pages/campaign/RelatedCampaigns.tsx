import { Link } from "@tanstack/react-router";
import look4 from "@/assets/look-4.jpg";
import look1 from "@/assets/look-1.jpg";
import campaign from "@/assets/campaign-1.jpg";
import arch2 from "@/assets/archive-2.jpg";

export function RelatedCampaigns() {
  return (
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
  );
}
