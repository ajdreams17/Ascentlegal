import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Anthony Paredes | Ascent Legal",
  description:
    "Anthony Paredes is a California attorney and co-founder of Ascent Legal. His Ascent practice focuses on trademarks, intellectual property, business formation, contracts, and brand strategy.",
  alternates: {
    canonical: "/attorneys/Anthony-Paredes",
  },
};

export default function AnthonyParedesPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:py-20">
        <Link
          href="/attorneys"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#B86A2E] hover:text-[#9F5925]"
        >
          ← Back to Attorneys
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[300px_1fr] lg:items-start">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E7E3DD]">
              <Image
                src="/attorneys/Anthony_Paredes.png"
                alt="Anthony Paredes"
                fill
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                priority
              />
            </div>

            <div className="border-x border-b border-[#0E2A47]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
                California Attorney
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5F7386]">
                State Bar of California No. 354465
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Co-Founder · Ascent Legal
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl">
              Anthony Paredes
            </h1>

            <p className="mt-5 text-lg font-medium text-[#5F7386]">
              Trademark · Intellectual Property · Business Formation · Contracts
            </p>

            <blockquote className="mt-8 border-l-2 border-[#B86A2E] pl-5 text-base italic leading-8 text-[#5F7386]">
              “I became a lawyer because I wanted to use legal knowledge the way
              I used marketing: as a tool to help people grow. My goal is to make
              the legal side of the business clear, practical, and built around
              where the client is trying to go.”
            </blockquote>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#455D72]">
              <p>
                Anthony Paredes is a California attorney and co-founder of Ascent
                Legal. With a background in marketing and business, he approaches
                legal strategy with an emphasis on brand value, commercial
                practicality, and the long-term structure behind a growing
                business.
              </p>

              <p>
                At Ascent Legal, Anthony focuses on trademark strategy,
                intellectual property, business formation, contracts, and brand
                protection. He works with creators, founders, production
                companies, and growing businesses on matters including trademark
                clearance and USPTO filings, entity formation, operating
                agreements, founder documentation, commercial agreements, and
                ownership of business and creative assets.
              </p>

              <p>
                His work is designed to help clients put the legal foundation in
                place before the next launch, collaboration, filing, or business
                expansion. He emphasizes clear explanations, practical drafting,
                and legal strategy that fits the client&apos;s actual business
                model rather than treating every matter as a one-size-fits-all
                transaction.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <section className="border border-[#0E2A47]/10 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
                  Ascent Legal Practice Focus
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#455D72]">
                  {[
                    "Trademark strategy & USPTO filings",
                    "Trademark clearance & portfolio management",
                    "Business formation & entity structure",
                    "Operating agreements & founder documentation",
                    "Commercial contracts",
                    "IP protection & brand strategy",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#B86A2E]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border border-[#0E2A47]/10 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
                  Education & Bar
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#455D72]">
                  <li>J.D., Chapman University, Fowler School of Law</li>
                  <li>LL.M. in Taxation, Loyola Law School</li>
                  <li>State Bar of California, No. 354465</li>
                </ul>
              </section>
            </div>

            <section className="mt-6 border border-[#0E2A47]/10 bg-[#FBFAF7] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
                Broader Legal Experience
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5F7386]">
                Anthony&apos;s broader legal experience includes pre-litigation
                employment matters and civil litigation, in addition to prior
                immigration work involving matters such as employment-based
                immigration, treaty visas, and humanitarian immigration
                petitions. That broader experience informs his approach to risk,
                negotiation, documentation, and client counseling.
              </p>
              <p className="mt-4 text-xs leading-5 text-[#7A8794]">
                Ascent Legal&apos;s public website is focused on transactional
                entertainment, intellectual property, contracts, and business
                services. Broader experience described here does not mean every
                type of matter is accepted by the firm.
              </p>
            </section>

            <div className="mt-10 bg-[#0E2A47] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9894C]">
                Work With Ascent Legal
              </p>
              <h2 className="mt-3 font-serif text-3xl">
                Building a brand, business, or deal?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                Tell us about the matter and the firm can determine whether it
                fits Ascent Legal&apos;s transactional practice.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex bg-[#B86A2E] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#9F5925]"
                >
                  Tell Us About Your Matter
                </Link>
                <Link
                  href="/services"
                  className="inline-flex border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#D9894C] hover:text-[#E0A06D]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
