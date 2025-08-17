import Image from "next/image";

export default function JaneSmithPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Jane Smith</h1>
      <p className="mt-2 text-gray-600">Attorney – Contracts & Employment Law</p>

      {/* Headshot */}
      <div className="mt-6">
        <Image
          src="/attorneys/jane-smith.jpg"
          alt="Jane Smith headshot"
          width={200}
          height={200}
          className="rounded-full shadow-md object-cover"
        />
      </div>

      {/* Bio */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        Jane Smith focuses on contracts, employment law, and helping growing
        businesses stay compliant while scaling effectively...
      </p>
    </main>
  );
}
