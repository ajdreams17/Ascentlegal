import DownloadDisclaimer from "/components/DownloadDisclaimer";

import Link from "next/link";

export const metadata = {
  title: "Resources | Ascent Legal",
  description:
    "Guides and practical playbooks for founders, creators, and growing businesses.",
};

const guides = [
  {
    slug: "how-to-trademark-your-logo",
    title: "How to Trademark Your Startup Logo",
    description:
      "Step-by-step guide to trademarking your startup logo. Learn how to protect your brand identity, avoid copycats, and build long-term value.",
    readTime: "6 min read",
    badge: "Posts",
    href: "/resources/how-to-trademark-your-logo", // ✅ closed string
  },
 {
    slug: "trademark-101",
    title: "Trademark 101: What Every Small Business Should Know",
    description:
      "Learn why trademarks matter, what can and cannot be trademarked, and how to avoid common mistakes when registering your brand.",
    readTime: "7 min read",
    badge: "Post",
    href: "/resources/trademark-101",  // <-- New blog route
  },
{
  slug: "finding-right-trademark-copyright-lawyer",
  title: "Finding the Right Trademark & Copyright Lawyer Near You",
  description:
    "What to look for, where to search, and the exact questions to ask to protect your creative work.",
  readTime: "7 min read",
  badge: "Post",
  href: "/resources/finding-right-trademark-copyright-lawyer",
},
  ];
const downloads = [
   {
    title: "HR Compliance Audit Checklist (California)",
    desc:
      "One-page checklist to sanity-check hiring & onboarding. PDF.",
    // Put the PDF in /public/downloads/ and make sure this filename matches exactly
    href:
      "/download/HR-Compliance-Audit-Checklist-California-Employers-Fill-1 (1).pdf",

  },
  {
    title: "Operating Agreement",
    desc: "Customizable operating agreement template for LLC owners.",
    href: "/operating_agreement.docx",
  },
];

const faqs = [
  {
    q: "When should I file a trademark?",
    a: "As soon as you have a distinctive brand name and intend to use it in commerce—early filing can preserve priority.",
  },
  {
    q: "Do you offer flat fees?",
    a: "Yes. Many matters—trademark filing, contract packages, and formations—are offered at transparent flat rates.",
  },
  {
    q: "Can you review an existing contract?",
    a: "Absolutely. We’ll mark up the agreement, explain risks in plain English, and give negotiation language you can use.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Legal Resources for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Builders & Operators
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Practical, business-first content on trademarks, contracts, employment, and formation.
          No fluff—just what you need to move fast and stay protected.
        </p>
      </section>

      {/* Featured Guides */}
      <section className="mt-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Guides</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g) => (
            <article
              key={g.slug}
              className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <div className="inline-flex items-center gap-2 text-xs text-indigo-600">
                <span className="rounded-full bg-indigo-50 px-2 py-1">{g.badge}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">{g.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{g.summary}</p>
              <div className="mt-4">
                <Link
                  href={`/resources/${g.slug}`}
                  className="text-sm font-medium text-indigo-600 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Free Downloads</h2>
        <p className="mt-2 text-gray-600">
          Templates and worksheets to help you get organized quickly.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {downloads.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 shrink-0" />
              <div>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{d.desc}</p>
                <a
                  href={d.href}
                  className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:underline"
                >
                  Download →
                </a>
              </div>
            </div>
          ))}
        </div>
       {/* Disclaimer lives INSIDE the component, AFTER the downloads grid */}
        <DownloadDisclaimer />
      </section>

      {/* Newsletter CTA */}
      <section className="mt-16 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold">Stay updated</h3>
            <p className="mt-2 text-sm text-gray-600">
              Monthly, no-spam roundups on legal changes and practical tips for founders.
            </p>
          </div>
   <form 
  name="newsletter" 
  method="POST" 
  data-netlify="true" 
  className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
>
  <input
    type="email"
    name="email"
    required
    placeholder="you@company.com"
    className="h-11 rounded-md border border-gray-300 px-3"
  />
  <button className="h-11 rounded-md bg-indigo-600 px-5 text-white hover:bg-indigo-700">
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
          className="mt-4 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
