import { createFileRoute } from "@tanstack/react-router";
import { DetailView, MissingSlug } from "@/components/site/detail-page";
import { SiteLayout } from "@/components/site/layout";
import { findPage, solutions } from "@/lib/content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/solutions/$slug")({
  head: ({ params }) => {
    const page = findPage(solutions, params.slug);
    return pageHead(
      page ? `${page.title} · I Pay Ghana` : "Solution · I Pay Ghana",
      page?.summary ?? "This solution page is not listed.",
    );
  },
  component: function SolutionSlugPage() {
    const { slug } = Route.useParams();
    const page = findPage(solutions, slug);
    return (
      <SiteLayout>
        {page ? <DetailView page={page} parent={{ to: "/solutions", label: "All solutions" }} /> : <MissingSlug label="solution" />}
      </SiteLayout>
    );
  },
});
