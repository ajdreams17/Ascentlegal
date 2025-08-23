"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ip", label: "Intellectual Property" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // lock body scroll when the drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
          <span className="font-semibold tracking-tight">Ascent Legal</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {l.label}
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
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile overlay + drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* backdrop */}
          <button
            aria-label="Close menu"
            onClick={close}
            className="fixed inset-0 bg-black/30"
          />

          {/* panel */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85%] bg-white shadow-xl
                          animate-[slideIn_.2s_ease-out_forwards]">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
                <span className="font-semibold">Ascent Legal</span>
              </div>
              <button
                onClick={close}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {l.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={close}
                className="mt-3 block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-center text-white shadow"
              >
                Book Consultation
              </Link>
            </nav>
          </div>

          {/* tiny keyframe for snappy slide-in */}
          <style jsx global>{`
            @keyframes slideIn {
              from { transform: translateX(-100%); }
              to   { transform: translateX(0%); }
            }
          `}</style>
        </div>
      )}
    </header>
  );
}
