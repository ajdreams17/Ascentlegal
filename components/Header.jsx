"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import TrackedLink from "./TrackedLink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0e2a47]/10 bg-[#f7f6f3]/95 backdrop-blur">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/ascent-legal-logo.png"
            alt="Ascent Legal Logo"
            width={175}
            height={88}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0e2a47] md:flex">
          <Link href="/about" className="px-3 py-2 hover:text-[#b86a2e]">About</Link>
          <div className="group relative">
            <Link href="/services" className="px-3 py-2 hover:text-[#b86a2e]">Services</Link>
            <div className="invisible absolute left-0 top-full mt-2 w-72 border border-[#0e2a47]/10 bg-[#f7f6f3] p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {[
                ["/services/creator-contract-review", "Creator Contract Review"],
                ["/services/entertainment", "Entertainment & Brand Deals"],
                ["/services/trademark", "Trademark Registration"],
                ["/services/copyright", "Copyright & Licensing"],
                ["/services/contracts-drafting", "Contract Drafting & Review"],
                ["/services/corporate-formation", "Business Formation"],
                ["/services/deal-desk-support", "Deal Desk Support"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="block px-3 py-2 text-[11px] tracking-[0.12em] hover:bg-white hover:text-[#b86a2e]">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/attorneys" className="px-3 py-2 hover:text-[#b86a2e]">Attorneys</Link>
          <Link href="/resources" className="px-3 py-2 hover:text-[#b86a2e]">Resources</Link>
          <span className="mx-3 h-7 w-px bg-[#0e2a47]/15" />
          <span className="hidden xl:block text-[10px] tracking-[0.18em] text-[#0e2a47]/55">Legal built for your ascent.</span>
          <TrackedLink
            href="/contact"
            eventName="contact_clicked"
            placement="header_desktop"
            className="ml-3 bg-[#b86a2e] px-5 py-3 text-white transition hover:bg-[#9f5724]"
          >
            Contact
          </TrackedLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center border border-[#0e2a47]/15 md:hidden"
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-[#0e2a47]/30" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-3 top-3 border border-[#0e2a47]/10 bg-[#f7f6f3] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#0e2a47]/10 p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e2a47]">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center border border-[#0e2a47]/15"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-4 text-sm font-medium text-[#0e2a47]">
              <Link href="/about" className="border-b border-[#0e2a47]/10 py-3">About</Link>
              <Link href="/services" className="border-b border-[#0e2a47]/10 py-3">Services</Link>
              <div className="grid grid-cols-2 gap-x-4 border-b border-[#0e2a47]/10 py-3 text-xs text-[#0e2a47]/70">
                <Link href="/services/creator-contract-review" className="py-2">Creator Contracts</Link>
                <Link href="/services/trademark" className="py-2">Trademarks</Link>
                <Link href="/services/copyright" className="py-2">Copyright</Link>
                <Link href="/services/contracts-drafting" className="py-2">Contracts</Link>
                <Link href="/services/corporate-formation" className="py-2">Formation</Link>
                <Link href="/services/deal-desk-support" className="py-2">Deal Desk</Link>
              </div>
              <Link href="/attorneys" className="border-b border-[#0e2a47]/10 py-3">Attorneys</Link>
              <Link href="/resources" className="border-b border-[#0e2a47]/10 py-3">Resources</Link>
              <TrackedLink href="/contact" eventName="contact_clicked" placement="header_mobile" className="mt-4 bg-[#b86a2e] px-4 py-3 text-center font-semibold uppercase tracking-[0.14em] text-white">Contact</TrackedLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
