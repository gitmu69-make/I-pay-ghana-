import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { DraftNotice, InfoPage } from "@/components/site/info-page";
import { openCookieSettings } from "@/lib/cookies";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/cookies")({
  head: () => pageHead("Cookies · I Pay Ghana", "What I Pay Ghana stores on your device, and how to change it."),
  component: function CookiesPage() {
    return (
      <SiteLayout>
        <InfoPage
          kicker="Legal"
          title="Cookies"
          lede="This site stores a small preference on your device. It does not run advertising cookies."
        >
          <DraftNotice />
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <p>Essential storage remembers whether you chose “essential only” or allowed preference storage. The key stays in local storage in this browser.</p>
            <p>Preference storage is optional. The site does not currently use it for anything beyond recording that you allowed it.</p>
            <p>No payment session, no login token, and no third-party marketing tag is set by these pages.</p>
          </div>
          <button
            type="button"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep"
            onClick={() => openCookieSettings()}
          >
            Open cookie preferences
          </button>
        </InfoPage>
      </SiteLayout>
    );
  },
});
