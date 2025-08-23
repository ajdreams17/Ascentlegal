// app/contact/page.jsx
export const metadata = {
  title: "Contact | Ascent Legal",
  description:
    "Tell us about your matter and we'll get back within one business day.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12">
      {/* Left column: heading + tagline + bullets */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Let&apos;s talk</h1>
        <p className="mt-4 text-gray-600">
          Tell us about your matter and we&apos;ll get back within one business
          day.
        </p>

        <div className="mt-8 space-y-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Transparent flat-fee options
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Dedicated point of contact
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Secure client portal
          </div>
        </div>
      </div>

      {/* Right column: Formspree-connected form */}
      <form
        action="https://formspree.io/f/mrbladoo"
        method="POST"
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        {/* (Optional) redirect after submit – create /thank-you if you want this */}
        {/* <input type="hidden" name="_redirect" value="/thank-you" /> */}

        {/* (Optional) honeypot spam trap */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />

        <div className="grid grid-cols-1 gap-4">
          <label className="sr-only" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your name"
            className="h-11 rounded-md border border-gray-300 px-3"
            required
          />

          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="h-11 rounded-md border border-gray-300 px-3"
            required
          />

          <label className="sr-only" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            placeholder="Company"
            className="h-11 rounded-md border border-gray-300 px-3"
          />

          <label className="sr-only" htmlFor="message">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can we help?"
            className="rounded-md border border-gray-300 px-3 py-2"
            required
          />

          <div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-3 text-white"
            >
              Send message
            </button>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="underline hover:text-indigo-600">
            privacy policy
          </a>
          .
        </p>
      </form>
      {/* ✅ Trustpilot Widget (added below form, full width across section) */}
     <div className="mt-10">
  <TrustpilotBadge />
</div>
      </div>
    </section>
  );
}
    
