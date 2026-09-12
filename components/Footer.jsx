import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f7f6f3] text-[#0e2a47]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 border-b border-[#0e2a47]/15 pb-9 md:grid-cols-[1.3fr_.7fr_.7fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image src="/ascent-legal-logo.png" alt="Ascent Legal Logo" width={175} height={88} priority />
            </Link>
            <p className="mt-3 max-w-sm font-serif text-xl">Legal built for your ascent.</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#0e2a47]/60">
              Business-first entertainment, intellectual property, contracts, and corporate counsel.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">Firm</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#0e2a47]/65">
              <li><Link href="/about" className="hover:text-[#b86a2e]">About</Link></li>
              <li><Link href="/services" className="hover:text-[#b86a2e]">Services</Link></li>
              <li><Link href="/attorneys" className="hover:text-[#b86a2e]">Attorneys</Link></li>
              <li><Link href="/resources" className="hover:text-[#b86a2e]">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#0e2a47]/65">
              <li><Link href="/terms" className="hover:text-[#b86a2e]">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-[#b86a2e]">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#0e2a47]/65">
              <li>3780 Kilroy Airport Way, Suite 200</li>
              <li>Long Beach, CA 90806</li>
              <li><a href="mailto:info@ascentlegal.io" className="hover:text-[#b86a2e]">info@ascentlegal.io</a></li>
              <li><a href="tel:+17142033535" className="hover:text-[#b86a2e]">(714) 203-3535</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-xs text-[#0e2a47]/55 sm:flex-row sm:items-center sm:justify-between">
          <div>Los Angeles &nbsp; | &nbsp; Orange County &nbsp; | &nbsp; By Appointment</div>
          <div className="flex items-center gap-4 text-lg text-[#0e2a47]/55">
            <a href="https://www.instagram.com/ascent_legal" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="hover:text-[#b86a2e]" /></a>
            <a href="https://www.tiktok.com/@ascent_legal" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok className="hover:text-[#b86a2e]" /></a>
            <a href="https://www.linkedin.com/company/ascent-legal/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin className="hover:text-[#b86a2e]" /></a>
            <a href="https://www.facebook.com/ascentlegallaw" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="hover:text-[#b86a2e]" /></a>
          </div>
          <div>© {new Date().getFullYear()} Ascent Legal. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
