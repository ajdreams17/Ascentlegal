// components/GA.jsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getLeadAttribution } from "./leadAttribution";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GA() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    getLeadAttribution();

    if (!GA_ID) return;

    const query = search?.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;

    // Send a page_view on every route change
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path,
      page_title: document.title,
      send_to: GA_ID,
    });
  }, [pathname, search]);

  return null;
}
