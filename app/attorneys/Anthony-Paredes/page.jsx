import Link from "next/link";

export const metadata = {
  title: "Anthony – Business & IP Attorney | Ascent Legal",
  description: "John Doe advises startups and creators on business formation, trademarks, and IP strategy.",
};

export default function JohnDoe() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/about" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
        ← Back to About
      </Link>

      <h1 className="mt-4 text-4xl font-bold">Anthony Paredes</h1>
      <p className="text-lg text-gray-600 mt-2">Founding Attorney – Business & IP Law</p>

      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>
     Anthony Paredes, Esq. is a dedicated trademark attorney who helps businesses and individuals protect and grow their brands with confidence. Focusing on non-litigation trademark matters, Anthony advises clients on trademark clearance, registration, portfolio management, and enforcement. Whether guiding a start-up through its first trademark filing or assisting an established company with managing an international portfolio, he provides clear, practical solutions tailored to each client’s needs.

    <br />    <br />In addition to trademark law, Anthony has significant experience in U.S. immigration law. He has assisted clients with a wide range of matters, including EB-3 immigrant petitions, PERM labor certifications, E-1 treaty trader visas, VAWA petitions, and U-Visas. This dual focus allows him to serve as a trusted advisor to both individuals and businesses navigating complex legal processes that often have life-changing implications.

At the core of Anthony’s practice is a client-centered approach.    <br /> <br /> Known for being approachable, responsive, and detail-oriented, he ensures that clients understand their options at every stage and feel confident in the decisions they make. His goal is not only to provide sound legal advice but also to deliver peace of mind by making complicated procedures more manageable.

By combining deep legal knowledge with a practical, solutions-driven mindset, Anthony empowers clients to achieve their goals—whether that means securing brand protection in a competitive marketplace or building a future in the United States.<br />
        </p>
      </div>
    </main>
  );
}
