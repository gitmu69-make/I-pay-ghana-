import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { solutions } from "@/lib/content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    pageHead(
      "Solutions · I Pay Ghana",
      "Proposed payment experiences for people and businesses in Ghana.",
    ),
  component: function SolutionsPage() {
    return (
      <SiteLayout>
        <header className="bg-pale px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">Solutions</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Two directions. One standard of clarity.</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Everyday payments and business payments are proposed experiences. Provider logos, fees, and live checkout are not part of this site.
            </p>
          </div>
        </header>
        <ul className="mx-auto grid max-w-5xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-2">
          {solutions.map((item) => (
            <li key={item.slug}>
              <Link to="/solutions/$slug" params={{ slug: item.slug }} className="block h-full rounded-card bg-mint p-6 hover:shadow-soft">
                <p className="text-xs font-semibold tracking-widest text-forest uppercase">{item.kicker}</p>
                <h2 className="mt-2 text-2xl font-bold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </SiteLayout>
    );
  },
});
