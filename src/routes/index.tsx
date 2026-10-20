import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/home-page";
import { SiteLayout } from "@/components/site/layout";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "I Pay Ghana",
      "Pay smarter with I Pay Ghana, a digital payments brand shaped around everyday life in Ghana.",
    ),
  component: function IndexPage() {
    return (
      <SiteLayout>
        <HomePage />
      </SiteLayout>
    );
  },
});
