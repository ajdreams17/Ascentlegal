"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustpilotBadge() {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // 1) Load only when the badge scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading a bit before it appears
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 2) Inject Trustpilot script only once
  useEffect(() => {
    if (!shouldLoad) return;

    // Avoid double-inject
    if (document.querySelector('script[data-trustpilot="true"]')) {
      // If script already exists, try to (re)load widgets
      if (window.Trustpilot && typeof window.Trustpilot.loadFromElement === "function") {
        window.Trustpilot.loadFromElement(ref.current, true);
      }
      return;
    }

    const s = document.createElement("script");
    s.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    s.async = true;
    s.defer = true;
    s.dataset.trustpilot = "true";
    s.onload = () => {
      if (window.Trustpilot && typeof window.Trustpilot.loadFromElement === "function") {
        window.Trustpilot.loadFromElement(ref.current, true);
      }
    };
    document.body.appendChild(s);
  }, [shouldLoad]);

  return (
    // ✅ Reserve height to prevent CLS (adjust if your badge is taller)
    <div ref={ref} className="min-h-[64px]">
      {/* KEEP your exact Trustpilot widget markup here */}
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="68aa42eff868ed4fa17d7bfb"
        data-style-height="52px"
        data-style-width="100%"
        data-theme="light"
      >
        <a href="https://www.trustpilot.com/review/ascentlegal.io" target="_blank" rel="noopener noreferrer">
          Trustpilot
        </a>
      </div>
    </div>
  );
}
