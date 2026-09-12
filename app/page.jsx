import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Clapperboard,
  Copyright,
  FileText,
  Film,
  ShieldCheck,
  Users,
} from "lucide-react";
import FounderSection from "../components/FounderSection";

export const metadata = {
  title: "Ascent Legal | Entertainment, IP & Business Counsel",
  description:
    "Business-first entertainment, intellectual property, contracts, and corporate counsel for creators, production companies, brands, agencies, and growing businesses. Transactional counsel only.",
};

const services = [
  {
    title: "Brand Deals & Entertainment",
    desc: "Influencer agreements, sponsorships, talent deals, production agreements, and creator-brand partnerships.",
    href: "/services/entertainment",
    icon: Film,
  },
  {
    title: "Trademark Protection",
    desc: "Clearance, USPTO filings, portfolio strategy, and practical protection for the brand you are building.",
    href: "/services/trademark",
    icon: ShieldCheck,
  },
  {
    title: "Copyright & Licensing",
    desc: "Ownership, registrations, licensing, usage rights, work-for-hire, and content protection.",
    href: "/services/copyright",
    icon: Copyright,
  },
  {
    title: "Commercial Contracts",
    desc: "MSAs, SOWs, vendor agreements, partnerships, consulting agreements, and business contracts.",
    href: "/services/contracts-drafting",
    icon: FileText,
  },
  {
    title: "Deal Desk Support",
    desc: "Ongoing contract review, redlines, repeatable templates, and negotiation support for fast-moving teams.",
    href: "/services/deal-desk-support",
    icon: Users,
  },
  {
    title: "Corporate & Formation",
    desc: "Entity formation, operating agreements, governance, founder documents, and legal infrastructure that scales.",
    href: "/services/corporate-formation",
    icon: Building2,
  },
];

const audiences = [
  {
    title: "Creators & Talent",
    desc: "You are building a brand and signing real deals. We help protect your content, compensation, exclusivity, usage rights, and ownership.",
    icon: Clapperboard,
  },
  {
    title: "Production Companies",
    desc: "We support the contracts behind productions, talent, rights acquisition, licensing, and the business relationships that keep projects moving.",
    icon: Film,
  },
  {
    title: "Brands, Agencies & Businesses",
    desc: "We help growing teams move faster with clean contracts, protected IP, smart entity structure, and practical legal strategy.",
    icon: BriefcaseBusiness,
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#fbfaf7] text-[#0e2a47]">
      {/* HERO */}
      <section className="border-b border-[#0e2a47]/10 bg-[#f7f6f3]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86a2e]">
              Entertainment · IP · Contracts · Corporate
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-[#0e2a47] sm:text-6xl lg:text-7xl">
              Legal counsel for creators, brands and businesses <span className="italic text-[#b86a2e]">on the rise.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#465c70]">
              We negotiate deals, protect intellectual property, and build the contracts and business structures behind your growth — with sophisticated counsel and practical, plain-English advice.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#b86a2e] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#9f5724]"
              >
                Request a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#0e2a47]/30 bg-transparent px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#0e2a47] transition hover:bg-white"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-9 grid gap-3 text-sm text-[#465c70] sm:grid-cols-3">
              {["Deal-focused strategy", "Rights-first drafting", "Plain-English guidance"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#b86a2e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative border border-[#0e2a47]/12 bg-white p-8 shadow-[0_24px_70px_rgba(14,42,71,.10)] md:p-10">
            <div className="absolute left-0 top-0 h-1 w-24 bg-[#b86a2e]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b86a2e]">Why Ascent Legal</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#0e2a47]">Sophisticated counsel without the big-firm distance.</h2>
            <div className="mt-7 space-y-5 text-sm leading-6 text-[#465c70]">
              <div className="border-b border-[#0e2a47]/10 pb-5">
                <p className="font-semibold text-[#0e2a47]">Entertainment-industry experience</p>
                <p className="mt-1">Counsel informed by experience with entertainment, media, creators, production, licensing, and brand collaborations.</p>
              </div>
              <div className="border-b border-[#0e2a47]/10 pb-5">
                <p className="font-semibold text-[#0e2a47]">Business-minded legal strategy</p>
                <p className="mt-1">We focus on what matters commercially: rights, payment, scope, ownership, leverage, and the next move.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0e2a47]">Built for growing clients</p>
                <p className="mt-1">Creators, production companies, agencies, brands, founders, and growing businesses that need legal support that can keep up.</p>
              </div>
            </div>
            <p className="mt-7 text-xs text-[#6b7e90]">Transactional legal services only. No litigation.</p>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section id="practice" className="bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86a2e]">What we do</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0e2a47] sm:text-5xl">Legal support built around the deals and assets that drive your business.</h2>
            <p className="mt-5 text-base leading-7 text-[#465c70]">From a first brand deal to repeat campaigns, licensing, trademark protection, commercial agreements, and entity structure, we help clients move forward with cleaner documents and better information.</p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#0e2a47]/12 bg-[#0e2a47]/12 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, desc, href, icon: Icon }) => (
              <Link key={title} href={href} className="group bg-white p-7 transition hover:bg-[#f7f6f3]">
                <Icon className="h-7 w-7 stroke-[1.5] text-[#b86a2e]" />
                <h3 className="mt-5 font-serif text-2xl text-[#0e2a47]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#465c70]">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#b86a2e]">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-y border-[#0e2a47]/10 bg-[#f7f6f3]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86a2e]">Who we work with</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0e2a47] sm:text-5xl">For clients building something with real value.</h2>
              <p className="mt-5 text-base leading-7 text-[#465c70]">Ascent Legal was built for creative and entrepreneurial clients who want legal advice that understands both the opportunity and the risk.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map(({ title, desc, icon: Icon }) => (
                <div key={title} className="border-t-2 border-[#b86a2e] bg-white p-6 shadow-sm">
                  <Icon className="h-7 w-7 text-[#0e2a47]" />
                  <h3 className="mt-5 font-serif text-2xl text-[#0e2a47]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#465c70]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ATTORNEYS */}
      <FounderSection />

      {/* PROCESS */}
      <section className="bg-[#0e2a47] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dba06d]">How we work</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">Clear advice from opportunity to signed agreement.</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Understand the deal", "We confirm the business goal, timeline, leverage, and the issues that actually matter."],
              ["02", "Protect the important points", "We review, draft, or negotiate around rights, payment, scope, ownership, exclusivity, liability, and exit terms."],
              ["03", "Get you to execution", "You leave with clear language, practical next steps, and documents that support the deal you intended to make."],
            ].map(([number, title, desc]) => (
              <div key={number} className="border-t border-white/25 pt-6">
                <p className="font-serif text-3xl text-[#dba06d]">{number}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f6f3] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86a2e]">Legal built for your ascent</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0e2a47] sm:text-5xl">Have a deal, brand, or business you are ready to protect?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#465c70]">Tell us what you are working on. We will help you determine the right legal next step.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#b86a2e] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#9f5724]"
          >
            Request a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
