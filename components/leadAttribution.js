"use client";

export function getLeadAttribution() {
  if (typeof window === "undefined") {
    return {
      first_landing_page: "",
      first_referrer: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
    };
  }

  const storageKey = "ascent_lead_attribution";
  let saved = {};

  try {
    saved = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
  } catch {
    saved = {};
  }

  const params = new URLSearchParams(window.location.search);
  const page = window.location.pathname + window.location.search;
  const current = {
    first_landing_page: saved.first_landing_page || page,
    first_referrer: saved.first_referrer || document.referrer || "direct",
    utm_source: saved.utm_source || params.get("utm_source") || "",
    utm_medium: saved.utm_medium || params.get("utm_medium") || "",
    utm_campaign: saved.utm_campaign || params.get("utm_campaign") || "",
    utm_term: saved.utm_term || params.get("utm_term") || "",
    utm_content: saved.utm_content || params.get("utm_content") || "",
  };

  try {
    window.localStorage.setItem(storageKey, JSON.stringify(current));
  } catch {
    // Attribution should never block the visitor experience.
  }

  return current;
}
