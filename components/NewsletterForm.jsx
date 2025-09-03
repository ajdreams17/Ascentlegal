// app/components/NewsletterForm.jsx  (Server Component - no "use client")
export default function NewsletterForm() {
  return (
    <form
      name="newsletter"           // must match the hidden field below
      method="POST"
      data-netlify="true"         // tells Netlify to process it
      netlify-honeypot="bot-field"
      action="/thanks"            // optional thank-you page you have
      className="space-y-3"
    >
      {/* Required hidden input so Netlify knows which form this is */}
      <input type="hidden" name="form-name" value="newsletter" />

      {/* Honeypot (spam trap) */}
      <p className="hidden">
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <label className="block">
        <span className="sr-only">Email</span>
        <input
          type="email"
          name="email"              // every field needs a name
          required
          className="w-full rounded-md border px-3 py-2"
          placeholder="you@email.com"
        />
      </label>

      <button type="submit" className="rounded-md bg-black px-4 py-2 text-white">
        Subscribe
      </button>
    </form>
  );
}
