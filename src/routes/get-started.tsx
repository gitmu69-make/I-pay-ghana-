import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/site/button";
import { SiteLayout } from "@/components/site/layout";
import { pageHead } from "@/lib/page-head";

const steps = [
  ["Discover", "Read the product and solution pages so you know what is a concept and what is not available yet."],
  ["Set up", "When onboarding exists, it will list the documents and details a person or business must provide. That list is not published."],
  ["Confirm", "A real payment would show the recipient, the amount in cedis, and any charge before you agree. This site cannot do that."],
  ["Review", "Activity records belong to a live service. The phone screen on the home page is a picture of that idea."],
];

export const Route = createFileRoute("/get-started")({
  head: () =>
    pageHead(
      "Get started · I Pay Ghana",
      "How to follow I Pay Ghana today. Account sign-in and live payments are not available on this website.",
    ),
  component: function GetStartedPage() {
    return (
      <SiteLayout>
        <header className="bg-forest px-4 py-16 text-paper sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-leaf">GET STARTED</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Start with what is actually here.</h1>
            <p className="mt-4 text-lg leading-relaxed text-paper/80">
              I Pay Ghana does not open accounts from this website. Use the pages below to understand the brand, then send a note through the contact preview if you want to follow along.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/products" className="bg-paper text-forest hover:bg-mint">
                Browse products
              </ButtonLink>
              <ButtonLink to="/contact" variant="outlineLight">
                Contact
              </ButtonLink>
            </div>
          </div>
        </header>
        <ol className="mx-auto max-w-3xl space-y-6 px-4 py-14 sm:px-6">
          {steps.map(([title, text], index) => (
            <li key={title} className="grid grid-cols-[auto_1fr] gap-4">
              <span className="text-2xl font-extrabold tabular-nums text-leaf">0{index + 1}</span>
              <div>
                <h2 className="text-xl font-bold text-ink">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <section id="sign-in" className="scroll-mt-24 bg-pale px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink">Log in</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              Sign-in is not available. There is no password field because there is no account to enter. A login control will be added only when it connects to a real service.
            </p>
            <div className="mt-6">
              <ButtonLink to="/help" variant="secondary">
                Visit the help centre
              </ButtonLink>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  },
});
