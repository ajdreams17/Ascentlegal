import Link from "next/link";

export const metadata = {
  title: "Trademark 101: What Every Small Business Should Know | Ascent Legal",
  description:
    "A practical introduction to trademarks for small businesses, including distinctiveness, clearance, filing, USPTO fees, examination, and maintenance.",
  alternates: { canonical: "/resources/trademark-101" },
};

export default function Trademark101Page() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <article className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <nav className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A8794]">
          <Link href="/resources" className="hover:text-[#B86A2E]">Resources</Link>
          <span className="mx-2">/</span>
          Trademarks
        </nav>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
          Trademark Basics
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Trademark 101: what every small business should know.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          A trademark can help identify the source of goods or services and distinguish a brand in the marketplace.
          Registration is not automatic, and the strength of a mark depends on the mark itself, the goods or services involved,
          and potentially conflicting rights.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">What can function as a trademark?</h2>
            <p className="mt-4">
              Depending on the circumstances, words, names, logos, slogans, designs, and other source-identifying matter may function as trademarks.
              Distinctiveness matters. Generic terms generally cannot function as trademarks for the goods or services they name, while merely descriptive marks may face additional hurdles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Why clearance matters before filing</h2>
            <p className="mt-4">
              A federal database search is an important step, but trademark clearance is broader than checking for an exact match.
              Similar wording, sound, appearance, meaning, and related goods or services can all affect conflict risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">How the federal application process works</h2>
            <ol className="mt-4 space-y-3">
              <li><strong>1. Identify the owner.</strong> Determine who should own the mark.</li>
              <li><strong>2. Identify the goods or services.</strong> The application must accurately describe what the mark covers.</li>
              <li><strong>3. Choose a filing basis.</strong> Common bases include current use in commerce or a bona fide intent to use.</li>
              <li><strong>4. File with the USPTO.</strong> The application is submitted electronically and assigned for examination.</li>
              <li><strong>5. Respond to USPTO issues.</strong> An examining attorney may issue an Office Action requiring a response.</li>
              <li><strong>6. Publication and registration steps.</strong> Approved applications proceed through publication and, depending on the basis, additional steps before registration.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Current USPTO filing fees and timing</h2>
            <p className="mt-4">
              The USPTO currently lists a base application filing fee of <strong>$350 per class</strong> for qualifying Section 1 or Section 44 applications.
              Additional fees may apply depending on how the application is prepared, the filing basis, and later filings.
            </p>
            <p className="mt-4">
              As of October 1, 2026, the USPTO reported an average of approximately <strong>4.3 months</strong> to a first examining action
              and approximately <strong>10.4 months</strong> from filing to registration or abandonment. Individual applications can move faster or slower.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Registration is not the end of the process</h2>
            <p className="mt-4">
              Owners must continue using and maintaining registered marks and complete required post-registration filings on time.
              Changes in ownership, goods and services, or brand strategy can also affect how a trademark portfolio should be managed.
            </p>
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Service</p>
          <h2 className="mt-3 font-serif text-2xl">Considering a federal trademark filing?</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7386]">
            Ascent Legal assists with trademark clearance, filing strategy, applications, Office Action support, and maintenance.
          </p>
          <Link href="/services/trademark" className="mt-5 inline-flex bg-[#0E2A47] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#B86A2E]">
            Explore Trademark Services →
          </Link>
        </div>

        <p className="mt-8 text-xs leading-5 text-[#7A8794]">
          USPTO fees and processing times can change. This article is general information only and is not legal advice.
        </p>
      </article>
    </main>
  );
}
