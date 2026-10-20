import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { DraftNotice, InfoPage } from "@/components/site/info-page";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy · I Pay Ghana", "Draft privacy note for the I Pay Ghana website. Not a published policy."),
  component: function PrivacyPage() {
    return (
      <SiteLayout>
        <InfoPage
          kicker="Legal"
          title="Privacy"
          lede="How this preview handles information, written so it can be replaced by a prepared policy."
        >
          <DraftNotice />
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <p>The contact and report forms run in your browser. They check the fields, then clear them. They do not transmit the contents to I Pay Ghana and they do not save them on a server.</p>
            <p>A cookie choice can be stored in local storage on your device. It records whether you allowed optional preference storage. It is not used to process payments.</p>
            <p>Do not type passwords, card numbers, PINs, or one-time codes into any field on this site.</p>
            <p>A future policy should name the organisation responsible for personal data, the purpose of each collection, how long data is kept, and how to make a request. Those details are not available yet.</p>
          </div>
        </InfoPage>
      </SiteLayout>
    );
  },
});
