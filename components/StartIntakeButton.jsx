"use client";

export default function StartIntakeButton({ className = "" }) {
  function handleClick() {
    window.gtag?.("event", "intake_homepage_cta_clicked", {
      feature: "ai_intake",
      placement: "homepage_bottom_cta",
    });

    window.dispatchEvent(new CustomEvent("ascent:intake-open"));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      Start Intake <span className="ml-3">→</span>
    </button>
  );
}
