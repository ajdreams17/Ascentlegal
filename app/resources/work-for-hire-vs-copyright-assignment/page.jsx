import Link from "next/link";

export const metadata = {
  title: "Work-for-Hire vs. Copyright Assignment for Contractors | Ascent Legal",
  description:
    "Learn the difference between work-for-hire and copyright assignment language when hiring contractors, creators, designers, developers, and other outside contributors.",
  alternates: {
    canonical: "/resources/work-for-hire-vs-copyright-assignment",
  },
  openGraph: {
    type: "article",
    title: "Work-for-Hire vs. Copyright Assignment for Contractors",
    description:
      "Understand why work-for-hire and assignment language are not interchangeable when outside contractors create intellectual property.",
    url: "/resources/work-for-hire-vs-copyright-assignment",
  },
};

export default function WorkForHireAssignmentPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <article className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <nav className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A8794]">
          <Link href="/resources" className="hover:text-[#B86A2E]">Resources</Link>
          <span className="mx-2">/</span>
          Contractor IP
        </nav>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">Contractor Agreements + IP</p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Work-for-hire vs. copyright assignment: why the difference matters.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5F7386]">
          Businesses often assume that paying a contractor automatically gives the business ownership
          of everything the contractor creates. Copyright ownership can be more complicated.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-[#455D72]">
          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">The default ownership problem</h2>
            <p className="mt-4">
              When an independent contractor creates copyrightable work, the contractor may be the
              initial copyright owner unless the law or a written agreement changes that result.
              Payment alone does not necessarily transfer copyright ownership.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">What work-for-hire language does</h2>
            <p className="mt-4">
              Federal copyright law recognizes specific circumstances in which a work can qualify
              as a work made for hire. For independent contractors, that doctrine has statutory
              requirements and does not automatically apply to every project simply because a
              contract says “work for hire.”
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Why assignment language is often included too</h2>
            <p className="mt-4">
              Because work-for-hire treatment can be fact-specific, agreements often include an
              assignment provision designed to transfer applicable rights if the work does not
              qualify as a work made for hire. The exact language and scope should fit the project
              and the rights the business actually needs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">Other terms that matter</h2>
            <ul className="mt-4 space-y-3">
              <li>• Confidentiality and treatment of proprietary information.</li>
              <li>• Rights in pre-existing tools, templates, code, footage, or other contractor materials.</li>
              <li>• Portfolio and publicity rights.</li>
              <li>• Third-party materials, music, fonts, stock assets, and licenses.</li>
              <li>• Revision obligations, acceptance criteria, and final delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-[#0E2A47]">The practical takeaway</h2>
            <p className="mt-4">
              If ownership matters, address it before the work is created—not after the project becomes
              valuable. A clear contractor agreement can define what is being created, who owns it,
              what rights are retained, and what the contractor may do with the work afterward.
            </p>
          </section>
        </div>

        <div className="mt-14 border border-[#0E2A47]/10 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86A2E]">Related Service</p>
          <h2 className="mt-3 font-serif text-2xl">Hiring contractors who will create valuable work?</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7386]">
            Ascent Legal drafts and reviews contractor agreements, IP assignments, confidentiality provisions, and related project documents.
          </p>
          <Link href="/services/team-contractor-docs" className="mt-5 inline-flex bg-[#0E2A47] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#B86A2E]">
            Contractor Agreement Services →
          </Link>
        </div>

        <p className="mt-8 text-xs leading-5 text-[#7A8794]">
          This article is general information only and is not legal advice. Reading it does not create an attorney-client relationship.
        </p>
      </article>
    </main>
  );
}
