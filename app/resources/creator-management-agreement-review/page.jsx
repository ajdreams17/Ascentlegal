import Link from "next/link";

export const metadata = {
  title: "Creator Management Agreements: Terms to Review Before You Sign | Ascent Legal",
  description:
    "What creators should review in management agreements, including commission, term, exclusivity, post-term commissions, authority, termination, expenses, and conflicts.",
  alternates: {
    canonical: "/resources/creator-management-agreement-review",
  },
  openGraph: {
    type: "article",
    title: "Creator Management Agreements: Terms to Review Before You Sign",
    description:
      "What creators should review in management agreements, including commission, term, exclusivity, post-term commissions, authority, termination, expenses, and conflicts.",
    url: "/resources/creator-management-agreement-review",
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
          Management Agreements
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Creator Management Agreements: Terms to Review Before You Sign
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          A management agreement can affect far more than a single campaign. It can define who may represent you, what revenue is commissionable, how long the relationship lasts, and what happens after it ends.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Start with what the manager is actually managing</h2>
            <p className="mt-4">The agreement should define the manager's services and the scope of the relationship. Some arrangements focus on brand deals. Others extend to entertainment, licensing, appearances, publishing, merchandising, or nearly every commercial opportunity connected to the creator.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Commission language should be precise</h2>
            <p className="mt-4">Creators should understand the percentage, the revenue base, and which transactions generate commission. Important questions include whether commission is calculated on gross or net amounts, whether reimbursed expenses are included, and whether revenue from pre-existing or independently sourced deals is covered.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Exclusivity and authority are different issues</h2>
            <p className="mt-4">An exclusive management relationship may prevent the creator from engaging another representative in the same area. Separate provisions may authorize the manager to negotiate, communicate, collect funds, approve terms, or otherwise act on the creator's behalf. The contract should make those powers clear.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Read the termination and post-term provisions together</h2>
            <p className="mt-4">A contract may allow termination but still require commissions after the relationship ends for deals sourced, negotiated, renewed, or substantially developed during the term. These post-term or 'sunset' provisions can be economically significant and should be read alongside the termination clause.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Other terms worth reviewing</h2>
            <p className="mt-4">Expense reimbursement, accounting, audit rights, conflicts, assignment, key-person provisions, dispute resolution, governing law, and ownership of accounts or materials can all matter depending on the relationship.</p>
            
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Creator Contract Guides</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/resources/exclusivity-creator-brand-deals" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Exclusivity in Brand Deals →</Link>
            <Link href="/resources/creator-contract-usage-rights" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Creator Usage Rights →</Link>
            <Link href="/resources/morality-clause-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Morality Clauses →</Link>
            <Link href="/resources/perpetuity-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Perpetuity in Creator Contracts →</Link>
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
