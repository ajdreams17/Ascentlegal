import Link from "next/link";

export const metadata = {
  title: "John Doe – Business & IP Attorney | Ascent Legal",
  description: "John Doe advises startups and creators on business formation, trademarks, and IP strategy.",
};

export default function JohnDoe() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/about" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
        ← Back to About
      </Link>

      <h1 className="mt-4 text-4xl font-bold">John Doe</h1>
      <p className="text-lg text-gray-600 mt-2">Founding Attorney – Business & IP Law</p>

      <div className="mt-8 space-y-4 text-lg leading-relaxed text-gray-700">
        <p>
          John helps founders and brands protect what they’ve built—covering trademarks, contracts,
          and strategic business formation. With 15+ years of experience, he focuses on practical,
          business-first outcomes.
        </p>
      </div>
    </main>
  );
}
