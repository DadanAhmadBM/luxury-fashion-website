const timeline = [
  ["1999", "Aurélien Ciel apprentices at a Paris atelier."],
  ["2007", "Founds Maison Ciel from a single studio in the Marais."],
  ["2012", "First runway show. Defines the house language."],
  ["2016", "Opens flagship store on Rue de Seine."],
  ["2020", "Receives the Andam fashion prize."],
  ["Present", "Twenty-four looks per season. No more, no less."],
];

export function TimelineSection() {
  return (
    <section className="px-5 md:px-12 py-24 md:py-40">
      <div className="caption mb-12">Timeline</div>
      <div className="space-y-0">
        {timeline.map(([year, text], i) => {
          const active = year === "2012";
          return (
            <div
              key={i}
              className="grid grid-cols-12 gap-6 items-center py-6 md:py-8 border-t border-hair last:border-b"
            >
              <div
                className={`col-span-3 md:col-span-2 font-display font-bold tracking-[0.04em] ${
                  active ? "text-4xl md:text-6xl" : "text-base md:text-xl text-mid"
                }`}
              >
                {year}
              </div>
              <div className="hidden md:block col-span-4 border-t border-hair" />
              <p
                className={`col-span-9 md:col-span-6 text-sm md:text-base leading-[1.7] ${
                  active ? "text-ink" : "text-ink/70"
                }`}
              >
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
