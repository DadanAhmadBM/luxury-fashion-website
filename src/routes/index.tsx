import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-1.jpg";
import campaign from "@/assets/campaign-1.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import arch1 from "@/assets/archive-1.jpg";
import arch2 from "@/assets/archive-2.jpg";
import arch3 from "@/assets/archive-3.jpg";
import designer from "@/assets/designer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Ciel — Editorial Fashion House" },
      { name: "description", content: "A digital fashion editorial — lookbook, campaigns, and the archive of Maison Ciel." },
      { property: "og:title", content: "Maison Ciel — Editorial Fashion House" },
      { property: "og:description", content: "A digital fashion editorial." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={hero}
          alt="Editorial cover"
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-paper/10" />
        <div className="relative z-10 h-full flex flex-col justify-between px-5 md:px-12 pt-32 pb-10">
          <h1 className="display text-paper mix-blend-difference text-[18vw] md:text-[14vw] lg:text-[200px] leading-[0.88] fade-up">
            Know <br />
            ciel.
          </h1>
          <div className="flex items-end justify-between">
            <div className="caption text-paper mix-blend-difference max-w-xs">
              Edition N°07 · Spring 2026<br />
              Photography — Sienna Marchetti
            </div>
            <div className="caption text-paper mix-blend-difference flex items-center gap-3">
              <span className="block w-px h-12 bg-current opacity-60" />
              <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN TEASER */}
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

      <Marquee text="Maison Ciel · Spring Editorial · N°07" />

      {/* LOOKBOOK PREVIEW */}
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
          <div className="col-span-6 md:col-span-5 flex flex-col gap-4 md:gap-6">
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
        </div>
        <div className="caption mt-8">01–24 Looks · Persona · Spring/Summer 2026</div>
      </section>

      {/* ARCHIVE TEASER */}
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

      {/* MANIFESTO */}
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

      {/* NEWSLETTER */}
      <section className="px-5 md:px-12 py-20 md:py-32 border-y border-hair">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="section-title text-4xl md:text-7xl lg:text-8xl flex-1">
            Ready to be <br /> different?
          </h2>
          <span className="display text-6xl md:text-8xl">→</span>
        </div>
        <form className="mt-12 max-w-xl flex items-center gap-4 border-b border-ink pb-3">
          <input
            type="email"
            placeholder="Your e-mail address"
            className="flex-1 bg-transparent outline-none text-base placeholder:text-mid placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-xs"
          />
          <button className="caption">Subscribe →</button>
        </form>
      </section>
    </Layout>
  );
}
