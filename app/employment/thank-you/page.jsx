import Link from "next/link";
import EmploymentThankYouTracker from "../../../components/EmploymentThankYouTracker";

export const metadata = {
  title: "Employment Inquiry Received | Ascent Legal",
  robots: { index: false, follow: false },
};

export default function EmploymentThankYouPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <EmploymentThankYouTracker />
      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">Inquiry Received</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Thank you for contacting Ascent Legal.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
          Your employment inquiry has been submitted for review. The firm will first consider conflicts and whether the matter appears to fit its pre-litigation practice.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 text-left md:grid-cols-3">
          {[
            ["1", "Conflict Review", "We first determine whether any conflict prevents the firm from considering the matter."],
            ["2", "Matter Review", "We review the information submitted and determine whether the matter fits our pre-litigation practice."],
            ["3", "Next Step", "If appropriate, the firm may contact you about consultation, engagement, referral, or additional information."],
          ].map(([step, title, text]) => (
            <div key={step} className="border border-[#0E2A47]/10 bg-white p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-[#B86A2E]">STEP {step}</p>
              <h2 className="mt-3 font-serif text-xl">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5F7386]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl border-l-2 border-[#B86A2E] bg-white p-6 text-left">
          <p className="text-sm leading-7 text-[#5F7386]">
            Do not rely on this submission to protect a deadline. If you have an urgent filing, administrative, severance, response, or other deadline, seek appropriate legal assistance promptly.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/" className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]">
            Return to Ascent Legal
          </Link>
        </div>
      </section>
    </main>
  );
}
