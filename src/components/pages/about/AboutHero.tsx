import look1 from "@/assets/look-1.jpg";
import arch1 from "@/assets/archive-1.jpg";

export function AboutHero() {
  return (
    <section className="relative px-5 md:px-12 pt-40 pb-24 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-7">
        <h1 className="display text-7xl md:text-[12rem] leading-[0.88]">
          Know <br /> L'Allure.
        </h1>
      </div>
      <div className="col-span-12 md:col-span-5 md:pt-32">
        <div className="caption mb-4">The Studio</div>
        <p className="text-base leading-[1.7] text-ink/80 mb-4">
          L'Allure is the studio of designer Aurélien L'Allure — a small
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
  );
}
