import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/site/button";
import { SiteLayout } from "@/components/site/layout";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About us · I Pay Ghana",
      "I Pay Ghana is a digital payments brand focused on clearer everyday payments for people and businesses in Ghana.",
    ),
  component: function AboutPage() {
    return (
      <SiteLayout>
        <header className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-pale px-5 py-16 sm:px-10 lg:px-14">
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">About us</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">A payments brand for everyday Ghana.</h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              I Pay Ghana is being shaped around a simple idea: people and small businesses should be able to understand a payment without decoding it.
            </p>
          </div>
          <img
            src="/images/accra.jpg"
            alt="A late-afternoon street in Accra with shops, a green kiosk, and people walking."
            width={1792}
            height={1008}
            className="h-72 w-full object-cover lg:h-full lg:min-h-96"
          />
        </header>
        <section className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            ["Local", "Copy, currency, and photography are set in Ghana. Amounts are shown in cedis."],
            ["Plain", "The brand prefers short steps and visible details over slogans about speed or free transfers."],
            ["Careful", "Unverified partnerships, licences, fees, and customer quotes are left off the site."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-card bg-mint p-6">
              <h2 className="text-xl font-bold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </section>
        <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          <p className="leading-relaxed text-muted">
            There is no published founding story, headcount, or customer total here, because those facts have not been supplied. The portraits in the sample stories are design stand-ins, not customers.
          </p>
          <div className="mt-8">
            <ButtonLink to="/contact">Contact</ButtonLink>
          </div>
        </section>
      </SiteLayout>
    );
  },
});
