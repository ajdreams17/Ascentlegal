export const metadata = {
  title: "Contracts Drafting | Ascent Legal",
  description:
    "Drafting and reviewing contracts that protect your business interests with precision and clarity.",
};

export default function ContractsDraftingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold">
        Contracts Drafting
      </h1>
      <p className="mt-4 text-gray-600 max-w-3xl">
        Every business relationship is defined by agreements. Our team ensures
        that your contracts are clear, enforceable, and aligned with your goals
        while minimizing risk. From day-to-day vendor contracts to high-stakes
        deals, we deliver precise legal drafting tailored to your needs.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Commercial Agreements",
            desc: "Vendor, supplier, and service contracts that keep your operations running smoothly.",
          },
          {
            title: "Partnership & Joint Ventures",
            desc: "Clearly outline ownership, responsibilities, and exit strategies in collaborative ventures.",
          },
          {
            title: "Employment & Contractor Agreements",
            desc: "Protect your business with well-structured employee and independent contractor contracts.",
          },
          {
            title: "Nondisclosure Agreements (NDAs)",
            desc: "Safeguard confidential information in negotiations and partnerships.",
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow"
          >
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-6 py-3 text-white font-medium shadow hover:opacity-90 inline-block"
        >
          Draft My Contract
        </a>
      </div>
    </section>
  );
}
