// app/services/deal-desk-support/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Deal Desk Support | Ascent Legal",
  description:
    "On-call contract review, drafting, and negotiation support for creators, brands, studios, agencies, and growing companies with repeat deals and fast timelines. Transactional counsel only. No litigation.",
};

const whoItsFor = [
  "Creators and influencers",
  "Studios and production teams",
  "Agencies and talent managers",
  "Consumer brands and e-commerce businesses",
  "Startups that close deals frequently",
];

const commonDeals = [
  "Brand deals + sponsorship agreements",
  "Influencer/UGC agreements + usage rights",
  "Production + creative services agreements",
  "Agency + client service agreements",
  "Vendor + platform agreements",
  "Partnerships, collabs + revenue splits",
];

const inclusions = [
  {
    title: "Contract Review + Redlines",
    desc: "We mark up your agreement and explain what matters in plain English.",
  },
  {
    title: "Negotiation Language",
    desc: "Clean counter-proposals and messaging you can send to the other side.",
  },
  {
    title: "Drafting When Needed",
    desc: "From-scratch drafting for one-off deals or repeat contract types.",
  },
  {
    title: "Repeatable Templates",
    desc: "Base templates and playbooks so you move faster on your next deal.",
  },
];

const faqs = [
  {
    q: "Is Deal Desk Support a subscription or a retainer?",
    a: "It can be either. Some clients prefer one-off support for a specific contract, while others want ongoing coverage for recurring deals. We’ll recommend the best fit after a quick scoping call.",
  },
  {
    q: "What’s your typical turnaround time?",
    a: "Most contract reviews are returned within 1–3 business days depending on length and complexity. If you have a deadline, tell us upfront and we’ll confirm timing.",
  },
  {
    q: "Do you negotiate directly with the other party?",
    a: "We can support you with redlines and negotiation language, and we can also participate directly in negotiations depending on scope and the parties involved.",
  },
  {
    q: "Do you handle disputes or litigation?",
    a: "No. We provide transactional counsel only (no litigation). We can support negotiation strategy and pre-suit resolution planning, but we do not appear in court.",
  },
];

export default function DealDeskSupportPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium text-gray-600">Services</p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold">
          Deal Desk{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Support
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          On-call contract review, drafting, and negotiation support for repeat deals and fast timelines.
          Transactional counsel only. No litigation.
        </p>

        {/* Micro-proof to make the value "click" immediately */}
        <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 text-sm text-gray-700 max-w-3xl">
          <span className="font-semibold text-gray-900">Built for fast deal flow:</span>{" "}
          1–3 day turnarounds (typical), agency-friendly workflows, repeatable templates, and clean redlines you can send today.
        </div>

        <div className="mt-8 flex flex-wrap gap-3 items-center">
          {/* Primary CTA (consistent label) */}
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Discovery Call
          </Link>

          {/* Secondary actions as text links to keep CTA labels consistent */}
          <Link href="/services/contracts-drafting" className="text-sm font-medium text-indigo-600 hover:underline">
            Explore Contracts Drafting →
          </Link>

          <Link href="/services" className="text-sm font-medium text-indigo-600 hover:underline">
            View all services →
          </Link>
        </div>

        {/* Cross-sell / internal links */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link href="/services/trademark" className="text-indigo-600 hover:underline">
            Trademark Protection →
          </Link>
          <Link href="/services/copyright" className="text-indigo-600 hover:underline">
            Copyright & Licensing →
          </Link>
          <Link href="/services/entertainment" className="text-indigo-600 hover:underline">
            Brand Deals & Campaign Contracts →
          </Link>
        </div>

        {/* Quick proof */}
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { label: "Plain-English", desc: "Clear priorities and next steps." },
            { label: "Deal-First", desc: "Rights, payment, exclusivity, and risk." },
            { label: "Built for Speed", desc: "Designed for recurring deal flow." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-gray-100 p-6 text-center bg-white">
              <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                {item.label}
              </div>
              <div className="mt-2 text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for + Common deals */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <h2 className="text-2xl font-semibold">Who it’s for</h2>
          <p className="mt-2 text-gray-600">
            Deal Desk Support is built for clients who regularly receive contracts and want fast, confident decisions.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            {whoItsFor.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <h2 className="text-2xl font-semibold">Common deals we handle</h2>
          <p className="mt-2 text-gray-600">
            If it’s tied to revenue, rights, or long-term risk, it belongs in your deal desk.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            {commonDeals.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">What’s included</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusions.map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
                <h3 className="text-lg font-semibold">{x.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Discovery Call", text: "We confirm the deal type, timing, and goals so scope is clear." },
            { step: "2", title: "Review + Strategy", text: "You get redlines plus a plain-English summary of risks and priorities." },
            { step: "3", title: "Finalize + Execute", text: "We support negotiation and help you reach clean terms for signature." },
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
              Flat fees for common reviews and scoped estimates for complex deals. We confirm scope up front—no surprises.
            </p>
          </div>

          {/* CTA consistency */}
          <div className="flex gap-3 md:justify-end">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services/entertainment"
              className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
            >
              Entertainment Counsel
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
        <h3 className="text-xl font-semibold">Ready to move faster on deals?</h3>
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
