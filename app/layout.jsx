import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ascent Legal",
  description: "Modern counsel for ambitious businesses",
};

export default function RootLayout({ children }) {
  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/ip", label: "Intellectual Property" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
              <span className="font-semibold tracking-tight">Ascent Legal</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
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
          </div>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="border-t border-gray-100 mt-20">
          <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
                <span className="font-semibold">Ascent Legal</span>
              </div>
              <p className="mt-3 text-gray-600">Modern legal services for ambitious teams.</p>
            </div>
            <div>
              <h4 className="font-medium">Firm</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
                <li><Link href="/services" className="hover:text-indigo-600">Practice Areas</Link></li>
                <li><Link href="/resources" className="hover:text-indigo-600">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Legal</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Contact</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>info@ascentlegal.io</li>
                <li>+1 (555) 555-1234</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Ascent Legal. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
