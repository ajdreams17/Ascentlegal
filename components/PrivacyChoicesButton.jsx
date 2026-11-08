"use client";

export default function PrivacyChoicesButton({ className = "" }) {
  function openChoices() {
    window.dispatchEvent(new CustomEvent("ascent:privacy-choices"));
  }

  return (
    <button type="button" onClick={openChoices} className={className}>
      Privacy Choices
    </button>
  );
}
