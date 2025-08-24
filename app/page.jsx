import Link from "next/link";
import {
  Check, Film, ShieldCheck, Briefcase, Building2, FileText,
  Users, Stamp
} from "lucide-react";
import TrustpilotBadge from "../components/TrustpilotBadge";

export const metadata = {
  title: "Ascent Legal | Modern Counsel for Ambitious Businesses",
  description:
    "Strategic legal support for entrepreneurs, creators, and business owners, practical, proactive, and tailored to your growth",
};

export default function HomePage() {
  return (
    <>
  {/* hero */}
<section className="relative overflow-hidden">
  {/* subtle wave background */}
  <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
    <svg
      className="absolute inset-x-0 -top-28 h-[420px] w-[140%] -translate-x-[15%]"
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ascentWave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path
        d="M0,120 C220,60 320,160 520,120 C740,70 840,180 1040,140 C1240,100 1340,160 1440,120 L1440,0 L0,0 Z"
        fill="url(#ascentWave)"
      />
      <path
        d="M0,180 C240,130 340,210 520,180 C760,140 860,230 1040,200 C1240,170 1340,220 1440,190 L1440,0 L0,0 Z"
        fill="url(#ascentWave)"
        opacity="0.55"
      />
    </svg>
  </div>

  {/* content */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
        Modern Counsel for{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
          Ambitious Businesses
        </span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        Practical, proactive legal guidance for founders and operators, delivered with the
        polish you expect and the speed you need.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/contact"
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow-lg hover:opacity-90 inline-block"
        >
          Schedule a Call
        </Link>
        <a
          href="#practice"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
        >
          Explore practice areas
          <span className="h-[2px] w-8 bg-gradient-to-r from-indigo-500 to-teal-400 transition-all group-hover:w-14" />
        </a>
      </div>
      
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
        {["Transparent pricing", "Responsive team", "Business-first advice"].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-indigo-500" /> {item}
          </li>
        ))}
      </ul>
      <div className="mt-6">
  <TrustpilotBadge />
</div>
    </div>
    
    {/* static showcase card */}
    <div className="md:justify-self-end">
      <div className="relative rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
        <div className="absolute -top-6 -left-6 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
          <Stamp className="h-6 w-6 text-white" />
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500">Client matter</p>
            <p className="font-medium">Trademark Protection</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs">
            {[
              { label: "Search", icon: FileText },
              { label: "USPTO Filing", icon: Stamp },
              { label: "Monitoring", icon: ShieldCheck },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-xl border border-gray-100 p-4 shadow-sm flex items-center gap-2">
                <Icon className="h-4 w-4 text-indigo-500" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* practice preview */}
      <section id="practice" className="border-t border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Practice Areas</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Corporate & Formation",
                icon: Building2,
                desc: "Entity setup, founder agreements, and governance.",
                href: "/services/corporate-formation",
              },
              {
                title: "Contracts Drafting",
                icon: FileText,
                desc: "Drafting and reviewing contracts that protect your interests.",
                href: "/services/contracts-drafting",
              },
              {
                title: "Employment",
                icon: Users,
                desc: "Offers, handbooks, and compliance.",
                href: "/services/employment",
              },
              {
                title: "Trademark Protection",
                icon: ShieldCheck,
                desc: "Registration, searching, and monitoring.",
                href: "/services/trademark",
              },
              {
                title: "Entertainment Law",
                icon: Film,
                desc: "Deals, licensing, and royalties for creators.",
                href: "/services/entertainment",
              },
              {
                title: "Tailored Legal Services",
                icon: Briefcase,
                desc: "Customized support for startups and media.",
                href: "/services/general",
              },
            ].map(({ title, icon: Icon, desc, href }) => (
              <Link key={title} href={href} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Ascent Legal Protects What You’ve Built
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">1. Schedule a Consultation</h3>
              <p className="text-sm text-white/90">Book a free intro call, we’ll assess your goals and needs.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">2. Get a Tailored IP Strategy</h3>
              <p className="text-sm text-white/90">Practical plans for trademarks, copyrights, and contracts.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">3. Secure & Grow</h3>
              <p className="text-sm text-white/90">We handle filings and enforcement so you can build.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition inline-block"
            >
              Protect Your Brand
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
