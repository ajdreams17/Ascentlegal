"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
          <span className="font-semibold tracking-tight">Ascent Legal</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => {
            const active =
              n.href === "/"
                ? pathname === "/"
                : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`transition-colors ${
                  active ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white shadow"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
