// app/resources/how-to-trademark-your-logo/page.jsx
import Link from "next/link";

export const metadata = {
  title: "How to Trademark Your Startup Logo: A Step-by-Step Guide | Ascent Legal",
  description:
    "Clear, practical steps founders can follow to protect their logo with a U.S. trademark—from search to filing to maintenance.",
  openGraph: {
    title: "How to Trademark Your Startup Logo: A Step-by-Step Guide",
    description:
      "Clear, practical steps founders can follow to protect their logo with a U.S. trademark.",
    url: "https://ascentlegal.io/resources/how-to-trademark-your-logo",
  },
  alternates: { canonical: "/resources/how-to-trademark-your-logo" },
};

const toc = [
  { id: "why-trademark", label: "Why a trademark matters" },
  { id: "step-by-step", label: "Step-by-step process" },
  { id: "costs-timeline", label: "Costs & timeline" },
  { id: "maintenance", label: "Maintenance" },
  { id: "wrap-up", label: "Wrap-up" },
];

export default function Post() {
  return (
    <article className="mx-auto max-w-7xl px-6 py-16">
      {/* breadcrumb */}
      <nav className="text-sm text-gray-500">
        <Link href="/resources" className="hover:text-gray-700">Resources</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">How to Trademark Your Startup Logo</span>
      </nav>

      {/* header */}
      <header className="mt-6 grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            How to Trademark Your Startup Logo: A Step-by-Step Guide
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Protect your brand identity, avoid copycats, and build long-term value.
            This guide walks you through the process founders actually use.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>Updated Sep 2025</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>6 min read</span>
          </div>
        </div>

        {/* desktop ToC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase">On this page</div>
            <ul className="mt-3 space-y-2 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-gray-700 hover:text-indigo-600">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </header>

      <hr className="my-10 border-gray-100" />

      {/* content */}
      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <div className="max-w-3xl">
          <section id="why-trademark" className="[&>p]:mt-4 [&>p]:text-gray-700 [&>p]:leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why a trademark matters</h2>
            <p>
              A trademark is a legally protected word, phrase, or symbol (like your logo) that
              distinguishes your business. For startups, it prevents confusingly similar branding,
              supports customer trust, and creates a real, ownable asset.
            </p>
            <ul className="mt-4 list-disc pl-6 text-gray-700 leading-relaxed">
              <li><span className="font-medium">Exclusivity:</span> block look-alike logos that confuse customers.</li>
              <li><span className="font-medium">Brand equity:</span> increases company value and credibility.</li>
              <li><span className="font-medium">Enforcement:</span> gives you tools to act against infringers.</li>
            </ul>
          </section>

          <section id="step-by-step" className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Step-by-step process</h2>

            <div className="mt-4 space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold">1) Run a trademark search</h3>
                <p>
                  Check the USPTO database and broader web for similar marks. Professional searches
                  go deeper by catching look-alikes, phonetic matches, and design similarities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">2) Make the logo distinctive</h3>
                <p>
                  The more unique the design, the easier the path. Avoid generic shapes and
                  descriptive text that could be deemed weak.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">3) Pick the right classes</h3>
                <p>
                  Trademarks are grouped into classes (by goods/services). Choose all that match
                  how you’ll actually use the logo—now and near-term.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">4) File with the USPTO</h3>
                <p>
                  You’ll submit an image of your logo, owner info, a goods/services description,
                  and the filing fee (per class). You can file as “in use” or “intent to use.”
                </p>
              </div>

              <div>
                <h3 className="font-semibold">5) Respond to Office Actions</h3>
                <p>
                  If the examiner raises issues (similar marks, descriptiveness, etc.), you’ll need
                  to respond on time with arguments or amendments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">6) Publication & opposition</h3>
                <p>
                  Approved applications are published for opposition. If no one objects (or you
                  overcome objections), the mark proceeds toward registration.
                </p>
              </div>
            </div>
          </section>

          <section id="costs-timeline" className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Costs & timeline</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Expect USPTO fees of roughly <span className="font-medium">$250–$350 per class</span> (filing option dependent).
              Many founders budget <span className="font-medium">$1k–$2.5k</span> for attorney assistance. Most applications
              take <span className="font-medium">6–12+ months</span> depending on examiner backlogs and any Office Actions.
            </p>
          </section>

          <section id="maintenance" className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Maintenance</h2>
            <ul className="mt-4 list-disc pl-6 text-gray-700 leading-relaxed">
              <li>Use the logo in commerce and keep specimens of use.</li>
              <li>Calendar renewals (between years 5–6, 9–10, and every 10 years after).</li>
              <li>Monitor the market and enforce your rights when needed.</li>
            </ul>
          </section>

          {/* CTA */}
          <div id="wrap-up" className="mt-12 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-6">
            <h3 className="text-xl font-semibold">Want a faster, cleaner filing?</h3>
            <p className="mt-2 text-gray-700">
              We run comprehensive searches and handle the paperwork so you can focus on growth.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-95"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services/trademark"
                className="rounded-xl border border-indigo-200 px-5 py-3 text-indigo-700 hover:bg-indigo-50"
              >
                See Trademark Services
              </Link>
            </div>
          </div>

          {/* prev/next */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
            <Link href="/resources" className="text-gray-700 hover:text-indigo-600">← All resources</Link>
            <div className="flex gap-3">
              <Link href="/resources/contract-red-flags" className="text-gray-700 hover:text-indigo-600">
                Next: 7 Contract Red Flags →
              </Link>
            </div>
          </div>
        </div>

        {/* mobile ToC */}
        <aside className="lg:hidden">
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase">On this page</div>
            <ul className="mt-3 space-y-2 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-gray-700 hover:text-indigo-600">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
