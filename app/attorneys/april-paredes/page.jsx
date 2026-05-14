import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "April Paredes | Ascent Legal",
  description:
    "April Paredes is an entertainment and contracts attorney at Ascent Legal. She helps content creators, production companies, and brands protect their deals, content rights, and licensing agreements.",
};

export default function AprilParedesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">

      {/* Back link */}
      <Link href="/about" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
        ← Back to About
      </Link>

      {/* Header */}
      <div className="mt-6 grid sm:grid-cols-[200px_1fr] gap-8 items-start">
        <div className="relative w-[200px] h-[200px] flex-shrink-0">
          <Image
            src="/attorneys/April_Paredes.jpg"
            alt="April Paredes"
            fill
            className="rounded-full object-cover shadow-md"
            style={{ objectPosition: "top" }}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-slate-900">April Paredes</h1>
          <p className="text-lg text-indigo-600 font-medium mt-1">Co-Founder · Entertainment & Contracts</p>
          <p className="text-sm text-gray-500 mt-1">Background: Entertainment & Media</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-600">Georgetown Law, JD</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-600">USC, MA Communication Management</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-600">Sheppard Mullin Richter & Hampton LLP</span>
          </div>

          <blockquote className="mt-4 border-l-2 border-indigo-400 pl-4 text-gray-600 italic text-sm leading-relaxed">
            "I have always lived in the world creators operate in. I have seen too many creators sign deals
            they did not fully understand, losing rights to content they built from scratch. That is what
            this firm was built to prevent. I am here to make sure every deal you sign actually works for you."
          </blockquote>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-10 space-y-5 text-gray-700 leading-relaxed">
        <p>
          April Paredes is a business and entertainment attorney with deep roots in the creator economy and
          media industry. She co-founded Ascent Legal because she kept seeing the same problem: creators
          building real businesses without the legal support they needed to protect what they were building.
          Big firms were not accessible to independent creators, most general practice lawyers did not
          understand the industry, and the legal language in most contracts was not written for the people
          signing them.
        </p>
        <p>
          April gained her foundational experience at Sheppard Mullin Richter and Hampton LLP, one of the
          country's leading entertainment and media firms, where she focused on transactional matters related
          to the creation, production, and distribution of audiovisual content — including television, feature
          films, and podcasts. She advised clients on rights acquisition, licensing, and brand collaborations,
          working alongside producers, studios, media companies, and major brands entering the content
          creation space.
        </p>
        <p>
          At Ascent Legal, April handles brand deals, influencer agreements, licensing, copyright, and
          content protection for creators, production companies, and brands. She brings the same level of
          deal sophistication that larger firms offer, but with the accessibility, speed, and plain-English
          communication that independent creators and growing businesses actually need.
        </p>
        <p>
          April has also worked closely with startups throughout their lifecycle — from formation to exit —
          helping them navigate the legal complexities of growing and scaling. She takes pride in offering
          practical, tailored solutions, particularly for Latin American entities and talent entering the
          U.S. entertainment market.
        </p>
        <p>
          April holds a JD from Georgetown Law and a Master's in Communication Management from USC. Her
          background bridges legal expertise and media industry knowledge in a way that is rare — and
          exactly what creators and production companies need in their corner.
        </p>
      </div>

      {/* Practice focus */}
      <div className="mt-10 rounded-2xl border border-gray-100 bg-slate-50 p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Practice focus</h3>
        <ul className="space-y-2">
          {[
            "Brand deals & influencer agreements",
            "Content licensing & usage rights",
            "Copyright registration & protection",
            "Production & media agreements",
            "Rights acquisition & brand collaborations",
            "Startup formation & lifecycle counsel",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <div className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">→</span>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Credentials */}
      <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Credentials</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "JD, Georgetown University Law Center",
            "MA, Communication Management, University of Southern California",
            "Former Associate, Sheppard Mullin Richter & Hampton LLP",
            "Entertainment, Media & Technology Practice Group",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">→</span>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 to-teal-50 p-8">
        <h3 className="text-xl font-semibold text-gray-900">Have a deal on your desk?</h3>
        <p className="mt-2 text-sm text-gray-600 max-w-xl">
          Book a discovery call with April to talk through your brand deal, content agreement,
          or licensing needs. She will tell you exactly what to look for and how to protect yourself
          before you sign.
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

    </main>
  );
}
