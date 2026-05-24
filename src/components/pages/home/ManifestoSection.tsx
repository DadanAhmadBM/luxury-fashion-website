import { Link } from "@tanstack/react-router";
import designer from "@/assets/designer.jpg";
import look4 from "@/assets/look-4.jpg";

export function ManifestoSection() {
  return (
    <section className="px-5 md:px-12 py-24 md:py-40 grid grid-cols-12 gap-6 items-center">
      <div className="col-span-12 md:col-span-7">
        <div className="caption mb-6">Manifesto</div>
        <p className="section-title text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
          "Clothing is the second skin of <br className="hidden md:block" />
          the soul — a quiet rebellion <br className="hidden md:block" />
          against the obvious."
        </p>
        <div className="mt-10">
          <Link to="/about" className="cta">Read more <span>→</span></Link>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 relative h-[60svh] md:h-[80svh]">
        <img src={designer} alt="Designer" loading="lazy"
             className="absolute right-0 top-0 w-4/5 h-3/4 object-cover" />
        <img src={look4} alt="Look" loading="lazy"
             className="absolute left-0 bottom-0 w-3/5 h-1/2 object-cover" />
      </div>
    </section>
  );
}
