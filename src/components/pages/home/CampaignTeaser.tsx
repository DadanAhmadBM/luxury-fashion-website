import { Link } from "@tanstack/react-router";
import campaign from "@/assets/campaign-1.jpg";

export function CampaignTeaser() {
  return (
    <section className="px-5 md:px-12 py-24 md:py-40 grid grid-cols-12 gap-6 relative">
      <div className="col-span-12 md:col-span-7">
        <img src={campaign} alt="Current campaign" width={1024} height={1280} loading="lazy"
             className="w-full h-[70svh] md:h-[90svh] object-cover" />
      </div>
      <div className="col-span-12 md:col-span-5 md:pl-8 flex flex-col justify-center">
        <div className="caption mb-6">Current Campaign · S/S 2026</div>
        <h2 className="section-title text-5xl md:text-7xl mb-8">Persona, <br /> Reframed.</h2>
        <p className="text-base leading-[1.7] text-ink/80 max-w-md mb-10">
          A study in surface and shadow. The new campaign reframes
          tailoring as portraiture — every silhouette a posture, every
          posture a statement.
        </p>
        <Link to="/campaign" className="cta">View Campaign <span>→</span></Link>
      </div>
    </section>
  );
}
