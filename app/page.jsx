import Link from "next/link";
import FounderSection from "../components/FounderSection";

const practices = [
  {
    title: "Entertainment & Brand Deals",
    description:
      "Contracts, talent deals, sponsorships, production, licensing, and more.",
    href: "/services/entertainment",
    icon: "◇",
  },
  {
    title: "Intellectual Property",
    description:
      "Trademarks, copyrights, licensing, IP strategy, and brand protection.",
    href: "/ip",
    icon: "△",
  },
  {
    title: "Business & Contracts",
    description:
      "Commercial agreements, consulting agreements, vendor contracts, and more.",
    href: "/services/contracts-drafting",
    icon: "□",
  },
  {
    title: "Corporate & Formation",
    description:
      "Entity formation, governance, business structure, and ongoing counsel.",
    href: "/services/corporate-formation",
    icon: "○",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#F7F6F3] text-[#0E2A47]">

      {/* HERO */}
      <section className="grid min-h-[720px] lg:grid-cols-2">
        <div className="flex items-center bg-[#F7F6F3] px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Creators / Brands / Businesses
            </p>

            <h1 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] text-[#0E2A47] sm:text-6xl lg:text-7xl">
              Legal counsel for what&apos;s{" "}
              <span className="italic text-[#B86A2E]">next.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#5F7386]">
              Sophisticated legal counsel with practical, business-first advice
              — built for creators, production companies, brands, and growing
              businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#B86A2E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#9F5925]"
              >
                Work With Us
                <span className="ml-3">→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center border border-[#0E2A47]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[520px] bg-cover bg-center lg:min-h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(9,31,52,0.12), rgba(9,31,52,0.32)), url('/ascent-la.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#091F34]/55 via-transparent to-transparent" />

          <div className="absolute bottom-10 left-8 right-8 sm:bottom-14 sm:left-12">
            <p className="max-w-md font-serif text-3xl italic leading-tight text-white sm:text-4xl">
              Higher Perspective.
              <br />
              Stronger Outcomes.
            </p>

            <div className="mt-5 h-[2px] w-20 bg-[#C97832]" />

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
              Ascent Legal
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              What We Do
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {practices.map((practice, index) => (
              <div
                key={practice.title}
                className={`flex flex-col ${
                  index !== 0 ? "lg:border-l lg:border-[#0E2A47]/10 lg:pl-8" : ""
                } ${index !== practices.length - 1 ? "lg:pr-8" : ""}`}
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center border border-[#B86A2E]/50 font-serif text-2xl text-[#B86A2E]">
                  {practice.icon}
                </div>

                <h2 className="font-serif text-2xl leading-tight text-[#0E2A47]">
                  {practice.title}
                </h2>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#5F7386]">
                  {practice.description}
                </p>

                <Link
                  href={practice.href}
                  className="mt-7 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-[#B86A2E]"
                >
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#0E2A47] text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[430px] overflow-hidden bg-[#091F34] lg:min-h-[590px]">
            <div className="absolute -left-20 top-20 h-80 w-80 rotate-45 border border-[#B86A2E]/30" />
            <div className="absolute left-28 top-8 h-96 w-96 rotate-45 border border-white/10" />
            <div className="absolute bottom-[-90px] right-[-50px] h-80 w-80 rotate-45 bg-[#B86A2E]/10" />

            <div className="absolute bottom-12 left-8 right-8 sm:left-12">
              <div className="h-[2px] w-16 bg-[#B86A2E]" />
              <p className="mt-5 max-w-sm font-serif text-2xl italic leading-relaxed text-white/85">
                Modern counsel for creative and entrepreneurial businesses.
              </p>
            </div>
          </div>

          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C97832]">
                About Ascent Legal
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl">
                Strategic. Practical.
                <br />
                Built for the real world.
              </h2>

              <p className="mt-7 text-base leading-8 text-white/70">
                Ascent Legal provides modern, business-minded legal counsel to
                creators, companies, brands, and entrepreneurs navigating
                contracts, intellectual property, entertainment, and business
                growth.
              </p>

              <p className="mt-5 text-base leading-8 text-white/70">
                We focus on practical advice, clear communication, and legal
                strategy that supports the business behind the deal.
              </p>

              <Link
                href="/about"
                className="mt-9 inline-flex border border-[#C97832] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C97832] transition hover:bg-[#C97832] hover:text-white"
              >
                Our Approach <span className="ml-3">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REAL ATTORNEY SECTION */}
      <FounderSection />

      {/* WHO WE SERVE */}
      <section className="border-y border-[#0E2A47]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7A8794]">
            Trusted counsel for creators, companies and innovators
          </p>

          <div className="mt-9 grid grid-cols-2 gap-7 text-center md:grid-cols-4">
            {["Creators", "Producers", "Brands", "Growing Companies"].map(
              (item) => (
                <div
                  key={item}
                  className="font-serif text-xl tracking-wide text-[#0E2A47] sm:text-2xl"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CALIFORNIA / BEACH CTA */}
      <section
        className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center px-6 py-24 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9,31,52,0.48), rgba(9,31,52,0.62)), url('/ascent-sand.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#091F34]/45 via-transparent to-[#091F34]/15" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0A06D]">
            Let&apos;s Build What&apos;s Next
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] text-white sm:text-6xl">
            Legal built for
            <br />
            <span className="italic">your ascent.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80">
            Strategic legal counsel for the deals, ideas, brands, and
            businesses you&apos;re building next.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex border border-[#D9894C] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#B86A2E]"
          >
            Schedule a Consultation <span className="ml-3">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}