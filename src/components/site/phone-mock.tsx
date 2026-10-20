import { cn } from "@/lib/utils";
import { Mark } from "@/components/site/logo";

const rows = [
  { title: "Payment received", meta: "Sample · today", amount: "+ GHS 150.00" },
  { title: "Shop purchase", meta: "Sample · yesterday", amount: "− GHS 85.50" },
  { title: "Airtime", meta: "Sample · Monday", amount: "− GHS 20.00" },
];

export function PhoneMock({
  className,
  captionClassName,
}: {
  className?: string;
  captionClassName?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-xs", className)}>
      <div className="rounded-device border border-paper/20 bg-ink p-2 shadow-lift">
        <div className="overflow-hidden rounded-screen bg-foam">
          <div className="flex items-center justify-between bg-forest px-4 py-3 text-paper">
            <div className="flex items-center gap-2">
              <Mark plain />
              <span className="text-xs font-bold tracking-wide">I PAY</span>
            </div>
            <span className="rounded-full bg-paper/15 px-2 py-1 text-xs">Preview</span>
          </div>
          <div className="px-4 pb-4 pt-5">
            <p className="text-xs font-medium text-muted">Available balance</p>
            <p className="mt-1 text-3xl font-extrabold tracking-tight text-ink tabular-nums">GHS 1,250.00</p>
            <p className="mt-1 text-xs text-muted">Sample figure. Not a live account.</p>
            <div className="mt-4 rounded-2xl bg-paper p-3 shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">Payment received</p>
                  <p className="text-xs text-muted">GHS 150.00 · sample</p>
                </div>
                <span className="rounded-full bg-mint px-2 py-1 text-xs font-semibold text-forest">Successful</span>
              </div>
            </div>
            <ul className="mt-3 divide-y divide-line">
              {rows.map((row) => (
                <li key={row.title} className="flex items-center justify-between gap-3 py-2.5">
                  <div>
                    <p className="text-sm font-semibold text-ink">{row.title}</p>
                    <p className="text-xs text-muted">{row.meta}</p>
                  </div>
                  <span className="text-sm font-semibold tabular-nums text-ink">{row.amount}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex min-h-11 items-center justify-center rounded-full bg-forest text-sm font-semibold text-paper">
              Sample action
            </div>
          </div>
        </div>
      </div>
      <p className={cn("mt-3 text-center text-xs text-muted", captionClassName)}>
        Mock interface only. It is not connected to an account.
      </p>
    </div>
  );
}
