export const metadata = {
  title: "Contact | Ascent Legal",
  description: "Tell us about your matter and we'll get back within one business day.",
};

import ContactForm from "./ContactForm.client";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 md:gap-16">
      {/* Left column */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Let&apos;s talk</h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Tell us about your matter and we&apos;ll get back within one business day.
        </p>

        <ul className="mt-8 space-y-5 text-sm text-gray-700">
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo-500 inline-block" />
            Transparent flat-fee options
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-teal-400 inline-block" />
            Dedicated point of contact
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo-500 inline-block" />
            Secure client portal
          </li>
        </ul>
      </div>

      {/* Right column: card form */}
      <div className="rounded-[20px] border border-gray-100 shadow-sm bg-white p-6 sm:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
