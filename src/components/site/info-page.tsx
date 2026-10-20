import type { ReactNode } from "react";

export function InfoPage({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <article>
      <header className="bg-pale px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-forest uppercase">{kicker}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">{children}</div>
    </article>
  );
}

export function DraftNotice() {
  return (
    <p className="mb-8 rounded-card border border-line bg-foam px-4 py-3 text-sm leading-relaxed text-muted">
      Draft for layout only. This is not legal advice and it is not I Pay Ghana’s published policy. A prepared document should replace this page before it is treated as binding.
    </p>
  );
}
