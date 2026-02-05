// app/page.tsx (or app/page.jsx)
import Link from "next/link";
import { Check, Film, ShieldCheck, Briefcase, Building2, FileText, Users } from "lucide-react";
import TrustpilotBadge from "../components/TrustpilotBadge";

export const metadata = {
  title: "Ascent Legal | Brand Deals, IP & Commercial Transactions Counsel",
  description:
    "Business-first entertainment and IP counsel for creators, brands, studios, and agencies—plus commercial contracts for growing companies. Brand deals, licensing, trademarks, copyright, and deal desk support. Transactional counsel only (no litigation).",
};

export default function HomePage() {
  const practiceAreas = [
    {
      title: "Brand Deals & Influencer Campaigns",
      icon: Film,
      desc: "Sponsorships, influencer/UGC agreements, production terms, and creator/brand contracts.",
      href: "/services/entertainment",
    },
    {
      title: "Trademark Protection",
      icon: ShieldCheck,
      desc: "Search, USPTO filing, and practical brand protection strategy.",
      href: "/services/trademark",
    },
    {
      title: "Copyright & Licensing",
      icon: Briefcase,
      desc: "Copyright registrations and licensing terms that protect usage rights and revenue.",
      href: "/services/copyright",
    },
    {
      title: "Commercial Contracts",
      icon: FileText,
      desc: "MSAs, SOWs, vendor and partnership agreements written in plain English.",
      href: "/services/contracts-drafting",
    },
    {
      title: "Deal Desk Support",
      icon: Users,
      desc: "On-call review, redlines, templates, and negotiation support for repeat deals.",
      href: "/services/deal-desk-support",
    },
    {
      title: "Corporate & Formation",
      icon: Building2,
      desc: "Entity setup, operating agreements/bylaws, and founder documentation that scales.",
      href: "/services/corporate-formation",
    },
  ];

  const commonDeals = [
    "Brand deals, sponsorships, and influencer agreements",
    "UGC licensing, paid usage, whitelisting, and term extensions",
    "Agency services agreements, MSAs + SOWs (scope, deliverables, payment)",
    "Production and media agreements",
    "Trademark strategy + USPTO filings",
    "Copyright registrations + licensing terms",
    "Vendor, SaaS, and partnership agreements",
    "Deal Desk templates for repeat campaigns and partnerships",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle wave background */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-15 pointer-events-none">
          <svg
            className="absolute inset-x-0 -top-28 h-[420px] w-[140%] -translate-x-[15%]"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ascentWave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.26" />
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* ✅ Tweaked headline to include brands/agencies explicitly */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Brand deals, IP, and{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                commercial transactions counsel
              </span>{" "}
              for creators, brands, and agencies.
            </h1>

            {/* ✅ Tweaked subheader to broaden audience + add agency-friendly proof */}
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Business-first, plain-English support for creators, brands, studios, and agencies, plus commercial contracts
              for growing companies. Strategic guidance for sponsorships, licensing, trademarks, copyright, and
              revenue-protecting agreements. Agency-friendly workflows and fast turnarounds. Transactional counsel only. No
              litigation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow-lg hover:opacity-90 inline-block
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
              >
                Book a Discovery Call
              </Link>

              <Link
                href="/services/entertainment"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-700
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30 rounded-md px-1"
              >
                Review my next deal
                <span className="h-[2px] w-8 bg-teal-500/70 transition-all group-hover:w-14" />
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
              {["Deal-ready contracts", "Rights-first licensing", "Plain-English strategy"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-700" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>

            {/* Trustpilot badge */}
            <div className="mt-8 flex justify-start">
              <TrustpilotBadge />
            </div>
          </div>

          {/* Right showcase */}
          <div className="md:justify-self-end w-full">
            <div className="relative rounded-2xl border border-slate-200/60 p-6 shadow-sm bg-white">
              {/* Gradient square badge */}
              <div className="absolute -top-6 -left-6 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center">
                <Film className="h-6 w-6 text-white" aria-hidden="true" />
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-500">Typical matter</p>
                  <p className="font-medium text-slate-900">Sponsorship + Usage Rights</p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs text-slate-700">
                  {[
                    { label: "Usage Rights", icon: ShieldCheck },
                    { label: "Scope/SOW", icon: FileText },
                    { label: "Payment", icon: Users },
                  ].map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-200/60 p-4 shadow-sm flex items-center gap-2 bg-white"
                    >
                      <Icon className="h-4 w-4 text-teal-700" aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/services"
                    className="text-sm font-medium text-slate-800 hover:text-indigo-700
                    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30 rounded-md px-1"
                  >
                    Explore services →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200/60 bg-white p-6">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Note:</span> Transactional counsel only (no litigation). We
                support contract interpretation, negotiation strategy, and pre-suit resolution planning, but we do not
                appear in court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" className="scroll-mt-24 border-t border-slate-200/60 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              How we support creators, brands, agencies, and growing companies
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              We help you close deals faster, protect rights, and keep contracts clean—whether you’re running campaigns,
              licensing content, or scaling operations.
            </p>

            {/* ✅ Small “agency-friendly” micro-proof strip */}
            <div className="mt-5 rounded-2xl border border-slate-200/60 bg-white p-5 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Agency-friendly support:</span>{" "}
              fast turnarounds, repeatable templates, redlines you can send today, and Deal Desk support for repeat campaigns.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map(({ title, icon: Icon, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-slate-200/60 p-6 bg-white hover:shadow-sm transition-shadow
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON DEALS */}
      <section className="border-t border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Common matters we handle
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            If you monetize through partnerships, licensing, or commercial contracts, we’ll help you protect the terms—and the rights.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            {commonDeals.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200/60 bg-slate-50 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-teal-400 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            A clear path from “opportunity” to signed agreement
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl shadow-lg ring-1 ring-white/10">
              <h3 className="text-xl font-semibold mb-2">1. Discovery Call</h3>
              <p className="text-sm text-white/90">We confirm fit, scope, and timelines (transactional only).</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-lg ring-1 ring-white/10">
              <h3 className="text-xl font-semibold mb-2">2. Strategy + Redlines</h3>
              <p className="text-sm text-white/90">We flag what matters: rights, scope, payment, and risk points.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-lg ring-1 ring-white/10">
              <h3 className="text-xl font-semibold mb-2">3. Finalize + Execute</h3>
              <p className="text-sm text-white/90">Clean language, clear next steps, and deal-ready documents.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow hover:bg-slate-50 transition inline-block ring-1 ring-white/20 hover:ring-white/40
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Book a Discovery Call
            </Link>
            <div className="mt-3 text-xs text-white/80">Transactional counsel only. No litigation.</div>
          </div>
        </div>
      </section>
    </>
  );
}
