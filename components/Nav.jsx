"use client";

import { useEffect, useState } from "react";
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

  // Prevent body scroll when the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 block" />
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

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer + backdrop */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[88%] max-w-sm bg-white shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 block" />
              <span className="font-semibold tracking-tight">Ascent Legal</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-4">
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-gray-800 hover:bg-gray-50"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-3 text-white shadow"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
