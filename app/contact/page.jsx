// app/contact/ContactForm.client.jsx
"use client";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mrbladoo"
      method="POST"
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
    >
      {/* Spam honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      {/* Optional redirect after success: create /thanks and then uncomment */}
      {/*
      <input type="hidden" name="_redirect" value="https://your-domain.com/thanks" />
      */}

      <div className="grid grid-cols-1 gap-4">
        <input
          name="name"
          className="h-11 rounded-md border border-gray-300 px-3"
          placeholder="Your name"
          autoComplete="name"
          required
        />
        <input
          name="email"
          type="email"
          className="h-11 rounded-md border border-gray-300 px-3"
          placeholder="Email"
          autoComplete="email"
          required
        />
        <input
          name="company"
          className="h-11 rounded-md border border-gray-300 px-3"
          placeholder="Company"
          autoComplete="organization"
        />
        <textarea
          name="message"
          rows={5}
          className="rounded-md border border-gray-300 px-3 py-2"
          placeholder="How can we help?"
          required
        />
        <div>
          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-3 text-white">
            Send message
          </button>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
    </form>
  );
}
