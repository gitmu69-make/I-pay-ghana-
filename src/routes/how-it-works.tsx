import { createFileRoute } from "@tanstack/react-router";
import { HowItWorksSection } from "@/components/home/home-page";
import { SiteLayout } from "@/components/site/layout";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead(
      "How it works · I Pay Ghana",
      "Four intended steps for I Pay Ghana: get started, set up, make a payment, and track activity.",
    ),
  component: function HowPage() {
    return (
      <SiteLayout>
        <HowItWorksSection />
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">What is live today</h2>
          <p className="mt-4 leading-relaxed text-muted">
            You can read the intended journey, compare product directions, and use the contact preview. You cannot create an account, sign in, or pay anyone from these pages. When a real flow exists, this page will describe only the steps that have been built.
          </p>
        </section>
      </SiteLayout>
    );
  },
});
