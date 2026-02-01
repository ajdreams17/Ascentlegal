import Link from "next/link";

export const metadata = {
  title: "Team & Contractor Docs | Ascent Legal",
  description:
    "Contractor and team documents that protect your IP and set clear expectations. Transactional counsel only (no litigation).",
};

const included = [
  {
    title: "Contractor Agreements",
    desc: "Clear scopes, payment terms, deliverables, and ownership language that matches how you work.",
  },
  {
    title: "IP Assignment + Confidentiality",
    desc: "Protect what’s created and keep sensitive business information secure.",
  },
  {
    title: "Work-for-Hire Clauses",
    desc: "Proper language for content creation and deliverables where ownership matters.",
  },
  {
    title: "Offer Letters (as needed)",
    desc: "Simple, clean offer documentation when you’re bringing someone on beyond contractors.",
  },
];

const commonUseCases = [
  "Hiring editors, designers, videographers, VAs, and producers",
  "Agency or studio contractors supporting client work",
  "Content creation and UGC production workflows",
  "Protecting IP when multiple collaborators are involved",
  "Clarifying deliverables, deadlines, and revision terms",
];

const faqs = [
  {
    q: "Is this employment law?",
    a: "This service focuses on documents and setup for contractors and teams. We provide transactional counsel only (no litigation).",
  },
  {
    q: "Can you review what I already have?",
    a: "Yes. We can redline your existing agreements, explain risks in plain English, and provide cleaner language you can reuse.",
  },
  {
    q: "Do you help with contractor classification?",
    a: "We can provide practical guidance and document strategy, but complex classification issues may require deeper compliance work depending on your situation.",
  },
  {
    q: "How fast is turnaround?",
    a: "Most reviews and standard document packages are turned around within 1–3 business days depending on scope and timing.",
  },
];

export default function TeamContractorDocsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium text-gray-600">Services</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold">
          Team &{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Contractor Docs
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Contractor and team documents that protect your IP and set clear expectations—so you can scale without messy
          misunderstandings. Transactional counsel only. No litigation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            View all services
          </Link>
        </div>
      </section>

      {/* Included */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What we help with</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {included.map((x) => (
            <div key={x.title} className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
                <h3 className="text-lg font-semibold">{x.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
          <h2 className="text-2xl font-semibold">Common use cases</h2>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            {commonUseCases.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
          <h2 className="text-2xl font-semibold">Good to know</h2>
          <p className="mt-2 text-gray-600">
            This service is document-first and transactional. If you’re dealing with a dispute or litigation matter, we’re
            not the right fit—but we can help you get your agreements in shape to prevent the next one.
          </p>
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
        <h3 className="text-xl font-semibold">Ready to clean up your contractor docs?</h3>
        <p className="mt-2 text-gray-600">Tell us what you’re hiring for—we’ll recommend the fastest path.</p>
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
