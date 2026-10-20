import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout } from "./router-BFH_sN-p.mjs";
import { n as InfoPage } from "./info-page-Cc87TuN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-C5LXiypn.js
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	["Can I pay someone on this website?", "No. There is no checkout, wallet, or transfer. Product pages describe concepts only."],
	["Can I log in?", "No. Sign-in will be added only when it connects to a real account service. The Log In button explains that."],
	["Are the balances real?", "No. Figures such as GHS 1,250.00 are sample numbers inside a mock phone screen."],
	["Are Ama, Kwame, and Abena customers?", "No. Their cards are labelled as sample stories for the design."],
	["Which mobile money services are supported?", "None are listed. Provider names and logos appear only after an integration is confirmed."],
	["What are the fees?", "A fee schedule has not been published. The site does not promise free transfers or instant settlement."],
	["Did my contact form message arrive?", "No. The form checks the fields on your device and then clears them. It does not email anyone."],
	["Is I Pay Ghana a licensed financial institution?", "This website does not identify a licence. Do not treat it as a regulated offer."]
];
var SplitComponent = function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		kicker: "Support",
		title: "FAQs",
		lede: "Straight answers. If a service is not listed as live, it is not live.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-line border-y border-line",
			children: faqs.map(([question, answer]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group py-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold text-ink",
					children: [question, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-forest transition group-open:rotate-45",
						"aria-hidden": "true",
						children: "+"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-4 text-sm leading-relaxed text-muted",
					children: answer
				})]
			}, question))
		})
	}) });
};
//#endregion
export { SplitComponent as component };
