import BusinessIntakeForm from "../../../components/BusinessIntakeForm";

export const metadata = {
  title: "Business Intake | Ascent Legal",
  description:
    "Preliminary business intake for transactional matters involving formations, contracts, ownership, governance, investors, contractor documents, and recurring deal support.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/intake/business",
  },
};

export default function BusinessIntakePage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="border-b border-[#0E2A47]/10">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Ascent Legal
          </p>
          <h1 className="mt-5 font-serif text-5xl tracking-[-0.03em] sm:text-6xl">
            Business Intake
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F7386]">
            Use this form to provide preliminary information about a transactional business matter. The questions will
            adjust based on the type of help you select.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#7A8794]">
            This form is for preliminary intake only. Please do not send highly sensitive or unnecessary confidential
            information. Submission does not create an attorney-client relationship.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:py-16">
        <BusinessIntakeForm />
      </section>
    </main>
  );
}
