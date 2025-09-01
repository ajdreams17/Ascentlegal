"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // lock scroll when mobile menu open
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      const prev = root.style.overflow;
      root.style.overflow = "hidden";
      return () => {
        root.style.overflow = prev;
      };
    }
  }, [open]);

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ascent-logo.png"
            alt="Ascent Legal Logo"
            width={140}   // adjust as needed
            height={40}   // adjust as needed
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link href="/" className="px-3 py-2 hover:text-indigo-600">Home</Link>
          <Link href="/services" className="px-3 py-2 hover:text-indigo-600">Services</Link>
          <Link href="/ip" className="px-3 py-2 hover:text-indigo-600">Intellectual Property</Link>
          <Link href="/resources" className="px-3 py-2 hover:text-indigo-600">Resources</Link>
          <Link href="/contact" className="px-3 py-2 hover:text-indigo-600">Contact</Link>
          <Link
            href="/contact"
            className="ml-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white font-medium shadow hover:opacity-90"
          >
            Book Consultation
          </Link>
        </nav>

      {/* Mobile overlay + panel */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop (tap to close) */}
          <div className="absolute inset-0 bg-black/10" onClick={() => setOpen(false)} />

          {/* Sheet */}
          <div className="absolute inset-x-0 top-0 p-3">
            <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/ascent-logo.png"
                    alt="Ascent Legal"
                    width={140}
                    height={36}
                    className="h-8 w-auto"
                  />
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <nav className="px-4 pb-4 flex flex-col text-base">
                <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-50">Home</Link>
                <Link href="/services" className="px-3 py-2 rounded-md hover:bg-gray-50">Services</Link>
                <Link href="/ip" className="px-3 py-2 rounded-md hover:bg-gray-50">Intellectual Property</Link>
                <Link href="/resources" className="px-3 py-2 rounded-md hover:bg-gray-50">Resources</Link>
                <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-gray-50">Contact</Link>

                <Link
                  href="/contact"
                  className="mt-3 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 px-4 py-2.5 text-white font-medium text-center shadow hover:opacity-95"
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




