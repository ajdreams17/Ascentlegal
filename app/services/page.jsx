import Link from "next/link";

export const metadata = {
  title: "Services | Ascent Legal",
  description:
    "Business-first legal services for founders and operators—corporate & formation, contracts, employment, trademarks, copyright, and licensing.",
};

const areas = [
  {
    title: "Corporate & Formation",
    desc: "Choose and form the right entity, align founders, and set governance that scales.",
    bullets: ["LLC/C-Corp/S-Corp", "Operating/Shareholder Agreements", "Bylaws & Resolutions"],
    href: "/contact",
    cta: "Start formation",
  },
  {
    title: "Commercial Contracts",
    desc: "Draft, review, and negotiate clear agreements that protect revenue and reduce risk.",
    bullets: ["Independent Contractor Agreements", "Service Agreements", "Film, TV & Media Agreements"],
    href: "/contact",
    cta: "Review my contract",
  },
  {
    title: "Employment",
    desc: "Practical hiring docs and policies that protect culture and IP while staying compliant.",
    bullets: ["Offer Letters & IP Assignment", "Handbooks & Policies", "Advisor/Contractor Docs"],
    href: "/contact",
    cta: "Set up hiring docs",
  },
  {
    title: "Trademark (IP Protection)",
    desc: "Name clearance, USPTO filing, and monitoring to protect your brand assets.",
    bullets: ["Search & Opinion", "USPTO Filing & Prosecution", "Monitoring & Takedowns"],
    href: "/ip",
    cta: "Protect my brand",
  },
  {
    title: "Copyright & Licensing",
    desc: "Register creative assets and structure licenses/collaborations that work commercially.",
    bullets: ["Copyright Filings", "Content/Brand Licenses", "DMCA & Platform Notices"],
    href: "/ip",
    cta: "Protect my content",
  },
  {
    title: "General Counsel (Fractional)",
    desc: "Ongoing, right-sized legal support for scaling companies without the overhead.",
    bullets: ["Priority Response", "Policy & Compliance Roadmaps", "Quarterly Legal Ops"],
    href: "/contact",
    cta: "Discuss GC support",
  },
];

const faqs = [
  {
    q: "Do you offer flat fees?",
    a: "Yes—trademark filings, formations, and most contract work are offered at transparent flat rates. We’ll scope custom work up front.",
  },
  {
    q: "How fast can you turn something around?",
    a: "Most reviews return within 1–3 business days. Rush options are available—tell us your deadline when you reach out.",
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
          Practical counsel for companies that move fast—formation, contracts, employment, and
          brand/content protection delivered with clarity and predictable pricing.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
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
    { label: "Founder-Focused", desc: "Built for startups and growing businesses." },
    { label: "Creative & IP Expertise", desc: "Specialized in protecting brands and creators." },
    { label: "Practical Counsel", desc: "Actionable advice without the legalese." },
  ].map((item) => (
    <div
      key={item.label}
      className="rounded-xl border border-gray-100 p-6 text-center"
    >
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

      {/* Industries */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we serve</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          We partner with startups, SMBs, and mid-market operators across tech, commerce, media, and
          regulated industries.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm text-gray-700">
          {["Startups & Founders", "E-commerce", "Content/Media", "Consumer Goods", "Entertainment & Creators", "Professional Services"].map(
            (i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-white px-3 py-2 text-center"
              >
                {i}
              </div>
            )
          )}
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Scoping Call", text: "Share goals and timelines; we map a clear plan." },
            { step: "2", title: "Draft/Review", text: "We prepare docs or redlines—plain-English explanations included." },
            { step: "3", title: "Deliver & Iterate", text: "You get actionable next steps and clean versions to execute." },
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
              href="/ip"
              className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
            >
              IP Protection
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
        <p className="mt-2 text-gray-600">Tell us your goals—we’ll recommend the fastest path.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
