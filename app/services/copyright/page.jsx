import Link from "next/link";
import StartIntakeButton from "../../../components/StartIntakeButton";

export const metadata = {
  title: "Copyright Registration & Licensing | Ascent Legal",
  description:
    "Copyright registration, ownership, work-for-hire, and licensing counsel for creators, studios, brands, and growing businesses. Transactional counsel only.",
  alternates: {
    canonical: "/services/copyright",
  },
};

const services = [
  {
    title: "Copyright Registration",
    text: "Identify the works worth registering, organize the filing strategy, and prepare applications for eligible creative assets.",
  },
  {
    title: "Ownership Strategy",
    text: "Clarify who owns the work when creators, collaborators, contractors, editors, designers, or production teams contribute.",
  },
  {
    title: "Licensing & Usage Rights",
    text: "Structure clear rights around term, territory, media, exclusivity, edits, sublicensing, renewals, and commercial use.",
  },
  {
    title: "Work-for-Hire & Assignments",
    text: "Draft and review agreements designed to document ownership and transfer rights where appropriate.",
  },
  {
    title: "Content Libraries & Portfolios",
    text: "Help creators and businesses organize copyright assets so registrations and licensing decisions are easier to manage over time.",
  },
  {
    title: "Deal Support",
    text: "Review copyright and licensing provisions inside brand deals, production agreements, collaborations, and other commercial contracts.",
  },
];

const works = [
  "Photography",
  "Video content",
  "Written works",
  "Marketing and website content",
  "Artwork and graphic designs",
  "Music and audiovisual works",
  "Digital content libraries",
  "Other eligible original works",
];

const process = [
  {
    step: "01",
    title: "Identify the work",
    text: "Tell us what you created, when it was created or published, who contributed, and how you plan to use it.",
  },
  {
    step: "02",
    title: "Confirm ownership",
    text: "We identify ownership questions, collaboration issues, or agreements that may affect the filing or licensing strategy.",
  },
  {
    step: "03",
    title: "Prepare the filing",
    text: "We organize the application information and submit the registration based on the agreed scope.",
  },
  {
    step: "04",
    title: "Use the rights strategically",
    text: "We help structure licensing, assignments, or related commercial terms as the work is monetized.",
  },
];

const faqs = [
  {
    q: "Do I automatically have copyright protection when I create something?",
    a: "Copyright protection generally arises when an original work is fixed in a tangible medium, but registration can provide important legal and practical benefits. We help evaluate whether and when registration makes sense for the work.",
  },
  {
    q: "What kinds of works can you help register?",
    a: "Depending on the work and filing requirements, we can assist with registrations involving photography, written content, audiovisual works, artwork, website and marketing content, and other eligible creative works.",
  },
  {
    q: "What if multiple people helped create the work?",
    a: "That can affect ownership and filing strategy. We review the relevant facts and agreements to determine whether assignments, work-for-hire language, collaboration terms, or other documentation should be addressed.",
  },
  {
    q: "Can you help license my content to a brand or company?",
    a: "Yes. We can structure licensing terms covering scope, duration, territory, media, exclusivity, compensation, edits, sublicensing, renewals, and related usage rights.",
  },
  {
    q: "Can you review work-for-hire language?",
    a: "Yes. We review and draft work-for-hire and assignment provisions for qualifying transactional matters and explain how the language affects ownership.",
  },
  {
    q: "Do you handle copyright lawsuits or infringement litigation?",
    a: "No. Ascent Legal provides transactional copyright and licensing services through this practice area and does not handle litigation.",
  },
  {
    q: "Does submitting an intake mean the firm represents me?",
    a: "No. An inquiry does not create an attorney-client relationship. Representation begins only after conflict clearance and a signed engagement agreement.",
  },
];

export default function CopyrightPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Copyright Registration & Licensing
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Protect the work. Clarify the rights.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              Copyright registration, ownership, and licensing support for
              creators, studios, brands, and growing businesses. We help make
              sure valuable creative assets are documented, protected, and
              commercially usable.
            </p>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#7A8794]">
              Transactional counsel only. No litigation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <StartIntakeButton
                eventName="copyright_intake_clicked"
                placement="copyright_hero"
                label="Start Copyright Intake"
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
              Common Creative Assets
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {works.map((item) => (
                <div
                  key={item}
                  className="border-b border-[#0E2A47]/10 pb-4 font-serif text-xl"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-[#7A8794]">
              Eligibility, filing method, and scope depend on the work and the
              facts surrounding creation, publication, and ownership.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            How We Help
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Registration is only part of the rights picture.
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

      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Ownership Matters
            </p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
              Make sure the rights match the business.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5F7386]">
            <p>
              A registration is more useful when ownership is clear. That can
              become complicated when a project involves collaborators,
              contractors, editors, designers, agencies, or production teams.
            </p>
            <p>
              We review the contracts and facts around the work so the ownership
              position is easier to understand before the asset is licensed,
              sold, distributed, or used in a commercial deal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">
            The Process
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            From creation to commercial use.
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
            Before you register or license the work.
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

      <section className="border-t border-[#0E2A47]/10 bg-[#F7F6F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Ready to Protect the Work?
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
            Start with the asset.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
            Tell us what you created, whether it has been published, who helped
            create it, and what you want to do with the rights.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="copyright_intake_clicked"
              placement="copyright_bottom"
              label="Start Copyright Intake"
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
