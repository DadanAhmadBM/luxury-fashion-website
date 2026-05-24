export function Marquee({ text, inverse = true }: { text: string; inverse?: boolean }) {
  const items = Array.from({ length: 8 });
  return (
    <div
      className="w-full overflow-hidden py-5"
      style={{
        background: inverse ? "var(--color-ink)" : "var(--color-paper)",
        color: inverse ? "var(--color-paper)" : "var(--color-ink)",
      }}
    >
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="font-display font-bold tracking-[0.15em] uppercase text-sm md:text-base px-6"
          >
            {text} <span className="px-3 opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
