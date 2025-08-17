import Link from "next/link";

export const metadata = {
  title: "Our Attorneys | Ascent Legal",
  description: "Meet the experienced attorneys at Ascent Legal who protect your business and brand.",
};

export default function Attorneys() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Meet Our Attorneys</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* John Doe */}
        <div className="p-6 rounded-xl border bg-white shadow">
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-600 mt-2">Founding Attorney – Business & IP Law</p>
          <p className="mt-4 text-gray-700">
            John helps founders and brands protect what they’ve built through trademarks, contracts, and strategic guidance.
          </p>
          <Link href="/attorneys/john-doe" className="inline-block mt-4 text-indigo-600 hover:text-indigo-700">
            View Profile →
          </Link>
        </div>

        {/* Jane Smith */}
        <div className="p-6 rounded-xl border bg-white shadow">
          <h2 className="text-2xl font-semibold">Jane Smith</h2>
          <p className="text-gray-600 mt-2">Attorney – Contracts & Employment Law</p>
          <p className="mt-4 text-gray-700">
            Jane advises businesses on contracts and employment policies that keep teams compliant and protected.
          </p>
          <Link href="/attorneys/jane-smith" className="inline-block mt-4 text-indigo-600 hover:text-indigo-700">
            View Profile →
          </Link>
        </div>
      </div>
    </main>
  );
}
