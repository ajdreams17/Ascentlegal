import Link from "next/link";

export const metadata = {
  title: "Morality Clauses in Creator Contracts: What Can Trigger Termination? | Ascent Legal",
  description:
    "A practical guide to morality and conduct clauses in creator and brand agreements, including triggers, discretion, notice, cure rights, termination, and payment consequences.",
  alternates: {
    canonical: "/resources/morality-clause-creator-contracts",
  },
  openGraph: {
    type: "article",
    title: "Morality Clauses in Creator Contracts: What Can Trigger Termination?",
    description:
      "A practical guide to morality and conduct clauses in creator and brand agreements, including triggers, discretion, notice, cure rights, termination, and payment consequences.",
    url: "/resources/morality-clause-creator-contracts",
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
          Morality / Conduct Clauses
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Morality Clauses in Creator Contracts: What Can Trigger Termination?
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          Brands often want the right to protect their reputation if a spokesperson or creator becomes associated with controversial conduct. The contract language determines how broad that right is and what happens if the brand invokes it.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">What a morality clause is designed to do</h2>
            <p className="mt-4">A morality or conduct clause can give a brand rights if specified conduct, allegations, publicity, or reputational events occur. Depending on the wording, the remedy may include suspension, termination, removal of content, repayment, or cancellation of future obligations.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Objective triggers and subjective discretion are not the same</h2>
            <p className="mt-4">Some clauses identify specific events, such as criminal conduct or a material breach of platform rules. Others rely on broader standards such as conduct that could bring the brand into public disrepute. The more subjective the standard, the more discretion the brand may have to decide whether the clause has been triggered.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Key questions to ask when reviewing the clause</h2>
            <p className="mt-4">The details often matter more than the heading.</p>
            <ul className="mt-5 space-y-3 border-l-2 border-[#B86A2E] pl-6">
              <li>What conduct or event actually triggers the clause?</li>
              <li>Does an allegation alone qualify, or is a finding or conviction required?</li>
              <li>Who determines whether reputational harm occurred?</li>
              <li>Is notice required before termination?</li>
              <li>Is there any opportunity to cure or explain the issue?</li>
              <li>What happens to earned fees, unpaid installments, expenses, or already-delivered content?</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Consider whether obligations should be mutual</h2>
            <p className="mt-4">Some deals are built entirely around the creator's reputation, but brands also face reputational events. Depending on the commercial relationship, parties may discuss reciprocal protections or termination rights tied to material brand conduct.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Read morality clauses with termination and payment terms</h2>
            <p className="mt-4">The practical consequence of a morality clause depends on the remedy. A right to stop future work is different from a right to claw back compensation already earned. The termination, payment, indemnity, and content-removal provisions should be read together.</p>
            
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Creator Contract Guides</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/resources/creator-management-agreement-review" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Creator Management Agreements →</Link>
            <Link href="/resources/exclusivity-creator-brand-deals" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Exclusivity in Brand Deals →</Link>
            <Link href="/resources/creator-contract-usage-rights" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Creator Usage Rights →</Link>
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
