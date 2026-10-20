import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-forest text-paper hover:bg-forest-deep",
        secondary: "border border-line bg-paper text-ink hover:border-forest hover:text-forest",
        outlineLight: "border border-paper/50 bg-transparent text-paper hover:bg-paper/10",
        outlineGreen: "border border-forest/30 bg-paper text-forest hover:border-forest hover:bg-mint",
        ghost: "bg-transparent text-ink hover:bg-mint",
      },
      full: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      full: false,
    },
  },
);

type StyleProps = VariantProps<typeof buttonStyles>;

export function ButtonLink({
  to,
  hash,
  children,
  className,
  variant,
  full,
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  className?: string;
} & StyleProps) {
  return (
    <Link to={to} hash={hash} className={cn(buttonStyles({ variant, full }), className)}>
      {children}
    </Link>
  );
}
