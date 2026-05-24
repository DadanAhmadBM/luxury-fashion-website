import designer from "@/assets/designer.jpg";
import arch3 from "@/assets/archive-3.jpg";
import look1 from "@/assets/look-1.jpg";

export function AboutContent() {
  return (
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
  );
}
