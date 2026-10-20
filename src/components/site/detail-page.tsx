import { Link } from "@tanstack/react-router";
import type { DetailPage } from "@/lib/content";
import { ButtonLink } from "@/components/site/button";

export function DetailView({ page, parent }: { page: DetailPage; parent: { to: string; label: string } }) {
  return (
    <article className="bg-paper">
      <header className="bg-pale px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-forest uppercase">{page.kicker}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{page.summary}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-3xl gap-8 px-4 py-14 sm:px-6">
        {page.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-ink">
            {paragraph}
          </p>
        ))}
        <ul className="space-y-3 rounded-card bg-mint p-5">
          {page.notes.map((note) => (
            <li key={note} className="text-sm leading-relaxed text-ink">
              {note}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/get-started">Get Started</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Contact
          </ButtonLink>
          <Link to={parent.to} className="inline-flex min-h-11 items-center text-sm font-semibold text-forest">
            {parent.label}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function MissingSlug({ label }: { label: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-ink">That {label} is not listed.</h1>
      <p className="mt-4 text-muted">Choose another page from the menu, or return home.</p>
      <div className="mt-6">
        <ButtonLink to="/">Back home</ButtonLink>
      </div>
    </section>
  );
}
