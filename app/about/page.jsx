import Link from "next/link";

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
  },
  {
    name: "Jane Smith",
    role: "Attorney – Contracts & Employment Law",
    slug: "jane-smith",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* ===== Hero / About Ascent Legal ===== */}
      <h1 className="text-4xl md:text-5xl font-bold">About Ascent Legal</h1>
      <p className="mt-6 text-lg text-gray-600">
        Use this section to introduce the firm—mission, values, and what makes
        your counsel practical and business-first.
      </p>

      {/* ===== Stats Section ===== */}
      <div className="mt-12 grid grid-cols-1 sm:gri
