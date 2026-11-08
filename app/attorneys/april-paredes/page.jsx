import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "April Paredes | Ascent Legal",
  description:
    "April Paredes is a business and entertainment attorney and co-founder of Ascent Legal. Her practice focuses on creator and brand deals, entertainment agreements, licensing, copyright, and commercial contracts.",
  alternates: {
    canonical: "/attorneys/april-paredes",
  },
};

export default function AprilParedesPage() {
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
                src="/attorneys/April_Paredes.jpg"
                alt="April Paredes"
                fill
                className="object-cover"
                style={{ objectPosition: "top" }}
                priority
              />
            </div>

            <div className="border-x border-b border-[#0E2A47]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
                Business & Entertainment Attorney
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5F7386]">
                Co-Founder · Ascent Legal
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Co-Founder · Entertainment & Contracts
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl">
              April Paredes
            </h1>

            <p className="mt-5 text-lg font-medium text-[#5F7386]">
              Entertainment · Creator & Brand Deals · Licensing · Copyright · Contracts
            </p>

            <blockquote className="mt-8 border-l-2 border-[#B86A2E] pl-5 text-base italic leading-8 text-[#5F7386]">
              “The goal is to help clients understand the rights, obligations,
              and business tradeoffs in the agreement before they sign it.”
            </blockquote>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#455D72]">
              <p>
                April Paredes is a business and entertainment attorney and
                co-founder of Ascent Legal. Her practice focuses on transactions
                involving creators, production companies, brands, media
                businesses, and growing companies.
              </p>

              <p>
                Before co-founding Ascent Legal, April gained experience at
                Sheppard Mullin Richter & Hampton LLP, where she worked on
                transactional matters involving the creation, production, and
                distribution of audiovisual content, including television,
                feature films, and podcasts. Her work included rights
                acquisition, licensing, and brand collaboration matters.
              </p>

              <p>
                At Ascent Legal, April advises clients on creator and influencer
                agreements, brand deals, production and media agreements,
                licensing, copyright, usage rights, rights acquisition, and
                commercial contracts. She also has experience working with
                startups and businesses through formation, growth, and other
                lifecycle transactions.
              </p>

              <p>
                Her approach emphasizes clear contract analysis, practical
                negotiation strategy, and helping clients understand how a deal
                affects ownership, compensation, exclusivity, usage rights,
                termination, and future opportunities.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <section className="border border-[#0E2A47]/10 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">
                  Practice Focus
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#455D72]">
                  {[
                    "Creator, influencer & brand agreements",
                    "Production & media agreements",
                    "Content licensing & usage rights",
                    "Copyright & ownership strategy",
                    "Rights acquisition & collaborations",
                    "Commercial contracts",
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
                  Education & Experience
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#455D72]">
                  <li>J.D., Georgetown University Law Center</li>
                  <li>M.S., Communication Management, University of Southern California</li>
                  <li>Former Associate, Sheppard Mullin Richter & Hampton LLP</li>
                  <li>Entertainment, Media & Technology experience</li>
                </ul>
              </section>
            </div>

            <div className="mt-10 bg-[#0E2A47] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9894C]">
                Have a Deal to Review?
              </p>
              <h2 className="mt-3 font-serif text-3xl">
                Understand the agreement before you sign.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                Tell us about the agreement, project, or transaction and the
                firm can determine whether it fits Ascent Legal's practice and
                what the next step may be.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services/creator-contract-review"
                  className="inline-flex bg-[#B86A2E] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#9F5925]"
                >
                  Creator Contract Review
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#D9894C] hover:text-[#E0A06D]"
                >
                  Contact the Firm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
