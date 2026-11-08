import TrackedLink from "../../components/TrackedLink";
import StartIntakeButton from "../../components/StartIntakeButton";

export const metadata = {
  title: "Legal Services for Creators, Brands & Businesses | Ascent Legal",
  description:
    "Transactional legal services for creators, brands, agencies, studios, founders, and growing companies. Creator contracts, entertainment, trademarks, copyright, business contracts, formation, and deal desk support.",
  alternates: {
    canonical: "/services",
  },
};

const groups = [
  {
    eyebrow: "Deals",
    title: "Negotiate and document the deal.",
    description:
      "For agreements, recurring deal flow, creator partnerships, commercial relationships, and project-based teams.",
    services: [
      {
        title: "Creator Contract Review",
        desc: "Focused review and negotiation for creator, influencer, UGC, sponsorship, and brand deal agreements.",
        href: "/services/creator-contract-review",
        cta: "Review a creator contract",
      },
      {
        title: "Entertainment & Brand Deals",
        desc: "Drafting and negotiation for sponsorships, production, talent, licensing, and creator-economy transactions.",
        href: "/services/entertainment",
        cta: "Explore entertainment counsel",
      },
      {
        title: "Contract Drafting & Review",
        desc: "Commercial agreements, collaborations, service contracts, NDAs, statements of work, and redlines.",
        href: "/services/contracts-drafting",
        cta: "Explore contract services",
      },
      {
        title: "Deal Desk Support",
        desc: "On-call review, drafting, negotiation, templates, and workflow support for businesses with repeat deal volume.",
        href: "/services/deal-desk-support",
        cta: "Explore deal desk support",
      },
      {
        title: "Contractor Agreements",
        desc: "Independent contractor, creative services, IP assignment, confidentiality, and work-for-hire documentation.",
        href: "/services/team-contractor-docs",
        cta: "Explore contractor documents",
      },
    ],
  },
  {
    eyebrow: "Protect",
    title: "Protect the brand and creative work.",
    description:
      "For names, content, ownership, licensing, registrations, and the rights attached to creative assets.",
    services: [
      {
        title: "Trademark Registration",
        desc: "Clearance, filing strategy, USPTO applications, Office Action support, and maintenance.",
        href: "/services/trademark",
        cta: "Explore trademark services",
      },
      {
        title: "Copyright & Licensing",
        desc: "Registration, ownership, work-for-hire, assignments, licensing, and commercial usage rights.",
        href: "/services/copyright",
        cta: "Explore copyright services",
      },
    ],
  },
  {
    eyebrow: "Build",
    title: "Build the business on a cleaner foundation.",
    description:
      "For entity formation, founder alignment, governance, ownership, and the legal structure behind the business.",
    services: [
      {
        title: "Business Formation",
        desc: "LLCs, corporations, operating agreements, bylaws, founder documents, governance, and entity cleanup.",
        href: "/services/corporate-formation",
        cta: "Explore business formation",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
                Transactional Legal Services
              </p>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Legal support for the deal, the rights, and the business behind them.
              </h1>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#5F7386]">
                Ascent Legal works with creators, brands, agencies, studios,
                founders, and growing companies on transactional entertainment,
                intellectual property, contracts, and business matters.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <StartIntakeButton
                  eventName="services_hub_intake_clicked"
                  placement="services_hero"
                  label="Start Guided Intake"
                  className="inline-flex bg-[#0E2A47] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#B86A2E]"
                />

                <TrackedLink
                  href="/contact"
                  eventName="contact_clicked"
                  placement="services_hero"
                  className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
                >
                  Contact the Firm
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {groups.map((group, index) => (
        <section
          key={group.eyebrow}
          className={index % 2 === 0 ? "bg-white" : "border-y border-[#0E2A47]/10 bg-[#FBFAF7]"}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
                  {group.eyebrow}
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl">
                  {group.title}
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#5F7386]">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {group.services.map((service) => (
                  <TrackedLink
                    key={service.href}
                    href={service.href}
                    eventName="service_page_clicked"
                    placement={`services_hub_${group.eyebrow.toLowerCase()}`}
                    className="group border border-[#0E2A47]/10 bg-[#F7F6F3] p-7 transition hover:border-[#B86A2E]/60 hover:bg-white"
                  >
                    <h3 className="font-serif text-2xl">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5F7386]">
                      {service.desc}
                    </p>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#B86A2E]">
                      {service.cta} <span className="ml-2 transition group-hover:ml-3">→</span>
                    </p>
                  </TrackedLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">
            Not Sure Where to Start?
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
            Tell us about the matter. We&apos;ll route the inquiry from there.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            The guided intake can collect preliminary information about the
            agreement, brand, creative work, or business issue before our team
            reviews whether the matter fits the firm.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="services_hub_intake_clicked"
              placement="services_bottom"
              label="Start Guided Intake"
              className="inline-flex bg-[#B86A2E] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#9F5925]"
            />
            <TrackedLink
              href="/contact"
              eventName="contact_clicked"
              placement="services_bottom"
              className="inline-flex border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#D9894C] hover:text-[#E0A06D]"
            >
              Contact the Firm
            </TrackedLink>
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-xs leading-5 text-white/50">
            Submitting an inquiry does not create an attorney-client relationship.
            Representation begins only after conflict clearance and a written engagement agreement.
          </p>
        </div>
      </section>
    </main>
  );
}
