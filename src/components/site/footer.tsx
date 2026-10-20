import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { openCookieSettings } from "@/lib/cookies";

const explore = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About Us" },
];

const support = [
  { to: "/contact", label: "Contact Us" },
  { to: "/help", label: "Help Centre" },
  { to: "/faqs", label: "FAQs" },
  { to: "/report", label: "Report an Issue" },
];

const legal = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms and Conditions" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/fees", label: "Fees and Charges" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-foam">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Exploring better ways to make digital payments work for people and businesses in Ghana.
          </p>
          <p className="mt-4 text-sm text-muted">Social profiles have not been published.</p>
        </div>
        <FooterColumn title="Explore" items={explore} />
        <FooterColumn title="Support" items={support} />
        <FooterColumn title="Legal" items={legal} />
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} I Pay Ghana. All rights reserved. Ghana.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/privacy" className="hover:text-forest">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-forest">
              Terms
            </Link>
            <button type="button" className="min-h-11 text-left hover:text-forest" onClick={() => openCookieSettings()}>
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-3 space-y-1">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-forest">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
