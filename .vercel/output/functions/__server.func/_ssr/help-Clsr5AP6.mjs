import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout } from "./router-BFH_sN-p.mjs";
import { n as InfoPage } from "./info-page-Cc87TuN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/help-Clsr5AP6.js
var import_jsx_runtime = require_jsx_runtime();
var topics = [
	{
		to: "/faqs",
		title: "FAQs",
		text: "Short answers about what this website does and does not do."
	},
	{
		to: "/fees",
		title: "Fees and charges",
		text: "No fee schedule is published yet. The page says so plainly."
	},
	{
		to: "/report",
		title: "Report an issue",
		text: "Use the preview form to shape a note. It is not delivered."
	},
	{
		to: "/contact",
		title: "Contact",
		text: "Phone, email, and address stay blank until they are verified."
	},
	{
		to: "/security",
		title: "Care with payments",
		text: "How the site talks about security without claiming certifications."
	},
	{
		to: "/get-started",
		title: "Get started",
		text: "What you can do today, including why login is not a form."
	}
];
var SplitComponent = function HelpPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		kicker: "Support",
		title: "Help centre",
		lede: "Start here if you are looking for a straight answer. There is no live chat and no payment hotline on this site.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: topic.to === "/security" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				hash: "security",
				className: "block rounded-card border border-line px-5 py-4 hover:border-forest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-ink",
					children: topic.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-sm text-muted",
					children: topic.text
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: topic.to,
				className: "block rounded-card border border-line px-5 py-4 hover:border-forest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-ink",
					children: topic.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-sm text-muted",
					children: topic.text
				})]
			}) }, topic.to))
		})
	}) });
};
//#endregion
export { SplitComponent as component };
