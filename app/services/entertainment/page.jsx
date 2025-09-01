import Link from "next/link";

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
  "Option & Purchase Agreements",
  "Production Services & Location Agreements",
  "Talent, Crew & Appearance Releases",
  "Music Licenses & Sync/Master Use",
  "Recording, Producer & Feature Artist Deals",
  "Distribution & Sales Agency Agreements",
  "Sponsorships, Endorsements & Brand Partnerships",
  "Copyright & Trademark Counseling (no patent)",
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

export default function EntertainmentLawPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold">
          Entertainment{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Law
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Practical, production-ready contracts for film, TV, music, and digital media. We move fast,
          protect your rights, and keep deals on schedule—so you can create with confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <a
            href="#agreements"
            className="rounded-xl border border-gray-200 px-5 py-3 text-gray-800 hover:border-indigo-300"
          >
            See agreements
          </a>
        </div>
      </section>

{/* START: Ascent Legal "stats" block */}
<section className="al-stats" role="region" aria-labelledby="al-stats-title">
  <h2 id="al-stats-title" className="sr-only">Service Highlights</h2>

  <div className="al-stats-grid">
    <div className="al-card">
      <h3 className="al-stat">
        <span className="al-line1">Detail-first</span>
        <span className="al-line2">Legal review process</span>
      </h3>
    </div>

    <div className="al-card">
      <h3 className="al-stat">
        <span className="al-line1">Every contract</span>
        <span className="al-line2">Tailored to you</span>
      </h3>
    </div>

    <div className="al-card">
      <h3 className="al-stat">
        <span className="al-line1">Direct access</span>
        <span className="al-line2">To your attorney</span>
      </h3>
    </div>
  </div>

  <style jsx>{`
    :root {
      --al-bg: #0b0d12;
      --al-border: rgba(255, 255, 255, .12);
      --al-card: rgba(255, 255, 255, .04);
      --al-text: #e9edf4;
      --al-accent: #6ea8fe;
      --al-radius: 16px;
      --al-gap: clamp(14px, 2vw, 24px);
      --al-pad: clamp(16px, 2.2vw, 28px);
    }
    @media (prefers-color-scheme: light) {
      :root {
        --al-bg: #f6f8fb;
        --al-border: rgba(17, 24, 39, .08);
        --al-card: #ffffff;
        --al-text: #0f172a;
        --al-accent: #2456d3;
      }
    }
    .al-stats {
      background: var(--al-bg);
      color: var(--al-text);
      padding: clamp(28px, 4vw, 56px);
      border-radius: var(--al-radius);
    }
    .al-stats-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--al-gap);
    }
    @media (max-width: 900px) {
      .al-stats-grid { grid-template-columns: 1fr; }
    }
    .al-card {
      position: relative;
      border: 1px solid var(--al-border);
      background: linear-gradient(180deg, var(--al-card), transparent);
      border-radius: var(--al-radius);
      padding: var(--al-pad);
      isolation: isolate;
      overflow: hidden;
    }
    .al-card::after {
      content: "";
      position: absolute; inset: -1px;
      background:
        radial-gradient(120px 120px at 96% 8%,
                        color-mix(in oklab, var(--al-accent) 35%, transparent),
                        transparent 60%);
      opacity: .35; pointer-events: none; z-index: -1;
      border-radius: inherit;
    }
    .al-stat {
      display: flex; flex-direction: column;
      line-height: 1.1; margin: 0;
    }
    .al-line1 {
      font-weight: 800;
      font-size: clamp(20px, 3.2vw, 28px);
      letter-spacing: -.01em;
      text-wrap: balance;
    }
    .al-line2 {
      margin-top: .35rem;
      font-weight: 500;
      font-size: clamp(16px, 2.2vw, 18px);
      opacity: .9;
    }
    .sr-only {
      position: absolute !important;
      width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
    }
  `}</style>
</section>
{/* END: Ascent Legal "stats" block */}



      {/* Sectors */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we serve</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          From independent productions and music teams to creators and brands—our contracts balance
          creative flexibility with clear risk controls.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-sm transition-shadow">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agreements */}
      <section id="agreements" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Core agreements</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {agreements.map((a) => (
            <div key={a} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="flex gap-2">
                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                <p className="text-sm text-gray-700">{a}</p>
              </div>
            </div>
          ))}
        </div>
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
      <section className="mt-16 text-center">
        <h3 className="text-xl font-semibold">Ready to lock terms and protect your rights?</h3>
        <p className="mt-2 text-gray-600">Tell us your production or deal timeline—we’ll map the fastest path to signature.</p>
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
