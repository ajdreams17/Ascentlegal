import Link from "next/link";

export const metadata = {
  title: "Trademark Protection | Ascent Legal",
  description:
    "Flat-fee trademark protection for creators, founders, and agencies. Comprehensive search, USPTO filing, and ongoing monitoring — no hourly rates, no surprise invoices, no legal jargon.",
};

// ────────────────────────────────────────────────────────────────────
// Content
// ────────────────────────────────────────────────────────────────────

const CONSULT_HREF = "/contact"; // swap to your Calendly URL when ready

const trustBar = [
  "50+ Trademarks Filed",
  "Entertainment & IP Specialists",
  "Flat-Fee Only",
  "Based in LA",
  "Free Consult",
];

const method = [
  {
    step: "01",
    label: "Search",
    title: "Know Before You File",
    text: "We run a comprehensive federal trademark search — USPTO database plus common law sources — and deliver a plain-English clearance opinion. You'll know exactly whether your mark is protectable and what risks exist before spending a dollar on filing.",
  },
  {
    step: "02",
    label: "Secure",
    title: "We Handle Everything",
    text: "We prepare and file your application with the USPTO, craft the strongest possible description of goods and services, and manage every stage of the process — including Office Actions. You don't touch the paperwork.",
  },
  {
    step: "03",
    label: "Shield",
    title: "Ongoing Protection",
    text: "Registration is just the beginning. We monitor your mark, alert you to conflicts, handle USPTO maintenance deadlines, and keep your trademark alive and enforced. Your brand stays protected long after filing day.",
  },
];

const packages = [
  {
    name: "Trademark Search & Strategy",
    tagline: "Start here if you're not sure yet.",
    price: "$500",
    unit: "",
    blurb:
      "Before you file, know what you're walking into. We dig deep into the USPTO database and common law sources, then tell you exactly where you stand — in plain English.",
    bullets: [
      "Comprehensive federal + common law trademark search",
      "Likelihood of confusion analysis",
      "Written clearance opinion (plain English)",
      "Filing recommendation (class strategy, word mark vs. design mark)",
      "30-minute strategy call to review findings",
    ],
    fineprint: "Filing fees not included. Standalone advisory service.",
    featured: false,
  },
  {
    name: "Trademark Filing — Single Class",
    tagline: "The most common filing for creators and small businesses.",
    price: "$1,500",
    unit: "",
    blurb:
      "One brand. One category. Fully handled from search to registration.",
    bullets: [
      "Trademark clearance search",
      "Full application preparation and USPTO filing",
      "Class and goods/services description strategy",
      "Response to non-substantive Office Actions",
      "Updates at every stage",
      "Estimated timeline: 12–18 months",
    ],
    fineprint: "USPTO filing fee: $350/class — billed separately, paid directly to USPTO.",
    featured: true,
  },
  {
    name: "Trademark Filing — Multi-Class",
    tagline: "For brands operating across multiple industries.",
    price: "$2,500",
    unit: "",
    blurb:
      "Creators expanding into merch + content + coaching. Companies selling in multiple verticals. One application, maximum protection.",
    bullets: [
      "Everything in Single Class, plus:",
      "Up to 3 trademark classes in one application",
      "Multi-class strategy consultation",
      "Coordinated filing to maximize brand coverage",
    ],
    fineprint: "USPTO filing fee: $350/class — billed separately.",
    featured: false,
  },
  {
    name: "Monitoring & Maintenance",
    tagline: "Protect what you've built.",
    price: "$750",
    unit: "/year",
    blurb:
      "Your trademark needs attention after registration — maintenance filings, renewal deadlines, and watching for copycats. We handle all of it.",
    bullets: [
      "Monthly monitoring for conflicting new applications",
      "Conflict alerts with recommended action",
      "USPTO maintenance filing management (Sections 8 & 15, renewals)",
      "Annual IP strategy call",
    ],
    fineprint:
      "USPTO maintenance fees billed separately when due (Year 5–6: $575/class; Year 10 renewal: $650/class; +$100/class grace period surcharge).",
    featured: false,
  },
];

