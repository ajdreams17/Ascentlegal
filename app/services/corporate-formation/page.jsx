import Link from "next/link";

export const metadata = {
  title: "Corporate & Formation | Ascent Legal",
  description:
    "Business-first entity formation and founder documentation for creators, brands, agencies, and growing companies—LLC/C-Corp/S-Corp, operating agreements/bylaws, founder alignment, and scalable governance.",
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
    cta: "Start formation",
    featured: false,
  },
  {
    name: "Founder Alignment",
    price: "Flat-fee",
    bestFor: "Multi-founder teams",
    bullets: [
      "Operating Agreement / Bylaws",
      "Founder equity & IP assignment",
      "Board/Consent resolutions",
      "83(b) election guidance",
    ],
    cta: "Align founders",
    featured: true,
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
    cta: "Scope my project",
    featured: false,
  },
];

const faqs = [
  {
    q: "LLC or C-Corp—what should I choose?",
    a: "LLCs are flexible with pass-through tax; C-Corps suit venture scale and standard equity. We map goals, investors, and tax considerations to recommend a structure.",
  },
  {
    q: "Can you help convert or clean up an existing entity?",
    a: "Yes—conversions, domestications, or governance cleanups are common. We standardize core docs and fix gaps before fundraising, hiring, or scaling operations.",
  },
  {
    q: "Do you offer flat fees?",
    a: "Yes—core formations and founder alignment documents are flat-fee. Complex items (multi-state filings, special share classes) are scoped in advance.",
  },
];

export default function CorporateFormationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium text-gray-600">Services</p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold">
          Corporate &{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Formation
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Choose the right entity, align founders, and set governance that scales. We make formation decisions clear,
          filings accurate, and next steps actionable.
        </p>

        {/* Bridge to your broader audience */}
        <p className="mt-3 text-sm text-gray-600 max-w-3xl">
          Ideal for creators, brands, agencies, and growing companies that need clean structure before signing deals,
          hiring contractors, or scaling operations.
        </p>

        {/* SEO support line (natural keywords) */}
        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
          We support LLC formation, C-Corp formation, and founder documentation including operating agreements and bylaws.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            Start your formation
          </Link>

          <a
            href="#packages"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            View packages
          </a>

          <Link
            href="/services/contracts-drafting"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            Contracts drafting
          </Link>
        </div>
      </section>

      {/* Roadmap Features (semantic list) */}
      <section className="mt-10">
        <ul className="space-y-6">
          {[
            {
              title: "Roadmap that keeps you moving",
              text: "Formation simplified with step-by-step guidance.",
            },
            {
              title: "Packages built for your business",
              text: "Legal and compliance basics covered with clear scope.",
            },
            {
              title: "No hidden costs",
              text: "Transparent pricing you can trust.",
            },
          ].map((x) => (
            <li key={x.title} className="flex items-start gap-3">
              <span className="text-indigo-600 text-lg" aria-hidden="true">
                ✔
              </span>
              <p className="text-gray-800">
                <strong>{x.title}</strong>
                <br />
                {x.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* What’s included */}
      <section id="overview" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What’s included</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Entity Strategy",
              desc: "Clear guidance on LLC, C-Corp, or S-Corp based on taxes, ownership, investors, and hiring plans.",
              items: [
                "Name availability & jurisdiction choice",
                "Equity structure & founder vesting overview",
                "Tax & compliance considerations",
              ],
            },
            {
              title: "Filings & Core Docs",
              desc: "Done-right formation documents and initial governance so you’re operational from day one.",
              items: [
                "Articles/Certificate of Formation or Incorporation",
                "Operating Agreement / Bylaws",
                "EIN guidance & initial resolutions",
              ],
            },
            {
              title: "Founder Alignment",
              desc: "Align roles, equity, and IP so the team is set to build.",
              items: ["IP assignment & confidentiality", "Founder equity & vesting terms", "Board/Member consents"],
            },
            {
              title: "Launch Checklist",
              desc: "Practical next steps so you’re compliant and ready to transact.",
              items: ["Banking & bookkeeping setup", "Registered Agent & annual reports", "Foreign qualification (if needed)"],
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-gray-100 bg-white p-6">
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {card.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Internal linking strip */}
        <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <p className="text-sm text-gray-700">
            Common next step after formation:{" "}
            <Link
              href="/services/team-contractor-docs"
              className="text-indigo-600 hover:underline font-medium
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30 rounded-md px-1"
            >
              contractor + IP assignment docs
            </Link>{" "}
            and{" "}
            <Link
              href="/services/deal-desk-support"
              className="text-indigo-600 hover:underline font-medium
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30 rounded-md px-1"
            >
              deal desk support
            </Link>{" "}
            for recurring agreements.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mt-16 scroll-mt-24">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Packages</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white p-6 ${
                p.featured ? "border-indigo-200 ring-1 ring-indigo-100" : "border-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Package</div>
                {p.featured && (
                  <span className="text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-1">
                    Most popular
                  </span>
                )}
              </div>

              <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
              <div className="mt-1 text-xs text-gray-500">Best for: {p.bestFor}</div>

              <div className="mt-3 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                {p.price}
              </div>

              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="w-full inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white text-center hover:opacity-90
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
                >
                  {p.cta}
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
            { step: "1", title: "Discovery Call", text: "We learn goals, investors, and timelines; recommend structure." },
            { step: "2", title: "Docs & Filings", text: "We draft, review, and file what’s needed for a clean launch." },
            { step: "3", title: "Handoff & Next Steps", text: "You get final docs, a compliance checklist, and clear next steps." },
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
        <div className="mt-4 flex gap-3 justify-center flex-wrap">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            Back to Services
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-500">Transactional counsel only. No litigation.</p>
      </section>
    </main>
  );
}
