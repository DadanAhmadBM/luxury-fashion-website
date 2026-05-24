import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { LookbookViewer } from "@/components/pages/lookbook/LookbookViewer";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook — Persona S/S 2026 · L'Allure" },
      { name: "description", content: "Browse the full lookbook for Persona, Spring/Summer 2026." },
      { property: "og:title", content: "Lookbook — Persona S/S 2026" },
      { property: "og:description", content: "24 looks. Monochrome. L'Allure." },
    ],
  }),
  component: Lookbook,
});

function Lookbook() {
  return (
    <Layout>
      <LookbookViewer />
    </Layout>
  );
}
