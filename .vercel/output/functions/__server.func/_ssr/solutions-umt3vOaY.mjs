import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as solutions, i as SiteLayout } from "./router-BFH_sN-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-umt3vOaY.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "bg-pale px-4 py-16 sm:px-6 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-forest uppercase",
					children: "Solutions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl",
					children: "Two directions. One standard of clarity."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-muted",
					children: "Everyday payments and business payments are proposed experiences. Provider logos, fees, and live checkout are not part of this site."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mx-auto grid max-w-5xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-2",
		children: solutions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/solutions/$slug",
			params: { slug: item.slug },
			className: "block h-full rounded-card bg-mint p-6 hover:shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-forest uppercase",
					children: item.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-bold text-ink",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: item.summary
				})
			]
		}) }, item.slug))
	})] });
};
//#endregion
export { SplitComponent as component };
