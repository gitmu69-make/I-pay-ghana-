import { SiteLayout } from "@/components/site/layout";
import { ButtonLink } from "@/components/site/button";

export function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-leaf">404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink">That page is not on this site.</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          The link may be out of date. Home, products, and contact are all still here.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/">Back home</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
