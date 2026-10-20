import { useState, type FormEvent, type ReactNode } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type InquiryValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

const empty: InquiryValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
};

function validate(values: InquiryValues, subjects: string[]) {
  const errors: Partial<Record<keyof InquiryValues, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Enter a valid email address.";
  const digits = values.phone.replace(/\D/g, "");
  if (values.phone.trim() && (digits.length < 9 || digits.length > 15)) {
    errors.phone = "Enter a phone number with 9 to 15 digits, or leave it blank.";
  }
  if (!subjects.includes(values.subject)) errors.subject = "Choose a subject.";
  if (values.message.trim().length < 20) errors.message = "Write at least 20 characters so the note is clear.";
  if (!values.consent) errors.consent = "Consent is required before this preview can continue.";
  return errors;
}

export function InquiryForm({
  subjects,
  submitLabel = "Send message",
  idPrefix = "inquiry",
}: {
  subjects: string[];
  submitLabel?: string;
  idPrefix?: string;
}) {
  const [values, setValues] = useState<InquiryValues>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function update<K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent) {
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

  if (status === "done") {
    return (
      <div className="rounded-card border border-line bg-pale p-6" role="status">
        <p className="text-lg font-semibold text-ink">Checked on this device only</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          The fields were valid, then cleared. I Pay Ghana has not published a phone number or email, so this form does not deliver messages and does not store what you typed.
        </p>
        <button
          type="button"
          className="mt-5 inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:border-forest"
          onClick={() => setStatus("idle")}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <Field label="Full name" id={`${idPrefix}-name`} error={errors.name}>
        <input
          id={`${idPrefix}-name`}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          className={inputClass(Boolean(errors.name))}
          aria-invalid={Boolean(errors.name)}
        />
      </Field>
      <Field label="Email address" id={`${idPrefix}-email`} error={errors.email}>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          className={inputClass(Boolean(errors.email))}
          aria-invalid={Boolean(errors.email)}
        />
      </Field>
      <Field label="Phone number" id={`${idPrefix}-phone`} error={errors.phone} hint="Optional">
        <input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          className={inputClass(Boolean(errors.phone))}
          aria-invalid={Boolean(errors.phone)}
        />
      </Field>
      <Field label="Subject" id={`${idPrefix}-subject`} error={errors.subject}>
        <select
          id={`${idPrefix}-subject`}
          name="subject"
          value={values.subject}
          onChange={(event) => update("subject", event.target.value)}
          className={inputClass(Boolean(errors.subject))}
          aria-invalid={Boolean(errors.subject)}
        >
          <option value="">Choose a subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" id={`${idPrefix}-message`} error={errors.message}>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={inputClass(Boolean(errors.message))}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
          <input
            type="checkbox"
            className="mt-1 size-4 accent-forest"
            checked={values.consent}
            onChange={(event) => update("consent", event.target.checked)}
          />
          <span>I understand this form is a preview and does not send my message to I Pay Ghana.</span>
        </label>
        {errors.consent ? <p className="mt-1 text-sm text-navy">{errors.consent}</p> : null}
      </div>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep disabled:opacity-60"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Checking…" : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  hint,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {label}
        </label>
        {hint ? <span className="text-xs text-muted">{hint}</span> : null}
      </div>
      {children}
      {error ? (
        <p className="mt-1 text-sm text-navy" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return [
    "w-full rounded-2xl border bg-paper px-4 py-3 text-sm text-ink outline-none",
    invalid ? "border-navy" : "border-line focus:border-forest",
  ].join(" ");
}
