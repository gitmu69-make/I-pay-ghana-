import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout } from "./router-BFH_sN-p.mjs";
import { n as InfoPage, t as DraftNotice } from "./info-page-Cc87TuN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-BHCHRQQb.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoPage, {
		kicker: "Legal",
		title: "Privacy",
		lede: "How this preview handles information, written so it can be replaced by a prepared policy.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DraftNotice, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 text-sm leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The contact and report forms run in your browser. They check the fields, then clear them. They do not transmit the contents to I Pay Ghana and they do not save them on a server." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A cookie choice can be stored in local storage on your device. It records whether you allowed optional preference storage. It is not used to process payments." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Do not type passwords, card numbers, PINs, or one-time codes into any field on this site." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A future policy should name the organisation responsible for personal data, the purpose of each collection, how long data is kept, and how to make a request. Those details are not available yet." })
			]
		})]
	}) });
};
//#endregion
export { SplitComponent as component };
