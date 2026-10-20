import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ButtonLink, i as SiteLayout } from "./router-BFH_sN-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-a89kW9R9.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-pale px-5 py-16 sm:px-10 lg:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-forest uppercase",
						children: "About us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl",
						children: "A payments brand for everyday Ghana."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-lg leading-relaxed text-muted",
						children: "I Pay Ghana is being shaped around a simple idea: people and small businesses should be able to understand a payment without decoding it."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/accra.jpg",
				alt: "A late-afternoon street in Accra with shops, a green kiosk, and people walking.",
				width: 1792,
				height: 1008,
				className: "h-72 w-full object-cover lg:h-full lg:min-h-96"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3",
			children: [
				["Local", "Copy, currency, and photography are set in Ghana. Amounts are shown in cedis."],
				["Plain", "The brand prefers short steps and visible details over slogans about speed or free transfers."],
				["Careful", "Unverified partnerships, licences, fees, and customer quotes are left off the site."]
			].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card bg-mint p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold text-ink",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: text
				})]
			}, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leading-relaxed text-muted",
				children: "There is no published founding story, headcount, or customer total here, because those facts have not been supplied. The portraits in the sample stories are design stand-ins, not customers."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/contact",
					children: "Contact"
				})
			})]
		})
	] });
};
//#endregion
export { SplitComponent as component };
