import Link from "next/link";
import {
  Clapperboard,
  Copyright,
  FileText,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import FounderSection from "../components/FounderSection";

export const metadata = {
  title: "Ascent Legal | Entertainment, IP & Business Counsel",
  description:
    "Sophisticated, business-first legal counsel for creators, production companies, brands, agencies, and growing businesses. Entertainment, intellectual property, contracts, and corporate formation.",
};

const services = [
  {
    title: "Entertainment & Brand Deals",
    desc: "Contracts, talent deals, sponsorships, production, licensing, and creator-brand partnerships.",
    href: "/services/entertainment",
    icon: Clapperboard,
  },
  {
    title: "Intellectual Property",
    desc: "Trademarks, copyright, licensing, ownership strategy, and practical IP protection.",
    href: "/ip",
    icon: Copyright,
  },
  {
    title: "Business & Contracts",
    desc: "Commercial agreements, consulting arrangements, vendor contracts, redlines, and deal support.",
    href: "/services/contracts-drafting",
    icon: FileText,
  },
  {
    title: "Corporate & Formation",
    desc: "Entity formation, governance, operating agreements, founder documentation, and growth planning.",
    href: "/services/corporate-formation",
    icon: Building2,
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f6f3] text-[#0e2a47]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#0e2a47]/10 bg-[#f7f6f3]">
        <div className="absolute inset-y-0 right-0 hidden w-[54%] md:block">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f6f3_0%,rgba(247,246,243,.72)_17%,rgba(14,42,71,.12)_100%)]" />
          <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_70%_35%,rgba(184,106,46,.28),transparent_28%),radial-gradient(circle_at_78%_65%,rgba(14,42,71,.18),transparent_32%)]" />
          <div className="absolute bottom-0 right-[8%] h-[72%] w-[58%] rounded-t-[38px] bg-[#0e2a47] shadow-2xl" />
          <div className="absolute bottom-0 right-[20%] h-[48%] w-[42%] rounded-t-[28px] bg-[#183d5f]" />
          <div className="absolute bottom-[10%] right-[29%] h-[17%] w-[29%] rounded-xl bg-[#b86a2e] shadow-lg" />
          <div className="absolute right-[12%] top-[14%] max-w-[260px] rotate-[-3deg] text-right font-serif text-3xl italic leading-tight text-[#0e2a47]">
            Higher Perspective.<br />Stronger Outcomes.
            <div className="ml-auto mt-3 h-[2px] w-16 bg-[#b86a2e]" />
          </div>
        </div>

        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center px-6 py-24 md:grid-cols-[.95fr_1.05fr] md:py-28">
          <div className="relative z-10 max-w-xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#0e2a47]/75">
              Creators / Brands / Businesses
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.025em] text-[#0e2a47] sm:text-6xl lg:text-7xl">
              Legal counsel<br />for what&apos;s <span className="italic text-[#b86a2e]">next.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#0e2a47]/75">
              Sophisticated legal counsel with practical, business-first advice — built for creators,
              production companies, brands, and growing businesses.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#b86a2e] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#9f5724]"
              >
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#0e2a47]/25 bg-white/60 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#0e2a47] transition hover:bg-white"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="practice" className="bg-[#fbfaf8]">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="grid divide-y divide-[#0e2a47]/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {services.map(({ title, desc, href, icon: Icon }) => (
              <Link key={title} href={href} className="group px-6 py-10 text-center first:pl-0 last:pr-0">
                <Icon className="mx-auto h-9 w-9 stroke-[1.4] text-[#b86a2e]" />
                <h2 className="mt-6 text-sm font-semibold uppercase leading-5 tracking-[0.13em] text-[#0e2a47]">
                  {title}
                </h2>
                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-6 text-[#0e2a47]/65">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b86a2e]">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="grid min-h-[360px] md:grid-cols-2">
        <div className="flex items-center bg-[#0e2a47] px-8 py-16 text-white md:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6a270]">About Ascent Legal</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Strategic. Practical.<br />Built for the real world.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
              We provide modern, business-minded legal counsel to creative and entrepreneurial clients.
              Our goal is simple: protect what you&apos;re building and position you for long-term success.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border border-white/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-white hover:text-[#0e2a47]"
            >
              Our approach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#e8e4de]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,42,71,.08),transparent_55%)]" />
          <div className="absolute -right-16 -top-16 h-72 w-72 rotate-12 border-[34px] border-white/55" />
          <div className="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#0e2a47]/12 bg-white/55 p-10 shadow-xl backdrop-blur-sm">
            <Sparkles className="h-8 w-8 text-[#b86a2e]" />
            <p className="mt-6 font-serif text-3xl leading-tight text-[#0e2a47]">Counsel that understands the deal and the business behind it.</p>
          </div>
        </div>
      </section>

      <FounderSection />

      {/* TRUST STRIP */}
      <section className="border-y border-[#0e2a47]/10 bg-[#fbfaf8]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-8 md:grid-cols-[220px_1fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e2a47]/70">
            Built for creators, companies and innovators
          </p>
          <div className="grid grid-cols-2 gap-4 text-center font-serif text-xl text-[#0e2a47] sm:grid-cols-4 sm:text-2xl">
            <span>Creators</span><span>Producers</span><span>Brands</span><span>Startups</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#8e6047] px-6 py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(239,188,117,.42),transparent_28%),linear-gradient(180deg,rgba(14,42,71,.04),rgba(14,42,71,.4))]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">Let&apos;s build what&apos;s next</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Legal built for your ascent.</h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border border-white/70 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#0e2a47]"
          >
            Schedule a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