const officeAction = {
  name: "Office Action Response",
  tagline: "The USPTO pushed back. We push back harder.",
  price: "$750 – $1,500",
  blurb:
    "If your application receives a substantive rejection, we draft and file a persuasive response on your behalf.",
  bullets: [
    "Simple/procedural response: $750",
    "Complex response (likelihood of confusion, descriptiveness): $1,500",
    "Included free for Growth and Scale retainer clients",
  ],
};

const timeline = [
  { when: "Month 1", what: "You book a consult → we run your search → we file your application." },
  { when: "Months 2–3", what: "USPTO reviews your application (examining attorney assigned)." },
  { when: "Months 4–6", what: "Application published for opposition — 30-day window for third parties to object." },
  { when: "Months 12–18", what: "Registration certificate issued (if no opposition)." },
  { when: "Year 5–6", what: "First maintenance filing due (Section 8 & 15 declarations)." },
  { when: "Year 10", what: "Renewal due — every 10 years after that." },
];

const faqs = [
  {
    q: "How long does a trademark take?",
    a: "Currently 12–18 months from filing to registration with the USPTO. The process has multiple stages — we walk you through each one and send updates throughout.",
  },
  {
    q: "What's the difference between ™ and ®?",
    a: "You can use ™ as soon as you claim rights in a mark — no registration required. The ® symbol is only permitted after the USPTO officially registers your mark. Using ® before registration is a federal violation.",
  },
  {
    q: "My LLC is registered. Isn't my brand name already protected?",
    a: "No — and this is the most common misconception we see. Registering an LLC protects your business entity in your state. A federal trademark protects your brand name across the entire country. They are completely different.",
  },
  {
    q: "Do I need to file in multiple classes?",
    a: "Only if your brand operates in multiple industries. We advise you on exactly which classes matter for your business — and which ones are a waste of money. You'll never pay for protection you don't need.",
  },
  {
    q: "What if I get an Office Action?",
    a: "Simple procedural Office Actions are included in all filing packages. Substantive rejections (likelihood of confusion, descriptiveness) are handled at a flat fee — or free on Growth and Scale retainer plans.",
  },
  {
    q: "Can you file internationally?",
    a: "Yes. We file through the Madrid Protocol for international trademark protection. Pricing varies by country — book a consult and we'll build you a quote.",
  },
  {
    q: "What if someone is already using my name?",
    a: "This is exactly what our Search & Strategy package is designed to catch. If a conflict exists, we'll find it before you file — and advise you on your options.",
  },
  {
    q: "Do you handle litigation?",
    a: "No. We provide transactional counsel only (no litigation). We can support negotiation strategy and pre-suit resolution planning, but we do not appear in court.",
  },
];

// Realistic placeholders — replace with real Google reviews before launch
const testimonials = [
  {
    quote:
      "Ascent filed our trademark in three weeks and answered every question without billing me by the minute. The flat fee made it possible to actually move on it.",
    name: "[Client Name]",
    role: "[Title], [Company / Industry]",
  },
  {
    quote:
      "I'd been putting off our trademark for two years because I didn't understand the process and didn't trust the quotes I was getting. Ascent walked me through everything in one call. We filed the next week.",
    name: "[Client Name]",
    role: "Founder, [Company]",
  },
  {
    quote:
      "They actually understand the creator economy. Our brand spans content, merch, and coaching — they built a multi-class strategy that covered all of it without overcharging us for protection we didn't need.",
    name: "[Client Name]",
    role: "Creator, [Channel / Brand]",
  },
];

// ────────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────────

