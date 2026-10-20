import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, l as findPage, r as Route$2, u as products } from "./_ssr/router-BFH_sN-p.mjs";
import { n as MissingSlug, t as DetailView } from "./_ssr/detail-page-DSCsKHA5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CBcanmU2.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function ProductSlugPage() {
	const { slug } = Route$2.useParams();
	const page = findPage(products, slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: page ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailView, {
		page,
		parent: {
			to: "/products",
			label: "All products"
		}
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingSlug, { label: "product" }) });
};
//#endregion
export { SplitComponent as component };
