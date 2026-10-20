import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/info-page-Cc87TuN6.js
var import_jsx_runtime = require_jsx_runtime();
function InfoPage({ kicker, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "bg-pale px-4 py-16 sm:px-6 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-forest uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-muted",
					children: lede
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-14 sm:px-6",
		children
	})] });
}
function DraftNotice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-8 rounded-card border border-line bg-foam px-4 py-3 text-sm leading-relaxed text-muted",
		children: "Draft for layout only. This is not legal advice and it is not I Pay Ghana’s published policy. A prepared document should replace this page before it is treated as binding."
	});
}
//#endregion
export { InfoPage as n, DraftNotice as t };
