import Link from "next/link";

export const metadata = {
  title: "Copyright & Licensing | Ascent Legal",
  description:
    "Business-first copyright and licensing counsel for creators, studios, and growing companies. Ownership strategy, registrations, work-for-hire, and usage rights. Transactional counsel only (no litigation).",
};

const pillars = [
  {
    title: "Copyright Strategy + Registration",
    desc: "We help you decide what to register, what to prioritize, and how to protect key assets as your content library grows.",
    bullets: ["Registration strategy (what/when)", "Filing support (as needed)", "Content catalog planning"],
  },
  {
    title: "Licensing + Usage Rights",
    desc: "Clear terms for how content can be used, edited, repurposed, and distributed commercially.",
    bullets: ["Scope + term + territory", "Media/channel usage rights", "Exclusivity, buyouts + renewals"],
  },
  {
    title: "Ownership + Work-for-Hire",
    desc: "Contract language that keeps ownership clean when collaborators, editors, designers, or contractors touch the work.",
    bullets: ["Work-for-hire clauses", "IP assignment + confidentiality", "Collaboration + split terms"],
  },
  {
    title: "Platform Notice Support",
    desc: "Practical support for platform notice workflows and documentation to address unauthorized copies (as applicable).",
    bullets: ["Notice workflow guidance", "Documentation + evidence support", "Repeat-issue prevention steps"],
  },
];

const whoItsFor = [
  "Creators, influencers, and talent",
  "Studios and production teams",
  "Brands commissioning content",
  "Agencies managing campaigns",
  "Founders building content-driven brands",
];

const faqs = [
  {
    q: "Do I need to register copyright to be protected?",
    a: "Copyright generally exists upon creation, but registration can provide important legal benefits depending on your goals and timing. We’ll help you decide when registration is worth it.",
  },
  {
    q: "Can you help with licensing terms and usage rights?",
    a: "Yes. We structure licensing terms around scope, duration, territory, media, exclusivity, and compensation so usage is clear and commercially workable.",
  },
  {
    q: "What if multiple collaborators created the work?",
    a: "We can help clarify ownership and structure collaboration terms (including assignments and split terms) so your rights are clean for monetization and future deals.",
  },
  {
    q: "Do you handle litigation or lawsuits?",
    a: "No. Transactional counsel only. We help with contracts, rights structure, and business-first strategy, but we do not appear in court.",
  },
];

export default function CopyrightPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium text-gray-600">Services</p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold">
          Copyright{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            & Licensing
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Business-first, plain-English support for creators, studios, and growing companies. We help you protect
          creative assets, structure ownership, and set clear usage rights for commercial deals.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
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

          <Link
            href="/services/trademark"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Trademark Protection
          </Link>
        </div>

        {/* Quick proof */}
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { label: "Creator-Aligned", desc: "Built for rights, usage, and monetization." },
            { label: "Plain-English", desc: "Clear priorities and next steps." },
            { label: "Deal-Ready", desc: "Licensing terms that match real campaigns." },
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

      {/* Who we serve */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we serve</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Clients who create, commission, or commercialize content—and need ownership and usage rights to be clean.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-sm text-gray-700">
          {whoItsFor.map((i) => (
            <div key={i} className="rounded-lg border border-gray-100 bg-white px-3 py-2 text-center">
              {i}
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How we help</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Focused support for registration strategy, licensing terms, and ownership structure—so your content can be
          monetized safely.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {p.bullets.map((b) => (
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

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">A simple process</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Assess", text: "We identify what you’re protecting and how it’s being used commercially." },
            { step: "2", title: "Structure", text: "We define ownership, licensing scope, and risk points in plain English." },
            { step: "3", title: "Execute", text: "You get clean language, next steps, and templates for repeat deals." },
          ].map((x) => (
            <div key={x.step} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="text-sm text-gray-500">Step {x.step}</div>
              <h3 className="mt-1 font-semibold">{x.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{x.text}</p>
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
        <h3 className="text-xl font-semibold">Want clean ownership and licensing terms?</h3>
        <p className="mt-2 text-gray-600">Tell us what you’re creating—we’ll recommend the fastest path.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
        >
          Book a Discovery Call
        </Link>

        <p className="mt-4 text-xs text-gray-500">Transactional counsel only. No litigation.</p>
      </section>
    </main>
  );
}
