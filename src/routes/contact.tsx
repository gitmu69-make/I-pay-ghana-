import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/home/home-page";
import { SiteLayout } from "@/components/site/layout";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact · I Pay Ghana",
      "Ask a question about I Pay Ghana. Phone, email, and office details appear only after they are verified.",
    ),
  component: function ContactPage() {
    return (
      <SiteLayout>
        <ContactSection />
      </SiteLayout>
    );
  },
});
