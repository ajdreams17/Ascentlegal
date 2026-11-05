import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Trademark Registration & Filing | Ascent Legal",
  description:
    "Trademark search, strategy, USPTO filing, Office Action support, and maintenance for creators, founders, brands, and growing businesses. Transactional counsel only.",
  alternates: {
    canonical: "/services/trademark",
  },
};

const reviewAreas = [
  {
    title: "Clearance & Strategy",
    text: "Search the federal register and relevant marketplace sources, identify potential conflicts, and develop a filing strategy before submitting an application.",
  },
  {
    title: "Application Preparation",
    text: "Select the filing basis, identify appropriate classes, and prepare goods and services descriptions that fit the brand and business.",
  },
  {
    title: "USPTO Filing",
    text: "Prepare and file the application, then track the matter through examination and publication.",
  },
  {
    title: "Office Action Support",
    text: "Evaluate USPTO correspondence and handle procedural or substantive responses when included in the engagement.",
  },
  {
    title: "Intent-to-Use Filings",
    text: "Manage post-filing steps for intent-to-use applications, including extensions and statements of use when needed.",
  },
  {
    title: "Maintenance",
    text: "Track key post-registration deadlines and assist with maintenance and renewal filings to keep registrations active.",
  },
];

const packages = [
  {
    name: "Trademark Search & Strategy",
    price: "$500",
    description:
      "For clients who want to evaluate a mark before deciding whether to file.",
    bullets: [
      "Federal trademark search",
      "Common-law and marketplace review",
      "Conflict and registrability analysis",
      "Class and filing strategy",
      "Plain-English recommendations",
    ],
    note: "USPTO filing fees are not included.",
  },
  {
    name: "Single-Class Trademark Filing",
    price: "$1,500",
    description:
      "Attorney-managed filing for one mark in one class, subject to engagement scope.",
    bullets: [
      "Clearance review",
      "Application preparation",
      "Goods/services and class strategy",
      "USPTO filing",
      "Status updates during examination",
    ],
    note: "USPTO base application fee is currently $350 per class. Additional USPTO fees may apply depending on the application.",
    featured: true,
  },
  {
    name: "Multi-Class Trademark Filing",
    price: "$2,500",
    description:
      "For brands whose goods or services span multiple trademark classes.",
    bullets: [
      "Clearance review",
      "Up to three classes",
      "Multi-class filing strategy",
      "Application preparation and filing",
      "Status updates during examination",
    ],
    note: "USPTO fees are charged per class and are separate from attorney fees.",
  },
];

const process = [
  {
    step: "01",
    title: "Tell us about the brand",
    text: "Share the mark, what you sell or plan to sell, your launch status, and any filing deadline.",
  },
  {
    step: "02",
    title: "Search + strategy",
    text: "We evaluate the proposed mark and identify filing considerations before the application is submitted.",
  },
  {
    step: "03",
    title: "Prepare + file",
    text: "We prepare the application, confirm the filing information with you, and submit it to the USPTO.",
  },
  {
    step: "04",
    title: "Monitor the application",
    text: "We track the application through examination and address next steps as the USPTO reviews the filing.",
  },
];

const faqs = [
  {
    q: "How much is the USPTO filing fee?",
    a: "The USPTO's current base application fee is $350 per class for qualifying electronically filed applications. Additional USPTO fees can apply depending on the application, filing basis, and how goods or services are identified.",
  },
  {
    q: "How long does the trademark process take?",
    a: "USPTO processing times change. As of October 1, 2026, the USPTO reported an average of approximately 4.3 months to a first examining action and approximately 10.4 months from filing to registration or abandonment. Individual applications may take more or less time.",
  },
  {
    q: "Does forming an LLC protect my brand name?",
    a: "Not in the same way. Entity registration and federal trademark registration serve different purposes. We can evaluate whether federal trademark protection makes sense for the name or brand you are using.",
  },
  {
    q: "Do I need more than one class?",
    a: "It depends on the goods and services connected to the mark. We help identify the classes that fit the business and discuss whether additional classes are worth the added filing cost.",
  },
  {
    q: "What if the USPTO issues an Office Action?",
    a: "We review the Office Action and explain the available response options. Attorney fees for a response depend on the issue and the scope of the engagement.",
  },
  {
    q: "Can you help after my trademark registers?",
    a: "Yes. We can assist with maintenance and renewal filings and help keep track of important USPTO deadlines.",
  },
  {
    q: "Do you handle trademark litigation?",
    a: "No. Ascent Legal provides transactional trademark services through this practice area and does not handle litigation.",
  },
  {
    q: "Does submitting an intake mean you represent me?",
    a: "No. An inquiry does not create an attorney-client relationship. Representation begins only after conflict clearance and a signed engagement agreement.",
  },
];

