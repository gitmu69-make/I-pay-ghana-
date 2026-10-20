export const COOKIE_KEY = "ipay-ghana-cookie-choice";

export type CookieChoice = {
  necessary: true;
  preferences: boolean;
  decidedAt: string;
};

type Listener = () => void;
const listeners = new Set<Listener>();

export function readCookieChoice(): CookieChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieChoice;
    if (parsed?.necessary !== true || typeof parsed.preferences !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieChoice(preferences: boolean) {
  const choice: CookieChoice = {
    necessary: true,
    preferences,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_KEY, JSON.stringify(choice));
  return choice;
}

export function openCookieSettings() {
  listeners.forEach((listener) => listener());
}

export function onOpenCookieSettings(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
