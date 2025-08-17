import Link from "next/link";

export const metadata = {
  title: "Corporate & Formation | Ascent Legal",
  description:
    "Choose the right entity and set a strong legal foundation—LLC/C-Corp/S-Corp, founder docs, governance, cap table, and compliance for growth.",
};

const packages = [
  {
    name: "Starter Formation",
    price: "Flat-fee",
    bestFor: "Solo founders and first entities",
    bullets: [
      "Entity selection consult (LLC / C-Corp / S-Corp)",
      "Articles/Certificate of Formation",
      "EIN guidance",
      "Registered Agent setup (or BYO)",
    ],
  },
  {
    name: "Founder Alignment",
    price: "Flat-fee",
    bestFor: "Multi-founder startups",
    bullets: [
      "Operating Agreement / Bylaws",
      "Founder equity & IP assignment",
      "Board/Consent resolutions",
      "83(b) election guidance",
    ],
  },
  {
    name: "Launch & Scale",
    price: "Scoped",
    bestFor: "Venture-ready or revenue-scaling teams",
    bullets: [
      "State & foreign qualifications",
      "Initial cap table structure",
      "Policy & compliance starter kit",
      "GC-style kickoff session",
    ],
  },
];

const faqs = [
  {
    q: "LLC or C-Corp—what should I choose?",
    a: "LLCs are flexible with pass-through tax; C-Corps suit venture scale and standard equity. We map goals, investors, and tax considerations to recommend a structure.",
  },
  {
    q: "Can you help convert or clean up an existing entity?",
    a: "Yes—conversions, domestications, or governance cleanups are common. We standardize core docs and fix gaps before fundraising or hiring.",
  },
  {
    q: "Do you offer flat fees?",
    a: "Yes—core formations and founder alignment documents are flat-fee. Complex items (multi-state, special share classes) are scoped in advance.",
  },
];

export default function CorporateFormationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold">
          Corporate &{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Formation
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Choose the right entity, align founders, and set governance that scales. We make
          formation decisions clear, filings accurate, and next steps actionable.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Start your formation
          </Link>
          <a
            href="#packages"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            View packages
          </a>
        </div>
      </section>

      {/* Proof / Stats */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Entities formed", value: "200+" },
          { label: "Avg. response time", value: "<4h" },
          { label: "States supported", value: "Multi-state" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray-100 p-6 text-center bg-white">
            <div className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </section>

      {/* What’s included */}
      <section id="overview" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What’s included</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="font-semibold">Entity Strategy</h3>
            <p className="mt-2 text-sm text-gray-600">
              Clear guidance on LLC, C-Corp, or S-Corp based on taxes, ownership, investors, and
              hiring plans.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              {[
                "Name availability & jurisdiction choice",
                "Equity structure & founder vesting overview",
                "Tax & compliance considerations",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="font-semibold">Filings & Core Docs</h3>
            <p className="mt-2 text-sm text-gray-600">
              Done-right formation documents and initial governance so you’re operational from day one.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              {[
                "Articles/Certificate of Formation or Incorporation",
                "Operating Agreement / Bylaws",
                "EIN guidance & initial resolutions",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="font-semibold">Founder Alignment</h3>
            <p className="mt-2 text-sm text-gray-600">
              Align roles, equity, and IP so the team is set to build.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              {[
                "IP assignment & confidentiality",
                "Founder equity & vesting terms",
                "Board/Member consents",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="font-semibold">Launch Checklist</h3>
            <p className="mt-2 text-sm text-gray-600">
              Practical next steps so you’re compliant and ready to transact.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              {[
                "Banking & bookkeeping setup",
                "Registered Agent & annual reports",
                "Foreign qualification (if needed)",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Packages</h2>
          <span className="text-sm text-gray-500">Transparent options</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="text-sm text-gray-500">Package</div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-1 text-xs text-gray-500">Best for: {p.bestFor}</div>
              <div className="mt-3 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                {p.price}
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="w-full inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white text-center"
                >
                  Get started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Scoping Call", text: "We learn goals, investors, and timelines; recommend structure." },
            { step: "2", title: "Docs & Filings", text: "We draft, review, and file what’s needed for a clean launch." },
            { step: "3", title: "Handoff & Next Steps", text: "You get clean final docs, a compliance checklist, and support." },
          ].map((p) => (
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

      {/* CTA */}
      <section className="mt-16 text-center">
        <h3 className="text-xl font-semibold">Ready to form or clean up your entity?</h3>
        <p className="mt-2 text-gray-600">We’ll scope a flat-fee plan and next steps in your first call.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
