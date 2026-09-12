import Link from "next/link";
import FounderSection from "../components/FounderSection";
import {
  ArrowRight,
  Film,
  Copyright,
  FileText,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Ascent Legal | Entertainment, IP & Business Counsel",
  description:
    "Sophisticated, business-first legal counsel for creators, production companies, brands, and growing businesses.",
};

const practices = [
  {
    title: "Entertainment & Brand Deals",
    desc: "Creator agreements, sponsorships, talent and production deals, licensing, and brand collaborations.",
    href: "/services/entertainment",
    icon: Film,
  },
  {
    title: "Intellectual Property",
    desc: "Trademark strategy, copyright protection, licensing, usage rights, and practical brand protection.",
    href: "/ip",
    icon: Copyright,
  },
  {
    title: "Business & Contracts",
    desc: "Commercial agreements, deal review, redlines, negotiations, and practical contract strategy.",
    href: "/services/contracts-drafting",
    icon: FileText,
  },
  {
    title: "Corporate & Formation",
    desc: "Entity formation, operating agreements, governance, founder documents, and business infrastructure.",
    href: "/services/corporate-formation",
    icon: Building2,
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f6f3] text-[#0e2a47]">

      {/* HERO */}
      <section className="overflow-hidden border-b border-[#0e2a47]/10 bg-[#f7f6f3]">
        <div className="mx-auto grid min-h-[680px] max-w-[1440px] lg:grid-cols-[.9fr_1.1fr]">

          {/* HERO COPY */}
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[620px]">

              <p className="text-[11px] font-bold uppercase tracking-[.30em] text-[#b86a2e]">
                Creators / Brands / Businesses
              </p>

              <h1 className="mt-7 font-serif text-5xl leading-[.98] tracking-[-.04em] text-[#0e2a47] sm:text-6xl xl:text-7xl">
                Legal counsel for{" "}
                <span className="italic text-[#b86a2e]">
                  what&apos;s next.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#53687a]">
                Sophisticated legal counsel with practical, business-first
                advice — built for creators, production companies, brands,
                and growing businesses.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#b86a2e] px-7 py-4 text-xs font-bold uppercase tracking-[.16em] text-white transition hover:bg-[#9f5724]"
                >
                  Work with us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center border border-[#0e2a47]/30 px-7 py-4 text-xs font-bold uppercase tracking-[.16em] text-[#0e2a47] transition hover:bg-white"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>

          {/* LOS ANGELES HERO VISUAL */}
          <div
            className="relative min-h-[480px] overflow-hidden bg-cover bg-center lg:min-h-full"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(14,42,71,.55), rgba(14,42,71,.05)), url('/images/ascent-la.jpg')",
            }}
          >
            {/* Fallback visual if photo has not been uploaded yet */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#d8c4b1_0%,#f1e5d9_30%,#b07d59_31%,#d3a681_58%,#77604d_59%,#a17a5d_100%)]" />

            <div className="absolute bottom-12 left-10 border-l-2 border-[#dba06d] pl-5 text-white lg:left-14">
              <p className="font-serif text-3xl leading-tight">
                Higher Perspective.
                <br />
                Stronger Outcomes.
              </p>

              <p className="mt-3 text-xs uppercase tracking-[.18em] text-white/80">
                Ascent Legal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" className="bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="flex flex-col justify-between gap-6 border-b border-[#0e2a47]/15 pb-9 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.30em] text-[#b86a2e]">
                What we do
              </p>

              <h2 className="mt-3 font-serif text-4xl tracking-[-.03em] text-[#0e2a47] md:text-5xl">
                Counsel built around the deal.
              </h2>
            </div>

            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-[.16em] text-[#b86a2e]"
            >
              View all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {practices.map(
              ({ title, desc, href, icon: Icon }, index) => (
                <Link
                  key={title}
                  href={href}
                  className={`group py-9 lg:px-7 ${
                    index > 0
                      ? "border-t border-[#0e2a47]/10 md:border-t-0 lg:border-l"
                      : ""
                  }`}
                >
                  <Icon className="h-6 w-6 stroke-[1.35] text-[#b86a2e]" />

                  <h3 className="mt-7 font-serif text-2xl leading-tight text-[#0e2a47]">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#5b6e7e]">
                    {desc}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.15em] text-[#0e2a47] transition group-hover:text-[#b86a2e]">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* ABOUT ASCENT */}
      <section className="overflow-hidden bg-[#0e2a47] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">

          {/* ABSTRACT / CALIFORNIA VISUAL */}
          <div className="relative min-h-[440px] overflow-hidden bg-[#102f4e] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#203d56_0%,#31516b_38%,#b86a2e_39%,#76543e_55%,#17334d_56%,#0e2a47_100%)] opacity-80" />

            <div className="absolute left-[16%] top-[15%] h-[62%] w-[62%] rotate-12 border-[28px] border-white/10" />

            <div className="absolute bottom-10 left-10 right-10 border-t border-white/30 pt-5 text-xs uppercase tracking-[.22em] text-white/70">
              Entertainment · Intellectual Property · Business
            </div>
          </div>

          {/* ABOUT COPY */}
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[580px]">

              <p className="text-[11px] font-bold uppercase tracking-[.30em] text-[#dba06d]">
                About Ascent Legal
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-[1.03] tracking-[-.035em] text-white md:text-6xl">
                Strategic.
                <br />
                Practical.
                <br />
                <span className="italic text-[#dba06d]">
                  Built for the real world.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-white/75">
                We combine sophisticated legal analysis with a practical
                understanding of how creative and growing businesses
                actually operate.
              </p>

              <p className="mt-4 text-base leading-8 text-white/75">
                Our job is to identify what matters, protect your leverage,
                and help you move forward with clarity.
              </p>

              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-3 border-b border-[#dba06d] pb-2 text-xs font-bold uppercase tracking-[.16em] text-white"
              >
                Our approach
                <ArrowRight className="h-4 w-4 text-[#dba06d]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REAL APRIL + ANTHONY SECTION */}
      <FounderSection />

      {/* CLIENT TYPES */}
      <section className="border-y border-[#0e2a47]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[.28em] text-[#6b7e90]">
            Counsel for creators, companies and innovators
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 text-center font-serif text-xl text-[#0e2a47] md:grid-cols-4 md:text-2xl">
            <div>Creators</div>
            <div>Producers</div>
            <div>Brands</div>
            <div>Growing Companies</div>
          </div>
        </div>
      </section>

      {/* CALIFORNIA / SAND CLOSING CTA */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(14,42,71,.82), rgba(14,42,71,.58), rgba(184,106,46,.30)), url('/images/ascent-sand.jpg')",
        }}
      >
        {/* fallback if image not uploaded yet */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#0e2a47_0%,#39566d_45%,#a16f50_75%,#d7b28f_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">

            <p className="text-[11px] font-bold uppercase tracking-[.30em] text-[#f0bd8d]">
              Let&apos;s build what&apos;s next
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-.035em] text-white md:text-6xl">
              Legal built for{" "}
              <span className="italic text-[#f0bd8d]">
                your ascent.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80">
              Tell us what you&apos;re building, negotiating, or protecting.
              We&apos;ll help you identify the right legal next step.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-[#b86a2e] px-7 py-4 text-xs font-bold uppercase tracking-[.16em] text-white transition hover:bg-[#c97832]"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}