import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { AboutHero } from "@/components/pages/about/AboutHero";
import { AboutContent } from "@/components/pages/about/AboutContent";
import { TimelineSection } from "@/components/pages/about/TimelineSection";
import { ContactSection } from "@/components/pages/about/ContactSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Ciel" },
      { name: "description", content: "Maison Ciel is the studio of designer Aurélien Ciel — a story of monochrome and craft." },
      { property: "og:title", content: "About — Maison Ciel" },
      { property: "og:description", content: "The studio of Aurélien Ciel — monochrome, craft, restraint." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <AboutHero />
      <AboutContent />
      <TimelineSection />
      <ContactSection />
    </Layout>
  );
}
