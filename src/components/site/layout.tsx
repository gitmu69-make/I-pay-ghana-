import type { ReactNode } from "react";
import { CookieConsent } from "@/components/site/cookie-consent";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
