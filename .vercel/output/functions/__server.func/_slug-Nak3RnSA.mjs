import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as solutions, i as SiteLayout, l as findPage, n as Route } from "./_ssr/router-BFH_sN-p.mjs";
import { n as MissingSlug, t as DetailView } from "./_ssr/detail-page-DSCsKHA5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Nak3RnSA.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function SolutionSlugPage() {
	const { slug } = Route.useParams();
	const page = findPage(solutions, slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: page ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailView, {
		page,
		parent: {
			to: "/solutions",
			label: "All solutions"
		}
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingSlug, { label: "solution" }) });
};
//#endregion
export { SplitComponent as component };
