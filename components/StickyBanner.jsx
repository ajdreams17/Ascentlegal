"use client";
import { useState, useEffect } from "react";

export default function StickyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("al-banner-closed") !== "1") {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("al-banner-closed", "1");
  };

  if (!visible) return null;

  return (
    <div className="al-banner">
      <div className="al-banner-left">
        <span className="al-banner-tag">Free Guide</span>
        <p className="al-banner-text">
          <strong>The 7 Mistakes That Kill New Trademarks</strong> — Download
          the free guide before you file.
        </p>
      </div>
      
        href="https://www.ascentlegal.io/trademark-guide"
        className="al-banner-cta"
      >
        Get the Free Guide
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6h8M6 2l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <button className="al-banner-close" onClick={handleClose}>
        ×
      </button>
    </div>
  );
}
