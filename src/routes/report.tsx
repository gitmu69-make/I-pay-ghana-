import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/site/inquiry-form";
import { SiteLayout } from "@/components/site/layout";
import { InfoPage } from "@/components/site/info-page";
import { pageHead } from "@/lib/page-head";

const subjects = ["Website problem", "Unclear information", "Suspected misuse of the brand", "Something else"];

export const Route = createFileRoute("/report")({
  head: () =>
    pageHead(
      "Report an issue · I Pay Ghana",
      "Describe an issue with the I Pay Ghana website. The form does not submit to a support desk yet.",
    ),
  component: function ReportPage() {
    return (
      <SiteLayout>
        <InfoPage
          kicker="Support"
          title="Report an issue"
          lede="Use this if something on the site is wrong or confusing. There is no case number, because the note is not sent."
        >
          <div className="rounded-card border border-line bg-paper p-5 sm:p-7">
            <InquiryForm subjects={subjects} submitLabel="Check report" idPrefix="report" />
          </div>
        </InfoPage>
      </SiteLayout>
    );
  },
});
