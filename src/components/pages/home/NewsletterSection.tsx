export function NewsletterSection() {
  return (
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
  );
}
