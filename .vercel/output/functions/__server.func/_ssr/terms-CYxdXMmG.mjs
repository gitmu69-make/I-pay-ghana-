import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout } from "./router-BFH_sN-p.mjs";
import { n as InfoPage, t as DraftNotice } from "./info-page-Cc87TuN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-CYxdXMmG.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoPage, {
		kicker: "Legal",
		title: "Terms",
		lede: "A placeholder so the link is not empty. It is not the contract for a payment service.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DraftNotice, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 text-sm leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The pages describe a brand and proposed payment experiences. They are not an offer to open an account, hold deposits, or execute payments." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sample balances, sample statuses, and sample stories are illustrations. They are not statements of an account." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You are responsible for checking any payment instruction with the provider you actually use. Nothing here is that instruction." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prepared terms should cover eligibility, acceptable use, liability, and the law that applies before anyone relies on them. Those terms have not been supplied." })
			]
		})]
	}) });
};
//#endregion
export { SplitComponent as component };
