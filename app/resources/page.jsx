// app/resources/page.jsx
import Link from "next/link";
import DownloadDisclaimer from "../../components/DownloadDisclaimer";

export const metadata = {
  title: "Resources | Ascent Legal",
  description: "Guides and practical playbooks for creators, founders, and growing businesses.",
  alternates: { canonical: "/resources" },
};

const topicChips = [
  { label: "Trademarks", href: "#trademarks" },
  { label: "Copyright + Licensing", href: "#copyright" },
  { label: "Brand Deals", href: "#brand-deals" },
  { label: "Commercial Contracts", href: "#contracts" },
  { label: "Formation", href: "#formation" },
];

const guides = [
  // Trademarks
  {
    slug: "how-to-trademark-your-logo",
    title: "How to Trademark Your Startup Logo",
    description:
      "Step-by-step guide to trademarking your startup logo. Learn how to protect your brand identity, avoid copycats, and build long-term value.",
    readTime: "6 min read",
    badge: "Trademark",
    topic: "trademarks",
  },
  {
    slug: "trademark-101",
    title: "Trademark 101: What Every Small Business Should Know",
    description:
      "Why trademarks matter, what can and cannot be trademarked, and how to avoid common mistakes when registering your brand.",
    readTime: "7 min read",
    badge: "Trademark",
    topic: "trademarks",
  },
  {
    slug: "finding-right-trademark-copyright-lawyer",
    title: "Finding the Right Trademark & Copyright Lawyer Near You",
    description: "What to look for, where to search, and the exact questions to ask to protect your creative work.",
    readTime: "7 min read",
    badge: "IP",
    topic: "copyright",
  },

  // Creator + transactional (add these posts when ready)
  {
    slug: "brand-deal-checklist",
    title: "Brand Deal Checklist for Creators",
    description:
      "A plain-English checklist to review deliverables, usage rights, exclusivity, payment, and termination before you sign.",
    readTime: "6 min read",
    badge: "Brand Deals",
    topic: "brand-deals",
    comingSoon: true,
  },
  {
    slug: "msa-vs-sow",
    title: "MSA vs SOW: The Contract Pair That Speeds Up Sales",
    description:
      "How to separate master terms from project scopes so deals close faster and repeat work is easier to sign.",
    readTime: "5 min read",
    badge: "Contracts",
    topic: "contracts",
    comingSoon: true,
  },
];

const downloads = [
  {
    title: "HR Compliance Audit Checklist (California)",
    desc: "One-page checklist to sanity-check hiring & onboarding. PDF.",
    href: "/download/HR-Compliance-Audit-Checklist-California-Employers-Fill-1 (1).pdf",
  },
  {
    title: "Operating Agreement",
    desc: "Customizable operating agreement template for LLC owners.",
    href: "/operating_agreement.docx",
  },
  {
    title: "Brand Deal Review Checklist (Creator Edition)",
    desc: "Quick checklist for deliverables, usage rights, exclusivity, payment, and approvals. PDF.",
    href: "/download/brand-deal-checklist.pdf",
    comingSoon: true,
  },
];

const faqs = [
  {
    q: "When should I file a trademark?",
    a: "As soon as you have a distinctive brand name and intend to use it in commerce. Early filing can preserve priority.",
  },
  {
    q: "Do you offer flat fees?",
    a: "Yes. Many matters such as trademark filing, contract packages, and formations are offered at transparent flat rates.",
  },
  {
    q: "Can you review an existing contract?",
    a: "Absolutely. We’ll mark up the agreement, explain risks in plain English, and give negotiation language you can use.",
  },
  {
    q: "Do you handle litigation?",
    a: "No. Transactional counsel only. We do not appear in court.",
  },
];

