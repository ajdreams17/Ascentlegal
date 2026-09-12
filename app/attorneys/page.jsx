import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Attorneys | Ascent Legal",
  description:
    "Meet April Paredes and Anthony Paredes, the attorneys behind Ascent Legal's entertainment, contracts, trademark, IP, and business formation practice.",
};

const attorneys = [
  {
    name: "April Paredes",
    role: "Co-Founder · Entertainment & Contracts",
    slug: "april-paredes",
    photo: "/attorneys/April_Paredes.jpg",
    objectPosition: "top",
    background: "Entertainment & Media",
    credentials: [
      "JD, Georgetown University Law Center",
      "M.S., Communication Management, University of Southern California",
      "Former Associate, Sheppard Mullin Richter & Hampton LLP",
    ],
    bio:
      "April is a business and entertainment attorney with deep roots in the creator economy and media industry. She advises content creators, production companies, brands, and growing businesses on brand deals, production and media agreements, licensing, copyright, rights acquisition, and commercial contracts.",
    focus: [
      "Brand deals & influencer agreements",
      "Content licensing & usage rights",
      "Copyright registration & protection",
      "Production & media agreements",
      "Rights acquisition & brand collaborations",
      "Startup formation & lifecycle counsel",
    ],
  },
  {
    name: "Anthony Paredes",
    role: "Co-Founder · Trademark & Business Formation",
    slug: "Anthony-Paredes",
    photo: "/attorneys/Anthony_Paredes.png",
    objectPosition: "center 15%",
    background: "Marketing & Business",
    credentials: [
      "JD, Chapman University, Fowler School of Law",
      "LLM, Loyola Law School",
      "Background in marketing and business",
    ],
    bio:
      "Anthony brings a marketing and business background to trademark strategy, intellectual property, and business formation. He helps creators and growing companies protect brand names and creative assets, structure entities, and build the legal foundation needed to scale with confidence.",
    focus: [
      "Trademark strategy & USPTO filings",
      "Trademark clearance & portfolio management",
      "Business formation & entity structure",
      "Operating agreements & founder documentation",
      "IP protection & brand strategy",
    ],
  },
];

export default function AttorneysPage() {
  return (
    <main>
      <section className="border-b border-[#0e2a47]/10 bg-[#f7f6f3]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86a2e]">Ascent Legal</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-[#0e2a47] md:text-6xl">Meet the attorneys.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465c70]">
            Two complementary practices, one shared approach: sophisticated legal counsel that is practical,
            responsive, and focused on helping clients protect what they are building.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7]">
        <div className="mx-auto max-w-6xl space-y-10 px-6 py-16 md:py-20">
          {attorneys.map((attorney, index) => (
            <article key={attorney.slug} className="overflow-hidden border border-[#0e2a47]/12 bg-white shadow-sm">
              <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[420px] bg-[#e7e3dd] lg:min-h-[560px]">
                  <Image
                    src={attorney.photo}
                    alt={attorney.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: attorney.objectPosition }}
                  />
                </div>

                <div className="p-8 md:p-10 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b86a2e]">{attorney.background}</p>
                  <h2 className="mt-3 font-serif text-4xl text-[#0e2a47]">{attorney.name}</h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6b7e90]">{attorney.role}</p>

                  <p className="mt-6 leading-7 text-[#465c70]">{attorney.bio}</p>

                  <div className="mt-7 border-t border-[#0e2a47]/10 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0e2a47]">Practice focus</h3>
                    <ul className="mt-4 grid gap-2 text-sm text-[#465c70] sm:grid-cols-2">
                      {attorney.focus.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#b86a2e]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-[#0e2a47]/10 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0e2a47]">Credentials</h3>
                    <ul className="mt-4 space-y-2 text-sm text-[#465c70]">
                      {attorney.credentials.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>

                  <Link
                    href={`/attorneys/${attorney.slug}`}
                    className="mt-8 inline-flex items-center border border-[#0e2a47] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0e2a47] transition hover:bg-[#0e2a47] hover:text-white"
                  >
                    Read full profile →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
