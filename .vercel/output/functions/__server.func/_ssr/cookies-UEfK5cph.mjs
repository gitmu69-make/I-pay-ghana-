import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as openCookieSettings, i as SiteLayout } from "./router-BFH_sN-p.mjs";
import { n as InfoPage, t as DraftNotice } from "./info-page-Cc87TuN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cookies-UEfK5cph.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function CookiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoPage, {
		kicker: "Legal",
		title: "Cookies",
		lede: "This site stores a small preference on your device. It does not run advertising cookies.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DraftNotice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Essential storage remembers whether you chose “essential only” or allowed preference storage. The key stays in local storage in this browser." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Preference storage is optional. The site does not currently use it for anything beyond recording that you allowed it." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No payment session, no login token, and no third-party marketing tag is set by these pages." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-8 inline-flex min-h-11 items-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep",
				onClick: () => openCookieSettings(),
				children: "Open cookie preferences"
			})
		]
	}) });
};
//#endregion
export { SplitComponent as component };
