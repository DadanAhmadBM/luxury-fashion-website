export function ContactSection() {
  return (
    <section className="px-5 md:px-12 py-24 md:py-32 bg-ink text-paper">
      <div className="caption !text-paper/60 mb-6">Contact</div>
      <h2 className="section-title text-4xl md:text-7xl mb-12 max-w-4xl">
        Write to the studio.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[11px] tracking-[0.15em] uppercase">
        <div>
          <div className="text-paper/60 mb-3">Press</div>
          <div>press@maisonciel.com</div>
        </div>
        <div>
          <div className="text-paper/60 mb-3">Studio</div>
          <div>studio@maisonciel.com</div>
        </div>
        <div>
          <div className="text-paper/60 mb-3">Address</div>
          <div>12 Rue de Seine<br />75006 Paris</div>
        </div>
      </div>
    </section>
  );
}
