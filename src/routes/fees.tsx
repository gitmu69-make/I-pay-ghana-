import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { InfoPage } from "@/components/site/info-page";
import { pageHead } from "@/lib/page-head";

const rows = [
  ["Sending money", "Not published"],
  ["Bill payments", "Not published"],
  ["Business collections", "Not published"],
  ["Account fees", "Not published"],
];

export const Route = createFileRoute("/fees")({
  head: () =>
    pageHead("Fees and charges · I Pay Ghana", "I Pay Ghana has not published a fee schedule. No charge is quoted on this website."),
  component: function FeesPage() {
    return (
      <SiteLayout>
        <InfoPage
          kicker="Legal"
          title="Fees and charges"
          lede="No fee, rate, or free-transfer claim is made here. A schedule will replace this table only when the numbers are real."
        >
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Fee status by category</caption>
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="py-3 font-semibold">Category</th>
                <th className="py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, status]) => (
                <tr key={name} className="border-b border-line">
                  <td className="py-4 font-semibold text-ink">{name}</td>
                  <td className="py-4 text-muted">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </InfoPage>
      </SiteLayout>
    );
  },
});
