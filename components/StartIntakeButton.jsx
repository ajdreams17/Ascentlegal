"use client";

export default function StartIntakeButton({
  className = "",
  eventName = "intake_homepage_cta_clicked",
  placement = "homepage_bottom_cta",
  label = "Start Intake",
}) {
  function handleClick() {
    window.gtag?.("event", eventName, {
      feature: "ai_intake",
      placement,
    });

    window.dispatchEvent(new CustomEvent("ascent:intake-open"));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {label} <span className="ml-3">→</span>
    </button>
  );
}
