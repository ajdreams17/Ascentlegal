"use client";

import { useEffect } from "react";

export default function EmploymentThankYouTracker() {
  useEffect(() => {
    let lead = {};
    try {
      lead = JSON.parse(
        window.sessionStorage.getItem("ascent_last_employment_lead") || "{}"
      );
    } catch {
      lead = {};
    }

    const eventParams = {
      lead_type: "employment_pre_litigation",
      placement: "employment_thank_you_page",
      service_requested: "Employment Pre-Litigation",
      employment_issue: lead.employment_issue || "unknown",
      reported_source: lead.reported_source || "unknown",
      utm_source: lead.utm_source || "none",
      utm_medium: lead.utm_medium || "none",
      utm_campaign: lead.utm_campaign || "none",
      first_landing_page: lead.first_landing_page || "unknown",
    };

    window.gtag?.("event", "employment_inquiry_submitted", eventParams);
    window.gtag?.("event", "generate_lead", eventParams);

    try {
      window.sessionStorage.removeItem("ascent_last_employment_lead");
    } catch {
      // No action needed.
    }
  }, []);

  return null;
}
