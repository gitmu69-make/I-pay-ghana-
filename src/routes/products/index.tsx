import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { products } from "@/lib/content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/products/")({
  head: () =>
    pageHead(
      "Products · I Pay Ghana",
      "Proposed I Pay Ghana product categories: digital payments, send money, pay bills, and business collections.",
    ),
  component: function ProductsPage() {
    return (
      <SiteLayout>
        <header className="bg-pale px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">Products</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Ideas for how I Pay Ghana could help.</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              These categories are design directions. They are not confirmation that a service is live, and none of them can take a payment.
            </p>
          </div>
        </header>
        <ul className="mx-auto grid max-w-5xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-2">
          {products.map((product) => (
            <li key={product.slug}>
              <Link to="/products/$slug" params={{ slug: product.slug }} className="block h-full rounded-card border border-line bg-paper p-6 hover:border-forest hover:shadow-soft">
                <p className="text-xs font-semibold tracking-widest text-forest uppercase">{product.kicker}</p>
                <h2 className="mt-2 text-2xl font-bold text-ink">{product.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </SiteLayout>
    );
  },
});
