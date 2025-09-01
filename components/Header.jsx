"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock scroll when menu is open
  useEffect(() => {
    const root = document.documentElement; // <html>
    if (open) {
      const prev = root.style.overflow;
      root.style.overflow = "hidden";
      return () => {
        root.style.overflow = prev;
      };
    }
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const NavLinks = () => (
    <>
      <Link href="/" className="px-3 py-2 rounded-md hover:text-indigo-600">Home</Link>
      <Link href="/services" className="px-3 py-2 rounded-md hover:text-indigo-600">Services</Link>
      <Link href="/ip" className="px-3 py-2 rounded-md hover:text-indigo-600">Intellectual Property</Link>
      <Link href="/resources" className="px-3 py-2 rounded-md hover:text-indigo-600">Resources</Link>
      <Link href="/contact" className="px-3 py-2 rounded-md hover:text-indigo-600">Contact</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
          <span className="font-semibold">Ascent Legal</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <NavLinks />
          <Link
            href="/contact"
            className="ml-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white font-medium shadow hover:opacity-90"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200"
        >
          <span className="sr-only">Open menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Mobile overlay + panel */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white/95 backdrop-blur"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="absolute inset-x-0 top-0 p-4">
            <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white shadow">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
                  <span className="font-semibold">Ascent Legal</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>

              <nav className="px-4 pb-4 flex flex-col text-base">
                <NavLinks />
                <Link
                  href="/contact"
                  className="mt-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white font-medium text-center"
                >
                  Book Consultation
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