export default function TrademarkPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* ──────── Hero ──────── */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Brand Name Is Your Business.{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Protect It Like One.
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Flat-fee trademark protection for creators, founders, and agencies — no hourly rates, no
          surprise invoices, no legal jargon.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={CONSULT_HREF}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Free 15-Min Consult →
          </Link>
          <a
            href="#pricing"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            See our packages ↓
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          {trustBar.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent font-semibold">
                ✦
              </span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ──────── Problem ──────── */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Most creators and founders wait too long.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-gray-600">
          <p>
            By the time someone else files your brand name, it's too late. Trademark disputes are
            expensive, stressful, and almost always avoidable. The businesses that protect their
            brands early aren't bigger than you — they just moved first.
          </p>
          <p>
            At Ascent Legal, we specialize in entertainment, IP, and brand protection for the
            creators, agencies, and founders building the next generation of businesses. We know
            your world — brand deals, content licensing, production agreements, and the pressure of
            moving fast.
          </p>
          <p className="text-lg font-medium text-gray-900">
            We make trademark protection simple, affordable, and done.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href={CONSULT_HREF}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90 inline-block"
          >
            Start with a Free Consult →
          </Link>
        </div>
      </section>

      {/* ──────── The Ascent Method ──────── */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          The Ascent Method
          <sup className="text-base align-super">™</sup>
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Three steps. Zero confusion. One protected brand.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {method.map((m) => (
            <div
              key={m.step}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <div className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                {m.step}
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest text-gray-500 font-semibold">
                {m.label}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={CONSULT_HREF}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90 inline-block"
          >
            Book a Free Consult to Get Started →
          </Link>
        </div>
      </section>

      {/* ──────── Guarantee ──────── */}
      <section className="mt-16">
        <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-indigo-500 to-teal-400 p-8 md:p-10 text-white">
          <div className="inline-block rounded-full border border-white/40 px-3 py-1 text-xs uppercase tracking-widest font-semibold">
            The Ascent Guarantee
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">We stand behind our work.</h2>
          <p className="mt-4 max-w-3xl text-white/90">
            If we file your trademark application and the USPTO issues a rejection we cannot
            overcome — we'll file your next application at no additional attorney fee. One class, on
            us.
          </p>
          <p className="mt-3 max-w-3xl text-white/90">
            We've built our practice around getting it right the first time. Our search process is
            thorough, our applications are crafted carefully, and we don't cut corners. This
            guarantee exists because we're confident in our work — and because you deserve that
            confidence too.
          </p>
        </div>
      </section>

      {/* ──────── Pricing ──────── */}
      <section id="pricing" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Simple, flat-fee pricing.</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          You'll know exactly what you're paying before we start — every time.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border bg-white p-6 flex flex-col transition-shadow hover:shadow-sm ${
                p.featured ? "border-indigo-300 shadow-md" : "border-gray-100"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm italic text-gray-500">{p.tagline}</p>
              <div className="mt-4 text-3xl font-bold">
                {p.price}
                {p.unit && (
                  <span className="text-base font-medium text-gray-500">{p.unit}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">{p.fineprint}</p>
              <div className="mt-6">
                <Link
                  href={CONSULT_HREF}
                  className="inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2.5 text-sm text-white shadow hover:opacity-90"
                >
                  Book a Free Consult →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Office Action Response — full-width */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold">{officeAction.name}</h3>
            <span className="text-sm italic text-gray-500">{officeAction.tagline}</span>
          </div>
          <div className="mt-3 text-2xl font-bold">{officeAction.price}</div>
          <p className="mt-2 text-sm text-gray-600 max-w-3xl">{officeAction.blurb}</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            {officeAction.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link
              href={CONSULT_HREF}
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Book a Free Consult →
            </Link>
          </div>
        </div>
      </section>

      {/* ──────── Timeline ──────── */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What to expect — the full trademark timeline.
        </h2>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white divide-y divide-gray-100">
          {timeline.map((t) => (
            <div
              key={t.when}
              className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-6 px-6 py-5"
            >
              <div className="font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
                {t.when}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{t.what}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-500 max-w-3xl">
          <strong>Note:</strong> Timelines vary based on USPTO workload and any Office Actions
          issued. We keep you updated at every stage.
        </p>
      </section>

      {/* ──────── FAQ ──────── */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Common questions, straight answers.</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-gray-100 bg-white p-6">
              <h4 className="font-medium">{f.q}</h4>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────── Final CTA ──────── */}
      <section className="mt-16 text-center">
        <h3 className="text-xl md:text-2xl font-semibold">Ready to protect your brand?</h3>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Book a free 15-minute consult. We'll tell you exactly what you need — and what you don't.
          No pressure, no commitment, no billable hours.
        </p>
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <Link
            href={CONSULT_HREF}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book Your Free 15-Min Consult →
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-500 uppercase tracking-wider">
          Flat fees only · Entertainment &amp; IP specialists · Based in Los Angeles
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Transactional counsel only. No litigation.
        </p>
      </section>
    </main>
  );
}
