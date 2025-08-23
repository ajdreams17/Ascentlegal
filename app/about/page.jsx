import Link from "next/link";

export const metadata = {
  title: "About Us | Ascent Legal",
  description:
    "Meet the Ascent Legal team—business and IP attorneys helping founders and creators grow with confidence.",
};

const attorneys = [
  { name: "Anthony Paredes", role: "Founding Attorney – Business & IP Law", slug: "Anthony-Paredes" },
  { name: "April Paredes", role: " Co-Owner & Principal Attorney ", slug: "april-paredes" },
];

export default function AboutPage() {
  return (
      <main className="mx-auto max-w-5xl px-6 py-16">
      {/* ===== Hero / About Ascent Legal ===== */}
      <h1 className="text-4xl md:text-5xl font-bold">
        About <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">Ascent Legal</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600">
Ascent Legal, founded in Los Angeles, makes premium legal services accessible without sacrificing excellence. We guide entrepreneurs and creatives to build, protect, and grow their intellectual property and business assets with clarity, integrity, and reliability.</p>
      {/* ===== Stats ===== */}
 <div className="mt-10 grid sm:grid-cols-3 gap-6">
  {[
    {
      title: "Transparent Pricing",
      desc: "Predictable flat-fee options, no surprise bills."
    },
    {
      title: "Fast Response",
      desc: "Quick turnaround and accessible communication."
    },
    {
      title: "Business-First Advice",
      desc: "Legal strategies aligned with your growth."
    }
  ].map((s) => (
    <div key={s.title} className="rounded-xl border border-gray-100 p-6 text-center">
      <div className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
        {s.title}
      </div>
      <div className="mt-2 text-sm text-gray-600">{s.desc}</div>
    </div>
  ))}
</div>


      {/* ===== Approach & Who We Serve ===== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <h3 className="font-semibold">Our approach</h3>
          <p className="text-gray-600 mt-2">A reliable partner invested in your long-term success.</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <h3 className="font-semibold">Who we serve</h3>
          <p className="text-gray-600 mt-2">
Entrepreneurs, growing companies, and creative professionals in tech, media, and entertainment.          </p>
        </div>
      </div>

      {/* ===== Meet Our Attorneys ===== */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Meet Our Attorneys</h2>
        <p className="mt-2 text-gray-600">
          Business-first counsel from experienced attorneys who protect your brand and help you grow.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {attorneys.map((a) => (
            <Link
              key={a.slug}
              href={`/attorneys/${a.slug}`}
              className="group rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-6 shadow-sm hover:shadow transition"
            >
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <p className="text-sm text-gray-600">{a.role}</p>
              <span className="mt-2 inline-block text-sm text-indigo-600 group-hover:underline">
                View Profile →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
