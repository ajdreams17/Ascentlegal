import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Business Formation & Founder Documents | Ascent Legal",
  description:
    "LLC and corporation formation, operating agreements, bylaws, founder documents, governance, and business setup for creators, founders, brands, agencies, and growing companies. Transactional counsel only.",
  alternates: {
    canonical: "/services/corporate-formation",
  },
};

const services = [
  {
    title: "Entity Formation",
    text: "Form an LLC or corporation with the core filings and governance documents needed to start operating cleanly.",
  },
  {
    title: "Founder Alignment",
    text: "Document ownership, decision-making, vesting concepts, roles, and other founder arrangements before they become points of friction.",
  },
  {
    title: "Operating Agreements & Bylaws",
    text: "Put the rules of the business in writing with governance documents tailored to the entity and ownership structure.",
  },
  {
    title: "IP & Founder Assignments",
    text: "Document ownership of intellectual property contributed to the company and align key rights with the business.",
  },
  {
    title: "Corporate Consents & Resolutions",
    text: "Prepare initial approvals and governance records so important company actions are properly documented.",
  },
  {
    title: "Entity Cleanup",
    text: "Review an existing entity and address missing governance documents, ownership records, or formation gaps before the next stage of growth.",
  },
];

const packages = [
  {
    name: "Starter Formation",
    price: "Flat fee",
    description:
      "For solo founders, creators, and first-time business owners who need a clean entity setup.",
    bullets: [
      "Entity strategy discussion",
      "Formation filing preparation",
      "Core governance documents",
      "Initial company resolutions or consents",
      "Practical post-formation checklist",
    ],
  },
  {
    name: "Founder Formation",
    price: "Flat fee",
    description:
      "For businesses with two or more founders who need ownership and governance documented clearly.",
    bullets: [
      "Everything in Starter Formation",
      "Founder ownership documentation",
      "Operating agreement or bylaws",
      "Founder IP assignment support",
      "Governance and decision-making terms",
    ],
    featured: true,
  },
  {
    name: "Launch & Scale",
    price: "Scoped",
    description:
      "For companies that need more than formation and are preparing to hire, contract, raise capital, or operate across states.",
    bullets: [
      "Formation or entity cleanup",
      "Expanded governance documents",
      "Foreign qualification support as needed",
      "Contract and compliance roadmap",
      "Coordination with tax or financial advisers as appropriate",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Tell us about the business",
    text: "Share the owners, business model, expected activities, location, and immediate goals.",
  },
  {
    step: "02",
    title: "Choose the structure",
    text: "We discuss the legal differences between available entity structures and flag questions to coordinate with your tax adviser.",
  },
  {
    step: "03",
    title: "Prepare the documents",
    text: "We prepare the agreed formation filings, governance documents, and founder records.",
  },
  {
    step: "04",
    title: "Launch with a roadmap",
    text: "You receive final documents and a practical list of next steps for banking, contracts, compliance, and growth.",
  },
];

const faqs = [
  {
    q: "Should I form an LLC or corporation?",
    a: "That depends on ownership, financing plans, governance preferences, tax considerations, and the type of business you are building. We explain the legal differences and can coordinate with your tax adviser where tax treatment is important.",
  },
  {
    q: "Can you help if I already formed the company myself?",
    a: "Yes. We can review an existing entity, identify missing governance or ownership documents, and help clean up the company records before a deal, hire, financing event, or other growth milestone.",
  },
  {
    q: "Do you prepare operating agreements and bylaws?",
    a: "Yes. We prepare and review operating agreements, bylaws, founder documents, corporate consents, and related governance materials for transactional matters.",
  },
  {
    q: "Can you help with founder equity and IP?",
    a: "Yes. We can document founder ownership arrangements, vesting concepts where appropriate, and assignments of relevant intellectual property to the company.",
  },
  {
    q: "Do you give tax advice?",
    a: "We advise on legal entity structure and governance. Tax treatment can materially affect the right structure, so we may recommend coordinating with a CPA or tax attorney for tax-specific advice.",
  },
  {
    q: "Do you handle business disputes or litigation?",
    a: "No. Ascent Legal provides transactional business and formation services through this practice area and does not handle litigation.",
  },
  {
    q: "Does submitting an intake mean the firm represents me?",
    a: "No. An inquiry does not create an attorney-client relationship. Representation begins only after conflict clearance and a signed engagement agreement.",
  },
];

export default function CorporateFormationPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Business Formation
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Build the company on a clean foundation.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              Entity formation, founder documents, and governance for creators,
              founders, brands, agencies, and growing businesses. We help turn
              the business idea into a structure that is ready to contract,
              operate, and grow.
            </p>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
              Transactional counsel only. No litigation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <StartIntakeButton
                eventName="business_formation_intake_clicked"
                placement="business_formation_hero"
                label="Start Formation Intake"
                className="inline-flex bg-[#0E2A47] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#B86A2E]"
              />

              <Link
                href="/intake/business"
                className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                Business Intake Form
              </Link>

              <a
                href="#packages"
                className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                View Options
              </a>
            </div>
          </div>

          <div className="border border-[#0E2A47]/10 bg-white p-8 shadow-[0_24px_70px_rgba(14,42,71,0.07)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">
              Common Formation Needs
            </p>

            <div className="mt-7 space-y-5">
              {[
                "LLC formation",
                "Corporation formation",
                "Operating agreements",
                "Bylaws",
                "Founder documents",
                "Governance cleanup",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-[#0E2A47]/10 pb-4 font-serif text-2xl"
                >
                  <span>{item}</span>
                  <span className="text-[#B86A2E]">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            How We Help
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            More than filing paperwork.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item.title} className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-24 border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Formation Options
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Clear scope for the stage you are in.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`relative border p-7 ${
                  item.featured
                    ? "border-[#B86A2E] bg-white shadow-[0_20px_50px_rgba(14,42,71,0.08)]"
                    : "border-[#0E2A47]/10 bg-white"
                }`}
              >
                {item.featured && (
                  <p className="absolute right-5 top-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B86A2E]">
                    Popular
                  </p>
                )}

                <h3 className="max-w-[80%] font-serif text-2xl">{item.name}</h3>
                <p className="mt-4 font-serif text-3xl text-[#B86A2E]">{item.price}</p>
                <p className="mt-4 text-sm leading-6 text-[#5F7386]">{item.description}</p>

                <ul className="mt-6 space-y-3 text-sm text-[#0E2A47]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-[#B86A2E]">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-xs leading-5 text-[#7A8794]">
            Final scope and pricing depend on entity type, ownership structure,
            number of founders, jurisdictions, and the documents required.
            Government filing fees and third-party costs are separate unless
            expressly included in the engagement agreement.
          </p>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">
            The Process
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            From idea to organized company.
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
            Before you form the company.
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
            <Link href="/services/contracts-drafting" className="text-[#0E2A47] hover:text-[#B86A2E]">Contracts Drafting →</Link>
            <Link href="/services/trademark" className="text-[#0E2A47] hover:text-[#B86A2E]">Trademark Registration →</Link>
            <Link href="/services/deal-desk-support" className="text-[#0E2A47] hover:text-[#B86A2E]">Deal Desk Support →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0E2A47]/10 bg-[#F7F6F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Ready to Build?
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Start with the structure.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
            Tell us what the business does, who owns it, where you plan to
            operate, and what you need the company to be ready to do next.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="business_formation_intake_clicked"
              placement="business_formation_bottom"
              label="Start Formation Intake"
              className="inline-flex bg-[#B86A2E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9F5925]"
            />

            <Link
              href="/services/contracts-drafting"
              className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
            >
              Explore Contract Services
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
