import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Contractor Agreements & Team Documents | Ascent Legal",
  description:
    "Independent contractor agreements, IP assignment, confidentiality, work-for-hire, creative services agreements, and team documents for creators, brands, agencies, studios, and growing businesses. Transactional counsel only.",
  alternates: {
    canonical: "/services/team-contractor-docs",
  },
};

const services = [
  {
    title: "Independent Contractor Agreements",
    text: "Document scope, deliverables, payment, timelines, approvals, confidentiality, and termination for project-based or recurring outside contractors.",
  },
  {
    title: "IP Assignment & Confidentiality",
    text: "Clarify ownership of deliverables and protect confidential business information when contractors, collaborators, or vendors contribute to the work.",
  },
  {
    title: "Work-for-Hire Provisions",
    text: "Use work-for-hire language where legally appropriate and pair it with assignment provisions when additional ownership protection is needed.",
  },
  {
    title: "Creative Services Agreements",
    text: "Structure project terms for editors, designers, videographers, producers, developers, consultants, and other outside creative or technical talent.",
  },
  {
    title: "Reusable Contractor Templates",
    text: "Create base agreements for repeat roles so future engagements can start from a consistent document instead of rebuilding from scratch.",
  },
  {
    title: "Existing Agreement Review",
    text: "Review current contractor or team documents, identify ownership or scope gaps, and prepare cleaner terms for future use.",
  },
];

const commonUseCases = [
  "Hiring editors, designers, videographers, producers, developers, consultants, or virtual assistants",
  "Using contractors across agency or studio client projects",
  "Protecting ownership of content, software, designs, and other deliverables",
  "Clarifying revisions, approvals, deadlines, and project scope",
  "Creating reusable agreements for repeat contractor roles",
  "Cleaning up inconsistent or outdated contractor documents",
];

const process = [
  {
    step: "01",
    title: "Tell us about the role",
    text: "Share what the contractor will do, what they will create, how they are paid, and how often the relationship will recur.",
  },
  {
    step: "02",
    title: "Map the rights and scope",
    text: "We identify the key ownership, confidentiality, deliverable, approval, payment, and termination terms that need to be documented.",
  },
  {
    step: "03",
    title: "Draft or revise",
    text: "We prepare a new agreement or revise the document you already use, with practical language tailored to the workflow.",
  },
  {
    step: "04",
    title: "Build for repeat use",
    text: "When appropriate, we structure the document so it can serve as a base template for future contractor engagements.",
  },
];

const faqs = [
  {
    q: "Is this an employment-law service?",
    a: "No. This practice area is focused on transactional contractor and team documents, including scope, ownership, confidentiality, payment, and project terms. It is not an employment-disputes or litigation service.",
  },
  {
    q: "Can you review an agreement I already use?",
    a: "Yes. We can review and redline an existing contractor, consulting, creative services, or similar agreement and explain the key issues in plain English.",
  },
  {
    q: "Can you help protect intellectual property created by contractors?",
    a: "Yes. We can draft or review assignment, confidentiality, and work-for-hire provisions where appropriate to help document ownership of deliverables.",
  },
  {
    q: "Can you create a reusable contractor template?",
    a: "Yes. For repeat roles or recurring project types, we can build a base agreement that can be adapted for future engagements.",
  },
  {
    q: "Do you advise on worker classification?",
    a: "This service is primarily document-focused. Classification can involve fact-specific employment and tax considerations, so broader classification advice may require separate analysis or coordination with other counsel.",
  },
  {
    q: "Do you handle contractor or employment litigation?",
    a: "No. Ascent Legal provides transactional document support through this practice area and does not handle litigation.",
  },
  {
    q: "Does submitting an intake mean the firm represents me?",
    a: "No. An inquiry does not create an attorney-client relationship. Representation begins only after conflict clearance and a signed engagement agreement.",
  },
];

export default function TeamContractorDocsPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Contractor Agreements & Team Documents
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Put the working relationship in writing.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              Contractor agreements and project-based team documents for
              creators, brands, studios, agencies, and growing businesses. We
              help clarify scope, ownership, payment, confidentiality, and the
              rights attached to what gets created.
            </p>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
              Transactional counsel only. No litigation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <StartIntakeButton
                eventName="team_contractor_intake_clicked"
                placement="team_contractor_hero"
                label="Start Contractor Intake"
                className="inline-flex bg-[#0E2A47] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#B86A2E]"
              />

              <a
                href="#services"
                className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                See What We Handle
              </a>
            </div>
          </div>

          <div className="border border-[#0E2A47]/10 bg-white p-8 shadow-[0_24px_70px_rgba(14,42,71,0.07)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">
              Common Document Needs
            </p>

            <div className="mt-7 space-y-5">
              {[
                "Contractor agreements",
                "Creative services agreements",
                "IP assignments",
                "Confidentiality terms",
                "Work-for-hire language",
                "Reusable templates",
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

      <section id="services" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            How We Help
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Documents that match how the team actually works.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Common Use Cases
            </p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
              Especially useful when outside contributors touch the work.
            </h2>
          </div>

          <div className="space-y-4">
            {commonUseCases.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-[#0E2A47]/10 pb-4 text-sm leading-7 text-[#5F7386]"
              >
                <span className="text-[#B86A2E]">◆</span>
                <span>{item}</span>
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
            From role description to reusable agreement.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="border-t border-white/20 pt-5">
                <p className="text-xs font-bold tracking-[0.2em] text-[#D9894C]">
                  {item.step}
                </p>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
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
            Before you hire the contractor.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7"
              >
                <h3 className="font-serif text-xl">{item.q}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">
                  {item.a}
                </p>
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
            <Link
              href="/services/contracts-drafting"
              className="hover:text-[#B86A2E]"
            >
              Contract Drafting & Review →
            </Link>
            <Link
              href="/services/deal-desk-support"
              className="hover:text-[#B86A2E]"
            >
              Deal Desk Support →
            </Link>
            <Link
              href="/services/corporate-formation"
              className="hover:text-[#B86A2E]"
            >
              Business Formation →
            </Link>
            <Link
              href="/services/copyright"
              className="hover:text-[#B86A2E]"
            >
              Copyright & Licensing →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0E2A47]/10 bg-[#F7F6F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Ready to Clean Up the Contractor Docs?
          </p>

          <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Start with the role and deliverables.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
            Tell us who you are hiring, what they will do, what they will
            create, how they will be paid, and whether you need a new agreement
            or a review of an existing one.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="team_contractor_intake_clicked"
              placement="team_contractor_bottom"
              label="Start Contractor Intake"
              className="inline-flex bg-[#B86A2E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9F5925]"
            />

            <Link
              href="/contact"
              className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
            >
              Contact the Firm
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
