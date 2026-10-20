import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { InfoPage } from "@/components/site/info-page";
import { pageHead } from "@/lib/page-head";

const faqs = [
  ["Can I pay someone on this website?", "No. There is no checkout, wallet, or transfer. Product pages describe concepts only."],
  ["Can I log in?", "No. Sign-in will be added only when it connects to a real account service. The Log In button explains that."],
  ["Are the balances real?", "No. Figures such as GHS 1,250.00 are sample numbers inside a mock phone screen."],
  ["Are Ama, Kwame, and Abena customers?", "No. Their cards are labelled as sample stories for the design."],
  ["Which mobile money services are supported?", "None are listed. Provider names and logos appear only after an integration is confirmed."],
  ["What are the fees?", "A fee schedule has not been published. The site does not promise free transfers or instant settlement."],
  ["Did my contact form message arrive?", "No. The form checks the fields on your device and then clears them. It does not email anyone."],
  ["Is I Pay Ghana a licensed financial institution?", "This website does not identify a licence. Do not treat it as a regulated offer."],
];

export const Route = createFileRoute("/faqs")({
  head: () => pageHead("FAQs · I Pay Ghana", "Answers about what I Pay Ghana’s website can and cannot do today."),
  component: function FaqPage() {
    return (
      <SiteLayout>
        <InfoPage
          kicker="Support"
          title="FAQs"
          lede="Straight answers. If a service is not listed as live, it is not live."
        >
          <div className="divide-y divide-line border-y border-line">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-1">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold text-ink">
                  {question}
                  <span className="text-forest transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </InfoPage>
      </SiteLayout>
    );
  },
});
