"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustpilotBadge() {
  const widgetRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const TEMPLATE_ID = "5419b6a8b0d04a076446a9ad";
  const BUSINESS_UNIT_ID = "68aa42eff868ed4fa17d7bfb";

  // Load when near viewport
  useEffect(() => {
    const el = widgetRef.current;
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

  useEffect(() => {
    if (!shouldLoad) return;

    const el = widgetRef.current;
    if (!el) return;

    const render = () => {
      try {
        const tp = window.Trustpilot;
        if (tp?.loadFromElement) tp.loadFromElement(el, true);
        else if (tp?.load) tp.load();
      } catch (e) {
        console.warn("Trustpilot render failed:", e);
      }
    };

    // Script already exists
    const existing = document.querySelector('script[data-trustpilot="true"]');
    if (existing) {
      render();
      return;
    }

    // Add script once
    const s = document.createElement("script");
    s.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    s.async = true;
    s.defer = true;
    s.dataset.trustpilot = "true";
    s.onload = render;
    s.onerror = () => console.warn("Trustpilot script failed to load.");
    document.body.appendChild(s);

    // Safety render (sometimes onload fires before widget paints)
    const t1 = setTimeout(render, 300);
    const t2 = setTimeout(render, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [shouldLoad]);

  return (
    <div className="min-h-[64px]">
      <div
        ref={widgetRef}
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
