import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Contract Drafting & Review | Ascent Legal",
  description:
    "Contract drafting, review, and negotiation for creators, brands, agencies, and growing companies. Commercial agreements, collaborations, contractor agreements, NDAs, and more. Transactional counsel only.",
  alternates: {
    canonical: "/services/contracts-drafting",
  },
};

const categories = [
  {
    title: "Commercial Agreements",
    text: "Vendor, service, supplier, consulting, and other agreements that define scope, payment, risk, and performance.",
  },
  {
    title: "Partnerships & Collaborations",
    text: "Document contributions, revenue splits, ownership, approvals, termination rights, and responsibilities before work begins.",
  },
  {
    title: "Contractor & IP Agreements",
    text: "Clarify services, confidentiality, intellectual property ownership, deliverables, and payment when outside talent or vendors are involved.",
  },
  {
    title: "NDAs & Early-Stage Deal Docs",
    text: "Use confidentiality agreements, term sheets, and other preliminary documents to move opportunities forward with clearer expectations.",
  },
  {
    title: "Service Agreements & SOWs",
    text: "Create repeatable agreements and statements of work for recurring client, agency, vendor, or consulting relationships.",
  },
  {
    title: "Contract Review & Redlines",
    text: "Review agreements presented by the other side, identify material issues, and prepare practical revisions and negotiation language.",
  },
];

const process = [
  { step: "01", title: "Tell us about the agreement", text: "Share the contract, parties, business goal, deadline, and the terms that matter most to you." },
  { step: "02", title: "Draft or review", text: "We prepare the document or redline the existing agreement with the deal and business model in mind." },
  { step: "03", title: "Explain the issues", text: "You receive plain-English guidance on key provisions, tradeoffs, and proposed changes." },
  { step: "04", title: "Finalize the deal", text: "If included in the engagement, we support negotiation and prepare clean execution versions." },
];

const faqs = [
  {
    q: "Do you draft new contracts and review existing ones?",
    a: "Yes. We handle both from-scratch drafting and contract review/redlines for transactional matters.",
  },
  {
    q: "What kinds of contracts do you handle?",
    a: "Common matters include service agreements, vendor and consulting agreements, collaborations, contractor and IP agreements, NDAs, statements of work, revenue-sharing agreements, and related commercial contracts.",
  },
  {
    q: "Do you offer flat fees?",
    a: "Many standard reviews and drafting matters can be scoped on a flat-fee basis. More complex or negotiation-heavy matters may be priced differently depending on scope.",
  },
  {
    q: "How quickly can you review a contract?",
    a: "Timing depends on length, complexity, negotiation needs, and current availability. Many standard reviews can be completed within 1–3 business days after engagement is confirmed.",
  },
  {
    q: "Do you handle contract litigation?",
    a: "No. Ascent Legal provides transactional contract drafting, review, and negotiation services through this practice area and does not handle litigation.",
  },
  {
    q: "Does submitting an intake mean the firm represents me?",
    a: "No. An inquiry does not create an attorney-client relationship. Representation begins only after conflict clearance and a signed engagement agreement.",
  },
];

export default function ContractsDraftingPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Contract Drafting & Review
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Clear contracts for real business relationships.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              Drafting, review, and negotiation for creators, brands, agencies,
              and growing companies. We help turn business terms into agreements
              that are practical, understandable, and ready to use.
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
              Transactional counsel only. No litigation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <StartIntakeButton
                eventName="contracts_intake_clicked"
                placement="contracts_drafting_hero"
                label="Start Contract Intake"
                className="inline-flex bg-[#0E2A47] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#B86A2E]"
              />
              <a
                href="#types"
                className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                Explore Contract Types
              </a>
            </div>
          </div>

          <div className="border border-[#0E2A47]/10 bg-white p-8 shadow-[0_24px_70px_rgba(14,42,71,0.07)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">
              Common Contract Needs
            </p>
            <div className="mt-7 space-y-5">
              {["Service agreements","Collaborations","Contractor agreements","NDAs","Statements of work","Contract redlines"].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-[#0E2A47]/10 pb-4 font-serif text-2xl">
                  <span>{item}</span>
                  <span className="text-[#B86A2E]">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            What We Draft & Review
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Contracts that match the business behind the deal.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div key={item.title} className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              What You Receive
            </p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
              More than a marked-up document.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Plain-English Guidance","Understand the key terms, business risks, and practical tradeoffs."],
              ["Redlines","See the proposed changes directly in the agreement."],
              ["Negotiation Language","Get practical wording for responding to the other side."],
              ["Clean Final Documents","Receive execution-ready versions when the matter is finalized."],
            ].map(([title,text]) => (
              <div key={title} className="border border-[#0E2A47]/10 bg-white p-6">
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5F7386]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">The Process</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            From business terms to signature-ready agreement.
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
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">Frequently Asked Questions</p>
          <h2 className="mt-5 text-center font-serif text-4xl tracking-[-0.02em] sm:text-5xl">Before you send the agreement.</h2>
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">Related Services</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/services/deal-desk-support" className="hover:text-[#B86A2E]">Deal Desk Support →</Link>
            <Link href="/services/creator-contract-review" className="hover:text-[#B86A2E]">Creator Contract Review →</Link>
            <Link href="/services/team-contractor-docs" className="hover:text-[#B86A2E]">Team & Contractor Docs →</Link>
            <Link href="/services/corporate-formation" className="hover:text-[#B86A2E]">Business Formation →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0E2A47]/10 bg-[#F7F6F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">Need a Contract Drafted or Reviewed?</p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">Start with the agreement.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
            Tell us what the agreement is for, who the parties are, whether a draft already exists, and any deadline.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="contracts_intake_clicked"
              placement="contracts_drafting_bottom"
              label="Start Contract Intake"
              className="inline-flex bg-[#B86A2E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9F5925]"
            />
            <Link href="/contact" className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]">
              Contact the Firm
            </Link>
          </div>
          <p className="mt-6 text-xs leading-5 text-[#7A8794]">
            Submitting an inquiry does not create an attorney-client relationship. Representation begins only after conflict clearance and a written engagement agreement.
          </p>
        </div>
      </section>
    </main>
  );
}
