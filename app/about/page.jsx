import Link from "next/link";

export const metadata = {
  title: "About Us | Ascent Legal",
  description:
    "Meet the Ascent Legal team—business and IP attorneys helping founders and creators grow with confidence.",
};

const attorneys = [
  { name: "John Doe", role: "Founding Attorney – Business & IP Law", slug: "john-doe" },
  { name: "Jane Smith", role: "Attorney – Contracts & Employment Law", slug: "jane-smith" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* ===== Hero / About Ascent Legal ===== */}
      <h1 className="text-4xl md:text-5xl font-bold">About Ascent Legal</h1>
      <p className="mt-6 text-lg text-gray-600">
        Use this section to introduce the firm—mission, values, and what makes your counsel practical and business-first.
      </p>

      {/* ===== Stats Section ===== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white shadow p-6 text-center">
          <h2 className="text-2xl font-bold text-indigo-600">15+</h2>
          <p className="text-gray-600">Years experience</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 text-center">
          <h2 className="text-2xl font-bold text-indigo-600">300+</h2>
          <p className="text-gray-600">Clients served</p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6 text-center">
          <h2 className="text-2xl font-bold text-indigo-600">&lt;4h</h2>
          <p className="text-gray-600">Avg. response</p>
        </div>
      </div>

      {/* ===== Approach & Who We Serve ===== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white shadow p-6">
          <h3 className="font-semibold">Our approach</h3>
          <p className="text-gray-600 mt-2">
            Clear communication, predictable fees, pragmatic advice.
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow p-6">
          <h3 className="font-semibold">Who we serve</h3>
          <p className="text-gray-600 mt-2">
            Startups, SMBs, and mid-market operators in tech, commerce, and regulated industries.
          </p>
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
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition"
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
