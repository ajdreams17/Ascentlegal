import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYelp, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ascent-legal-logo.png"
              alt="Ascent Legal Logo"
              width={160}   {/* adjust as needed */}
              height={80}   {/* adjust as needed */}
              priority
            />
          </Link>
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

      {/* Social Icons Row */}
      <div className="flex justify-center gap-6 text-gray-600 pb-6">
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-indigo-600">
          <FaInstagram size={20} />
        </a>
        <a href="https://yelp.com/biz/yourbusiness" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="hover:text-indigo-600">
          <FaYelp size={20} />
        </a>
        <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600">
          <FaLinkedin size={20} />
        </a>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-indigo-600">
          <FaFacebook size={20} />
        </a>
      </div>

      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ascent Legal. All rights reserved.
      </div>
    </footer>
  );
}
