import Link from "next/link";
import StartIntakeButton from "../../components/StartIntakeButton";

export const metadata = {
  title: "Resources | Ascent Legal",
  description:
    "Practical legal guides and verified publications for creators, founders, brands, production companies, and growing businesses.",
  alternates: { canonical: "/resources" },
};

const topicChips = [
  { label: "Creator Contracts", href: "#creator-contracts" },
  { label: "Trademarks", href: "#trademarks" },
  { label: "Copyright + Licensing", href: "#copyright" },
  { label: "Business Formation", href: "#formation" },
  { label: "Contractor IP", href: "#contracts" },
];

const guides = [
  {
    slug: "creator-contract-usage-rights",
    title: "Creator Contract Usage Rights: What Are You Actually Giving the Brand?",
    description:
      "Understand term, territory, media, edits, sublicensing, paid media, ownership, and compensation in creator usage-rights clauses.",
    readTime: "7 min",
    badge: "Creator Contracts",
    topic: "creator-contracts",
  },
  {
    slug: "whitelisting-paid-media-creator-contracts",
    title: "Whitelisting and Paid Media in Creator Contracts",
    description:
      "What creators should know about paid amplification, dark posts, account access, approvals, duration, and compensation.",
    readTime: "7 min",
    badge: "Creator Contracts",
    topic: "creator-contracts",
  },
  {
    slug: "exclusivity-creator-brand-deals",
    title: "Exclusivity in Creator Brand Deals: How Broad Is Too Broad?",
    description:
      "How competitor definitions, product categories, duration, channels, and carve-outs can affect future opportunities.",
    readTime: "6 min",
    badge: "Creator Contracts",
    topic: "creator-contracts",
  },
  {
    slug: "creator-management-agreement-review",
    title: "Creator Management Agreements: Terms to Review Before You Sign",
    description:
      "A practical look at commission, scope, exclusivity, authority, post-term commissions, termination, expenses, and conflicts.",
    readTime: "7 min",
    badge: "Management Agreements",
    topic: "creator-contracts",
  },
  {
    slug: "morality-clause-creator-contracts",
    title: "Morality Clauses in Creator Contracts: What Can Trigger Termination?",
    description:
      "Understand conduct triggers, discretion, notice, cure rights, termination remedies, and payment consequences.",
    readTime: "6 min",
    badge: "Creator Contracts",
    topic: "creator-contracts",
  },
  {
    slug: "perpetuity-creator-contracts",
    title: "What Does Perpetuity Mean in a Creator Contract?",
    description:
      "A practical guide to perpetual usage rights, paid media, whitelisting, sublicensing, and related contract terms.",
    readTime: "6 min",
    badge: "Creator Contracts",
    topic: "creator-contracts",
  },
  {
    slug: "how-to-trademark-your-logo",
    title: "How to Trademark Your Startup Logo",
    description:
      "A practical overview of federal logo trademark filings, clearance, classification, USPTO review, and timing.",
    readTime: "6 min",
    badge: "Trademark",
    topic: "trademarks",
  },
  {
    slug: "trademark-101",
    title: "Trademark 101: What Every Small Business Should Know",
    description:
      "A practical introduction to distinctiveness, clearance, federal applications, examination, and maintenance.",
    readTime: "7 min",
    badge: "Trademark",
    topic: "trademarks",
  },
  {
    slug: "finding-right-trademark-copyright-lawyer",
    title: "Finding the Right Trademark & Copyright Lawyer",
    description:
      "Questions to consider when evaluating counsel for a trademark, copyright, licensing, or related IP matter.",
    readTime: "7 min",
    badge: "IP",
    topic: "copyright",
  },
  {
    slug: "llc-vs-trademark-business-name",
    title: "LLC vs. Trademark: What Actually Protects Your Business Name?",
    description:
      "Entity formation and trademark registration do different jobs. Learn how those systems can interact.",
    readTime: "6 min",
    badge: "Trademark + Formation",
    topic: "formation",
  },
  {
    slug: "work-for-hire-vs-copyright-assignment",
    title: "Work-for-Hire vs. Copyright Assignment for Contractors",
    description:
      "Why paying a contractor does not always mean you own the work—and how work-for-hire and assignment language differ.",
    readTime: "6 min",
    badge: "Contractor IP",
    topic: "contracts",
  },
];

