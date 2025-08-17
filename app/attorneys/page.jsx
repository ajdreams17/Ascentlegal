import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Ascent Legal",
  description:
    "Meet the Ascent Legal team—business and IP attorneys helping founders and creators grow with confidence.",
};

const attorneys = [
  { 
    name: "John Doe", 
    role: "Founding Attorney – Business & IP Law", 
    slug: "john-doe",
    image: "/attorneys/john-doe.jpg"  // make sure this file exists in /public/attorneys/
  },
  { 
    name: "Jane Smith", 
    role: "Attorney – Contracts & Employment Law", 
    slug: "jane-smith",
    image: "/attorneys/april_paredes.jpg" // headshot for April
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* ===== Hero ===== */}
      <h1 className="text-4xl md:text-5xl font-bold">
        About{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
          Ascent Legal
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Use this section to introduce the firm—mission, values, and what makes your counsel
        practical and business-first.
      </p>

      {/* ===== Stats ===== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center">
          <h2 className="text-2xl font-bold text-indigo-600">15+</h2>
          <p className="text-gray-600">Years experience</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center">
          <h2 className="text-2xl font-bold text-indigo-600">300+</h2>
          <p className="text-gray-600">Clients served</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center">
          <h2 className="text-2xl font-bold text-indigo-600">&lt;4h</h2>
          <p className="text-gray-600">Avg. response</p>
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
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow transition"
            >
              {/* Headshot */}
              <div className="w-24 h-24 mb-4">
                <Image
                  src={a.image}
                  alt={a.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Info */}
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
