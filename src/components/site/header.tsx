import { useEffect, useId, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/site/button";
import { GhanaFlag, Logo } from "@/components/site/logo";

const productLinks = [
  { to: "/products/digital-payments", title: "Digital payments", text: "Review a payment before it is confirmed." },
  { to: "/products/send-money", title: "Send money", text: "A concept for moving money between accounts." },
  { to: "/products/pay-bills", title: "Pay bills", text: "A concept for everyday bills and expenses." },
  { to: "/products/business-collections", title: "Business collections", text: "A concept for recording money in." },
];

const solutionLinks = [
  { to: "/solutions/payments", title: "Everyday payments", text: "For people handling daily transactions." },
  { to: "/solutions/business", title: "Business payments", text: "For shops, stalls, and growing teams." },
];

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/how-it-works", label: "How It Works", exact: false },
  { to: "/about", label: "About Us", exact: false },
  { to: "/contact", label: "Contact", exact: false },
];

function pathActive(pathname: string, to: string, exact?: boolean) {
  if (exact) return pathname === to;
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [openMenu, setOpenMenu] = useState<"products" | "solutions" | "ghana" | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<"products" | "solutions" | null>(null);
  const barRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => {
    setMobile(false);
    setOpenMenu(null);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    if (!openMenu && !mobile) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobile(false);
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!barRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [openMenu, mobile]);

  return (
    <header ref={barRef} className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Logo />
        <nav className="ml-6 hidden items-center gap-1 xl:flex" aria-label="Primary">
          <NavLink to="/" label="Home" active={pathname === "/"} />
          <DropMenu
            label="Products"
            active={pathname.startsWith("/products")}
            open={openMenu === "products"}
            onToggle={() => setOpenMenu((value) => (value === "products" ? null : "products"))}
            items={productLinks}
            viewAll={{ to: "/products", label: "All products" }}
          />
          <DropMenu
            label="Solutions"
            active={pathname.startsWith("/solutions")}
            open={openMenu === "solutions"}
            onToggle={() => setOpenMenu((value) => (value === "solutions" ? null : "solutions"))}
            items={solutionLinks}
            viewAll={{ to: "/solutions", label: "All solutions" }}
          />
          {links.slice(1).map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} active={pathActive(pathname, item.to, item.exact)} />
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-2.5 text-sm font-semibold text-ink hover:bg-pale sm:px-3"
              aria-expanded={openMenu === "ghana"}
              aria-controls={`${menuId}-ghana`}
              onClick={() => setOpenMenu((value) => (value === "ghana" ? null : "ghana"))}
            >
              <GhanaFlag />
              <span className="hidden sm:inline">Ghana</span>
              <ChevronDown className={cn("size-4 text-muted transition", openMenu === "ghana" && "rotate-180")} aria-hidden="true" />
            </button>
            {openMenu === "ghana" ? (
              <div
                id={`${menuId}-ghana`}
                className="absolute right-0 top-full z-50 mt-2 w-64 rounded-card border border-line bg-paper p-4 shadow-soft"
              >
                <p className="text-sm font-semibold text-ink">Ghana · GHS</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  This site is written for Ghana and shows amounts in Ghana cedis. Other markets are not offered.
                </p>
              </div>
            ) : null}
          </div>
          <ButtonLink to="/get-started" hash="sign-in" variant="secondary" className="hidden sm:inline-flex">
            Log In
          </ButtonLink>
          <ButtonLink to="/get-started" className="hidden sm:inline-flex">
            Get Started
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-pale xl:hidden"
            aria-expanded={mobile}
            aria-controls={`${menuId}-mobile`}
            onClick={() => setMobile((value) => !value)}
          >
            <span className="sr-only">{mobile ? "Close menu" : "Open menu"}</span>
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {mobile ? (
        <div id={`${menuId}-mobile`} className="menu-scroll overflow-y-auto border-t border-line bg-paper xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            <MobileLink to="/" label="Home" active={pathname === "/"} />
            <MobileGroup
              label="Products"
              open={mobileGroup === "products"}
              onToggle={() => setMobileGroup((value) => (value === "products" ? null : "products"))}
              items={productLinks}
              viewAll={{ to: "/products", label: "All products" }}
            />
            <MobileGroup
              label="Solutions"
              open={mobileGroup === "solutions"}
              onToggle={() => setMobileGroup((value) => (value === "solutions" ? null : "solutions"))}
              items={solutionLinks}
              viewAll={{ to: "/solutions", label: "All solutions" }}
            />
            <MobileLink to="/how-it-works" label="How It Works" active={pathname.startsWith("/how-it-works")} />
            <MobileLink to="/about" label="About Us" active={pathname.startsWith("/about")} />
            <MobileLink to="/contact" label="Contact" active={pathname.startsWith("/contact")} />
            <div className="mt-3 grid gap-2 sm:hidden">
              <ButtonLink to="/get-started" hash="sign-in" variant="secondary" full>
                Log In
              </ButtonLink>
              <ButtonLink to="/get-started" full>
                Get Started
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold",
        active ? "text-forest" : "text-ink hover:bg-pale",
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function DropMenu({
  label,
  active,
  open,
  onToggle,
  items,
  viewAll,
}: {
  label: string;
  active: boolean;
  open: boolean;
  onToggle: () => void;
  items: { to: string; title: string; text: string }[];
  viewAll: { to: string; label: string };
}) {
  const id = useId();
  return (
    <div className="relative">
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-semibold",
          active ? "text-forest" : "text-ink hover:bg-pale",
        )}
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        {label}
        <ChevronDown className={cn("size-4 text-muted transition", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open ? (
        <div id={id} className="absolute left-0 top-full z-50 mt-2 w-80 rounded-card border border-line bg-paper p-2 shadow-soft">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="block rounded-xl px-3 py-3 hover:bg-pale">
              <span className="block text-sm font-semibold text-ink">{item.title}</span>
              <span className="mt-0.5 block text-sm text-muted">{item.text}</span>
            </Link>
          ))}
          <Link to={viewAll.to} className="mt-1 block rounded-xl px-3 py-3 text-sm font-semibold text-forest hover:bg-mint">
            {viewAll.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function MobileLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "flex min-h-11 items-center rounded-xl px-3 text-base font-semibold",
        active ? "bg-mint text-forest" : "text-ink hover:bg-pale",
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  items,
  viewAll,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  items: { to: string; title: string; text: string }[];
  viewAll: { to: string; label: string };
}) {
  return (
    <div>
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-base font-semibold text-ink hover:bg-pale"
        aria-expanded={open}
        onClick={onToggle}
      >
        {label}
        <ChevronDown className={cn("size-4 text-muted transition", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open ? (
        <div className="ml-3 border-l border-line pl-3">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="block rounded-xl px-3 py-2.5 hover:bg-pale">
              <span className="block text-sm font-semibold text-ink">{item.title}</span>
              <span className="block text-sm text-muted">{item.text}</span>
            </Link>
          ))}
          <Link to={viewAll.to} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-forest">
            {viewAll.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
