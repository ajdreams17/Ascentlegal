import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400" />
            <span className="font-semibold">Ascent Legal</span>
          </div>
          <p className="mt-3 text-gray-600">
            We combine integrity, excellence, and personalized legal strategy to safeguard your intellectual property,
            contracts, and business growth.
          </p>
        </div>

        <div>
          <h4 className="font-medium">Firm</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
            <li><Link href="/#practice" className="hover:text-indigo-600">Practice Areas</Link></li>
            <li><Link href="/resources" className="hover:text-indigo-600">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Legal</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><Link href="/terms" className="hover:text-indigo-600">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-indigo-600">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>3780 Kilroy Airport Way</li>
            <li>Suite 200</li>
            <li>Long Beach, CA 90806</li>
            <li>info@ascentlegal.io</li>
            <li>(714) 203-3535</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ascent Legal. All rights reserved.
      </div>
    </footer>
  );
}
