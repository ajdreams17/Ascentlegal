"use client";

import { useEffect } from "react";

export default function ContactThankYouTracker() {
  useEffect(() => {
    window.gtag?.("event", "contact_form_submitted", {
      lead_type: "contact_form",
      placement: "thank_you_page",
    });
  }, []);

  return null;
}
