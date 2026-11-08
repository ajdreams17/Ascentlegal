import Link from "next/link";

export const metadata = {
  title: "What Does Perpetuity Mean in a Creator Contract? | Ascent Legal",
  description:
    "A practical guide for creators and influencers on perpetual usage rights, paid media, whitelisting, exclusivity, and what to review before signing a brand deal.",
  alternates: {
    canonical: "/resources/perpetuity-creator-contracts",
  },
  openGraph: {
    type: "article",
    title: "What Does Perpetuity Mean in a Creator Contract?",
    description:
      "Understand perpetual usage rights, paid media, whitelisting, and other creator-contract terms before signing a brand deal.",
    url: "/resources/perpetuity-creator-contracts",
  },
};

export default function PerpetuityCreatorContractsPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <article className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <nav className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A8794]">
          <Link href="/resources" className="hover:text-[#B86A2E]">Resources</Link>
          <span className="mx-2">/</span>
          Creator Contracts
        </nav>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
          Creator Contracts
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          What does “perpetuity” mean in a creator contract?
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          A brand deal can look attractive until the usage-rights section gives the brand
          permission to use your content forever. For creators, “perpetuity” is one of the
          contract terms worth slowing down for.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">What “in perpetuity” usually means</h2>
            <p className="mt-4">
              In ordinary contract language, “in perpetuity” generally means there is no stated
              expiration date. If a license to use your content, name, image, likeness, voice, or
              other material is granted in perpetuity, the permission may continue indefinitely
              unless another provision limits or terminates it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Why the scope matters as much as the duration</h2>
            <p className="mt-4">
              Duration is only one part of the license. A creator should also look at where the
              content may be used, whether the brand can edit it, whether it can be sublicensed,
              whether paid advertising is allowed, and whether the creator&apos;s handle or account
              can be used for whitelisting or dark posts.
            </p>
            <ul className="mt-5 space-y-3 border-l-2 border-[#B86A2E] pl-6">
              <li><strong>Media:</strong> organic social, paid social, websites, email, retail, broadcast, or all media.</li>
              <li><strong>Territory:</strong> United States, worldwide, or another defined market.</li>
              <li><strong>Editing:</strong> whether the brand can crop, remix, translate, or materially alter the work.</li>
              <li><strong>Sublicensing:</strong> whether agencies, affiliates, retailers, or partners can also use it.</li>
              <li><strong>Paid media:</strong> whether your content can become an advertisement beyond the original post.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Perpetual rights are not automatically “bad”</h2>
            <p className="mt-4">
              The right question is whether the rights match the compensation and the business deal.
              A limited archive right may be very different from a perpetual worldwide paid-media
              license. If a brand wants broader or longer rights, creators can consider whether the
              compensation should reflect that added value.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Other clauses to read alongside usage rights</h2>
            <p className="mt-4">
              Usage rights rarely operate alone. Exclusivity, morality clauses, approval rights,
              revision obligations, termination, payment timing, ownership, and indemnity can all
              change the economics and risk of the deal.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">A practical checklist before signing</h2>
            <ul className="mt-4 space-y-3">
              <li>• How long can the brand use the content?</li>
              <li>• Where and in what media can it appear?</li>
              <li>• Is paid advertising or whitelisting included?</li>
              <li>• Can the brand edit or sublicense the content?</li>
              <li>• Does exclusivity restrict future deals?</li>
              <li>• Is additional usage tied to additional compensation?</li>
            </ul>
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Service</p>
          <h2 className="mt-3 font-serif text-2xl">Have a creator or brand contract to review?</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7386]">
            Ascent Legal reviews creator, influencer, UGC, sponsorship, and brand deal agreements.
          </p>
          <Link href="/services/creator-contract-review" className="mt-5 inline-flex bg-[#0E2A47] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#B86A2E]">
            Creator Contract Review →
          </Link>
        </div>

        <p className="mt-8 text-xs leading-5 text-[#7A8794]">
          This article is general information only and is not legal advice. Reading it does not create an attorney-client relationship.
        </p>
      </article>
    </main>
  );
}
