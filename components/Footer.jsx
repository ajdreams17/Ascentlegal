import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">

      {/* CTA Bar */}
      <div className="bg-slate-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Ready to protect what you're building?</h3>
            <p className="mt-1 text-slate-600 text-sm">Book a discovery call and let's talk about your next move.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 whitespace-nowrap
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>

      {/* Top grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10
                      sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo + blurb + social */}
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/ascent-legal-logo.png"
              alt="Ascent Legal Logo"
              width={180}
              height={90}
              priority
            />
          </Link>
          <p className="mt-4 text-gray-600">
            Legal built for your ascent. We help creators and growing businesses
            protect what they build and scale with confidence.
          </p>
          <div className="flex gap-4 mt-5 text-xl text-gray-500">
            <a href="https://www.instagram.com/ascent_legal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-indigo-600" />
            </a>
            <a href="https://www.tiktok.com/@ascent_legal" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="hover:text-indigo-600" />
            </a>
            <a href="https://www.linkedin.com/company/ascent-legal/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-indigo-600" />
            </a>
            <a href="https://www.facebook.com/ascentlegallaw" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="hover:text-indigo-600" />
            </a>
          </div>
        </div>

        {/* Column 2: Firm */}
        <div>
          <h4 className="font-medium text-gray-900">Firm</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
            <li><Link href="/#practice" className="hover:text-indigo-600">Practice Areas</Link></li>
            <li><Link href="/resources" className="hover:text-indigo-600">Resources</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="font-medium text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><Link href="/terms" className="hover:text-indigo-600">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-indigo-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-medium text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>3780 Kilroy Airport Way</li>
            <li>Suite 200</li>
            <li>Long Beach, CA 90806</li>
            <li><a href="mailto:info@ascentlegal.io" className="hover:text-indigo-600">info@ascentlegal.io</a></li>
            <li><a href="tel:+17142033535" className="hover:text-indigo-600">(714) 203-3535</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ascent Legal. All rights reserved.
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      {/* Top grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10
                      sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo + blurb + social */}
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/ascent-legal-logo.png"
              alt="Ascent Legal Logo"
              width={180}
              height={90}
              priority
            />
          </Link>
          <p className="mt-4 text-gray-600">
            Legal built for your ascent — we help creators and growing businesses
            protect what they build and scale with confidence.
          </p>
          <div className="flex gap-4 mt-5 text-xl text-gray-500">
            <a href="https://www.instagram.com/ascent_legal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-indigo-600" />
            </a>
            <a href="https://www.tiktok.com/@ascent_legal" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="hover:text-indigo-600" />
            </a>
            <a href="https://www.linkedin.com/company/ascent-legal/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-indigo-600" />
            </a>
            <a href="https://www.facebook.com/ascentlegallaw" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="hover:text-indigo-600" />
            </a>
          </div>
        </div>

        {/* Column 2: Firm */}
        <div>
          <h4 className="font-medium text-gray-900">Firm</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
            <li><Link href="/#practice" className="hover:text-indigo-600">Practice Areas</Link></li>
            <li><Link href="/resources" className="hover:text-indigo-600">Resources</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="font-medium text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><Link href="/terms" className="hover:text-indigo-600">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-indigo-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-medium text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>3780 Kilroy Airport Way</li>
            <li>Suite 200</li>
            <li>Long Beach, CA 90806</li>
            <li><a href="mailto:info@ascentlegal.io" className="hover:text-indigo-600">info@ascentlegal.io</a></li>
            <li><a href="tel:+17142033535" className="hover:text-indigo-600">(714) 203-3535</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ascent Legal. All rights reserved.
      </div>
    </footer>
  );
}
