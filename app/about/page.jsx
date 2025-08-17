import Link from "next/link";

export const metadata = {
  title: "About Us | Ascent Legal",
  description: "Meet the Ascent Legal team—business and IP attorneys helping founders and creators grow with confidence.",
};

const attorneys = [
  {
    name: "John Doe",
    role: "Founding Attorney – Business & IP Law",
    slug: "john-doe",
  },
  {
    name: "Jane Smith",
    role: "Attorney – Contracts & Employment Law",
    slug: "jane-smith",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold">About Ascent Legal</h1>
      <p className="mt-6 text-lg text-gray-600">
        We combine integrity, excellence, and modern legal strategy to protect what you’ve built and guide your next stage of growth.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Meet Our Attorneys</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {attorneys.map((a) => (
            <Link
              key={a.slug}
              href={`/attorneys/${a.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition"
            >
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <p className="text-sm text-gray-600">{a.role}</p>
              <span className="mt-2 inline-block text-sm text-indigo-600">View Profile →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
