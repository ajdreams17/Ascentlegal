import Link from "next/link";
import Callout from "@/components/Callout";

export const metadata = {
  title: "Trademark 101: What Every Small Business Should Know | Ascent Legal",
  description:
    "Plain-English guide to trademarks for small businesses: what you can protect, how the USPTO process works, mistakes to avoid, and next steps.",
};

export default function Trademark101Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      {/* Hero */}
      <header className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 text-sm text-indigo-600">
          <span className="rounded-full bg-indigo-50 px-2 py-1">Post</span>
          <span className="text-gray-300">•</span>
          <time className="text-gray-500">
            {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </time>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">~6 min read</span>
        </div>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Trademark 101:{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            What Every Small Business Should Know
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Starting a business is exciting—protecting your brand is essential. This guide covers what
          trademarks are, what you can protect, the USPTO filing process, and common pitfalls to avoid.
        </p>
      </header>

      {/* TOC */}
      <nav className="mx-auto mt-8 max-w-3xl rounded-xl border border-gray-100 bg-white/70 p-4">
        <p className="text-sm font-medium text-gray-700">On this page</p>
        <ol className="mt-2 grid gap-1 text-sm text-indigo-600 sm:grid-cols-2">
          <li><a href="#why-trademark" className="hover:underline">Why every business needs a trademark</a></li>
          <li><a href="#what-can" className="hover:underline">What can & can’t be trademarked</a></li>
          <li><a href="#process" className="hover:underline">The registration process (steps)</a></li>
          <li><a href="#mistakes" className="hover:underline">Common mistakes to avoid</a></li>
          <li><a href="#next" className="hover:underline">Final thoughts & next steps</a></li>
        </ol>
      </nav>

      {/* Body */}
      <article className="prose prose-slate mx-auto mt-10">
        <h2 id="why-trademark">Why Every Business Needs a Trademark</h2>
        <p>
          A trademark is a symbol, word, or phrase that legally identifies your brand. It prevents
          competitors from using confusingly similar names or logos and helps you build durable
          recognition and trust.
        </p>
        <ul>
          <li><strong>Brand protection:</strong> Stop look-alikes.</li>
          <li><strong>Consumer trust:</strong> Clear, consistent identity.</li>
          <li><strong>Legal advantage:</strong> Exclusive rights + enforcement.</li>
          <li><strong>Growth:</strong> Adds value for partnerships and investors.</li>
        </ul>

        <h2 id="what-can">What Can &amp; Cannot Be Trademarked</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3>✅ Can be trademarked</h3>
            <ul>
              <li>Business names</li>
              <li>Logos</li>
              <li>Slogans &amp; taglines</li>
              <li>Product names</li>
              <li>Distinctive packaging (trade dress)</li>
            </ul>
          </div>
          <div>
            <h3>❌ Cannot be trademarked</h3>
            <ul>
              <li>Generic terms (e.g., “Coffee Shop”)</li>
              <li>Common phrases or merely descriptive terms</li>
              <li>Government symbols</li>
              <li>Deceptive or offensive marks</li>
            </ul>
          </div>
        </div>

        <Callout type="tip" title="Tip: Choose a strong mark">
          <p>
            Fanciful/arbitrary marks (e.g., KODAK, APPLE for computers) are easier to protect than
            descriptive ones. Avoid generic/descriptive names if you can.
          </p>
        </Callout>

        <h2 id="process">The Process of Registering a Trademark</h2>
        <ol>
          <li>
            <strong>Search the USPTO (TESS):</strong> Make sure your mark isn’t already in use.
          </li>
          <li>
            <strong>Choose the right class(es):</strong> Goods/services are organized by Nice classes.
          </li>
          <li>
            <strong>File your application:</strong> Provide owner info, specimen (proof of use) or intent-to-use,
            and pay the fee.
          </li>
          <li>
            <strong>Examination &amp; Office Actions:</strong> An examiner may raise issues; respond on time.
          </li>
          <li>
            <strong>Publication &amp; Registration:</strong> If no one opposes, your mark registers.
          </li>
        </ol>

        <h2 id="mistakes">Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Skipping the search:</strong> invites conflicts and rebrands.</li>
          <li><strong>Weak marks:</strong> generic/descriptive names are hard to protect.</li>
          <li><strong>Not monitoring:</strong> set up alerts and watch services.</li>
          <li><strong>Missing renewals:</strong> trademarks require maintenance filings.</li>
        </ul>

        <Callout type="warn" title="Heads up on timelines">
          <p>
            The USPTO process can take 8–14+ months. Build that into launch and packaging plans.
          </p>
        </Callout>

        <h2 id="next">Final Thoughts &amp; Next Steps</h2>
        <p>
          Registering a trademark is one of the best investments you can make in your brand. If you’d like help,
          we offer flat-fee filings and strategic clearance searches.
        </p>
      </article>

      {/* Bottom CTA */}
      <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Ready to protect your brand?</h3>
            <p className="text-sm text-gray-600">Get a clearance search + filing with transparent, flat pricing.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </main>
  );
}
