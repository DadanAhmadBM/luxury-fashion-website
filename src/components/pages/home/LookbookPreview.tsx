import { Link } from "@tanstack/react-router";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";

export function LookbookPreview() {
  return (
    <section className="px-5 md:px-12 py-24 md:py-40">
      <div className="flex items-end justify-between mb-12">
        <h2 className="section-title text-4xl md:text-6xl">All Looks</h2>
        <Link to="/lookbook" className="cta">See all looks <span>→</span></Link>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-7 group relative overflow-hidden">
          <img src={look1} alt="Look 01" width={896} height={1280} loading="lazy"
               className="img-hover w-full h-[60svh] md:h-[90svh] object-cover" />
        </div>
        
        {/* --- Mobile Layout (Exact Original) --- */}
        <div className="col-span-6 md:hidden flex flex-col gap-4">
          <div className="group relative overflow-hidden flex-1">
            <img src={look2} alt="Look 02" width={896} height={1280} loading="lazy"
                 className="img-hover w-full h-full object-cover" />
          </div>
          <div className="group relative overflow-hidden flex-1">
            <img src={look3} alt="Look 03" width={896} height={1280} loading="lazy"
                 className="img-hover w-full h-full object-cover" />
          </div>
        </div>
        <div className="col-span-6 md:hidden group relative overflow-hidden">
          <img src={look4} alt="Look 04" loading="lazy" className="w-full h-full object-cover" />
        </div>

        {/* --- Desktop Layout (2x2 Asymmetrical Grid) --- */}
        <div className="hidden md:block col-span-5 group relative overflow-hidden">
          <img src={look2} alt="Look 02" width={896} height={1280} loading="lazy"
               className="img-hover w-full h-[90svh] object-cover" />
        </div>
        <div className="hidden md:block col-span-7 group relative overflow-hidden">
          <img src={look4} alt="Look 04" loading="lazy" 
               className="img-hover w-full h-[70svh] object-cover" />
        </div>
        <div className="hidden md:block col-span-5 group relative overflow-hidden">
          <img src={look3} alt="Look 03" width={896} height={1280} loading="lazy"
               className="img-hover w-full h-[70svh] object-cover" />
        </div>
      </div>
      <div className="caption mt-8">01–24 Looks · Persona · Spring/Summer 2026</div>
    </section>
  );
}
