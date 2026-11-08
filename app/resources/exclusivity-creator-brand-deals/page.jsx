import Link from "next/link";

export const metadata = {
  title: "Exclusivity in Creator Brand Deals: How Broad Is Too Broad? | Ascent Legal",
  description:
    "A practical guide to exclusivity clauses in creator and influencer agreements, including competitor definitions, categories, duration, territory, and carve-outs.",
  alternates: {
    canonical: "/resources/exclusivity-creator-brand-deals",
  },
  openGraph: {
    type: "article",
    title: "Exclusivity in Creator Brand Deals: How Broad Is Too Broad?",
    description:
      "A practical guide to exclusivity clauses in creator and influencer agreements, including competitor definitions, categories, duration, territory, and carve-outs.",
    url: "/resources/exclusivity-creator-brand-deals",
  },
};

export default function ResourcePage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <article className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <nav className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A8794]">
          <Link href="/resources" className="hover:text-[#B86A2E]">Resources</Link>
          <span className="mx-2">/</span>
          Creator Contracts
        </nav>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
          Exclusivity
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Exclusivity in Creator Brand Deals: How Broad Is Too Broad?
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          Exclusivity can be one of the most expensive provisions in a creator agreement because it may limit future deals even after the sponsored content is delivered.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">What exclusivity does</h2>
            <p className="mt-4">An exclusivity clause restricts the creator from working with certain competing brands, products, or categories for a defined period. The business purpose is understandable: a brand may not want a creator promoting a direct competitor immediately before or after its campaign.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">The definition of 'competitor' matters</h2>
            <p className="mt-4">A narrowly defined list of direct competitors creates a different restriction from a broad product category. For example, restricting deals with three named competitors is materially different from restricting every company in an entire consumer category.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Review the scope in four directions</h2>
            <p className="mt-4">Creators should look at more than the number of days in the restriction.</p>
            <ul className="mt-5 space-y-3 border-l-2 border-[#B86A2E] pl-6">
              <li><strong>Category:</strong> what products or services are actually restricted?</li>
              <li><strong>Competitors:</strong> are competitors specifically named or broadly defined?</li>
              <li><strong>Duration:</strong> does the restriction apply before, during, and after the campaign?</li>
              <li><strong>Channels:</strong> does it cover only sponsored content or also organic mentions, appearances, affiliate links, and other work?</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Carve-outs can preserve existing business</h2>
            <p className="mt-4">A creator may already have long-term sponsors, affiliate relationships, personal product preferences, or previously committed campaigns. Existing obligations and passive or organic activity can sometimes be addressed through explicit carve-outs.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Exclusivity has economic value</h2>
            <p className="mt-4">The broader and longer the restriction, the more opportunities the creator may be giving up. That opportunity cost can be part of the compensation discussion when negotiating the overall deal.</p>
            
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Creator Contract Guides</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/resources/perpetuity-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Perpetuity in Creator Contracts →</Link>
            <Link href="/resources/creator-contract-usage-rights" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Creator Usage Rights →</Link>
            <Link href="/resources/whitelisting-paid-media-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Whitelisting & Paid Media →</Link>
            <Link href="/resources/creator-management-agreement-review" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Management Agreements →</Link>
          </div>
        </div>

        <div className="mt-10 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Service</p>
          <h2 className="mt-3 font-serif text-2xl">Have a creator or brand agreement to review?</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7386]">
            Ascent Legal reviews and negotiates creator, influencer, UGC, sponsorship, management, and brand deal agreements.
          </p>
          <Link href="/services/creator-contract-review" className="mt-5 inline-flex bg-[#0E2A47] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#B86A2E]">
            Creator Contract Review →
          </Link>
        </div>

        <p className="mt-8 text-xs leading-5 text-[#7A8794]">
          This article is general information only and is not legal advice. Contract terms and legal rights depend on the specific agreement and facts. Reading this article does not create an attorney-client relationship.
        </p>
      </article>
    </main>
  );
}
