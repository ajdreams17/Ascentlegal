import Link from "next/link";

export const metadata = {
  title: "Intellectual Property Protection | Ascent Legal",
  description:
    "Brand and content protection for founders and operators—trademarks, copyright, licensing, monitoring, and practical enforcement.",
};

const services = [
  {
    title: "Trademark Strategy & Clearance",
    desc: "Name strength analysis, knockout & comprehensive searches, and risk scoring before you invest in a brand.",
    items: ["Name strength scoring", "Class & goods strategy", "Conflict/risk analysis"],
    href: "/contact",
    cta: "Start trademark",
  },
  {
    title: "Trademark Filing & Prosecution",
    desc: "USPTO application drafting, specimen guidance, and Office Action responses.",
    items: ["TEAS filing", "Specimen prep", "Office Action responses"],
    href: "/contact",
    cta: "File now",
  },
  {
    title: "Brand Monitoring & Enforcement",
    desc: "Continuous watch services and practical takedowns across marketplaces and social platforms.",
    items: ["Watch notices", "Marketplace takedowns", "Platform removals"],
    href: "/contact",
    cta: "Set up monitoring",
  },
  {
    title: "Copyright Registration & DMCA",
    desc: "Register original works and remove unauthorized copies with fast, platform-compliant notices.",
    items: ["Copyright filings", "DMCA notices", "Portfolio strategy"],
    href: "/contact",
    cta: "Protect content",
  },
  {
    title: "Licensing & Collaborations",
    desc: "Draft and negotiate brand/content licenses, collaborations, and influencer or music sync agreements.",
    items: ["License terms", "Royalty structures", "Usage & territory"],
    href: "/contact",
    cta: "Discuss a deal",
  },
];

const faqs = [
  {
    q: "Do I need a trademark or copyright?",
    a: "Trademarks protect brand identifiers (names, logos, slogans). Copyright protects original creative works (copy, photos, music, video, code). Many businesses need both.",
  },
  {
    q: "When should I file a trademark?",
    a: "As soon as you have a distinctive name and intend to use it in commerce. Early filing preserves priority and avoids expensive rebrands.",
  },
  {
    q: "Can you take down copycats on marketplaces/social?",
    a: "Yes. We prepare evidence packages and submit platform-specific takedowns (Amazon, Etsy, eBay, Instagram, TikTok, YouTube) under trademark/copyright policies.",
  },
  {
    q: "Do you work on flat fees?",
    a: "Most filings and common enforcement actions are flat-fee. Complex matters are scoped up front so there are no surprises.",
  },
];

export default function IPPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold">
          Intellectual Property{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Protection
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          We help founders and creators lock down brand and content rights—trademarks, copyright,
          licensing, monitoring, and practical enforcement. Clear scopes, fast turnaround, and
          business-first advice.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <a
            href="#services"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Explore services
          </a>
        </div>
      </section>

      {/* Quick stats */}
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


      {/* Services grid */}
      <section id="services" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How we help</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Choose a targeted engagement or bundle services for end-to-end protection.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href={s.href} className="text-sm font-medium text-indigo-600 hover:underline">
                  {s.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">A simple, proactive process</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Assess & Plan", text: "We audit your brand/content footprint and map risk & priority." },
            { step: "2", title: "File & Secure", text: "We lock in registrations and set up monitoring where it matters most." },
            { step: "3", title: "Enforce & Scale", text: "We remove infringers fast and keep your assets working for you." },
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
        <h3 className="text-xl font-semibold">Ready to protect your brand and content?</h3>
        <p className="mt-2 text-gray-600">We’ll respond within one business day.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <Link
            href="/trademark-registration"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Learn about trademark filing
          </Link>
        </div>
      </section>
    </main>
  );
}
