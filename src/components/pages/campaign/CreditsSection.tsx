import arch2 from "@/assets/archive-2.jpg";

function Credits() {
  const rows = [
    ["Photography", "Sienna Marchetti"],
    ["Styling", "Léon Aubert"],
    ["Models", "Iva K., Théo M."],
    ["Hair", "Maya Iwasaki"],
    ["Make-up", "Noor El-Amin"],
    ["Photography Assistant", "Junichi Sato"],
  ];
  return (
    <div className="md:ml-auto md:max-w-sm w-full">
      {rows.map(([label, name]) => (
        <div key={label} className="flex justify-between border-t border-hair py-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-mid">{label}</span>
          <span className="text-[10px] uppercase tracking-[0.12em] font-bold">{name}</span>
        </div>
      ))}
    </div>
  );
}

export function CreditsSection() {
  return (
    <section className="px-5 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-7">
        <img src={arch2} alt="Full bleed" loading="lazy"
             className="w-full h-[60svh] md:h-[80svh] object-cover" />
      </div>
      <div className="col-span-12 md:col-span-5 flex items-end">
        <Credits />
      </div>
    </section>
  );
}
