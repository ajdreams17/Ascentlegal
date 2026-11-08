import Link from "next/link";
import Image from "next/image";
import StartIntakeButton from "../../components/StartIntakeButton";
import TrackedLink from "../../components/TrackedLink";

export const metadata = {
  title: "About Ascent Legal",
  description:
    "Ascent Legal is a Long Beach transactional law firm serving creators, brands, production companies, founders, and growing businesses in entertainment, intellectual property, contracts, and business matters.",
  alternates: { canonical: "/about" },
};

const founders = [
  {
    name: "Anthony Paredes",
    role: "Co-Founder · Trademark & Business Formation",
    slug: "Anthony-Paredes",
    photo: "/attorneys/Anthony_Paredes.png",
    objectPosition: "center 15%",
    focus: ["Trademarks & IP", "Business Formation", "Commercial Contracts"],
  },
  {
    name: "April Paredes",
    role: "Co-Founder · Entertainment & Contracts",
    slug: "april-paredes",
    photo: "/attorneys/April_Paredes.jpg",
    objectPosition: "top",
    focus: ["Entertainment Agreements", "Creator & Brand Deals", "Licensing & Copyright"],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_.9fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              About Ascent Legal
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Legal counsel built around the business behind the work.
            </h1>
          </div>

          <div className="self-end">
            <p className="text-lg leading-8 text-[#5F7386]">
              Ascent Legal is a brother-and-sister law firm serving creators,
              brands, production companies, founders, and growing businesses on
              transactional entertainment, intellectual property, contracts,
              and business matters.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5F7386]">
              We focus on helping clients understand the deal, protect the rights
              attached to their work and brand, and put cleaner legal structure
              behind what they are building.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Business-First", "We look at the legal issue in the context of the client's actual business model, deal, and growth plan."],
              ["Plain-English", "We explain the important provisions, tradeoffs, and next steps without unnecessary legal jargon."],
              ["Built to Scale", "We help clients create agreements, ownership structures, and repeatable systems that can support future growth."],
            ].map(([title, text]) => (
              <div key={title} className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B86A2E]">
                  Our Approach
                </p>
                <h2 className="mt-3 font-serif text-2xl">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="border-t border-[#0E2A47]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Published & Presented
          </p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
                Legal insight beyond the client matter.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5F7386]">
                Ascent Legal attorneys contribute to professional publications
                and continuing legal education on creator-economy,
                entertainment, licensing, and contract issues.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  source: "Daily Journal",
                  title: "Building Compliant Partnerships in the Content Creator Economy",
                  href: "https://www.dailyjournal.com/article/387166-building-compliant-partnerships-in-the-content-creator-economy",
                },
                {
                  source: "OC Lawyer",
                  title: "Creator Economy Legal Risks",
                  href: "https://www.virtualonlineeditions.com/article/Creator+Economy+Legal+Risks/5132319/862733/article.html",
                },
                {
                  source: "Beverly Hills Bar Association",
                  title: "Contract Drafting: Creator Partnership & Licensing Agreements",
                  href: "https://bhba.org/speakers/april-paredes/",
                },
                {
                  source: "Beverly Hills Bar Association",
                  title: "Lights, Camera, Paperwork: Navigating Immigration & Entertainment Law in Hollywood",
                  href: "https://bhba.org/cle/lights-camera-paperwork-navigating-immigration-entertainment-law-in-hollywo/",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 border border-[#0E2A47]/10 bg-[#FBFAF7] p-6 transition hover:border-[#B86A2E]/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B86A2E]">
                      {item.source}
                    </p>
                    <h3 className="mt-2 font-serif text-xl leading-7 text-[#0E2A47]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-[#0E2A47]">
                    View →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
                Why Ascent
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
                Two complementary backgrounds. One transactional practice.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#455D72]">
              <p>
                April brings an entertainment and media background focused on
                transactions involving creators, content, production, licensing,
                and brand relationships. Anthony brings a marketing and business
                background to trademark strategy, intellectual property, entity
                structure, and commercial agreements.
              </p>
              <p>
                Ascent Legal was built to combine those perspectives for clients
                whose creative work, brand, contracts, and business structure are
                often closely connected. The goal is practical legal support that
                helps clients make informed decisions before the deal is signed,
                the filing is made, or the business takes its next step.
              </p>
              <p>
                The firm's public practice is transactional. We do not market
                litigation services through Ascent Legal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Meet the Founders
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
            Counsel for the deal and the business behind it.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.slug} className="overflow-hidden border border-[#0E2A47]/10 bg-[#F7F6F3]">
                <div className="grid sm:grid-cols-[.9fr_1.1fr]">
                  <div className="relative min-h-[360px] bg-[#E7E3DD]">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: founder.objectPosition }}
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="font-serif text-3xl">{founder.name}</h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#B86A2E]">
                      {founder.role}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm leading-6 text-[#5F7386]">
                      {founder.focus.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="text-[#B86A2E]">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/attorneys/${founder.slug}`}
                      className="mt-7 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[#0E2A47] hover:text-[#B86A2E]"
                    >
                      View Full Profile →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_.9fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Long Beach Office
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-[-0.02em] sm:text-4xl">
              Based in Long Beach. Serving clients across California and beyond where appropriate.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F7386]">
              Ascent Legal is located at 3780 Kilroy Airport Way, Suite 200,
              Long Beach, CA 90806. Meetings are by appointment.
            </p>
          </div>

          <div className="border border-[#0E2A47]/10 bg-white p-6">
            <p className="text-sm leading-7 text-[#5F7386]">
              <strong className="text-[#0E2A47]">Phone:</strong> (714) 203-3535
              <br />
              <strong className="text-[#0E2A47]">Email:</strong> info@ascentlegal.io
              <br />
              <strong className="text-[#0E2A47]">Service area:</strong> Long Beach,
              Los Angeles County, Orange County, California, and qualifying
              federal trademark and copyright matters nationwide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">
            Work With Ascent Legal
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
            Tell us about what you are building, protecting, or signing.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            Share a brief overview of the matter and we can determine whether it
            fits the firm's transactional practice and what the appropriate next
            step may be.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StartIntakeButton
              eventName="about_intake_clicked"
              placement="about_bottom"
              label="Start Guided Intake"
              className="inline-flex bg-[#B86A2E] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#9F5925]"
            />
            <TrackedLink
              href="/contact"
              eventName="contact_clicked"
              placement="about_bottom"
              className="inline-flex border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#D9894C] hover:text-[#E0A06D]"
            >
              Contact the Firm
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
