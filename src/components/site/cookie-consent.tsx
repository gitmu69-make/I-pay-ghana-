import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { onOpenCookieSettings, readCookieChoice, writeCookieChoice } from "@/lib/cookies";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const existing = readCookieChoice();
    if (!existing) setVisible(true);
    const stop = onOpenCookieSettings(() => {
      const choice = readCookieChoice();
      setPreferences(choice?.preferences ?? false);
      setCustomize(true);
      setVisible(true);
    });
    return () => {
      stop();
    };
  }, []);

  if (!visible) return null;

  function save(allowPreferences: boolean) {
    writeCookieChoice(allowPreferences);
    setVisible(false);
    setCustomize(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-card border border-line bg-paper p-4 shadow-lift sm:p-5">
        <p className="text-sm font-semibold text-ink">Cookies on this site</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          Essential storage remembers this choice on your device. Preference storage is optional.{" "}
          <Link to="/cookies" className="font-semibold text-forest underline-offset-2 hover:underline">
            Cookie note
          </Link>
        </p>
        {customize ? (
          <label className="mt-4 flex min-h-11 items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              className="mt-1 size-4 accent-forest"
              checked={preferences}
              onChange={(event) => setPreferences(event.target.checked)}
            />
            <span>Allow preference storage on this device. Essential storage stays on either way.</span>
          </label>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {customize ? (
            <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep" onClick={() => save(preferences)}>
              Save choice
            </button>
          ) : (
            <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-paper hover:bg-forest-deep" onClick={() => save(true)}>
              Accept all
            </button>
          )}
          <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:border-forest" onClick={() => save(false)}>
            Essential only
          </button>
          {!customize ? (
            <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-forest hover:bg-mint" onClick={() => setCustomize(true)}>
              Customize
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
