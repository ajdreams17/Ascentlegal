import Link from "next/link";

export const metadata = {
  title: "About Us | Ascent Legal",
  description:
    "Meet Ascent Legal—business-first counsel for creators, studios, and growing companies. Brand deals, licensing/IP, and commercial contracts. Transactional only (no litigation).",
};

const attorneys = [
  {
    name: "Anthony Paredes",
    role: "Founding Attorney – Business & IP Law",
    slug: "Anthony-Paredes",
  },
  { name: "April Paredes", role: "Co-Owner & Principal Attorney", slug: "april-paredes" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* ===== Hero / About Ascent Legal ===== */}
      <h1 className="text-4xl md:text-5xl font-bold">
        About{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
          Ascent Legal
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Ascent Legal was founded in Los Angeles to make premium legal support more accessible—without sacrificing excellence.
        We provide business-first, plain-English counsel for creators, studios, and growing companies. Strategic guidance for
        brand deals, licensing, IP, and commercial contracts. Transactional counsel only. No litigation.
      </p>

      {/* ===== Stats ===== */}
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {[
          {
            title: "Transparent Pricing",
            desc: "Predictable flat-fee options, no surprise bills.",
          },
          {
            title: "Fast Response",
            desc: "Quick turnaround and accessible communication.",
          },
          {
            title: "Business-First Advice",
            desc: "Legal strategies aligned with your growth and revenue.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-gray-100 p-6 text-center bg-white">
            <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              {s.title}
            </div>
            <div className="mt-2 text-sm text-gray-600">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* ===== Approach & Who We Serve ===== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <h3 className="font-semibold">Our approach</h3>
          <p className="text-gray-600 mt-2">
            Clear strategy, practical drafting, and deal guidance—focused on what matters most.
          </p>

          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-500/80" />
              <span>
                <span className="font-medium text-gray-800">Plain-English counsel:</span> what matters, what doesn’t,
                and what to do next.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-500/80" />
              <span>
                <span className="font-medium text-gray-800">Deal-first drafting + negotiation:</span> rights, payment,
                exclusivity, and risk points.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-500/80" />
              <span>
                <span className="font-medium text-gray-800">Built to scale:</span> strong templates and repeatable
                contract systems as you grow.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <h3 className="font-semibold">Who we serve</h3>
          <p className="text-gray-600 mt-2">
            Creators, studios, and growing companies who monetize through deals, licensing, and commercial contracts.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {[
              "Brand deals",
              "Influencer/UGC agreements",
              "Licensing + usage rights",
              "Copyright + trademark strategy",
              "Commercial contracts",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-600">
            <span className="font-medium text-gray-800">Transactional counsel only.</span> No litigation.
          </p>
        </div>
      </div>

      {/* ===== Meet Our Attorneys ===== */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Meet Our Attorneys</h2>
        <p className="mt-2 text-gray-600">
          Business-first counsel from experienced attorneys supporting deals, licensing, and growth-stage contracts.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {attorneys.map((a) => (
            <Link
              key={a.slug}
              href={`/attorneys/${a.slug}`}
              className="group rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-6 shadow-sm hover:shadow transition"
            >
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <p className="text-sm text-gray-600">{a.role}</p>
              <span className="mt-2 inline-block text-sm text-indigo-600 group-hover:underline">
                View Profile →
              </span>
            </Link>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-10 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
          <h3 className="text-xl font-semibold text-gray-900">Have a deal on your desk?</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">
            If you’re navigating a brand partnership, licensing terms, or a key commercial contract, we’ll help you protect
            the terms—and the rights—so you can move forward confidently.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90 inline-block"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services/entertainment"
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-800 hover:border-gray-300 inline-block"
            >
              Explore Entertainment Counsel
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
