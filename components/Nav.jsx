"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ip", label: "Intellectual Property" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Simple focus management when opening
  useEffect(() => {
    if (open && panelRef.current) {
      const first = panelRef.current.querySelector("a,button");
      first?.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
          <span className="font-semibold tracking-tight">Ascent Legal</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white shadow"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer + overlay */}
      {/* Overlay */}
      {open && (
        <button
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      <aside
        ref={panelRef}
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] bg-white shadow-xl md:hidden
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
            <span className="font-semibold">Ascent Legal</span>
          </div>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-4 flex flex-col gap-2">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base text-gray-800 hover:bg-gray-100"
            >
              {n.label}
            </Link>
          ))}

       <Link
  href="/contact"
  className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white shadow hover:opacity-95 text-sm"
>
  Book a Discovery Call
</Link>
        </nav>
      </aside>
    </header>
  );
}
