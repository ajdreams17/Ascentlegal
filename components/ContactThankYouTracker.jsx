"use client";

import { useEffect } from "react";

export default function ContactThankYouTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("source") !== "contact-form") return;

    let lead = {};
    try {
      lead = JSON.parse(
        window.sessionStorage.getItem("ascent_last_contact_lead") || "{}"
      );
    } catch {
      lead = {};
    }

    const eventParams = {
      lead_type: "contact_form",
      placement: "thank_you_page",
      service_requested: lead.service_requested || "unknown",
      reported_source: lead.reported_source || "unknown",
      utm_source: lead.utm_source || "none",
      utm_medium: lead.utm_medium || "none",
      utm_campaign: lead.utm_campaign || "none",
      first_landing_page: lead.first_landing_page || "unknown",
    };

    window.gtag?.("event", "contact_form_submitted", eventParams);
    window.gtag?.("event", "generate_lead", {
      ...eventParams,
      currency: "USD",
      value: 0,
    });

    try {
      window.sessionStorage.removeItem("ascent_last_contact_lead");
    } catch {
      // No action needed.
    }
  }, []);

  return null;
}
