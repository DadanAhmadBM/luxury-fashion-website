import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { CampaignHero } from "@/components/pages/campaign/CampaignHero";
import { CampaignDeepDive } from "@/components/pages/campaign/CampaignDeepDive";
import { CreditsSection } from "@/components/pages/campaign/CreditsSection";
import { RelatedCampaigns } from "@/components/pages/campaign/RelatedCampaigns";

export const Route = createFileRoute("/campaign")({
  head: () => ({
    meta: [
      { title: "Persona, Reframed — Campaign S/S 2026 · L'Allure" },
      { name: "description", content: "A study in surface and shadow. The Spring/Summer 2026 campaign by L'Allure." },
      { property: "og:title", content: "Persona, Reframed — Campaign S/S 2026" },
      { property: "og:description", content: "A study in surface and shadow." },
    ],
  }),
  component: CampaignPage,
});

function CampaignPage() {
  return (
    <Layout>
      <CampaignHero />
      <CampaignDeepDive />
      <Marquee text="Persona · S/S 2026 · A Deeper Look" />
      <CreditsSection />
      <RelatedCampaigns />
    </Layout>
  );
}
