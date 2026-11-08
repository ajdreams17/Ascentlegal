"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ascent_analytics_consent";

function updateGoogleConsent(value) {
  if (typeof window === "undefined") return;

  const analyticsGranted = value === "granted";

  window.gtag?.("consent", "update", {
    analytics_storage: analyticsGranted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.dispatchEvent(
    new CustomEvent("ascent:analytics-consent-changed", {
      detail: { analytics: value },
    })
  );
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved = null;

    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }

    if (saved === "granted" || saved === "denied") {
      updateGoogleConsent(saved);
    } else {
      setOpen(true);
    }

    function reopen() {
      setOpen(true);
    }

    window.addEventListener("ascent:privacy-choices", reopen);
    return () => window.removeEventListener("ascent:privacy-choices", reopen);
  }, []);

  function choose(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Consent choice still applies for the current page.
    }

    updateGoogleConsent(value);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[1200] mx-auto max-w-3xl border border-[#0E2A47]/15 bg-white p-5 shadow-2xl sm:bottom-6 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
        Analytics Preferences
      </p>

      <p className="mt-3 text-sm leading-6 text-[#455D72]">
        Ascent Legal uses Google Analytics to understand how visitors use the
        website and which pages lead to inquiries. You can allow or decline
        analytics storage. Essential website functions remain available either
        way.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="bg-[#0E2A47] px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#B86A2E]"
        >
          Allow Analytics
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="border border-[#0E2A47]/25 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#0E2A47] hover:border-[#B86A2E] hover:text-[#B86A2E]"
        >
          Decline Analytics
        </button>
        <a
          href="/privacy"
          className="inline-flex items-center px-2 py-3 text-xs font-semibold text-[#5F7386] underline underline-offset-4 hover:text-[#B86A2E]"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
