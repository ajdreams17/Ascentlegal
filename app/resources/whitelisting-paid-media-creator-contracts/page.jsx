import Link from "next/link";

export const metadata = {
  title: "Whitelisting and Paid Media in Creator Contracts: What Creators Should Know | Ascent Legal",
  description:
    "Understand whitelisting, paid media, dark posts, creator handle permissions, ad access, duration, approvals, and compensation in influencer and brand agreements.",
  alternates: {
    canonical: "/resources/whitelisting-paid-media-creator-contracts",
  },
  openGraph: {
    type: "article",
    title: "Whitelisting and Paid Media in Creator Contracts: What Creators Should Know",
    description:
      "Understand whitelisting, paid media, dark posts, creator handle permissions, ad access, duration, approvals, and compensation in influencer and brand agreements.",
    url: "/resources/whitelisting-paid-media-creator-contracts",
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
          Whitelisting / Paid Media
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Whitelisting and Paid Media in Creator Contracts: What Creators Should Know
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          A creator may agree to make a sponsored post, but a whitelisting clause can let the brand turn the creator's identity or account into part of a paid advertising campaign. That is a different use from ordinary organic posting.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">What whitelisting usually refers to</h2>
            <p className="mt-4">In creator marketing, whitelisting commonly refers to paid advertising that runs through or appears to come from a creator's social identity or account. Platforms and agencies may use different technical terms, but the contract question is the same: what access and advertising rights is the creator granting?</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Whitelisting is not the same as ordinary reposting</h2>
            <p className="mt-4">A brand reposting a creator's content organically is generally a different use from placing paid media behind the content or using the creator's handle in advertisements targeted to new audiences. The agreement should distinguish those rights rather than treating all 'usage' as one category.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Terms to define before granting access</h2>
            <p className="mt-4">The contract should make the scope operationally clear.</p>
            <ul className="mt-5 space-y-3 border-l-2 border-[#B86A2E] pl-6">
              <li><strong>Duration:</strong> when ad access starts and ends.</li>
              <li><strong>Platforms:</strong> which social platforms or advertising tools are covered.</li>
              <li><strong>Content:</strong> which posts, videos, images, or approved assets may be used.</li>
              <li><strong>Budget:</strong> whether there are ad-spend or campaign limitations.</li>
              <li><strong>Approvals:</strong> whether new copy, edits, headlines, or calls to action require creator approval.</li>
              <li><strong>Access:</strong> what account permissions are needed and when they must be removed.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Why compensation may be separate</h2>
            <p className="mt-4">Paid media can create additional commercial value because the content is no longer limited to the creator's organic audience. Depending on the deal, creators may negotiate separate compensation for whitelisting, extended paid usage, or renewal periods.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Plan for the end of the campaign</h2>
            <p className="mt-4">The agreement should address what happens when the paid-use period ends, including removal of account access, stopping active ads, continued archival visibility, and any renewal process.</p>
            
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Creator Contract Guides</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/resources/perpetuity-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Perpetuity in Creator Contracts →</Link>
            <Link href="/resources/creator-contract-usage-rights" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Creator Usage Rights →</Link>
            <Link href="/resources/morality-clause-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Morality Clauses →</Link>
            <Link href="/resources/exclusivity-creator-brand-deals" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Exclusivity in Brand Deals →</Link>
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
