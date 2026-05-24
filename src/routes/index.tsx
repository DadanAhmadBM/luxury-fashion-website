import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { HeroSection } from "@/components/pages/home/HeroSection";
import { CampaignTeaser } from "@/components/pages/home/CampaignTeaser";
import { LookbookPreview } from "@/components/pages/home/LookbookPreview";
import { ArchiveTeaser } from "@/components/pages/home/ArchiveTeaser";
import { ManifestoSection } from "@/components/pages/home/ManifestoSection";
import { NewsletterSection } from "@/components/pages/home/NewsletterSection";

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
      <HeroSection />
      <CampaignTeaser />
      <Marquee text="Maison Ciel · Spring Editorial · N°07" />
      <LookbookPreview />
      <ArchiveTeaser />
      <ManifestoSection />
      <NewsletterSection />
    </Layout>
  );
}
