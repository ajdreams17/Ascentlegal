// app/contact/page.jsx  (Server Component)
export const metadata = {
  title: "Contact | Ascent Legal",
  description: "Tell us about your matter and we'll get back within one business day.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Let's talk</h1>
        <p className="mt-4 text-gray-600">
          Tell us about your matter and we'll get back within one business day.
        </p>
        <div className="mt-8 space-y-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-indigo-500" /> Transparent flat-fee options
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-teal-400" /> Dedicated point of contact
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-indigo-500" /> Secure client portal
          </div>
        </div>
      </div>

      <form className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4">
          <input className="h-11 rounded-md border border-gray-300 px-3" placeholder="Your name" />
          <input type="email" className="h-11 rounded-md border border-gray-300 px-3" placeholder="Email" />
          <input className="h-11 rounded-md border border-gray-300 px-3" placeholder="Company" />
          <textarea rows={5} className="rounded-md border border-gray-300 px-3 py-2" placeholder="How can we help?" />
          {/* was motion.div; simple div keeps it server-safe */}
          <div>
            <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-3 text-white">
              Send message
            </button>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
      </form>
    </section>
  );
}
