import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquiry-form-B57PCNzq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var empty = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
	consent: false
};
function validate(values, subjects) {
	const errors = {};
	if (values.name.trim().length < 2) errors.name = "Enter your full name.";
	if (!emailPattern.test(values.email.trim())) errors.email = "Enter a valid email address.";
	const digits = values.phone.replace(/\D/g, "");
	if (values.phone.trim() && (digits.length < 9 || digits.length > 15)) errors.phone = "Enter a phone number with 9 to 15 digits, or leave it blank.";
	if (!subjects.includes(values.subject)) errors.subject = "Choose a subject.";
	if (values.message.trim().length < 20) errors.message = "Write at least 20 characters so the note is clear.";
	if (!values.consent) errors.consent = "Consent is required before this preview can continue.";
	return errors;
}
function InquiryForm({ subjects, submitLabel = "Send message", idPrefix = "inquiry" }) {
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	function update(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
		setErrors((current) => ({
			...current,
			[key]: void 0
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const next = validate(values, subjects);
		setErrors(next);
		if (Object.keys(next).length > 0) {
			setStatus("idle");
			return;
		}
		setStatus("loading");
		window.setTimeout(() => {
			setValues(empty);
			setStatus("done");
		}, 700);
	}
	if (status === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-pale p-6",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold text-ink",
				children: "Checked on this device only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: "The fields were valid, then cleared. I Pay Ghana has not published a phone number or email, so this form does not deliver messages and does not store what you typed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-5 inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:border-forest",
				onClick: () => setStatus("idle"),
				children: "Write another note"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-4",
		onSubmit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				id: `${idPrefix}-name`,
				error: errors.name,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${idPrefix}-name`,
					name: "name",
					autoComplete: "name",
					value: values.name,
					onChange: (event) => update("name", event.target.value),
					className: inputClass(Boolean(errors.name)),
					"aria-invalid": Boolean(errors.name)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email address",
				id: `${idPrefix}-email`,
				error: errors.email,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${idPrefix}-email`,
					name: "email",
					type: "email",
					autoComplete: "email",
					value: values.email,
					onChange: (event) => update("email", event.target.value),
					className: inputClass(Boolean(errors.email)),
					"aria-invalid": Boolean(errors.email)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone number",
				id: `${idPrefix}-phone`,
				error: errors.phone,
				hint: "Optional",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${idPrefix}-phone`,
					name: "phone",
					type: "tel",
					autoComplete: "tel",
					value: values.phone,
					onChange: (event) => update("phone", event.target.value),
					className: inputClass(Boolean(errors.phone)),
					"aria-invalid": Boolean(errors.phone)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Subject",
				id: `${idPrefix}-subject`,
				error: errors.subject,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: `${idPrefix}-subject`,
					name: "subject",
					value: values.subject,
					onChange: (event) => update("subject", event.target.value),
					className: inputClass(Boolean(errors.subject)),
					"aria-invalid": Boolean(errors.subject),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Choose a subject"
					}), subjects.map((subject) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: subject,
						children: subject
					}, subject))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				id: `${idPrefix}-message`,
				error: errors.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: `${idPrefix}-message`,
					name: "message",
					rows: 5,
					value: values.message,
					onChange: (event) => update("message", event.target.value),
					className: inputClass(Boolean(errors.message)),
					"aria-invalid": Boolean(errors.message)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm leading-relaxed text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-1 size-4 accent-forest",
					checked: values.consent,
					onChange: (event) => update("consent", event.target.checked)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I understand this form is a preview and does not send my message to I Pay Ghana." })]
			}), errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-navy",
				children: errors.consent
			}) : null] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep disabled:opacity-60",
				disabled: status === "loading",
				children: status === "loading" ? "Checking…" : submitLabel
			})
		]
	});
}
function Field({ label, id, error, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: "text-sm font-semibold text-ink",
				children: label
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: hint
			}) : null]
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-navy",
			role: "alert",
			children: error
		}) : null
	] });
}
function inputClass(invalid) {
	return ["w-full rounded-2xl border bg-paper px-4 py-3 text-sm text-ink outline-none", invalid ? "border-navy" : "border-line focus:border-forest"].join(" ");
}
//#endregion
export { InquiryForm as t };
