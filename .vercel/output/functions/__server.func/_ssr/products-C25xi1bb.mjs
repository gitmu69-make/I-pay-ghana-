import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, u as products } from "./router-BFH_sN-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-C25xi1bb.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "bg-pale px-4 py-16 sm:px-6 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-forest uppercase",
					children: "Products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl",
					children: "Ideas for how I Pay Ghana could help."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-muted",
					children: "These categories are design directions. They are not confirmation that a service is live, and none of them can take a payment."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mx-auto grid max-w-5xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-2",
		children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/products/$slug",
			params: { slug: product.slug },
			className: "block h-full rounded-card border border-line bg-paper p-6 hover:border-forest hover:shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-forest uppercase",
					children: product.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-bold text-ink",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: product.summary
				})
			]
		}) }, product.slug))
	})] });
};
//#endregion
export { SplitComponent as component };
