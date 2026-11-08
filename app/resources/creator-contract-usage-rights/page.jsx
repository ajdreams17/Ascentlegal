import Link from "next/link";

export const metadata = {
  title: "Creator Contract Usage Rights: What Are You Actually Giving the Brand? | Ascent Legal",
  description:
    "A practical guide to creator contract usage rights, including term, territory, media, edits, sublicensing, paid media, ownership, and compensation.",
  alternates: {
    canonical: "/resources/creator-contract-usage-rights",
  },
  openGraph: {
    type: "article",
    title: "Creator Contract Usage Rights: What Are You Actually Giving the Brand?",
    description:
      "A practical guide to creator contract usage rights, including term, territory, media, edits, sublicensing, paid media, ownership, and compensation.",
    url: "/resources/creator-contract-usage-rights",
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
          Usage Rights
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Creator Contract Usage Rights: What Are You Actually Giving the Brand?
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          Usage rights determine what a brand can do with your content after you create it. The deliverable may be one post, but the contract can grant rights that extend far beyond that original publication.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Start with the difference between ownership and permission</h2>
            <p className="mt-4">A creator can retain ownership of content while granting a brand a license to use it. A contract can also transfer ownership entirely. Those are different outcomes, so the agreement should be read carefully to determine whether the brand receives a license, an assignment, or another form of permission.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">The five dimensions of a usage license</h2>
            <p className="mt-4">A useful way to read usage language is to separate it into duration, territory, media, purpose, and permitted users.</p>
            <ul className="mt-5 space-y-3 border-l-2 border-[#B86A2E] pl-6">
              <li><strong>Duration:</strong> a campaign window, a fixed number of months, or potentially perpetual use.</li>
              <li><strong>Territory:</strong> a specific country, region, or worldwide use.</li>
              <li><strong>Media:</strong> organic social, websites, paid advertising, email, retail, broadcast, or other channels.</li>
              <li><strong>Purpose:</strong> campaign promotion, advertising, archival use, internal use, or other defined purposes.</li>
              <li><strong>Permitted users:</strong> the brand itself, affiliates, agencies, retailers, partners, or sublicensees.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Paid media can materially expand the deal</h2>
            <p className="mt-4">A post on a creator's own channel is different from a brand using that same content as an advertisement. Paid media can increase reach, duration, and commercial value, so the agreement should make clear whether paid use is included and for how long.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Editing and derivative-use rights deserve attention</h2>
            <p className="mt-4">Some agreements allow cropping or formatting changes. Others authorize broader edits, translations, combinations with other materials, or derivative uses. The broader the editing right, the more important it is to understand whether approvals or guardrails apply.</p>
            
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Match the scope of rights to the compensation</h2>
            <p className="mt-4">The practical question is not whether broad usage rights are always unacceptable. It is whether the scope of rights, duration, and commercial value are reflected in the deal economics and the creator's business goals.</p>
            
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Creator Contract Guides</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/resources/perpetuity-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Perpetuity in Creator Contracts →</Link>
            <Link href="/resources/creator-management-agreement-review" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Management Agreements →</Link>
            <Link href="/resources/whitelisting-paid-media-creator-contracts" className="text-sm font-semibold text-[#0E2A47] hover:text-[#B86A2E]">Whitelisting & Paid Media →</Link>
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
