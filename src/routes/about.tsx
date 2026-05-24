import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { AboutHero } from "@/components/pages/about/AboutHero";
import { AboutContent } from "@/components/pages/about/AboutContent";
import { TimelineSection } from "@/components/pages/about/TimelineSection";
import { ContactSection } from "@/components/pages/about/ContactSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — L'Allure" },
      { name: "description", content: "L'Allure is the studio of designer Aurélien L'Allure — a story of monochrome and craft." },
      { property: "og:title", content: "About — L'Allure" },
      { property: "og:description", content: "The studio of Aurélien L'Allure — monochrome, craft, restraint." },
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
