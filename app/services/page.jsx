import Link from "next/link";

export const metadata = {
  title: "Services | Ascent Legal",
  description:
    "Business-first legal services for creators, studios, and growing companies—brand deals, trademarks, and commercial contracts. Transactional counsel only (no litigation).",
};

const areas = [
  {
    title: "Entertainment & Creator Counsel",
    desc: "Drafting and negotiating brand deals, influencer agreements, production terms, and creator contracts.",
    bullets: ["Brand + Sponsorship Deals", "Influencer/UGC Agreements", "Production + Media Agreements"],
    href: "/services/entertainment",
    cta: "Explore entertainment counsel",
  },
  {
    title: "Trademark Protection",
    desc: "Name clearance, USPTO filing, and protection strategy for your brand assets (and related IP support).",
    bullets: ["Search & Clearance", "USPTO Filing & Prosecution", "Monitoring + Enforcement Support"],
    href: "/services/trademark",
    cta: "Protect my brand",
  },
  {
    title: "Contracts Drafting",
    desc: "Drafting, reviewing, and negotiating agreements that protect revenue, clarify terms, and reduce risk.",
    bullets: ["Service + Vendor Agreements", "Independent Contractor Agreements", "Partnership + Collaboration Terms"],
    href: "/services/contracts-drafting",
    cta: "Review my contract",
  },
  {
    title: "Deal Desk Support",
    desc: "On-call contract review, drafting, and negotiation support for repeat deals and partnerships.",
    bullets: ["Fast Contract Reviews", "Redlines + Negotiation Language", "Repeat Deal Templates"],
    href: "/services/deal-desk-support",
    cta: "Discuss deal desk support",
  },
  {
    title: "Corporate & Formation",
    desc: "Entity setup, founder alignment, and governance that supports growth and protects ownership.",
    bullets: ["LLC/C-Corp/S-Corp", "Operating/Shareholder Agreements", "Bylaws & Resolutions"],
    href: "/services/corporate-formation",
    cta: "Start formation",
  },
  {
    title: "Team & Contractor Docs",
    desc: "Practical documents for contractors and teams that protect your IP and set clear expectations.",
    bullets: ["Contractor + IP Assignment", "Offer Letters (as needed)", "Policies for Growing Teams"],
    href: "/services/employment",
    cta: "Set up team docs",
  },
  {
    title: "General Counsel (Ongoing Support)",
    desc: "Right-sized legal support for creators and growing companies—contracts, IP strategy, and ongoing guidance.",
    bullets: ["Priority Support", "Repeat-Deal Templates", "Ongoing Contract + IP Guidance"],
    href: "/services/general",
    cta: "Discuss ongoing support",
  },
];

const faqs = [
  {
    q: "Do you offer flat fees?",
    a: "Yes—many matters are offered at transparent flat rates. We’ll scope custom work up front so there are no surprises.",
  },
  {
    q: "How fast can you turn something around?",
    a: "Most reviews return within 1–3 business days. If you have a deadline, tell us up front and we’ll confirm timing.",
  },
  {
    q: "Do you handle litigation?",
    a: "No. We provide transactional counsel only (no litigation). We can support negotiation strategy and contract interpretation, but we do not appear in court.",
  },
  {
    q: "Can you work with my existing documents?",
    a: "Absolutely. We’ll redline what you have, explain risks in plain English, and provide negotiation language you can use.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold">
          Business-First{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Legal Services
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Business-first, plain-English support for creators, studios, and growing companies. Strategic guidance for
          brand deals, trademarks, and commercial contracts. Transactional counsel only. No litigation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/services/deal-desk-support"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Deal Desk Support
          </Link>
          <a
            href="#practice"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Explore practice areas
          </a>
        </div>
      </section>

      {/* Quick proof */}
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {[
          { label: "Creator + Business Focus", desc: "Built for deals, IP, and growth." },
          { label: "Plain-English Guidance", desc: "Clear next steps without legalese." },
          { label: "Predictable Pricing", desc: "Transparent flat fees and scoped projects." },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-gray-100 p-6 text-center bg-white">
            <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              {item.label}
            </div>
            <div className="mt-2 text-sm text-gray-600">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Practice Areas */}
      <section id="practice" className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Practice Areas</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
                <h3 className="text-lg font-semibold">{a.title}</h3>
              </div>

              <p className="mt-3 text-sm text-gray-600">{a.desc}</p>

              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Link href={a.href} className="text-sm font-medium text-indigo-600 hover:underline">
                  {a.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we serve */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we serve</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Creators, studios, and growing companies who monetize through partnerships, content, and commercial contracts.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm text-gray-700">
          {["Creators + Influencers", "Studios + Production", "Brands + Partnerships", "E-commerce", "Startups + Founders", "Agencies"].map(
            (i) => (
              <div key={i} className="rounded-lg border border-gray-100 bg-white px-3 py-2 text-center">
                {i}
              </div>
            )
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">Transactional counsel only.</span> No litigation.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Discovery Call", text: "Share goals and timelines; we map a clear plan." },
            { step: "2", title: "Draft/Review", text: "We prepare documents or redlines with plain-English explanations." },
            { step: "3", title: "Finalize + Execute", text: "You get clean versions, negotiation language, and next steps." },
          ].map((p) => (
            <div key={p.step} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="text-sm text-gray-500">Step {p.step}</div>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mt-16 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold">Predictable pricing</h3>
            <p className="mt-2 text-sm text-gray-600">
              Flat fees for common matters; scoped estimates for complex projects. No surprises.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
            >
              Get a quote
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
        <h3 className="text-xl font-semibold">Not sure where to start?</h3>
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
