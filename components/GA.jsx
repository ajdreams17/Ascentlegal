// components/GA.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getLeadAttribution } from "./leadAttribution";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "ascent_analytics_consent";

export default function GA() {
  const pathname = usePathname();
  const search = useSearchParams();
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    getLeadAttribution();

    try {
      setAnalyticsAllowed(
        window.localStorage.getItem(CONSENT_KEY) === "granted"
      );
    } catch {
      setAnalyticsAllowed(false);
    }

    function handleConsent(event) {
      setAnalyticsAllowed(event?.detail?.analytics === "granted");
    }

    window.addEventListener(
      "ascent:analytics-consent-changed",
      handleConsent
    );

    return () => {
      window.removeEventListener(
        "ascent:analytics-consent-changed",
        handleConsent
      );
    };
  }, []);

  useEffect(() => {
    if (
      !GA_ID ||
      !analyticsAllowed ||
      typeof window === "undefined"
    ) {
      return;
    }

    const query = search?.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;

    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path,
      page_title: document.title,
      send_to: GA_ID,
    });
  }, [pathname, search, analyticsAllowed]);

  return null;
}
