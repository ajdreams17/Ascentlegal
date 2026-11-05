import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Creator Contract Review & Brand Deal Review | Ascent Legal",
  description:
    "Contract review and negotiation support for creators, influencers, talent, and content businesses. Brand deals, usage rights, exclusivity, payment terms, licensing, and more. Transactional counsel only.",
  alternates: {
    canonical: "/services/creator-contract-review",
  },
};

const reviewItems = [
  "Brand deal and sponsorship agreements",
  "Influencer and UGC agreements",
  "Usage rights and paid media provisions",
  "Exclusivity and non-compete restrictions",
  "Payment terms, deliverables, and approval rights",
  "Licensing, ownership, and content usage",
  "Morality, termination, and cancellation clauses",
  "Agency and management agreements",
];

const riskItems = [
  {
    title: "Usage Rights",
    text: "Understand where, how, and for how long your name, image, likeness, and content may be used.",
  },
  {
    title: "Exclusivity",
    text: "Identify restrictions that may limit future brand partnerships or competing deals.",
  },
  {
    title: "Compensation",
    text: "Confirm payment timing, scope, deliverables, expenses, and whether added usage is separately compensated.",
  },
  {
    title: "Ownership",
    text: "Clarify who owns the content, what is licensed, and whether rights continue after the campaign ends.",
  },
  {
    title: "Approvals & Revisions",
    text: "Review approval rights, revision obligations, reshoots, and changes to the scope of work.",
  },
  {
    title: "Termination",
    text: "Understand cancellation rights, kill fees, breach provisions, and what happens if the deal ends early.",
  },
];

const process = [
  {
    step: "01",
    title: "Tell us about the deal",
    text: "Share the agreement, your deadline, the brand or counterparty, and what matters most to you.",
  },
  {
    step: "02",
    title: "Attorney review",
    text: "We review the contract, identify key business and legal issues, and prepare practical revisions.",
  },
  {
    step: "03",
    title: "Redlines + strategy",
    text: "You receive redlines and plain-English guidance on the provisions that matter most.",
  },
  {
    step: "04",
    title: "Negotiation support",
    text: "If included in the engagement, we help negotiate the agreement and work toward final terms.",
  },
];

const faqs = [
  {
    q: "What types of creator contracts do you review?",
    a: "We review brand deals, sponsorship agreements, influencer and UGC contracts, licensing agreements, management agreements, talent agreements, collaboration agreements, and related creator-business contracts.",
  },
  {
    q: "Can you negotiate directly with the brand or agency?",
    a: "Depending on the scope of the engagement, yes. We can provide negotiation language, communicate with the other side, or handle the redline process directly.",
  },
  {
    q: "How quickly can you review a contract?",
    a: "Timing depends on the agreement, deal complexity, and current availability. Many contract reviews can be completed within 1–3 business days after the engagement is confirmed. If you have a deadline, tell us at intake.",
  },
  {
    q: "Do you represent brands too?",
    a: "Yes. Ascent Legal also advises brands, agencies, production companies, and other businesses on transactional entertainment and creator agreements.",
  },
  {
    q: "Do you handle disputes or litigation?",
    a: "No. This service is for transactional contract review, drafting, and negotiation only. Ascent Legal does not handle litigation through this service.",
  },
  {
    q: "Does submitting the intake form mean you represent me?",
    a: "No. Submitting an inquiry does not create an attorney-client relationship. Representation begins only after conflict clearance and a signed engagement agreement.",
  },
];

export default function CreatorContractReviewPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_.9fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Creator Contracts / Brand Deals
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Know what you&apos;re signing before the deal goes live.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              Contract review and negotiation support for creators, influencers,
              talent, and content businesses. We help you understand the deal,
              protect your rights, and negotiate practical terms before you sign.
            </p>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
              Transactional counsel only. No litigation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <StartIntakeButton
                eventName="creator_contract_intake_clicked"
                placement="creator_contract_review_hero"
                label="Start Contract Intake"
                className="inline-flex bg-[#0E2A47] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#B86A2E]"
              />

              <Link
                href="/contact"
                className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                Contact the Firm
              </Link>
            </div>
          </div>

          <div className="border border-[#0E2A47]/10 bg-white p-8 shadow-[0_24px_70px_rgba(14,42,71,0.07)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">
              Common Review Issues
            </p>
            <div className="mt-7 space-y-5">
              {["Usage rights", "Exclusivity", "Payment terms", "Ownership", "Approvals", "Termination"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-[#0E2A47]/10 pb-4 font-serif text-2xl"
                  >
                    <span>{item}</span>
                    <span className="text-[#B86A2E]">→</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            What We Review
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Contracts built around the creator economy.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {reviewItems.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-[#0E2A47]/10 pb-4 text-base text-[#5F7386]"
              >
                <span className="text-[#B86A2E]">◆</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            What We Look For
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            The provisions that can change the value of the deal.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {riskItems.map((item) => (
              <div key={item.title} className="border border-[#0E2A47]/10 bg-white p-7">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">
            The Process
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Straightforward from intake to signature.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="border-t border-white/20 pt-5">
                <p className="text-xs font-bold tracking-[0.2em] text-[#D9894C]">{item.step}</p>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-5 text-center font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Before you send the contract.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7">
                <h3 className="font-serif text-xl">{item.q}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#0E2A47]/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Related Services
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/services/entertainment" className="text-[#0E2A47] hover:text-[#B86A2E]">Entertainment Counsel →</Link>
            <Link href="/services/copyright" className="text-[#0E2A47] hover:text-[#B86A2E]">Copyright & Licensing →</Link>
            <Link href="/services/trademark" className="text-[#0E2A47] hover:text-[#B86A2E]">Trademark Registration →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0E2A47]/10 bg-[#F7F6F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Have a Deal on Your Desk?
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Start with the contract.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
            Tell us what you&apos;re working on, who the other party is, and
            when you need to sign. We&apos;ll review the inquiry and determine
            whether Ascent Legal can assist.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="creator_contract_intake_clicked"
              placement="creator_contract_review_bottom"
              label="Start Contract Intake"
              className="inline-flex bg-[#B86A2E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9F5925]"
            />
            <Link
              href="/services/entertainment"
              className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
            >
              Explore Entertainment Counsel
            </Link>
          </div>

          <p className="mt-6 text-xs leading-5 text-[#7A8794]">
            Submitting an inquiry does not create an attorney-client relationship.
            Representation begins only after conflict clearance and a written engagement agreement.
          </p>
        </div>
      </section>
    </main>
  );
}
