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
            src="/ascent-legal-logo.png"
            alt="Ascent Legal Logo"
            width={180}   // adjust as needed
            height={100}   // adjust as needed
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link href="/" className="px-3 py-2 hover:text-indigo-600">Home</Link>
          <Link href="/about" className="px-3 py-2 hover:text-indigo-600">About</Link>
          <Link href="/services" className="px-3 py-2 hover:text-indigo-600">Services</Link>
          <Link href="/resources" className="px-3 py-2 hover:text-indigo-600">Resources</Link>
          <Link href="/contact" className="px-3 py-2 hover:text-indigo-600">Contact</Link>
        <Link
  href="/contact"
  className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white shadow hover:opacity-95 text-sm"
>
  Book a Discovery Call
</Link>
        </nav>
  {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200"
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
{/* Mobile overlay + panel */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setOpen(false)}
          />
          {/* sheet */}
          <div className="absolute inset-x-3 top-3 rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4">
              <span className="font-medium">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="px-4 pb-4 flex flex-col text-base">
              <Link href="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
               <Link href="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
              <Link href="/services" onClick={() => setOpen(false)} className="py-2">Services</Link>
              <Link href="/resources" onClick={() => setOpen(false)} className="py-2">Resources</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white font-medium text-center"
              >
                Book Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


