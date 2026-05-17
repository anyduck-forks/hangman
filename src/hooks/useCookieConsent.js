import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const ANONYMOUS_UUID = "00000000-0000-0000-0000-000000000000";
const COOKIE_CONSENT_KEY = "hangman_cookie_consent";

const COOKIE_CONSENT = {
  unknown: "unknown",
  accepted: "accepted",
  declined: "declined",
};

export function useCookieConsent() {
  const [consent, setConsent] = useLocalStorage(
    COOKIE_CONSENT_KEY,
    COOKIE_CONSENT.unknown,
  );

  const accept = useCallback(() => {
    setConsent(COOKIE_CONSENT.accepted);
  }, [setConsent]);

  const decline = useCallback(() => {
    setConsent(COOKIE_CONSENT.declined);
  }, [setConsent]);

  const reset = useCallback(() => {
    setConsent(COOKIE_CONSENT.unknown);
  }, [setConsent]);

  return {
    consent,
    accept,
    decline,
    reset,
    isAccepted: consent === COOKIE_CONSENT.accepted,
    isDeclined: consent === COOKIE_CONSENT.declined,
    isUnknown: consent === COOKIE_CONSENT.unknown,
  };
}
