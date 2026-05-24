import look1 from "@/assets/look-1.jpg";
import look3 from "@/assets/look-3.jpg";

export function CampaignDeepDive() {
  return (
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
  );
}
