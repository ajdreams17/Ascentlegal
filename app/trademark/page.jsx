import Link from "next/link";

export const metadata = {
  title: "Trademark Protection | Ascent Legal",
  description:
    "Name clearance, USPTO filing, and brand enforcement for founders and operators. Flat-fee options, fast turnarounds, business-first advice.",
};

const offerings = [
  {
    title: "Name Clearance & Strategy",
    desc:
      "Evaluate strength, conflicts, and filing classes so you invest in a protectable brand.",
    bullets: ["Knockout search", "Comprehensive search (optional)", "Risk & distinctiveness scoring"],
    cta: { label: "Start with a search", href: "/contact" },
  },
  {
    title: "USPTO Filing & Prosecution",
    desc:
      "Clean applications, correct specimens, and smart responses to move toward registration.",
    bullets: ["TEAS filing", "Specimen guidance", "Office Action responses"],
    cta: { label: "File my mark", href: "/contact" },
  },
  {
    title: "Monitoring & Enforcement",
    desc:
      "Ongoing watch and practical takedowns across marketplaces and social.",
    bullets: ["Watch notices", "Marketplace takedowns", "Platform removals"],
    cta: { label: "Set up monitoring", href: "/contact" },
  },
];

const faqs = [
  {
    q: "Do I need a search before filing?",
    a: "A comprehensive search reduces refusals and conflicts. We’ll score risk and recommend a filing plan.",
  },
  {
    q: "How long does registration take?",
    a: "Many applications see first USPTO review in 6–9 months. Timelines vary by basis and any refusals.",
  },
  {
    q: "Flat fees or hourly?",
    a: "Searches and standard filings are flat-fee. Responses and enforcement can be flat-fee or scoped up front.",
  },
];

export default function TrademarkPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold">
          Trademark{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Protection
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Secure the name, logo, and brand assets your customers trust. We combine smart clearance,
          precise filing, and practical enforcement—so you can build with confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <Link
            href="/ip"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Explore IP services
          </Link>
        </div>
      </section>

      {/* Proof / Stats */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Trademarks filed", value: "300+" },
          { label: "Avg. response time", value: "<4h" },
          { label: "Platforms covered", value: "10+" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray-100 p-6 text-center bg-white">
            <div className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Offerings */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How we help</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Choose a focused engagement or bundle end-to-end protection—from name clearance to
          watch services and takedowns.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{o.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {o.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href={o.cta.href} className="text-sm font-medium text-indigo-600 hover:underline">
                  {o.cta.label} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">A simple process</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Assess & Search", text: "We score risk, classes, and strategy before filing." },
            { step: "2", title: "File & Prosecute", text: "We draft and submit the application; respond as needed." },
            { step: "3", title: "Monitor & Enforce", text: "We watch the market and remove copycats quickly." },
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

      {/* Final CTA */}
      <section className="mt-16 text-center">
        <h3 className="text-xl font-semibold">Ready to protect your brand?</h3>
        <p className="mt-2 text-gray-600">Tell us your goals—we’ll map the fastest path.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <Link
            href="/ip"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            See all IP services
          </Link>
        </div>
      </section>
    </main>
  );
}
