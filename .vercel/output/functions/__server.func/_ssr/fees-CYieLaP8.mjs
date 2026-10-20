import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout } from "./router-BFH_sN-p.mjs";
import { n as InfoPage } from "./info-page-Cc87TuN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fees-CYieLaP8.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	["Sending money", "Not published"],
	["Bill payments", "Not published"],
	["Business collections", "Not published"],
	["Account fees", "Not published"]
];
var SplitComponent = function FeesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		kicker: "Legal",
		title: "Fees and charges",
		lede: "No fee, rate, or free-transfer claim is made here. A schedule will replace this table only when the numbers are real.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					children: "Fee status by category"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-3 font-semibold",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-3 font-semibold",
						children: "Status"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map(([name, status]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-4 font-semibold text-ink",
						children: name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-4 text-muted",
						children: status
					})]
				}, name)) })
			]
		})
	}) });
};
//#endregion
export { SplitComponent as component };
