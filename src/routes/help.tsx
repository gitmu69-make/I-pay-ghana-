import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { InfoPage } from "@/components/site/info-page";
import { pageHead } from "@/lib/page-head";

const topics = [
  { to: "/faqs", title: "FAQs", text: "Short answers about what this website does and does not do." },
  { to: "/fees", title: "Fees and charges", text: "No fee schedule is published yet. The page says so plainly." },
  { to: "/report", title: "Report an issue", text: "Use the preview form to shape a note. It is not delivered." },
  { to: "/contact", title: "Contact", text: "Phone, email, and address stay blank until they are verified." },
  { to: "/security", title: "Care with payments", text: "How the site talks about security without claiming certifications." },
  { to: "/get-started", title: "Get started", text: "What you can do today, including why login is not a form." },
];

export const Route = createFileRoute("/help")({
  head: () => pageHead("Help centre · I Pay Ghana", "Find the I Pay Ghana pages that explain products, fees, privacy, and contact."),
  component: function HelpPage() {
    return (
      <SiteLayout>
        <InfoPage
          kicker="Support"
          title="Help centre"
          lede="Start here if you are looking for a straight answer. There is no live chat and no payment hotline on this site."
        >
          <ul className="grid gap-3">
            {topics.map((topic) => (
              <li key={topic.to}>
                {topic.to === "/security" ? (
                  <Link to="/" hash="security" className="block rounded-card border border-line px-5 py-4 hover:border-forest">
                    <span className="font-semibold text-ink">{topic.title}</span>
                    <span className="mt-1 block text-sm text-muted">{topic.text}</span>
                  </Link>
                ) : (
                  <Link to={topic.to} className="block rounded-card border border-line px-5 py-4 hover:border-forest">
                    <span className="font-semibold text-ink">{topic.title}</span>
                    <span className="mt-1 block text-sm text-muted">{topic.text}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </InfoPage>
      </SiteLayout>
    );
  },
});
