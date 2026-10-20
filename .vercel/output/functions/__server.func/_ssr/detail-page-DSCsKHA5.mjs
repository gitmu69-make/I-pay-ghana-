import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ButtonLink } from "./router-BFH_sN-p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/detail-page-DSCsKHA5.js
var import_jsx_runtime = require_jsx_runtime();
function DetailView({ page, parent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "bg-pale px-4 py-16 sm:px-6 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-forest uppercase",
						children: page.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl",
						children: page.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: page.summary
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-3xl gap-8 px-4 py-14 sm:px-6",
			children: [
				page.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-ink",
					children: paragraph
				}, paragraph)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3 rounded-card bg-mint p-5",
					children: page.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm leading-relaxed text-ink",
						children: note
					}, note))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/get-started",
							children: "Get Started"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/contact",
							variant: "secondary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: parent.to,
							className: "inline-flex min-h-11 items-center text-sm font-semibold text-forest",
							children: parent.label
						})
					]
				})
			]
		})]
	});
}
function MissingSlug({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-4xl font-extrabold tracking-tight text-ink",
				children: [
					"That ",
					label,
					" is not listed."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "Choose another page from the menu, or return home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/",
					children: "Back home"
				})
			})
		]
	});
}
//#endregion
export { MissingSlug as n, DetailView as t };
