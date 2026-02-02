// app/page.tsx (or app/page.jsx)
import Link from "next/link";
import {
  Check,
  Film,
  ShieldCheck,
  Briefcase,
  Building2,
  FileText,
  Users,
} from "lucide-react";
import TrustpilotBadge from "../components/TrustpilotBadge";

export const metadata = {
  title: "Ascent Legal | Entertainment & IP Counsel for Deal-Driven Brands",
  description:
    "Business-first entertainment and IP counsel for creators, studios, and growing companies. Brand deals, licensing, and small business transactions. Transactional counsel only (no litigation).",
};

export default function HomePage() {
  const practiceAreas = [
    {
      title: "Entertainment & Creator Counsel",
      icon: Film,
      desc: "Brand deals, influencer agreements, production terms, and creator contracts.",
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
      title: "Contracts Drafting",
      icon: FileText,
      desc: "Drafting, reviewing, and negotiating commercial contracts in plain English.",
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
    "Brand deals & influencer agreements (Entertainment)",
    "UGC licensing & usage rights (IP)",
    "Service Agreements & MSAs (Small Biz)",
    "Collabs & revenue splits (Entertainment)",
    "Trademark & Copyright strategy (IP)",
    "Entity formation & founding docs (Small Biz)",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle wave background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-15 pointer-events-none"
        >
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Entertainment & creator counsel{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                for deal-driven brands
              </span>
              .
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Business-first, plain-English support for creators, studios, and
              growing companies. Strategic guidance for brand deals, licensing,
              IP, and commercial contracts. Transactional counsel only. No
              litigation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow-lg hover:opacity-90 inline-block"
              >
                Book a Discovery Call
              </Link>

              <Link
                href="/services/entertainment"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-700"
              >
                Review my next deal
                <span className="h-[2px] w-8 bg-teal-500/70 transition-all group-hover:w-14" />
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
              {["Deal-ready contracts", "Rights-first licensing", "Plain-English strategy"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-teal-700" /> {item}
                  </li>
                )
              )}
            </ul>

            {/* Trustpilot badge */}
            <div className="mt-8 flex justify-start">
              <TrustpilotBadge />
            </div>
          </div>

          {/* Right showcase */}
          <div className="md:justify-self-end w-full">
            <div className="relative rounded-2xl border border-slate-200/60 p-6 shadow-sm bg-white">
              <div className="absolute -top-6 -left-6 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center">
                <Film className="h-6 w-6 text-white" />
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-500">Client matter</p>
                  <p className="font-medium text-slate-900">Brand Deal Review</p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs text-slate-700">
                  {[
                    { label: "Usage Rights", icon: ShieldCheck },
                    { label: "Exclusivity", icon: Users },
                    { label: "Payment Terms", icon: FileText },
                  ].map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-200/60 p-4 shadow-sm flex items-center gap-2 bg-white"
                    >
                      <Icon className="h-4 w-4 text-teal-700" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/services/entertainment"
                    className="text-sm font-medium text-slate-800 hover:text-indigo-700"
                  >
                    Explore Entertainment Counsel →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200/60 bg-white p-6">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Good to know:</span>{" "}
                Transactional counsel only. We support contract interpretation,
                negotiation strategy, and pre-suit resolution planning, but we do
                not appear in court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section
        id="practice"
        className="scroll-mt-24 border-t border-slate-200/60 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              How we help deal-driven brands
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map(({ title, icon: Icon, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-slate-200/60 p-6 bg-white hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
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
            Common deals we handle
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            If you monetize through partnerships, licensing, or contracts, we’ll help you protect the terms and the rights.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            {commonDeals.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-200/60 bg-slate-50 px-4 py-3"
              >
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
              <p className="text-sm text-white/90">
                We confirm fit, scope, and timelines (transactional only).
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-lg ring-1 ring-white/10">
              <h3 className="text-xl font-semibold mb-2">2. Strategy + Redlines</h3>
              <p className="text-sm text-white/90">
                We flag what matters: rights, payment, exclusivity, and key risk points.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-lg ring-1 ring-white/10">
              <h3 className="text-xl font-semibold mb-2">3. Finalize + Execute</h3>
              <p className="text-sm text-white/90">
                We get you to signature with clean language and clear next steps.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow hover:bg-slate-50 transition inline-block ring-1 ring-white/20 hover:ring-white/40"
            >
              Book a Discovery Call
            </Link>
            <div className="mt-3 text-xs text-white/80">
              Transactional counsel only. No litigation.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
