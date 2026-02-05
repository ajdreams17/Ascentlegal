import Link from "next/link";

export const metadata = {
  title: "Contracts Drafting | Ascent Legal",
  description:
    "Drafting, reviewing, and negotiating commercial contracts for creators, brands, agencies, and growing companies. Plain-English redlines, clear terms, and deal-ready documents. Transactional counsel only (no litigation).",
};

const categories = [
  {
    title: "Commercial Agreements",
    desc: "Vendor, supplier, and service contracts that keep operations moving and reduce risk.",
    bullets: ["MSAs + SOWs", "Service/Vendor Agreements", "Terms for repeat engagements"],
  },
  {
    title: "Partnerships & Collaborations",
    desc: "Clear expectations around contributions, ownership, and revenue splits so collaborations don’t get messy.",
    bullets: ["Collaboration agreements", "Revenue split terms", "Exit + termination provisions"],
  },
  {
    title: "Contractor + IP Protection",
    desc: "Agreements that protect scope, confidentiality, and ownership when you hire contractors or collaborators.",
    bullets: ["Contractor agreements", "IP assignment + confidentiality", "Work-for-hire language (as needed)"],
  },
  {
    title: "NDAs & Deal Readiness",
    desc: "Practical confidentiality and deal documents so you can share information and move fast with confidence.",
    bullets: ["NDAs", "Basic term sheets (as needed)", "Signature-ready documents"],
  },
];

const deliverables = [
  { title: "Plain-English Summary", desc: "What matters, what to change, and why—without legalese." },
  { title: "Redlines + Clean Version", desc: "Marked-up edits plus a clean, signature-ready version." },
  { title: "Negotiation Language", desc: "Suggested responses and terms you can send to the other side." },
  { title: "Optional Templates", desc: "Repeatable templates for recurring deal types so you move faster next time." },
];

const process = [
  { step: "1", title: "Discovery Call", text: "Confirm goals, timeline, and what success looks like for this deal." },
  { step: "2", title: "Draft / Review", text: "We draft or redline and provide a plain-English risk summary." },
  { step: "3", title: "Finalize + Execute", text: "We support negotiation and deliver clean final documents for signature." },
];

const faqs = [
  {
    q: "Do you draft contracts or review existing ones?",
    a: "Both. Some clients need a contract drafted from scratch. Others already have an agreement and want a fast redline + negotiation guidance.",
  },
  {
    q: "Do you offer flat fees?",
    a: "Often, yes. Many contract reviews and standard drafting projects can be offered at transparent flat rates. If something is complex, we’ll scope it up front.",
  },
  {
    q: "How fast is turnaround?",
    a: "Most contract reviews are returned within 1–3 business days depending on length and complexity. Drafting timelines vary by scope; rush options may be available.",
  },
  {
    q: "Do you handle litigation or disputes?",
    a: "No. Transactional counsel only. We help with contract structure, negotiation strategy, and deal readiness—but we do not appear in court.",
  },
];

export default function ContractsDraftingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium text-gray-600">Services</p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold">
          Contracts{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Drafting
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Every business relationship is defined by agreements. We draft, review, and negotiate contracts that are clear,
          commercially practical, and aligned with your goals—so you can move fast without hidden risk.
        </p>

        {/* Small positioning line to match your updated focus */}
        <p className="mt-3 text-sm text-gray-600 max-w-3xl">
          Ideal for creators, brands, studios, agencies, and growing companies—especially when timelines are tight and deliverables must be crystal clear.
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
            href="#types"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            See common contract types
          </a>
        </div>

        {/* Subtle internal links for SEO + cross-sell */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link href="/services/trademark" className="text-indigo-600 hover:underline">
            Trademark Protection →
          </Link>
          <Link href="/services/copyright" className="text-indigo-600 hover:underline">
            Copyright & Licensing →
          </Link>
          <Link href="/services/team-contractor-docs" className="text-indigo-600 hover:underline">
            Team & Contractor Docs →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section id="types" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Common contract types</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          From one-off agreements to repeatable templates, we help you get to clear terms quickly.
        </p>

        {/* More readable on large screens */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {c.bullets.map((b) => (
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

      {/* Deliverables */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What you get</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
                <h3 className="text-lg font-semibold">{d.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
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

      {/* Turnaround + Pricing teaser */}
      <section className="mt-16 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold">Typical turnaround</h3>
            <p className="mt-2 text-sm text-gray-600">
              Most reviews return within 1–3 business days. Drafting timelines vary by scope; if you have a deadline,
              tell us up front and we’ll confirm timing. Rush options may be available.
            </p>
          </div>

          {/* CTA label consistency */}
          <div className="flex gap-3 md:justify-end">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services/team-contractor-docs"
              className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
            >
              Team & Contractor Docs
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
        <h3 className="text-xl font-semibold">Need a contract reviewed or drafted?</h3>
        <p className="mt-2 text-gray-600">Tell us what you’re working on—we’ll recommend the fastest path.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-6 py-3 text-white font-medium shadow hover:opacity-90"
        >
          Book a Discovery Call
        </Link>

        <p className="mt-4 text-xs text-gray-500">Transactional counsel only. No litigation.</p>
      </section>
    </main>
  );
}