const authority = [
  {
    eyebrow: "OC Lawyer",
    title: "Creator Economy Legal Risks",
    description:
      "April Paredes on IP ownership, brand-deal contract terms, FTC disclosure considerations, and business structure in the creator economy.",
    href: "https://www.virtualonlineeditions.com/article/Creator+Economy+Legal+Risks/5132319/862733/article.html",
  },
  {
    eyebrow: "Daily Journal",
    title: "Building Compliant Partnerships in the Content Creator Economy",
    description:
      "A Daily Journal discussion featuring April Paredes on legal issues shaping creator-brand partnerships and the growing creator economy.",
    href: "https://www.dailyjournal.com/article/387166-building-compliant-partnerships-in-the-content-creator-economy",
  },
  {
    eyebrow: "Beverly Hills Bar Association · CLE",
    title: "Contract Drafting: Creator Partnership & Licensing Agreements",
    description:
      "A BHBA continuing legal education program featuring April Paredes on creator partnership and licensing agreements.",
    href: "https://bhba.org/speakers/april-paredes/",
  },
  {
    eyebrow: "Beverly Hills Bar Association · CLE",
    title: "Lights, Camera, Paperwork: Navigating Immigration & Entertainment Law in Hollywood",
    description:
      "A BHBA continuing legal education program featuring April Paredes at the intersection of entertainment transactions and immigration issues.",
    href: "https://bhba.org/cle/lights-camera-paperwork-navigating-immigration-entertainment-law-in-hollywo/",
  },
];

const sections = [
  {
    id: "creator-contracts",
    label: "Creator Contracts & Brand Deals",
    serviceHref: "/services/creator-contract-review",
    serviceLabel: "Explore Creator Contract Review",
  },
  {
    id: "trademarks",
    label: "Trademarks",
    serviceHref: "/services/trademark",
    serviceLabel: "Explore Trademark Services",
  },
  {
    id: "copyright",
    label: "Copyright & Licensing",
    serviceHref: "/services/copyright",
    serviceLabel: "Explore Copyright & Licensing",
  },
  {
    id: "formation",
    label: "Business Formation",
    serviceHref: "/services/corporate-formation",
    serviceLabel: "Explore Business Formation",
  },
  {
    id: "contracts",
    label: "Contracts & Contractor IP",
    serviceHref: "/services/contracts-drafting",
    serviceLabel: "Explore Contract Drafting",
  },
];

function GuideCard({ guide }) {
  return (
    <article className="border border-[#0E2A47]/10 bg-white p-7 transition hover:border-[#B86A2E]/50">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#B86A2E]">
        <span>{guide.badge}</span>
        <span className="text-[#0E2A47]/20">•</span>
        <span className="text-[#7A8794]">{guide.readTime}</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl leading-8 text-[#0E2A47]">
        {guide.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#5F7386]">{guide.description}</p>
      <Link
        href={`/resources/${guide.slug}`}
        className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[#0E2A47] hover:text-[#B86A2E]"
      >
        Read Guide →
      </Link>
    </article>
  );
}

export default function ResourcesPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Resources
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Practical legal guides for the deals, brands, and businesses you are building.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5F7386]">
            General information on creator contracts, trademarks, copyright,
            commercial agreements, contractor IP, and business formation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {topicChips.map((topic) => (
              <a
                key={topic.label}
                href={topic.href}
                className="border border-[#0E2A47]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#455D72] hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                {topic.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Featured Guides
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {guides.slice(0, 3).map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => {
        const sectionGuides = guides.filter((guide) => guide.topic === section.id);
        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-t border-[#0E2A47]/10"
          >
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
                    Legal Guides
                  </p>
                  <h2 className="mt-3 font-serif text-4xl tracking-[-0.025em]">
                    {section.label}
                  </h2>
                </div>
                <Link
                  href={section.serviceHref}
                  className="text-xs font-bold uppercase tracking-[0.15em] text-[#0E2A47] hover:text-[#B86A2E]"
                >
                  {section.serviceLabel} →
                </Link>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sectionGuides.length ? (
                  sectionGuides.map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))
                ) : (
                  <div className="border border-[#0E2A47]/10 bg-white p-7 text-sm leading-7 text-[#5F7386]">
                    Additional guides are in development. For a specific matter,
                    use the firm intake or contact page.
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-y border-[#0E2A47]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Published & Presented
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
            Verified publications and continuing legal education.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {authority.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7 transition hover:border-[#B86A2E]/50"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B86A2E]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-8">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5F7386]">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.14em]">
                  View Source →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBFAF7]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            About Templates
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Legal documents work best when they match the actual ownership, deal, and jurisdiction.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#5F7386]">
            We do not publish a generic operating-agreement download as a
            substitute for legal drafting. If you need an operating agreement,
            founder document, or business contract, tell us about the structure
            and the firm can determine the appropriate scope.
          </p>
          <Link
            href="/services/corporate-formation"
            className="mt-6 inline-flex bg-[#0E2A47] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#B86A2E]"
          >
            Business Formation & Founder Documents
          </Link>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">
            Specific Matter?
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
            General information is not a substitute for advice about your agreement or business.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
            Use the guided intake to share a limited overview for attorney review.
          </p>
          <StartIntakeButton
            eventName="resources_intake_clicked"
            placement="resources_bottom"
            label="Start Guided Intake"
            className="mt-7 inline-flex bg-[#B86A2E] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-[#9F5925]"
          />
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-5 text-white/50">
            These resources are general information only and are not legal advice.
            Reading them does not create an attorney-client relationship.
          </p>
        </div>
      </section>
    </main>
  );
}
