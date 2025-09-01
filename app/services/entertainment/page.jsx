// app/services/entertainment/page.jsx
import Link from "next/link";
import AgreementCard from "../../../components/AgreementCard";


export const metadata = {
  title: "Entertainment Law | Ascent Legal",
  description:
    "Production, talent, music, and digital media contracts. Licensing, rights clearances, and brand partnerships for creators and companies.",
};

const sectors = [
  { title: "Film & TV", blurb: "Production counsel, option/purchase, talent and crew deals." },
  { title: "Music & Publishing", blurb: "Split sheets, producer & feature agreements, catalog licenses." },
  { title: "Digital & Social", blurb: "Creator/influencer sponsorships, platform and content licenses." },
  { title: "Brands & Agencies", blurb: "Campaign MSAs, usage rights, SAG-AFTRA/union considerations." },
];

const agreements = [
  { title: "Option & Purchase Agreements", blurb: "Chain of title, reversion terms, and clean rights transfer." },
  { title: "Production Services & Location Agreements", blurb: "Scope, insurance, safety, and indemnity balanced." },
  { title: "Talent, Crew & Appearance Releases", blurb: "Clear usage rights and image/likeness consent." },
  { title: "Music Licenses & Sync/Master Use", blurb: "Split sheets, ownership, term & territory." },
  { title: "Recording, Producer & Feature Artist Deals", blurb: "Work-for-hire vs. splits, credits, royalties." },
  { title: "Distribution & Sales Agency Agreements", blurb: "MGs, recoupment, reporting & audit rights." },
  { title: "Sponsorships, Endorsements & Brand Partnerships", blurb: "Usage rights, exclusivity, deliverables, approvals." },
];


const faqs = [
  {
    q: "Can you review one contract or help end-to-end on a production?",
    a: "Both. We handle single-document reviews on flat fees and also scope full production counsel with clear deliverables and timelines.",
  },
  {
    q: "Do you work with creators and companies?",
    a: "Yes. We represent creators, production companies, brands, and agencies—so we understand both sides’ concerns and market terms.",
  },
  {
    q: "Flat fees or hourly?",
    a: "Common agreements are flat-fee with quick turnaround. Complex productions are scoped in advance with milestones.",
  },
];

export default function EntertainmentPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Hero */}
      <section className="pt-16 sm:pt-24">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Entertainment <span className="text-indigo-500">Law</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl">
          Practical, production-ready contracts for film, TV, music, and digital media.
          We move fast, protect your rights, and keep deals on schedule—so you can create with confidence.
        </p>

        {/* Primary actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 px-4 sm:px-5 py-2.5 text-white font-medium shadow hover:opacity-95"
          >
            Book a Consultation
          </Link>

        <Link
            href="/resources"
            className="rounded-xl border border-gray-200 bg-white px-4 sm:px-5 py-2.5 text-gray-700 hover:bg-gray-50"
          >
            See agreements
          </Link>
        </div>

        {/* Pills row */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 px-5 py-4 font-semibold text-center">
            Detail-first legal review process
          </div>
          <div className="rounded-2xl border border-gray-200 px-5 py-4 font-semibold text-center">
            Every contract tailored to you
          </div>
          <div className="rounded-2xl border border-gray-200 px-5 py-4 font-semibold text-center">
            Direct access to your attorney
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we serve</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          From independent productions and music teams to creators and brands—our contracts balance
          creative flexibility with clear risk controls.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

{/* Agreements */}
<section id="agreements" className="mt-16">
  <h2 className="text-2xl md:text-3xl font-semibold">Core agreements</h2>

  <ul className="mt-6 space-y-3">
    {agreements.map((item) => (
      <AgreementCard
        key={typeof item === "string" ? item : item.title}
        title={typeof item === "string" ? item : item.title}
        blurb={typeof item === "string" ? undefined : item.blurb}
      />
    ))}
  </ul>
</section>


      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Straightforward process</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Scope & timelines", text: "We define the deal, deliverables, and dates." },
            { step: "2", title: "Draft or review", text: "We draft from proven templates or redline incoming terms." },
            { step: "3", title: "Negotiate & close", text: "Market terms, clear rights, and clean signatures." },
          ].map((p) => (
            <div key={p.step} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="text-sm text-gray-500">Step {p.step}</div>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-gray-100 bg-white p-6">
              <h4 className="font-medium">{f.q}</h4>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center mb-20">
        <h3 className="text-xl font-semibold">Ready to lock terms and protect your rights?</h3>
        <p className="mt-2 text-gray-600">
          Tell us your production or deal timeline—we’ll map the fastest path to signature.
        </p>
        <div className="mt-4 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
