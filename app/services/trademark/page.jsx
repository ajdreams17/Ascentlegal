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
      "We evaluate strength, conflicts, and filing classes so you invest in a brand that can scale.",
    bullets: ["Knockout search", "Comprehensive search (optional)", "Risk & distinctiveness scoring"],
    cta: { label: "Start with a search", href: "/contact" },
  },
  {
    title: "USPTO Filing & Prosecution",
    desc:
      "Clean applications, correct specimens, and responses to keep your mark moving to registration.",
    bullets: ["TEAS filing", "Specimen guidance", "Office Action responses"],
    cta: { label: "File my mark", href: "/contact" },
  },
  {
    title: "Monitoring & Enforcement",
    desc:
      "Ongoing watch and practical takedowns across marketplaces and social to stop infringements early.",
    bullets: ["Watch notices", "Marketplace takedowns", "Platform removals"],
    cta: { label: "Set up monitoring", href: "/contact" },
  },
];

const faqs = [
  {
    q: "Do I need a search before filing?",
    a: "A comprehensive search reduces the risk of refusals or conflicts. We’ll score risk and recommend a filing plan.",
  },
  {
    q: "How long does it take to register?",
    a: "Most applications see a first USPTO review in 6–9 months. Timelines vary by basis and any refusals or oppositions.",
  },
  {
    q: "Flat fees or hourly?",
    a: "Searches and standard filings are flat-fee. Responses and enforcement actions can be flat-fee or scoped upfront.",
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
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
  {/* 1) Keep your real metric */}
  <div className="rounded-xl border border-gray-100 p-6 text-center">
    <div className="text-3xl font-semibold text-indigo-600">300+</div>
    <div className="mt-2 text-sm text-gray-600">Trademarks filed</div>
  </div>

  {/* 2) Replace “response time” */}
  <div className="rounded-xl border border-gray-100 p-6 text-center">
    <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
      Office actions & monitoring
    </div>
    <div className="mt-2 text-sm text-gray-600">
      Response and ongoing watch services.
    </div>
  </div>

  {/* 3) Replace “platforms covered” */}
  <div className="rounded-xl border border-gray-100 p-6 text-center">
    <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
      Marketplace support
    </div>
    <div className="mt-2 text-sm text-gray-600">
      Amazon Brand Registry, Shopify, and social.
    </div>
  </div>
</div>

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
