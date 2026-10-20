import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Menu, d as ChevronDown, r as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-CbbNUdhu.js
var stories = [
	{
		name: "Ama",
		role: "Sample · neighbourhood shop",
		quote: "Sample story: a short checkout and a clear confirmation would help a busy counter stay moving.",
		image: "/images/portrait-ama.jpg",
		alt: "Portrait of a young Ghanaian woman with short twists, used as a sample story portrait for Ama."
	},
	{
		name: "Kwame",
		role: "Sample · freelance work",
		quote: "Sample story: seeing who paid, and for what, would make a week of small jobs easier to follow.",
		image: "/images/portrait-kwame.jpg",
		alt: "Portrait of a young Ghanaian man in a chambray shirt, used as a sample story portrait for Kwame."
	},
	{
		name: "Abena",
		role: "Sample · market stall",
		quote: "Sample story: a phone-based payment note would be easier to keep than a loose paper receipt.",
		image: "/images/portrait-abena.jpg",
		alt: "Portrait of a Ghanaian woman beside a market stall, used as a sample story portrait for Abena."
	}
];
var products = [
	{
		slug: "digital-payments",
		kicker: "Proposed experience",
		title: "Digital payments",
		summary: "A concept for a simpler screen where someone reviews who they are paying, the amount in Ghana cedis, and a confirmation.",
		body: ["This page describes a direction for I Pay Ghana. It is not a live payment service, and nothing on it can send or receive money.", "The idea is a short path: choose a supported method, check the details, and keep a record of what was confirmed."],
		notes: ["No wallets, merchant numbers, or USSD codes are published here.", "Charges, limits, and settlement times are not stated because they have not been set."]
	},
	{
		slug: "send-money",
		kicker: "Proposed category",
		title: "Send money",
		summary: "A concept for moving value between accounts that I Pay Ghana may support in the future.",
		body: ["People in Ghana already move money in many ways. This category is a placeholder for a clear send flow — recipient, amount, review, confirmation.", "Until a real integration exists, there is no recipient field to fill and no transfer to start."],
		notes: ["Supported account types have not been announced.", "Do not share PINs, one-time codes, or card numbers on this website."]
	},
	{
		slug: "pay-bills",
		kicker: "Proposed category",
		title: "Pay bills",
		summary: "A concept for paying everyday bills from one place, with the amount and the biller shown before anything is confirmed.",
		body: ["Bill payment is shown here as a product direction: a receipt-style summary, a clear amount in GHS, and a record afterwards.", "No billers, meter numbers, or collection accounts are listed, because none have been confirmed."],
		notes: ["A successful sample status in a mockup is not a receipt.", "Always use the instructions published by the biller you are paying."]
	},
	{
		slug: "business-collections",
		kicker: "Proposed category",
		title: "Business collections",
		summary: "A concept for shops and growing businesses that want a calmer way to record money coming in.",
		body: ["The collection idea is simple: a business sees what was paid, when, and the reference the customer used.", "It is not a point-of-sale terminal, a merchant account, or a settlement promise."],
		notes: ["No merchant ID is issued from this site.", "Payout timing and fees are unpublished."]
	}
];
var solutions = [{
	slug: "payments",
	kicker: "For people",
	title: "Everyday payments",
	summary: "A proposed experience for personal payments — reviewed on a phone, confirmed in plain language, recorded so they can be looked up later.",
	body: ["I Pay Ghana is being shaped around daily life in Ghana: a shop purchase, a bill, a transfer to someone you know.", "This solution page explains that intent. It does not open an account or connect to mobile money, a bank, or a card scheme."],
	notes: ["Currency context is the Ghana cedi.", "Any balance shown elsewhere on the site is sample data."]
}, {
	slug: "business",
	kicker: "For businesses",
	title: "Business payments",
	summary: "A proposed experience for Ghanaian entrepreneurs who want payment activity to be easier to follow at the counter.",
	body: ["Small shops, stalls, and service businesses often juggle cash, transfers, and paper notes. The business direction is about clarity, not a stack of features.", "Nothing here enrols a business, issues a till number, or settles funds."],
	notes: ["Talk to the team through the contact form preview if you want to follow the work.", "Partnerships with payment providers are not claimed."]
}];
function findPage(list, slug) {
	return list.find((item) => item.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/page-head-BTAi5yfX.js
function pageHead(title, description) {
	return { meta: [{ title }, {
		name: "description",
		content: description
	}] };
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BFH_sN-p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
var COOKIE_KEY = "ipay-ghana-cookie-choice";
var listeners = /* @__PURE__ */ new Set();
function readCookieChoice() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(COOKIE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (parsed?.necessary !== true || typeof parsed.preferences !== "boolean") return null;
		return parsed;
	} catch {
		return null;
	}
}
function writeCookieChoice(preferences) {
	const choice = {
		necessary: true,
		preferences,
		decidedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	window.localStorage.setItem(COOKIE_KEY, JSON.stringify(choice));
	return choice;
}
function openCookieSettings() {
	listeners.forEach((listener) => listener());
}
function onOpenCookieSettings(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [customize, setCustomize] = (0, import_react.useState)(false);
	const [preferences, setPreferences] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!readCookieChoice()) setVisible(true);
		const stop = onOpenCookieSettings(() => {
			const choice = readCookieChoice();
			setPreferences(choice?.preferences ?? false);
			setCustomize(true);
			setVisible(true);
		});
		return () => {
			stop();
		};
	}, []);
	if (!visible) return null;
	function save(allowPreferences) {
		writeCookieChoice(allowPreferences);
		setVisible(false);
		setCustomize(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl rounded-card border border-line bg-paper p-4 shadow-lift sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-ink",
					children: "Cookies on this site"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: [
						"Essential storage remembers this choice on your device. Preference storage is optional.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cookies",
							className: "font-semibold text-forest underline-offset-2 hover:underline",
							children: "Cookie note"
						})
					]
				}),
				customize ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 flex min-h-11 items-start gap-3 text-sm text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "mt-1 size-4 accent-forest",
						checked: preferences,
						onChange: (event) => setPreferences(event.target.checked)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Allow preference storage on this device. Essential storage stays on either way." })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						customize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep",
							onClick: () => save(preferences),
							children: "Save choice"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep",
							onClick: () => save(true),
							children: "Accept all"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:border-forest",
							onClick: () => save(false),
							children: "Essential only"
						}),
						!customize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-forest hover:bg-mint",
							onClick: () => setCustomize(true),
							children: "Customize"
						}) : null
					]
				})
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className, plain = false }) {
	if (plain) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7 shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "16",
				r: "6.2",
				fill: "none",
				className: "stroke-paper",
				strokeWidth: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "16",
				r: "2.7",
				className: "fill-leaf"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M19.4 11.2a6.6 6.6 0 0 1 0 9.6",
				fill: "none",
				className: "stroke-leaf",
				strokeWidth: "2.1",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M23.2 8.2a10.4 10.4 0 0 1 0 15.6",
				fill: "none",
				className: "stroke-paper",
				strokeWidth: "2.1",
				strokeLinecap: "round"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className: cn("size-10 shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "40",
				rx: "12",
				className: "fill-forest"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17",
				cy: "20",
				r: "8",
				fill: "none",
				className: "stroke-paper",
				strokeWidth: "2.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17",
				cy: "20",
				r: "3.6",
				className: "fill-leaf"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M26.4 13.6a8.6 8.6 0 0 1 0 12.8",
				fill: "none",
				className: "stroke-leaf",
				strokeWidth: "2.3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30.2 10.4a13 13 0 0 1 0 19.2",
				fill: "none",
				className: "stroke-paper",
				strokeWidth: "2.3",
				strokeLinecap: "round"
			})
		]
	});
}
function Logo({ tone = "dark", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-2.5 rounded-md", className),
		"aria-label": "I Pay Ghana, home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block text-lg font-extrabold tracking-tight", tone === "light" ? "text-paper" : "text-ink"),
				children: "I PAY"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs font-semibold tracking-widest text-leaf",
				children: "GHANA"
			})]
		})]
	});
}
function GhanaFlag({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 18 12",
		className: cn("h-3 w-5 overflow-hidden rounded-sm", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "18",
				height: "4",
				fill: "#CE1126"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "4",
				width: "18",
				height: "4",
				fill: "#FCD116"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "8",
				width: "18",
				height: "4",
				fill: "#006B3F"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "9,4.85 9.7,6.85 11.85,6.85 10.1,8.1 10.75,10.1 9,8.9 7.25,10.1 7.9,8.1 6.15,6.85 8.3,6.85",
				fill: "#000"
			})
		]
	});
}
var explore = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/solutions",
		label: "Solutions"
	},
	{
		to: "/how-it-works",
		label: "How It Works"
	},
	{
		to: "/about",
		label: "About Us"
	}
];
var support = [
	{
		to: "/contact",
		label: "Contact Us"
	},
	{
		to: "/help",
		label: "Help Centre"
	},
	{
		to: "/faqs",
		label: "FAQs"
	},
	{
		to: "/report",
		label: "Report an Issue"
	}
];
var legal = [
	{
		to: "/privacy",
		label: "Privacy Policy"
	},
	{
		to: "/terms",
		label: "Terms and Conditions"
	},
	{
		to: "/cookies",
		label: "Cookie Policy"
	},
	{
		to: "/fees",
		label: "Fees and Charges"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-foam",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
						children: "Exploring better ways to make digital payments work for people and businesses in Ghana."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Social profiles have not been published."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Explore",
					items: explore
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Support",
					items: support
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Legal",
					items: legal
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" I Pay Ghana. All rights reserved. Ghana."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-x-4 gap-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-forest",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-forest",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 text-left hover:text-forest",
							onClick: () => openCookieSettings(),
							children: "Cookie preferences"
						})
					]
				})]
			})
		})]
	});
}
function FooterColumn({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-sm font-semibold text-ink",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 space-y-1",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.to,
			className: "inline-flex min-h-11 items-center text-sm text-muted hover:text-forest",
			children: item.label
		}) }, item.to))
	})] });
}
var buttonStyles = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60", {
	variants: {
		variant: {
			primary: "bg-forest text-paper hover:bg-forest-deep",
			secondary: "border border-line bg-paper text-ink hover:border-forest hover:text-forest",
			outlineLight: "border border-paper/50 bg-transparent text-paper hover:bg-paper/10",
			outlineGreen: "border border-forest/30 bg-paper text-forest hover:border-forest hover:bg-mint",
			ghost: "bg-transparent text-ink hover:bg-mint"
		},
		full: {
			true: "w-full",
			false: ""
		}
	},
	defaultVariants: {
		variant: "primary",
		full: false
	}
});
function ButtonLink({ to, hash, children, className, variant, full }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		hash,
		className: cn(buttonStyles({
			variant,
			full
		}), className),
		children
	});
}
var productLinks = [
	{
		to: "/products/digital-payments",
		title: "Digital payments",
		text: "Review a payment before it is confirmed."
	},
	{
		to: "/products/send-money",
		title: "Send money",
		text: "A concept for moving money between accounts."
	},
	{
		to: "/products/pay-bills",
		title: "Pay bills",
		text: "A concept for everyday bills and expenses."
	},
	{
		to: "/products/business-collections",
		title: "Business collections",
		text: "A concept for recording money in."
	}
];
var solutionLinks = [{
	to: "/solutions/payments",
	title: "Everyday payments",
	text: "For people handling daily transactions."
}, {
	to: "/solutions/business",
	title: "Business payments",
	text: "For shops, stalls, and growing teams."
}];
var links = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/how-it-works",
		label: "How It Works",
		exact: false
	},
	{
		to: "/about",
		label: "About Us",
		exact: false
	},
	{
		to: "/contact",
		label: "Contact",
		exact: false
	}
];
function pathActive(pathname, to, exact) {
	if (exact) return pathname === to;
	return pathname === to || pathname.startsWith(`${to}/`);
}
function Header() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [openMenu, setOpenMenu] = (0, import_react.useState)(null);
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const [mobileGroup, setMobileGroup] = (0, import_react.useState)(null);
	const barRef = (0, import_react.useRef)(null);
	const menuId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		setMobile(false);
		setOpenMenu(null);
		setMobileGroup(null);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = mobile ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobile]);
	(0, import_react.useEffect)(() => {
		if (!openMenu && !mobile) return;
		const onKey = (event) => {
			if (event.key === "Escape") {
				setOpenMenu(null);
				setMobile(false);
			}
		};
		const onPointer = (event) => {
			if (!barRef.current?.contains(event.target)) setOpenMenu(null);
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("mousedown", onPointer);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("mousedown", onPointer);
		};
	}, [openMenu, mobile]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: barRef,
		className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-paper",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "ml-6 hidden items-center gap-1 xl:flex",
						"aria-label": "Primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
								to: "/",
								label: "Home",
								active: pathname === "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropMenu, {
								label: "Products",
								active: pathname.startsWith("/products"),
								open: openMenu === "products",
								onToggle: () => setOpenMenu((value) => value === "products" ? null : "products"),
								items: productLinks,
								viewAll: {
									to: "/products",
									label: "All products"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropMenu, {
								label: "Solutions",
								active: pathname.startsWith("/solutions"),
								open: openMenu === "solutions",
								onToggle: () => setOpenMenu((value) => value === "solutions" ? null : "solutions"),
								items: solutionLinks,
								viewAll: {
									to: "/solutions",
									label: "All solutions"
								}
							}),
							links.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
								to: item.to,
								label: item.label,
								active: pathActive(pathname, item.to, item.exact)
							}, item.to))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "inline-flex min-h-11 items-center gap-2 rounded-full px-2.5 text-sm font-semibold text-ink hover:bg-pale sm:px-3",
									"aria-expanded": openMenu === "ghana",
									"aria-controls": `${menuId}-ghana`,
									onClick: () => setOpenMenu((value) => value === "ghana" ? null : "ghana"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhanaFlag, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											children: "Ghana"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
											className: cn("size-4 text-muted transition", openMenu === "ghana" && "rotate-180"),
											"aria-hidden": "true"
										})
									]
								}), openMenu === "ghana" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									id: `${menuId}-ghana`,
									className: "absolute right-0 top-full z-50 mt-2 w-64 rounded-card border border-line bg-paper p-4 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-ink",
										children: "Ghana · GHS"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-muted",
										children: "This site is written for Ghana and shows amounts in Ghana cedis. Other markets are not offered."
									})]
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/get-started",
								hash: "sign-in",
								variant: "secondary",
								className: "hidden sm:inline-flex",
								children: "Log In"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/get-started",
								className: "hidden sm:inline-flex",
								children: "Get Started"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-pale xl:hidden",
								"aria-expanded": mobile,
								"aria-controls": `${menuId}-mobile`,
								onClick: () => setMobile((value) => !value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: mobile ? "Close menu" : "Open menu"
								}), mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })]
							})
						]
					})
				]
			}),
			mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: `${menuId}-mobile`,
				className: "menu-scroll overflow-y-auto border-t border-line bg-paper xl:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6",
					"aria-label": "Mobile",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
							to: "/",
							label: "Home",
							active: pathname === "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
							label: "Products",
							open: mobileGroup === "products",
							onToggle: () => setMobileGroup((value) => value === "products" ? null : "products"),
							items: productLinks,
							viewAll: {
								to: "/products",
								label: "All products"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
							label: "Solutions",
							open: mobileGroup === "solutions",
							onToggle: () => setMobileGroup((value) => value === "solutions" ? null : "solutions"),
							items: solutionLinks,
							viewAll: {
								to: "/solutions",
								label: "All solutions"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
							to: "/how-it-works",
							label: "How It Works",
							active: pathname.startsWith("/how-it-works")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
							to: "/about",
							label: "About Us",
							active: pathname.startsWith("/about")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
							to: "/contact",
							label: "Contact",
							active: pathname.startsWith("/contact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-2 sm:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/get-started",
								hash: "sign-in",
								variant: "secondary",
								full: true,
								children: "Log In"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/get-started",
								full: true,
								children: "Get Started"
							})]
						})
					]
				})
			}) : null
		]
	});
}
function NavLink({ to, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn("inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold", active ? "text-forest" : "text-ink hover:bg-pale"),
		"aria-current": active ? "page" : void 0,
		children: label
	});
}
function DropMenu({ label, active, open, onToggle, items, viewAll }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: cn("inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-semibold", active ? "text-forest" : "text-ink hover:bg-pale"),
			"aria-expanded": open,
			"aria-controls": id,
			onClick: onToggle,
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				className: cn("size-4 text-muted transition", open && "rotate-180"),
				"aria-hidden": "true"
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id,
			className: "absolute left-0 top-full z-50 mt-2 w-80 rounded-card border border-line bg-paper p-2 shadow-soft",
			children: [items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.to,
				className: "block rounded-xl px-3 py-3 hover:bg-pale",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm font-semibold text-ink",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block text-sm text-muted",
					children: item.text
				})]
			}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: viewAll.to,
				className: "mt-1 block rounded-xl px-3 py-3 text-sm font-semibold text-forest hover:bg-mint",
				children: viewAll.label
			})]
		}) : null]
	});
}
function MobileLink({ to, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn("flex min-h-11 items-center rounded-xl px-3 text-base font-semibold", active ? "bg-mint text-forest" : "text-ink hover:bg-pale"),
		"aria-current": active ? "page" : void 0,
		children: label
	});
}
function MobileGroup({ label, open, onToggle, items, viewAll }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-base font-semibold text-ink hover:bg-pale",
		"aria-expanded": open,
		onClick: onToggle,
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: cn("size-4 text-muted transition", open && "rotate-180"),
			"aria-hidden": "true"
		})]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ml-3 border-l border-line pl-3",
		children: [items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: item.to,
			className: "block rounded-xl px-3 py-2.5 hover:bg-pale",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-semibold text-ink",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm text-muted",
				children: item.text
			})]
		}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: viewAll.to,
			className: "block rounded-xl px-3 py-2.5 text-sm font-semibold text-forest",
			children: viewAll.label
		})]
	}) : null] });
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {})
		]
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-24 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-leaf",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-extrabold tracking-tight text-ink",
				children: "That page is not on this site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: "The link may be out of date. Home, products, and contact are all still here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/",
					children: "Back home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/contact",
					variant: "secondary",
					children: "Contact"
				})]
			})
		]
	}) });
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-Dc6Vhq0n.css";
var Route$16 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "I Pay Ghana" },
			{
				name: "description",
				content: "I Pay Ghana is a Ghana-focused digital payments brand exploring simpler ways for people and businesses to handle everyday payments."
			},
			{
				name: "theme-color",
				content: "#087A3D"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$15 = () => import("./routes-CBvRuyjE.mjs");
var Route$15 = createFileRoute("/")({
	head: () => pageHead("I Pay Ghana", "Pay smarter with I Pay Ghana, a digital payments brand shaped around everyday life in Ghana."),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./about-a89kW9R9.mjs");
var Route$14 = createFileRoute("/about")({
	head: () => pageHead("About us · I Pay Ghana", "I Pay Ghana is a digital payments brand focused on clearer everyday payments for people and businesses in Ghana."),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./contact-K_Mq9tAl.mjs");
var Route$13 = createFileRoute("/contact")({
	head: () => pageHead("Contact · I Pay Ghana", "Ask a question about I Pay Ghana. Phone, email, and office details appear only after they are verified."),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./cookies-UEfK5cph.mjs");
var Route$12 = createFileRoute("/cookies")({
	head: () => pageHead("Cookies · I Pay Ghana", "What I Pay Ghana stores on your device, and how to change it."),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./faqs-C5LXiypn.mjs");
var Route$11 = createFileRoute("/faqs")({
	head: () => pageHead("FAQs · I Pay Ghana", "Answers about what I Pay Ghana’s website can and cannot do today."),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./fees-CYieLaP8.mjs");
var Route$10 = createFileRoute("/fees")({
	head: () => pageHead("Fees and charges · I Pay Ghana", "I Pay Ghana has not published a fee schedule. No charge is quoted on this website."),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./get-started-Ck2Aerqg.mjs");
var Route$9 = createFileRoute("/get-started")({
	head: () => pageHead("Get started · I Pay Ghana", "How to follow I Pay Ghana today. Account sign-in and live payments are not available on this website."),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./help-Clsr5AP6.mjs");
var Route$8 = createFileRoute("/help")({
	head: () => pageHead("Help centre · I Pay Ghana", "Find the I Pay Ghana pages that explain products, fees, privacy, and contact."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./how-it-works-BAWPLd2W.mjs");
var Route$7 = createFileRoute("/how-it-works")({
	head: () => pageHead("How it works · I Pay Ghana", "Four intended steps for I Pay Ghana: get started, set up, make a payment, and track activity."),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./privacy-BHCHRQQb.mjs");
var Route$6 = createFileRoute("/privacy")({
	head: () => pageHead("Privacy · I Pay Ghana", "Draft privacy note for the I Pay Ghana website. Not a published policy."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./report-C4CVn2Tp.mjs");
var Route$5 = createFileRoute("/report")({
	head: () => pageHead("Report an issue · I Pay Ghana", "Describe an issue with the I Pay Ghana website. The form does not submit to a support desk yet."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./terms-CYxdXMmG.mjs");
var Route$4 = createFileRoute("/terms")({
	head: () => pageHead("Terms · I Pay Ghana", "Draft terms for the I Pay Ghana website. Not a customer agreement."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-C25xi1bb.mjs");
var Route$3 = createFileRoute("/products/")({
	head: () => pageHead("Products · I Pay Ghana", "Proposed I Pay Ghana product categories: digital payments, send money, pay bills, and business collections."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-CBcanmU2.mjs");
var Route$2 = createFileRoute("/products/$slug")({
	head: ({ params }) => {
		const page = findPage(products, params.slug);
		return pageHead(page ? `${page.title} · I Pay Ghana` : "Product · I Pay Ghana", page?.summary ?? "This product page is not listed.");
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./solutions-umt3vOaY.mjs");
var Route$1 = createFileRoute("/solutions/")({
	head: () => pageHead("Solutions · I Pay Ghana", "Proposed payment experiences for people and businesses in Ghana."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-Nak3RnSA.mjs");
var Route = createFileRoute("/solutions/$slug")({
	head: ({ params }) => {
		const page = findPage(solutions, params.slug);
		return pageHead(page ? `${page.title} · I Pay Ghana` : "Solution · I Pay Ghana", page?.summary ?? "This solution page is not listed.");
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var AboutRoute = Route$14.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$16
});
var ContactRoute = Route$13.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$16
});
var CookiesRoute = Route$12.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$16
});
var FaqsRoute = Route$11.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$16
});
var FeesRoute = Route$10.update({
	id: "/fees",
	path: "/fees",
	getParentRoute: () => Route$16
});
var GetStartedRoute = Route$9.update({
	id: "/get-started",
	path: "/get-started",
	getParentRoute: () => Route$16
});
var HelpRoute = Route$8.update({
	id: "/help",
	path: "/help",
	getParentRoute: () => Route$16
});
var HowItWorksRoute = Route$7.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$16
});
var PrivacyRoute = Route$6.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$16
});
var ReportRoute = Route$5.update({
	id: "/report",
	path: "/report",
	getParentRoute: () => Route$16
});
var TermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$16
});
var ProductsIndexRoute = Route$3.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$16
});
var ProductsSlugRoute = Route$2.update({
	id: "/products/$slug",
	path: "/products/$slug",
	getParentRoute: () => Route$16
});
var SolutionsIndexRoute = Route$1.update({
	id: "/solutions/",
	path: "/solutions/",
	getParentRoute: () => Route$16
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	CookiesRoute,
	FaqsRoute,
	FeesRoute,
	GetStartedRoute,
	HelpRoute,
	HowItWorksRoute,
	PrivacyRoute,
	ReportRoute,
	TermsRoute,
	ProductsSlugRoute,
	SolutionsSlugRoute: Route.update({
		id: "/solutions/$slug",
		path: "/solutions/$slug",
		getParentRoute: () => Route$16
	}),
	ProductsIndexRoute,
	SolutionsIndexRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundPage
	});
}
//#endregion
export { ButtonLink as a, openCookieSettings as c, solutions as d, stories as f, SiteLayout as i, findPage as l, Route as n, Mark as o, Route$2 as r, cn as s, router_exports as t, products as u };
