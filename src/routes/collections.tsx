import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CollectionsHero } from "@/components/pages/collections/CollectionsHero";
import { ArchiveGrid } from "@/components/pages/collections/ArchiveGrid";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Archive — Collections · Maison Ciel" },
      { name: "description", content: "The complete archive of Maison Ciel campaigns and collections." },
      { property: "og:title", content: "Archive — Collections · Maison Ciel" },
      { property: "og:description", content: "Browse the archive of every Maison Ciel campaign." },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <Layout>
      <CollectionsHero />
      <ArchiveGrid />
    </Layout>
  );
}
