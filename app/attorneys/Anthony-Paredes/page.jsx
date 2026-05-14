import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Anthony Paredes | Ascent Legal",
  description:
    "Anthony Paredes is a trademark and business formation attorney at Ascent Legal. He helps content creators and growing businesses protect their brands and build the right legal foundation to scale.",
};

export default function AnthonyParedesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Back link */}
      <Link href="/about" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
        ← Back to About
      </Link>

      {/* Header */}
      <div className="mt-6 grid sm:grid-cols-[200px_1fr] gap-8 items-start">
        <div className="relative w-[200px] h-[200px] flex-shrink-0">
          <Image
            src="/attorneys/Anthony_Paredes.png"
            alt="Anthony Paredes"
            fill
            className="rounded-full object-cover shadow-md"
            style={{ objectPosition: "center 15%" }}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Anthony Paredes</h1>
          <p className="text-lg text-indigo-600 font-medium mt-1">Co-Founder · Trademark & Business Formation</p>
          <p className="text-sm text-gray-500 mt-1">Background: Marketing & Business</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-600">Chapman University, Fowler School of Law, JD</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-600">Loyola Law School, LLM</span>
          </div>

          <blockquote className="mt-4 border-l-2 border-indigo-400 pl-4 text-gray-600 italic text-sm leading-relaxed">
            "I became a lawyer because I wanted to use legal knowledge the way I used to use marketing: as a tool
            to help people grow. Whether you are an individual creator or a growing company, my job is to make
            sure your business is built to last."
          </blockquote>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-10 space-y-5 text-gray-700 leading-relaxed">
        <p>
          Anthony Paredes comes from a marketing and business background — which means he understands firsthand
          how much a brand is worth and what it takes to build one. He became a lawyer because he wanted to use
          legal knowledge the way he used to use marketing: as a growth tool, not just a safety net. He brings
          an entrepreneur's mindset to every client relationship, focused on where they are going, not just
          where they are.
        </p>
        <p>
          At Ascent Legal, Anthony focuses on trademark strategy and business formation. He helps content
          creators, production companies, and growing businesses protect their brand names, logos, and creative
          assets through USPTO filings and trademark portfolio management. He advises clients on clearance,
          registration, and practical brand protection strategy so they own what they build before someone
          else stakes a claim to it.
        </p>
        <p>
          On the business formation side, Anthony helps individuals and companies structure their businesses
          the right way from the start — entity selection, operating agreements, founder documentation, and
          the legal infrastructure that allows a business to scale with confidence. Whether you are a solo
          creator forming your first LLC or a growing company formalizing your structure, Anthony makes the
          process straightforward and tailored to where you are headed.
        </p>
        <p>
          Anthony also has significant experience in U.S. immigration law, having assisted clients with EB-3
          immigrant petitions, PERM labor certifications, E-1 treaty trader visas, VAWA petitions, and U-Visas.
          This breadth of experience gives him a deep understanding of the real-life stakes behind legal decisions
          and reinforces his client-centered, solutions-driven approach.
        </p>
        <p>
          Known for being approachable, responsive, and practical, Anthony ensures clients understand their
          options at every stage and feel confident in the decisions they make. His goal is not just sound
          legal advice — it is peace of mind and a clear path forward.
        </p>
      </div>

      {/* Practice focus */}
      <div className="mt-10 rounded-2xl border border-gray-100 bg-slate-50 p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Practice focus</h3>
        <ul className="space-y-2">
          {[
            "Trademark strategy & USPTO filings",
            "Trademark clearance & portfolio management",
            "Business formation & entity structure",
            "Operating agreements & founder documentation",
            "IP protection & brand strategy",
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
            "JD, Chapman University, Fowler School of Law",
            "LLM, Loyola Law School",
            "Background: Marketing & Business",
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
        <h3 className="text-xl font-semibold text-gray-900">Ready to protect your brand?</h3>
        <p className="mt-2 text-sm text-gray-600 max-w-xl">
          Book a discovery call with Anthony to talk through your trademark strategy, business structure,
          or IP protection needs.
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
