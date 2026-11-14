import Link from "next/link";
import EmploymentIntakeForm from "../../components/EmploymentIntakeForm";

export const metadata = {
  title: "California Employment Pre-Litigation Counsel | Ascent Legal",
  description:
    "Ascent Legal evaluates select California employee-side pre-litigation matters involving retaliation, wrongful termination, discrimination, harassment, leave, whistleblower issues, wage disputes, and severance agreements.",
  alternates: { canonical: "/employment" },
};

const issues = [
  ["Retaliation", "Adverse action after a workplace complaint, protected report, leave request, or other protected activity."],
  ["Wrongful Termination", "Evaluation of terminations that may implicate California employment protections or public policy."],
  ["Discrimination & Harassment", "Workplace conduct involving protected-status discrimination, harassment, or related adverse treatment."],
  ["Leave & Accommodation", "Issues involving medical leave, disability accommodation, interactive-process concerns, or return-to-work disputes."],
  ["Whistleblower Issues", "Workplace retaliation or adverse action following reports of suspected unlawful conduct."],
  ["Wage & Hour", "Selected disputes involving unpaid wages, meal or rest periods, overtime, or related compensation issues."],
  ["Severance Agreements", "Review and negotiation of severance, release, confidentiality, non-disparagement, and related terms."],
];

export default function EmploymentPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
              Employee-Side · Pre-Litigation
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Workplace problems can become legal problems quickly.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
              Ascent Legal evaluates select California employee-side matters before litigation, including workplace retaliation, termination, discrimination, harassment, leave and accommodation issues, whistleblower concerns, wage disputes, and severance agreements.
            </p>
            <div className="mt-8 border-l-2 border-[#B86A2E] bg-white p-6">
              <p className="text-sm leading-7 text-[#455D72]">
                Our initial goal is to understand the facts, identify the employer and potential conflicts, evaluate the available documents and evidence, and determine whether the matter is appropriate for pre-litigation representation, referral, or another next step.
              </p>
            </div>
          </div>

          <div id="employment-intake" className="scroll-mt-24">
            <EmploymentIntakeForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">Types of Matters</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
            Select workplace disputes before a lawsuit is filed.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {issues.map(([title, text]) => (
              <article key={title} className="border border-[#0E2A47]/10 bg-[#FBFAF7] p-7">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F7386]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0E2A47]/10 bg-[#FBFAF7]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">How We Evaluate</p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
              Start with the facts, documents, and timing.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              ["1", "Conflict review", "We first identify the employer and other potentially adverse parties before receiving unnecessary confidential information."],
              ["2", "Matter assessment", "We review the key timeline, workplace events, available documents, damages, objectives, and known deadlines."],
              ["3", "Pre-litigation strategy", "If the matter is accepted, the scope may include factual development, document review, demand strategy, negotiation, or severance review."],
              ["4", "Resolution or referral", "If litigation, arbitration, emergency relief, or a different specialist becomes necessary, we evaluate whether referral or co-counsel is appropriate."],
            ].map(([n, title, text]) => (
              <div key={n} className="grid gap-4 border border-[#0E2A47]/10 bg-white p-6 sm:grid-cols-[48px_1fr]">
                <div className="font-serif text-3xl text-[#B86A2E]">{n}</div>
                <div>
                  <h3 className="font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5F7386]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_.8fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9894C]">For Referral Partners</p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">
              A focused pre-litigation option for employee-side referrals.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Attorneys and professional referral partners may contact the firm regarding select employee-side matters appropriate for early evaluation, demand strategy, negotiation, or severance review. Matters requiring litigation or a different specialty may be referred or considered for co-counsel where appropriate.
            </p>
          </div>
          <div className="flex items-center lg:justify-end">
            <Link href="mailto:info@ascentlegal.io?subject=Employment%20Referral" className="inline-flex bg-[#B86A2E] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#9F5925]">
              Send a Referral →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
          <p className="text-xs leading-6 text-[#7A8794]">
            This page provides general information only and is not legal advice. Submitting an inquiry does not create an attorney-client relationship. Ascent Legal does not represent you unless the firm completes its conflict review, accepts the matter, and confirms the engagement in writing. Do not rely on this page or an inquiry submission to calculate or protect any filing, administrative, contractual, or other deadline.
          </p>
        </div>
      </section>
    </main>
  );
}
