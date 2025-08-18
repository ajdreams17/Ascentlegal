import Link from "next/link";

export const metadata = {
  title: "Tailored Legal Services | Ascent Legal",
  description:
    "Flexible, business-first legal support: fractional general counsel, project-based engagements, and on-demand advisory designed around your needs.",
};

const packages = [
  {
    name: "Fractional GC",
    desc:
      "Hands-on counsel without the full-time hire. We embed with your team for ongoing guidance and rapid responses.",
    bullets: [
      "Weekly legal ops sync",
      "Contract queue triage",
      "Risk & compliance check-ins",
      "Executive/board support",
    ],
  },
  {
    name: "Project-Based",
    desc:
      "Fixed-scope, fixed-fee engagements to ship key initiatives with clarity and speed.",
    bullets: [
      "Policy & compliance rollouts",
      "Entity clean-up & cap table docs",
      "IP / brand readiness sprints",
      "Commercial templates & playbooks",
    ],
  },
  {
    name: "On-Demand Advisory",
    desc:
      "Fast answers to keep momentum—issue spotting, strategy, and practical next steps.",
    bullets: [
      "Redline & term strategy",
      "Vendor/security questionnaires",
      "Go-to-market legal reviews",
      "Negotiation support",
    ],
  },
];

const industries = [
  "SaaS & AI",
  "E-commerce & Marketplaces",
  "Media, Entertainment & Creators",
  "Professional Services",
  "Consumer Brands",
  "Healthcare-adjacent & Regulated",
];

const faqs = [
  {
    q: "How does Fractional GC billing work?",
    a: "We scope hours and deliverables up front (monthly flat-fee). Unused time rolls forward in small amounts so you don’t lose value.",
  },
  {
    q: "Can we start with a project and expand later?",
    a: "Absolutely. Many clients begin with a defined project and then shift into ongoing GC support as needs evolve.",
  },
  {
    q: "Who will we work with?",
    a: "A primary attorney who knows your business, plus specialists looped in as needed for speed and depth.",
  },
];

export default function TailoredServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold">
          Tailored{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Legal Services
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Get exactly the support you need—nothing you don’t. Fractional general counsel, 
          fixed-scope projects, and on-demand advisory designed to move your business forward.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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

      {/* Packages */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Flexible engagement models</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Choose an approach that fits your cadence and budget. We’ll define clear deliverables, 
          timelines, and pricing before we start.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
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

      {/* Industries */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we support</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400" />
                <h3 className="font-semibold">{i}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Practical templates, fast reviews, and market-tested terms for this vertical.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Simple process</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Scope & quote", text: "We define deliverables, success criteria, and a clear price." },
            { step: "2", title: "Execute", text: "Draft, review, and negotiate with tight turnarounds." },
            { step: "3", title: "Support", text: "Standby help for follow-ups, updates, and future needs." },
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
        <h3 className="text-xl font-semibold">Need a flexible legal partner?</h3>
        <p className="mt-2 text-gray-600">Tell us your goals—we’ll shape a plan that fits.</p>
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
