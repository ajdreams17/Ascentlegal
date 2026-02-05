// app/services/entertainment/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Brand Deals & Entertainment Counsel | Ascent Legal",
  description:
    "Business-first counsel for creators, brands, studios, and agencies. Brand deals, influencer/UGC agreements, production contracts, and licensing support. Transactional counsel only (no litigation).",
};

const whoWeHelp = [
  {
    title: "Creators & Talent",
    desc: "Brand deals, influencer agreements, licensing, and collaboration terms that protect your rights and revenue.",
    bullets: ["Creators + Influencers", "Talent + On-camera", "Musicians + Artists"],
  },
  {
    title: "Studios & Production Teams",
    desc: "Production-ready contracts that keep work on schedule and reduce friction across stakeholders.",
    bullets: ["Producers + Studios", "Editors + Crew", "Creative Services Teams"],
  },
  {
    title: "Brands & Agencies",
    desc: "Campaign contracts and usage rights structured for clarity, deliverables, and compliance (as applicable).",
    bullets: ["Brands + Partnerships", "Agencies + Managers", "UGC + Paid Media Teams"],
  },
];

const agreements = [
  "Brand deals + sponsorship agreements",
  "Influencer/UGC agreements + usage rights",
  "Content licensing + usage extensions",
  "Production agreements (crew, services, and deliverables)",
  "Collaboration agreements + revenue splits",
  "Talent agreements + release/consent terms (as applicable)",
  "Agency + management agreements (review + negotiation support)",
];

const process = [
  { step: "1", title: "Discovery Call", text: "We confirm the deal type, goals, timelines, and risk priorities." },
  {
    step: "2",
    title: "Review / Draft",
    text: "You get redlines plus a plain-English summary of what matters and what to change.",
  },
  { step: "3", title: "Negotiate + Close", text: "We provide negotiation language and help finalize clean terms." },
];

const faqs = [
  {
    q: "Do you review existing brand deals and influencer contracts?",
    a: "Yes. We review and redline contracts, explain the risks in plain English, and provide negotiation language you can use.",
  },
  {
    q: "Do you draft brand deal or licensing agreements from scratch?",
    a: "Yes. We can draft custom agreements when you need a clean starting point or a repeatable template for future deals.",
  },
  {
    q: "What’s your typical turnaround time?",
    a: "Most contract reviews return within 1–3 business days depending on length and complexity. If you have a deadline, tell us up front and we’ll confirm timing.",
  },
  {
    q: "Do you handle disputes or litigation?",
    a: "No. We provide transactional counsel only (no litigation). We can support negotiation strategy and contract interpretation, but we do not appear in court.",
  },
];

export default function EntertainmentPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium text-gray-600">Services</p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold">
          Brand Deals &{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Entertainment Counsel
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Business-first, plain-English support for creators, brands, studios, and agencies. We help you move faster on
          brand deal contracts, influencer agreements, licensing, and production counsel. Transactional counsel only. No
          litigation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Discovery Call
          </Link>

          <a
            href="#agreements"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            See common deal types
          </a>

          <Link
            href="/services/deal-desk-support"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Deal Desk Support
          </Link>

          <Link
            href="/services/copyright"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Copyright & Licensing
          </Link>
        </div>

        {/* Quick proof */}
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { label: "Deal-Ready Contracts", desc: "Clear terms that keep projects moving." },
            { label: "Plain-English Strategy", desc: "Know exactly what matters and why." },
            { label: "Agency-Friendly Execution", desc: "Fast turnarounds, clean redlines, and reusable templates." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-gray-100 bg-white p-6 text-center">
              <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                {item.label}
              </div>
              <div className="mt-2 text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we help */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we help</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {whoWeHelp.map((x) => (
            <div key={x.title} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
                <h3 className="text-lg font-semibold">{x.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{x.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {x.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Agreements */}
      <section id="agreements" className="mt-16 scroll-mt-24">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Common deal types</h2>
        </div>

        <p className="text-gray-600 max-w-3xl">
          What you get: clean redlines, a plain-English risk summary, and negotiation language you can use.
        </p>

        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6">
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {agreements.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Turnaround (conversion booster) */}
      <section className="mt-16 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold">Typical turnaround</h3>
            <p className="mt-2 text-sm text-gray-600">
              Most reviews return within 1–3 business days. If you have a deadline, tell us up front and we’ll confirm
              timing. Rush options may be available depending on scope.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services/trademark"
              className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
            >
              Trademark Protection
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Straightforward process</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="text-sm text-gray-500">Step {p.step}</div>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-gray-100 bg-white p-6">
              <h4 className="font-medium">{f.q}</h4>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center">
        <h3 className="text-xl font-semibold">Have a deal on your desk?</h3>
        <p className="mt-2 text-gray-600">Tell us what you’re working on—we’ll recommend the fastest path.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
        >
          Book a Discovery Call
        </Link>
      </section>
    </main>
  );
}
