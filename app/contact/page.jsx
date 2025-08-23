"use client";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mrbladoo"
      method="POST"
      className="space-y-4"
    >
      {/* honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <input
        name="name"
        placeholder="Your name"
        autoComplete="name"
        required
        className="w-full h-12 rounded-lg border border-gray-200 bg-white px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        required
        className="w-full h-12 rounded-lg border border-gray-200 bg-white px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400"
      />
      <input
        name="company"
        placeholder="Company"
        autoComplete="organization"
        className="w-full h-12 rounded-lg border border-gray-200 bg-white px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400"
      />
      <textarea
        name="message"
        rows={6}
        placeholder="How can we help?"
        required
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400"
      />

      <button
        type="submit"
        className="w-full h-12 rounded-xl text-white font-medium shadow
                   bg-gradient-to-r from-indigo-500 to-teal-400
                   hover:opacity-95 transition"
      >
        Send message
      </button>

      <p className="text-xs text-gray-500">
        By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
}
