import { Marquee } from "./Marquee";

export function Footer() {
  return (
    <footer>
      <div className="relative bg-paper px-5 md:px-12 pt-24 pb-10 overflow-hidden">
        <div className="text-center">
          <h2 className="display text-5xl md:text-7xl lg:text-8xl">
            Claim your <br className="hidden md:block" /> style →
          </h2>
        </div>
        <div className="caption text-center mt-10">Edition N°07 · Spring 2026</div>
      </div>

      <Marquee text="From Paris to Tokyo" />

      <div className="bg-ink text-paper px-5 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="caption !text-mid mb-6">Stores</div>
            <ul className="space-y-2 text-[11px] tracking-[0.15em] uppercase">
              <li>Paris — 12 Rue de Seine</li>
              <li>Tokyo — Aoyama 4-21</li>
              <li>Milano — Via Tortona 27</li>
              <li>New York — Crosby St.</li>
            </ul>
          </div>
          <div>
            <div className="caption !text-mid mb-6">Follow us</div>
            <ul className="space-y-2 text-[11px] tracking-[0.15em] uppercase">
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>
            <div className="caption !text-mid mb-6">Contact</div>
            <ul className="space-y-2 text-[11px] tracking-[0.15em] uppercase">
              <li>press@maisonL'Allure.com</li>
              <li>studio@maisonL'Allure.com</li>
              <li>+33 1 42 00 00 00</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-paper/15 flex justify-between text-[10px] tracking-[0.2em] uppercase text-paper/60">
          <span>© 2026 L'Allure · All Rights Reserved · Made by Movement.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
