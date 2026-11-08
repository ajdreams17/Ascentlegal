import Link from "next/link";
import ContactThankYouTracker from "../../components/ContactThankYouTracker";

export const metadata = {
  title: "Thank You | Ascent Legal",
  description: "Your inquiry has been submitted to Ascent Legal.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <ContactThankYouTracker />

      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
          Inquiry Received
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Thank you for contacting Ascent Legal.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
          Your inquiry has been submitted for review. If the matter appears to
          fit our practice, a member of the firm will follow up regarding next
          steps.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 text-left md:grid-cols-3">
          {[
            ["1", "Conflict Review", "We first determine whether any conflict prevents the firm from considering the matter."],
            ["2", "Matter Review", "We review the information you provided and determine whether the matter fits our transactional practice."],
            ["3", "Engagement", "Representation begins only after the firm accepts the matter and a written engagement agreement is signed."],
          ].map(([step,title,text]) => (
            <div key={step} className="border border-[#0E2A47]/10 bg-white p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-[#B86A2E]">STEP {step}</p>
              <h2 className="mt-3 font-serif text-xl">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5F7386]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl border-l-2 border-[#B86A2E] bg-white p-6 text-left">
          <p className="text-sm leading-7 text-[#5F7386]">
            Please do not rely on this submission to protect a deadline. If you
            have an urgent filing, response, contractual, or other deadline,
            seek appropriate legal assistance promptly.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex bg-[#0E2A47] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#B86A2E]"
          >
            Explore Services →
          </Link>
          <Link
            href="/"
            className="inline-flex border border-[#0E2A47]/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
          >
            Return Home
          </Link>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-[#7A8794]">
          Submitting an inquiry does not create an attorney-client relationship.
          Ascent Legal does not represent you unless and until the firm confirms
          the engagement in writing.
        </p>
      </section>
    </main>
  );
}
