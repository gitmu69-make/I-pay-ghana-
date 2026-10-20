import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className, plain = false }: { className?: string; plain?: boolean }) {
  if (plain) {
    return (
      <svg viewBox="0 0 32 32" className={cn("size-7 shrink-0", className)} aria-hidden="true">
        <circle cx="12" cy="16" r="6.2" fill="none" className="stroke-paper" strokeWidth="2.2" />
        <circle cx="12" cy="16" r="2.7" className="fill-leaf" />
        <path d="M19.4 11.2a6.6 6.6 0 0 1 0 9.6" fill="none" className="stroke-leaf" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M23.2 8.2a10.4 10.4 0 0 1 0 15.6" fill="none" className="stroke-paper" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" className={cn("size-10 shrink-0", className)} aria-hidden="true">
      <rect width="40" height="40" rx="12" className="fill-forest" />
      <circle cx="17" cy="20" r="8" fill="none" className="stroke-paper" strokeWidth="2.4" />
      <circle cx="17" cy="20" r="3.6" className="fill-leaf" />
      <path
        d="M26.4 13.6a8.6 8.6 0 0 1 0 12.8"
        fill="none"
        className="stroke-leaf"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M30.2 10.4a13 13 0 0 1 0 19.2"
        fill="none"
        className="stroke-paper"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5 rounded-md", className)} aria-label="I Pay Ghana, home">
      <Mark />
      <span className="leading-none">
        <span
          className={cn(
            "block text-lg font-extrabold tracking-tight",
            tone === "light" ? "text-paper" : "text-ink",
          )}
        >
          I PAY
        </span>
        <span className="mt-0.5 block text-xs font-semibold tracking-widest text-leaf">GHANA</span>
      </span>
    </Link>
  );
}

export function GhanaFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 12" className={cn("h-3 w-5 overflow-hidden rounded-sm", className)} aria-hidden="true">
      <rect width="18" height="4" fill="#CE1126" />
      <rect y="4" width="18" height="4" fill="#FCD116" />
      <rect y="8" width="18" height="4" fill="#006B3F" />
      <polygon
        points="9,4.85 9.7,6.85 11.85,6.85 10.1,8.1 10.75,10.1 9,8.9 7.25,10.1 7.9,8.1 6.15,6.85 8.3,6.85"
        fill="#000"
      />
    </svg>
  );
}
