import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Ascent Legal",
  description:
    "Meet Ascent Legal — a brother and sister law firm built for content creators, production companies, and growing businesses. Brand deals, IP protection, trademarks, and business formation. Transactional only (no litigation).",
};

const attorneys = [
  {
    name: "Anthony Paredes",
    role: "Co-Founder · Trademark & Business Formation",
    slug: "Anthony-Paredes",
    photo: "/attorneys/Anthony_Paredes.png",
    objectPosition: "center 15%",
    background: "Marketing & Business",
    quote:
      "I became a lawyer because I wanted to use legal knowledge the way I used to use marketing: as a tool to help people grow. Whether you are an individual creator or a growing company, my job is to make sure your business is built to last.",
    focus: [
      "Trademark strategy & USPTO filings",
      "Business formation & entity structure",
      "IP protection & brand strategy",
    ],
  },
  {
    name: "April Paredes",
    role: "Co-Founder · Entertainment & Contracts",
    slug: "april-paredes",
    photo: "/attorneys/April_Paredes.jpg",
    objectPosition: "top",
    background: "Entertainment & Media",
    quote:
      "I have always lived in the world creators operate in. I have seen too many creators sign deals they did not fully understand, losing rights to content they built from scratch. That is what this firm was built to prevent.",
    focus: [
      "Brand deals & influencer agreements",
      "Licensing & content protection",
      "Copyright & usage rights",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      {/* ===== Hero ===== */}
      <h1 className="text-4xl md:text-5xl font-bold">
        About{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
          Ascent Legal
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl">
        Ascent Legal is a brother and sister law firm built for content creators, production companies, and growing
        businesses. We started this firm because creators and small businesses deserve real legal partnership —
        not a big firm that does not speak their language, and not a generalist who does not understand their world.
        Transactional counsel only. No litigation.
      </p>

      {/* ===== Three pillars ===== */}
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {[
          {
            title: "Growth-First",
            desc: "We think about your ascent, not just your risk. Legal as a tool to propel you forward.",
          },
          {
            title: "Plain-English Counsel",
            desc: "No jargon, no intimidation. We tell you what matters, what does not, and what to do next.",
          },
          {
            title: "Insider Knowledge",
            desc: "We come from entertainment and business. We speak creator and company fluently.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-gray-100 p-6 text-center bg-white">
            <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              {s.title}
            </div>
            <div className="mt-2 text-sm text-gray-600">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* ===== Origin Story ===== */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Why we built Ascent Legal</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Two people, two backgrounds, one gap they both saw clearly.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8">
          <p className="text-gray-600 leading-relaxed">
            This firm was built by two people who saw the same problem from different angles and decided to do
            something about it together.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            April comes from entertainment and media. She has always lived in the creator world, understanding the
            deals, the collabs, and the opportunities that move fast. But she kept seeing the same thing: creators
            signing deals without understanding what they were giving up. One creator came to her after signing what
            looked like a win. Buried in the contract was a clause that handed over the rights to their own content.
            Work they created. A brand they built. Gone — because no one was in their corner before they signed.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Anthony comes from marketing and business. He has always understood the value of a brand and what it
            takes to build one. He became a lawyer because he wanted to use legal the way he used marketing: as a
            growth tool, not just a safety net. He thinks like an entrepreneur because he is one.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Together they built Ascent Legal to close the gap. April handles your deals and contracts, making sure
            you keep what you build and get paid fairly. Anthony handles your trademarks and business formation,
            making sure the brand and company you are building has the right foundation to last.
          </p>
        </div>
      </div>

      {/* ===== Approach & Who We Serve ===== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <h3 className="font-semibold text-slate-900">Our approach</h3>
          <p className="text-gray-600 mt-2">
            We say yes to your opportunity first, then handle the risk. Every client gets clear strategy,
            practical drafting, and deal guidance focused on what matters most.
          </p>

          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-500/80 flex-shrink-0" />
              <span>
                <span className="font-medium text-gray-800">Plain-English counsel:</span> what matters, what does not, and
                what to do next.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-500/80 flex-shrink-0" />
              <span>
                <span className="font-medium text-gray-800">Deal-first drafting and negotiation:</span> rights, payment,
                exclusivity, and risk points.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-teal-500/80 flex-shrink-0" />
              <span>
                <span className="font-medium text-gray-800">Built to scale:</span> strong templates and repeatable
                contract systems as you grow.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <h3 className="font-semibold text-slate-900">Who we serve</h3>
          <p className="text-gray-600 mt-2">
            Content creators, production companies, and growing businesses who are serious about building
            something that lasts.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {[
              "Content Creators",
              "Production Companies",
              "Influencers & Talent",
              "Small Businesses",
              "Brands & Agencies",
              "Startups & Founders",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-600">
            <span className="font-medium text-gray-800">Transactional counsel only.</span> No litigation.
          </p>
        </div>
      </div>

      {/* ===== Meet the Founders ===== */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Meet the founders</h2>
        <p className="mt-2 text-gray-600">
          Two practices. One mission. Your ascent.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {attorneys.map((a) => (
            <div
              key={a.slug}
              className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] bg-slate-100">
                <Image
                  src={a.photo}
                  alt={`${a.name} — ${a.role}`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: a.objectPosition }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">{a.name}</h3>
                <p className="text-sm font-medium text-indigo-600 mt-0.5 mb-1">{a.role}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Background: {a.background}</p>

                <blockquote className="border-l-2 border-indigo-400 pl-4 mb-5 text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;{a.quote}&rdquo;
                </blockquote>

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Practice focus</p>
                <ul className="space-y-1.5 mb-5">
                  {a.focus.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[10px] font-bold">→</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/attorneys/${a.slug}`}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  View full profile →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-10 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
          <h3 className="text-xl font-semibold text-gray-900">Ready to protect what you are building?</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">
            Book a discovery call and let us talk about your next move. We will tell you exactly what we can do,
            what it costs, and how fast we can move.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90 inline-block"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-800 hover:border-gray-300 inline-block"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
