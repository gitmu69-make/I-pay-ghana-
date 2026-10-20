import { createFileRoute } from "@tanstack/react-router";
import { DetailView, MissingSlug } from "@/components/site/detail-page";
import { SiteLayout } from "@/components/site/layout";
import { findPage, products } from "@/lib/content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const page = findPage(products, params.slug);
    return pageHead(
      page ? `${page.title} · I Pay Ghana` : "Product · I Pay Ghana",
      page?.summary ?? "This product page is not listed.",
    );
  },
  component: function ProductSlugPage() {
    const { slug } = Route.useParams();
    const page = findPage(products, slug);
    return (
      <SiteLayout>
        {page ? <DetailView page={page} parent={{ to: "/products", label: "All products" }} /> : <MissingSlug label="product" />}
      </SiteLayout>
    );
  },
});