function GuideCard({ g }) {
  return (
    <article className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow">
      <div className="inline-flex flex-wrap items-center gap-2 text-xs text-indigo-600">
        <span className="rounded-full bg-indigo-50 px-2 py-1">{g.badge}</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-500">{g.readTime}</span>
        {g.comingSoon && (
          <>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">Coming soon</span>
          </>
        )}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-gray-900">{g.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{g.description}</p>

      <div className="mt-4">
        {g.comingSoon ? (
          <span className="text-sm font-medium text-gray-500">Read soon →</span>
        ) : (
          <Link
            href={`/resources/${g.slug}`}
            className="text-sm font-medium text-indigo-600 hover:underline rounded-md
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
          >
            Read more →
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ResourcesPage() {
  const byTopic = {
    trademarks: guides.filter((g) => g.topic === "trademarks"),
    copyright: guides.filter((g) => g.topic === "copyright"),
    "brand-deals": guides.filter((g) => g.topic === "brand-deals"),
    contracts: guides.filter((g) => g.topic === "contracts"),
    formation: guides.filter((g) => g.topic === "formation"),
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Legal Resources for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Creators & Growing Companies
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Practical, business-first content on trademarks, brand deals, commercial contracts, and formation. No fluff. Just
          what you need to move fast and stay protected.
        </p>

        {/* Topic chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {topicChips.map((t) => (
            <a
              key={t.label}
              href={t.href}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:border-indigo-300
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            >
              {t.label}
            </a>
          ))}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="mt-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Guides</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(0, 3).map((g) => (
            <GuideCard key={g.slug} g={g} />
          ))}
        </div>
      </section>

      {/* Topic sections */}
      <section className="mt-16 space-y-16">
        <div id="trademarks" className="scroll-mt-24">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Trademarks</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {byTopic.trademarks.map((g) => (
              <GuideCard key={g.slug} g={g} />
            ))}
          </div>
        </div>

        <div id="copyright" className="scroll-mt-24">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Copyright + Licensing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {byTopic.copyright.length ? (
              byTopic.copyright.map((g) => <GuideCard key={g.slug} g={g} />)
            ) : (
              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-sm text-gray-600">
                New copyright and licensing guides are coming soon.
              </div>
            )}
          </div>

          <div className="mt-6">
            <Link
              href="/services/copyright"
              className="text-sm font-medium text-indigo-600 hover:underline rounded-md
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            >
              Explore Copyright & Licensing services →
            </Link>
          </div>
        </div>

        <div id="brand-deals" className="scroll-mt-24">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Brand Deals</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {byTopic["brand-deals"].length ? (
              byTopic["brand-deals"].map((g) => <GuideCard key={g.slug} g={g} />)
            ) : (
              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-sm text-gray-600">
                Brand deal guides are coming soon.
              </div>
            )}
          </div>

          <div className="mt-6">
            <Link
              href="/services/entertainment"
              className="text-sm font-medium text-indigo-600 hover:underline rounded-md
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            >
              Explore Entertainment & Creator counsel →
            </Link>
          </div>
        </div>

        <div id="contracts" className="scroll-mt-24">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Commercial Contracts</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {byTopic.contracts.length ? (
              byTopic.contracts.map((g) => <GuideCard key={g.slug} g={g} />)
            ) : (
              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-sm text-gray-600">
                Commercial contract guides are coming soon.
              </div>
            )}
          </div>

          <div className="mt-6">
            <Link
              href="/services/contracts-drafting"
              className="text-sm font-medium text-indigo-600 hover:underline rounded-md
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            >
              Explore Contracts Drafting services →
            </Link>
          </div>
        </div>

        <div id="formation" className="scroll-mt-24">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Formation</h2>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-sm text-gray-600">
            Formation guides are coming soon.
          </div>

          <div className="mt-6">
            <Link
              href="/services/corporate-formation"
              className="text-sm font-medium text-indigo-600 hover:underline rounded-md
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            >
              Explore Corporate & Formation services →
            </Link>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Free Downloads</h2>
        <p className="mt-2 text-gray-600">Templates and worksheets to help you get organized quickly.</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {downloads.map((d) => (
            <div key={d.title} className="rounded-2xl border border-gray-100 bg-white p-6 flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 shrink-0" />
              <div>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{d.desc}</p>

                {d.comingSoon ? (
                  <span className="mt-3 inline-block text-sm font-medium text-gray-500">Download soon →</span>
                ) : (
                  <a
                    href={d.href}
                    className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:underline rounded-md
                      focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
                  >
                    Download →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <DownloadDisclaimer />
      </section>

      {/* Newsletter CTA */}
      <section className="mt-16 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold">Stay updated</h3>
            <p className="mt-2 text-sm text-gray-600">
              Monthly, no-spam roundups for creators and growing companies. Brand deals, IP, and contract tips you can use.
            </p>
          </div>

          <form
            action="/api/subscribe"
            method="POST"
            className="grid grid-cols-1 sm:grid-cols-[180px,1fr,auto] gap-3 items-center"
          >
            <label htmlFor="firstName" className="sr-only">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="First name"
              className="h-11 rounded-md border border-gray-300 px-3
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="h-11 rounded-md border border-gray-300 px-3
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            />

            <button
              type="submit"
              className="h-11 rounded-md bg-indigo-600 px-5 text-white hover:bg-indigo-700
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            >
              Subscribe
            </button>
          </form>
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

      {/* Contact CTA */}
      <section className="mt-16 text-center">
        <h3 className="text-xl font-semibold">Have a question about your specific situation?</h3>
        <p className="mt-2 text-gray-600">We’ll respond within one business day.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
        >
          Book a Discovery Call
        </Link>

        <p className="mt-4 text-xs text-gray-500">Transactional counsel only. No litigation.</p>
      </section>
    </main>
  );
}
