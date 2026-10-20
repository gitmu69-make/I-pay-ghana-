import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { DraftNotice, InfoPage } from "@/components/site/info-page";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("Terms · I Pay Ghana", "Draft terms for the I Pay Ghana website. Not a customer agreement."),
  component: function TermsPage() {
    return (
      <SiteLayout>
        <InfoPage
          kicker="Legal"
          title="Terms"
          lede="A placeholder so the link is not empty. It is not the contract for a payment service."
        >
          <DraftNotice />
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <p>The pages describe a brand and proposed payment experiences. They are not an offer to open an account, hold deposits, or execute payments.</p>
            <p>Sample balances, sample statuses, and sample stories are illustrations. They are not statements of an account.</p>
            <p>You are responsible for checking any payment instruction with the provider you actually use. Nothing here is that instruction.</p>
            <p>Prepared terms should cover eligibility, acceptable use, liability, and the law that applies before anyone relies on them. Those terms have not been supplied.</p>
          </div>
        </InfoPage>
      </SiteLayout>
    );
  },
});
