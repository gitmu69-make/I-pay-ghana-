import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout } from "./router-BFH_sN-p.mjs";
import { t as InquiryForm } from "./inquiry-form-B57PCNzq.mjs";
import { n as InfoPage } from "./info-page-Cc87TuN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-C4CVn2Tp.js
var import_jsx_runtime = require_jsx_runtime();
var subjects = [
	"Website problem",
	"Unclear information",
	"Suspected misuse of the brand",
	"Something else"
];
var SplitComponent = function ReportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		kicker: "Support",
		title: "Report an issue",
		lede: "Use this if something on the site is wrong or confusing. There is no case number, because the note is not sent.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-card border border-line bg-paper p-5 sm:p-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {
				subjects,
				submitLabel: "Check report",
				idPrefix: "report"
			})
		})
	}) });
};
//#endregion
export { SplitComponent as component };
