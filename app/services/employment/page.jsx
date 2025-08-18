import Link from "next/link";
import { ShieldCheck, FileText, Users, ClipboardList, Scale, Clock } from "lucide-react";

export const metadata = {
  title: "Employment Law | Ascent Legal",
  description:
    "Practical employment counsel for growing companies—offers, handbooks, compliance, and dispute avoidance.",
};

export default function EmploymentPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <header className="mb-12">
        <p className="text-sm text-gray-500">Services</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
          Employment Law
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          Practical, business-first employment guidance that keeps your team protected and your
          operations moving—offers, handbooks, compliance, and dispute avoidance.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-5 py-3 text-white shadow hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50"
          >
            All Services
          </Link>
        </div>
      </header>

      {/* What we handle */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold">What We Handle</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Core employment documents and day-to-day counsel tailored for startups and growing teams.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Offers & Onboarding",
              desc: "Offer letters, confidential information/IP assignment agreements, new-hire packets.",
              icon: Users,
            },
            {
              title: "Employee Handbooks",
              desc: "State-specific, compliant policies with practical guardrails for managers.",
              icon: ClipboardList,
            },
            {
              title: "Independent Contractors",
              desc: "IC agreements, classification analysis, and workflow structure to reduce risk.",
              icon: FileText,
            },
            {
              title: "Wage & Hour Hygiene",
              desc: "Exempt vs. non-exempt, timekeeping, meal/rest compliance, and pay practices.",
              icon: Clock,
            },
            {
              title: "Compliance & Training",
              desc: "Required notices, harassment prevention, managerial checklists and scripts.",
              icon: ShieldCheck,
            },
            {
              title: "Exits & Transitions",
              desc: "Separation agreements, releases, and sensitive communications templates.",
              icon: Scale,
            },
          ].map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages / How we work */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How We Work</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Clear scopes, quick turnaround, and predictable pricing. We can work project-based or as your
          fractional employment counsel.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Essentials",
              price: "Flat fee",
              items: [
                "Offer letter + IP/Confidentiality",
                "Basic handbook (state-specific)",
                "2 contractor agreement templates",
              ],
            },
            {
              name: "Growth",
              price: "Flat fee",
              items: [
                "Custom handbook & policy suite",
                "Manager scripts + compliance checklist",
                "Separation agreement template",
              ],
            },
            {
              name: "Counsel",
              price: "Monthly",
              items: [
                "Priority Q&A and reviews",
                "Policy updates & training",
                "Quarterly compliance health-check",
              ],
            },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-100 p-6 bg-white">
              <div className="text-sm text-gray-500">Package</div>
              <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 text-2xl bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent font-bold">
                {p.price}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-500" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-block w-full text-center rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-2 text-white"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              q: "Do you handle multi-state teams?",
              a: "Yes. We build handbooks and policies that account for California and other state requirements, and we flag when local counsel is advisable.",
            },
            {
              q: "Can you review my existing handbook?",
              a: "Absolutely. We’ll redline your current materials, update for current law, and provide manager-friendly guidance notes.",
            },
            {
              q: "Do you litigate?",
              a: "We focus on proactive compliance and dispute avoidance. We can coordinate with litigation counsel if needed.",
            },
          ].map((f) => (
            <div key={f.q} className="rounded-xl border border-gray-100 p-4 bg-white">
              <div className="font-medium">{f.q}</div>
              <div className="mt-1 text-sm text-gray-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-400 p-8 text-white">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Need fast, practical employment help?</h3>
            <p className="mt-2 text-white/90">
              Get compliant documents and clear guidance—without slowing down your business.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-indigo-600 shadow hover:bg-gray-100"
            >
              Talk to an Attorney
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
