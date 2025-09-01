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
            width={400}     // intrinsic size
            height={120}    // intrinsic size
            className="h-12 w-auto sm:h-14 md:h-16"  // responsive scaling
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

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200"
        >
          <svg width="200" height="20" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