export default function TrademarkPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Trademark Registration
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Protect the name behind the business.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              Trademark search, strategy, and USPTO filing for creators,
              founders, brands, and growing businesses. We help you understand
              the filing path, identify potential conflicts, and move through
              the registration process with a clear plan.
            </p>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
              Transactional counsel only. No litigation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <StartIntakeButton
                eventName="trademark_intake_clicked"
                placement="trademark_hero"
                label="Start Trademark Intake"
                className="inline-flex bg-[#0E2A47] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#B86A2E]"
              />

              <a
                href="#pricing"
                className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                View Flat Fees
              </a>
            </div>
          </div>

          <div className="border border-[#0E2A47]/10 bg-white p-8 shadow-[0_24px_70px_rgba(14,42,71,0.07)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">
              Filing Snapshot
            </p>

            <div className="mt-7 border-b border-[#0E2A47]/10 pb-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7A8794]">USPTO Base Fee</p>
              <p className="mt-2 font-serif text-4xl">$350</p>
              <p className="mt-2 text-sm text-[#5F7386]">per class for a qualifying base application</p>
            </div>

            <div className="py-6 border-b border-[#0E2A47]/10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7A8794]">Average First Action</p>
              <p className="mt-2 font-serif text-4xl">4.3 months</p>
              <p className="mt-2 text-sm text-[#5F7386]">USPTO data updated October 1, 2026</p>
            </div>

            <p className="mt-6 text-xs leading-5 text-[#7A8794]">
              USPTO fees and processing times can change. Additional government
              fees may apply depending on filing basis and application details.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            What We Handle
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            From clearance through registration and maintenance.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewAreas.map((item) => (
              <div key={item.title} className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Flat-Fee Options
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Know the scope before the work begins.
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
                <p className="mt-4 font-serif text-4xl text-[#B86A2E]">{item.price}</p>
                <p className="mt-4 text-sm leading-6 text-[#5F7386]">{item.description}</p>

                <ul className="mt-6 space-y-3 text-sm text-[#0E2A47]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-[#B86A2E]">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-[#0E2A47]/10 pt-5 text-xs leading-5 text-[#7A8794]">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-xs leading-5 text-[#7A8794]">
            Pricing shown is for typical matters within the stated scope and
            may change based on complexity, number of marks or classes, filing
            basis, deadlines, or additional work. Attorney fees are separate
            from USPTO fees unless expressly stated in an engagement agreement.
          </p>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">
            The Process
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            A clear path from idea to application.
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
            Before you file.
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
            <Link href="/services/copyright" className="text-[#0E2A47] hover:text-[#B86A2E]">Copyright & Licensing →</Link>
            <Link href="/services/corporate-formation" className="text-[#0E2A47] hover:text-[#B86A2E]">Business Formation →</Link>
            <Link href="/services/creator-contract-review" className="text-[#0E2A47] hover:text-[#B86A2E]">Creator Contract Review →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0E2A47]/10 bg-[#F7F6F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Ready to Protect the Brand?
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Start with the mark.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
            Tell us the name or logo you want to protect, what the business
            offers, whether you are already using the mark, and any filing or
            launch deadline.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="trademark_intake_clicked"
              placement="trademark_bottom"
              label="Start Trademark Intake"
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
