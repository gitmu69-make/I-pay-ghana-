import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ButtonLink, i as SiteLayout } from "./router-BFH_sN-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-started-Ck2Aerqg.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	["Discover", "Read the product and solution pages so you know what is a concept and what is not available yet."],
	["Set up", "When onboarding exists, it will list the documents and details a person or business must provide. That list is not published."],
	["Confirm", "A real payment would show the recipient, the amount in cedis, and any charge before you agree. This site cannot do that."],
	["Review", "Activity records belong to a live service. The phone screen on the home page is a picture of that idea."]
];
var SplitComponent = function GetStartedPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "bg-forest px-4 py-16 text-paper sm:px-6 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-leaf",
						children: "GET STARTED"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl",
						children: "Start with what is actually here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-paper/80",
						children: "I Pay Ghana does not open accounts from this website. Use the pages below to understand the brand, then send a note through the contact preview if you want to follow along."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/products",
							className: "bg-paper text-forest hover:bg-mint",
							children: "Browse products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/contact",
							variant: "outlineLight",
							children: "Contact"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mx-auto max-w-3xl space-y-6 px-4 py-14 sm:px-6",
			children: steps.map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[auto_1fr] gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-2xl font-extrabold tabular-nums text-leaf",
					children: ["0", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold text-ink",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: text
				})] })]
			}, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "sign-in",
			className: "scroll-mt-24 bg-pale px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold tracking-tight text-ink",
						children: "Log in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl leading-relaxed text-muted",
						children: "Sign-in is not available. There is no password field because there is no account to enter. A login control will be added only when it connects to a real service."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/help",
							variant: "secondary",
							children: "Visit the help centre"
						})
					})
				]
			})
		})
	] });
};
//#endregion
export { SplitComponent as component };
