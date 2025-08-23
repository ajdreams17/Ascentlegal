// components/TrustpilotBadge.jsx
"use client";
import Script from "next/script";

export default function TrustpilotBadge() {
  return (
    <>
      <Script
        id="trustpilot-bootstrap"
        strategy="afterInteractive"
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
      />
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="68aa42eff868ed4fa17d7bfb"
        data-style-height="36px"
        data-style-width="100%"
        data-theme="light"
      >
        <a
          href="https://www.trustpilot.com/review/ascentlegal.io"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
}
