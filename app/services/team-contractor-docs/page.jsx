import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Team & Contractor Agreements | Ascent Legal",
  description:
    "Independent contractor agreements, IP assignment, confidentiality, work-for-hire, and team documents for creators, brands, agencies, studios, and growing businesses. Transactional counsel only.",
  alternates: {
    canonical: "/services/team-contractor-docs",
  },
};

const included = [
  {
    title: "Independent Contractor Agreements",
    desc: "Clear scope, deliverables, payment terms, and timelines—written to match how you actually work.",
  },
  {
    title: "IP Assignment + Confidentiality",
    desc: "Ownership and confidentiality terms that protect what’s created and keep sensitive business info secure.",
  },
  {
    title: "Work-for-Hire + Usage Rights",
    desc: "Proper work-for-hire language (when applicable) plus rights/usage terms for content, creative, and deliverables.",
  },
  {
    title: "Creative Services Agreements",
    desc: "Project-based terms for editors, designers, videographers, producers, developers, and other outside collaborators.",
  },
];

const commonUseCases = [
  "Hiring editors, designers, videographers, VAs, producers, and developers",
  "Agency or studio contractors supporting client work (repeat engagements)",
  "Content creation, UGC, and production workflows",
  "Protecting IP when multiple collaborators are involved",
  "Clarifying deliverables, deadlines, approvals, and revision terms",
];

const deliverables = [
  { title: "Plain-English Summary", desc: "What matters, what to change, and why—without legalese." },
  { title: "Redlines + Clean Version", desc: "Marked-up edits plus a signature-ready clean copy." },
  { title: "Reusable Language", desc: "Clauses you can reuse across repeat hires and projects." },
  { title: "Optional Templates", desc: "A base template set for recurring contractor roles." },
];

const faqs = [
  {
    q: "Is this employment law?",
    a: "This service is document-first and transactional. We help with contractor/team documents and IP protection (not litigation).",
  },
  {
    q: "Can you review what I already have?",
    a: "Yes. We can redline your existing agreement, explain risk in plain English, and deliver a cleaner version you can reuse.",
  },
  {
    q: "Do you handle worker-classification or employment disputes?",
    a: "No. This service is focused on transactional documents, ownership, confidentiality, and project terms. We do not handle employment disputes or litigation through this practice area.",
  },
  {
    q: "How fast is turnaround?",
    a: "Most reviews and standard document packages return within 1–3 business days depending on scope and timing.",
  },
];

export default function TeamContractorDocsPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      {/* Hero */}
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
          Team & Contractor Agreements
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          Put the working relationship in writing.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5F7386]">
          Contractor documents that protect ownership, set clear expectations, and keep projects moving—built for creators,
          brands, studios, agencies, and growing companies. Transactional counsel only. No litigation.
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F7386]">
          We help with independent contractor agreements, IP assignment,
          confidentiality, work-for-hire provisions where appropriate, and
          usage-rights language for content and creative deliverables.
        </p>

        <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
          Transactional counsel only. No litigation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <StartIntakeButton
            eventName="team_contractor_intake_clicked"
            placement="team_contractor_hero"
            label="Start Contractor Intake"
            className="inline-flex rounded-xl bg-[#0E2A47] px-5 py-3 text-white shadow hover:bg-[#B86A2E]"
          />

          <Link
            href="/services/contracts-drafting"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            Contracts drafting
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            View all services
          </Link>
        </div>
      </section>

      {/* Included */}
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-semibold">What we help with</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {included.map((x) => (
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
      </div></section>

      {/* Deliverables (conversion clarity) */}
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-semibold">What you get</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Clean documents you can use immediately—plus the context to understand what matters and why.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{d.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      {/* Use cases */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <h2 className="text-2xl font-semibold">Common use cases</h2>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            {commonUseCases.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
          <h2 className="text-2xl font-semibold">Good to know</h2>
          <p className="mt-2 text-gray-600">
            This service is document-first and transactional. If you’re dealing with a dispute or litigation matter, we’re
            not the right fit—but we can help you tighten agreements to reduce risk going forward.
          </p>

          <div className="mt-5 text-sm text-gray-700">
            Helpful pairing:
            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="/services/corporate-formation"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 hover:border-indigo-300
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
              >
                Corporate & Formation
              </Link>
              <Link
                href="/services/deal-desk-support"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 hover:border-indigo-300
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
              >
                Deal Desk Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
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
        <h3 className="text-xl font-semibold">Ready to clean up your contractor docs?</h3>
        <p className="mt-2 text-gray-600">Tell us who you’re hiring and what they’ll create—we’ll recommend the fastest path.</p>
        <StartIntakeButton
          eventName="team_contractor_intake_clicked"
          placement="team_contractor_bottom"
          label="Start Contractor Intake"
          className="mt-4 inline-flex rounded-xl bg-[#0E2A47] px-5 py-3 text-white shadow hover:bg-[#B86A2E]"
        />

        <p className="mt-4 text-xs text-gray-500">Transactional counsel only. No litigation.</p>
      </section>
    </main>
  );
}
