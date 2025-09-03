'use client';

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

export default function NewsletterForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', email, 'bot-field': '' }),
    });

    window.location.assign('/thanks');
  }

  return (
    <>
      {/* Hidden build-time form for Netlify parsing */}
      <form name="newsletter" data-netlify="true" hidden>
        <input type="email" name="email" />
        <input type="hidden" name="form-name" value="newsletter" />
      </form>

      <form
        name="newsletter"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className="h-11 rounded-md border border-gray-300 px-3"
        />
        <button type="submit" className="h-11 rounded-md bg-indigo-600 px-5 text-white hover:bg-indigo-700">
          Subscribe
        </button>
      </form>
    </>
  );
}
