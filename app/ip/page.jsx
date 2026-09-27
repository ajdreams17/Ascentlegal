import Link from "next/link";

export const metadata = {
  title: "Intellectual Property Registration & Maintenance | Ascent Legal",
  description:
    "Trademark clearance, registration, maintenance, copyright registration, and licensing for creators and businesses.",
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
    title: "Trademark Maintenance & Portfolio Management",
    desc: "Keep registrations current with maintenance and renewal filings, ownership updates, and portfolio reviews as your business changes.",
    items: ["Maintenance filings", "Renewals and deadlines", "Portfolio reviews"],
    href: "/contact",
    cta: "Discuss maintenance",
  },
  {
    title: "Copyright Registration",
    desc: "Identify works for registration, prepare applications, and organize records of your creative assets.",
    items: ["Copyright applications", "Work identification", "Portfolio records"],
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
    q: "What happens after my trademark registers?",
    a: "A registration requires periodic maintenance filings to remain active. We can help track the deadlines, prepare filings, and review your portfolio as your business evolves.",
  },
  {
    q: "Do you work on flat fees?",
    a: "Many registration and maintenance matters can be scoped on a flat-fee basis. We confirm the scope and fees for your matter before work begins.",
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
            Registration &amp; Maintenance
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          We help creators and businesses register and maintain the trademarks and copyrights behind
          their work. Our services include trademark clearance and applications, responses to USPTO
          office actions, maintenance and renewal filings, copyright registration, and licensing.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-[#0E2A47] px-5 py-3 text-white shadow hover:bg-[#B86A2E]"
          >
            Tell Us About Your Matter
          </Link>
          <a
            href="#services"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Explore services
          </a>
        </div>
      </section>

      {/* Service highlights */}
     <div className="mt-10 grid sm:grid-cols-3 gap-6">
  {/* 1) Keep your real metric */}
  <div className="rounded-xl border border-gray-100 p-6 text-center">
    <div className="text-3xl font-semibold text-indigo-600">Federal</div>
    <div className="mt-2 text-sm text-gray-600">Trademark filings</div>
  </div>

  {/* 2) Ongoing trademark work */}
  <div className="rounded-xl border border-gray-100 p-6 text-center">
    <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
      Office actions & maintenance
    </div>
    <div className="mt-2 text-sm text-gray-600">
      Application responses and renewal filings.
    </div>
  </div>

  {/* 3) Copyright work */}
  <div className="rounded-xl border border-gray-100 p-6 text-center">
    <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
      Copyright registration
    </div>
    <div className="mt-2 text-sm text-gray-600">
      Applications for original creative works.
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
            { step: "1", title: "Assess & Plan", text: "We review your brand or creative portfolio and identify filing priorities." },
            { step: "2", title: "Prepare & File", text: "We prepare applications or maintenance filings based on your needs." },
            { step: "3", title: "Maintain & Grow", text: "We help track filing deadlines and assess new names, products, or works for protection." },
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
        <p className="mt-2 text-gray-600">Tell us briefly what you need. We aim to respond within one business day.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-[#0E2A47] px-5 py-3 text-white shadow hover:bg-[#B86A2E]"
          >
            Tell Us About Your Matter
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Ask About Trademark Filing
          </Link>
        </div>
      </section>
    </main>
  );
}
