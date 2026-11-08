import ContactForm from "../../components/ContactForm";
import StartIntakeButton from "../../components/StartIntakeButton";

export const metadata = {
  title: "Contact | Ascent Legal",
  description:
    "Tell us briefly about your transactional legal matter. Contact Ascent Legal about contracts, entertainment, trademarks, copyright, business formation, and related services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
            Contact Ascent Legal
          </p>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Tell us what you&apos;re building, protecting, or signing.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#5F7386]">
            Share a brief description of the matter, the parties involved, and
            any timing concerns. Our public practice is focused on transactional
            entertainment, intellectual property, contracts, and business matters.
          </p>

          <div className="mt-9 space-y-5 border-t border-[#0E2A47]/10 pt-7">
            {[
              ["Clear Scope", "We define the work and engagement before representation begins."],
              ["Transactional Focus", "Contracts, entertainment, IP, formation, and related business matters."],
              ["Deadline Awareness", "Tell us about any signing, filing, launch, or response deadline at the outset."],
            ].map(([title,text]) => (
              <div key={title}>
                <h2 className="font-serif text-xl">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-[#5F7386]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <p className="text-sm text-[#5F7386]">Prefer guided intake?</p>
            <StartIntakeButton
              eventName="contact_page_intake_clicked"
              placement="contact_page"
              label="Start Guided Intake"
              className="mt-3 inline-flex border border-[#B86A2E] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#B86A2E] transition hover:bg-[#B86A2E] hover:text-white"
            />
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
