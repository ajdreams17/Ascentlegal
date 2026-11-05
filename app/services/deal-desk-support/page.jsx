import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Deal Desk & Outside Counsel Support | Ascent Legal",
  description:
    "On-call contract review, drafting, and negotiation support for creators, brands, agencies, studios, and growing companies with recurring deal flow. Transactional counsel only.",
  alternates: {
    canonical: "/services/deal-desk-support",
  },
};

const useCases = [
  {
    title: "Recurring Contract Review",
    text: "Send repeat agreements through a consistent legal review process instead of starting from scratch on every deal.",
  },
  {
    title: "Negotiation Support",
    text: "Get practical redlines, counter-proposals, and negotiation language for fast-moving commercial relationships.",
  },
  {
    title: "Template Development",
    text: "Build repeatable base agreements, fallback positions, and internal playbooks for common deal types.",
  },
  {
    title: "Overflow Legal Support",
    text: "Add transactional capacity when internal teams, founders, or operators are handling more agreements than they can efficiently manage.",
  },
  {
    title: "Creator & Brand Deal Flow",
    text: "Support sponsorships, influencer and UGC agreements, licensing, agency agreements, and other recurring creator-economy transactions.",
  },
  {
    title: "Business Contract Support",
    text: "Review and negotiate vendor, service, partnership, consulting, and other commercial agreements as the business grows.",
  },
];

const process = [
  { step: "01", title: "Scope the workflow", text: "We identify the deal types, volume, internal stakeholders, turnaround needs, and escalation points." },
  { step: "02", title: "Set the playbook", text: "We align on review priorities, fallback positions, templates, and how matters will be submitted." },
  { step: "03", title: "Review the deals", text: "Contracts are reviewed, redlined, drafted, or negotiated based on the agreed scope." },
  { step: "04", title: "Improve the system", text: "Repeat issues and common terms can be converted into cleaner templates and more efficient future workflows." },
];

const faqs = [
  {
    q: "Is Deal Desk Support a subscription or retainer?",
    a: "It can be structured in different ways depending on deal volume and support needs. Some clients use one-off project support, while others prefer an ongoing arrangement for recurring transactional work.",
  },
  {
    q: "What kinds of businesses use Deal Desk Support?",
    a: "It can be a fit for creators, agencies, studios, brands, startups, and growing companies that regularly receive or send contracts and want consistent legal review.",
  },
  {
    q: "Can you negotiate directly with counterparties?",
    a: "Yes, depending on the engagement scope. We can provide internal negotiation guidance, prepare redlines and messaging, or communicate directly with the other side.",
  },
  {
    q: "Can you build templates and playbooks?",
    a: "Yes. We can help create repeatable agreements, fallback positions, and contract-review workflows for recurring deal types.",
  },
  {
    q: "Do you serve as general counsel?",
    a: "Deal Desk Support can function as focused outside transactional counsel for contract and deal matters. Broader legal support depends on the engagement scope.",
  },
  {
    q: "Do you handle litigation?",
    a: "No. This service is for transactional drafting, review, negotiation, and deal support. Ascent Legal does not handle litigation through this service.",
  },
];

export default function DealDeskSupportPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Deal Desk / Outside Counsel
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Legal support built for repeat deal flow.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              On-call contract review, drafting, and negotiation support for
              creators, agencies, brands, studios, and growing companies that
              need consistent transactional help without rebuilding the process
              for every agreement.
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
              Transactional counsel only. No litigation.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <StartIntakeButton
                eventName="deal_desk_intake_clicked"
                placement="deal_desk_hero"
                label="Start Deal Desk Intake"
                className="inline-flex bg-[#0E2A47] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#B86A2E]"
              />
              <a href="#support" className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]">
                See How We Support
              </a>
            </div>
          </div>

          <div className="border border-[#0E2A47]/10 bg-white p-8 shadow-[0_24px_70px_rgba(14,42,71,0.07)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">Built for Recurring Deals</p>
            <div className="mt-7 space-y-5">
              {["Contract review","Redlines","Negotiation support","Template drafting","Playbooks","Overflow legal capacity"].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-[#0E2A47]/10 pb-4 font-serif text-2xl">
                  <span>{item}</span>
                  <span className="text-[#B86A2E]">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">How We Support</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            A legal workflow that can keep up with the business.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">When It Makes Sense</p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
              When contracts are becoming a workflow problem.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#5F7386]">
            <p>
              Deal Desk Support is designed for clients who regularly sign
              agreements, work with recurring counterparties, or need a more
              consistent review process across the business.
            </p>
            <p>
              Instead of treating every agreement as a separate one-off project,
              the goal is to build familiarity with the business, improve
              consistency, and make repeat transactions easier to manage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">The Workflow</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            From ad hoc contracts to a repeatable deal process.
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
          <h2 className="mt-5 text-center font-serif text-4xl tracking-[-0.02em] sm:text-5xl">Before you build the workflow.</h2>
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
            <Link href="/services/contracts-drafting" className="hover:text-[#B86A2E]">Contract Drafting & Review →</Link>
            <Link href="/services/creator-contract-review" className="hover:text-[#B86A2E]">Creator Contract Review →</Link>
            <Link href="/services/entertainment" className="hover:text-[#B86A2E]">Entertainment Counsel →</Link>
            <Link href="/services/corporate-formation" className="hover:text-[#B86A2E]">Business Formation →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0E2A47]/10 bg-[#F7F6F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">Need Ongoing Deal Support?</p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">Start with your deal flow.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
            Tell us what kinds of agreements you handle, how often they come in,
            who reviews them internally, and where the current process slows down.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="deal_desk_intake_clicked"
              placement="deal_desk_bottom"
              label="Start Deal Desk Intake"
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
