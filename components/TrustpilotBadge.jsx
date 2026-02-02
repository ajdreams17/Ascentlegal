"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustpilotBadge() {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // ✅ Your real Trustpilot IDs
  const TEMPLATE_ID = "5419b6a8b0d04a076446a9ad";
  const BUSINESS_UNIT_ID = "68aa42eff868ed4fa17d7bfb";

  // 1) Load only when near viewport (performance)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "250px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 2) Load script once + render safely (no page crash)
  useEffect(() => {
    if (!shouldLoad) return;

    const el = containerRef.current;
    if (!el) return;

    const render = () => {
      try {
        const tp = window.Trustpilot;
        if (tp && typeof tp.loadFromElement === "function") {
          tp.loadFromElement(el, true);
        } else if (tp && typeof tp.load === "function") {
          tp.load();
        }
      } catch (e) {
        console.warn("Trustpilot render failed:", e);
      }
    };

    const existing = document.querySelector('script[data-trustpilot="true"]');
    if (existing) {
      render();
      return;
    }

    const s = document.createElement("script");
    s.src =
      "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    s.async = true;
    s.defer = true;
    s.dataset.trustpilot = "true";
    s.onload = render;
    s.onerror = () => console.warn("Trustpilot script failed to load.");
    document.body.appendChild(s);

    const t = setTimeout(render, 1200);
    return () => clearTimeout(t);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="min-h-[64px]">
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id={TEMPLATE_ID}
        data-businessunit-id={BUSINESS_UNIT_ID}
        data-style-height="52px"
        data-style-width="100%"
        data-theme="light"
      >
        <a
          href="https://www.trustpilot.com/review/ascentlegal.io"
          target="_blank"
          rel="noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
}
