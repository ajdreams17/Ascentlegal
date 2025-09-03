'use client';

import { useState } from 'react';

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

export default function NewsletterForm() {
  const [state, setState] = useState({ sending: false, sent: false, error: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setState({ sending: true, sent: false, error: '' });

    const email = e.currentTarget.email.value;

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'newsletter', email, 'bot-field': '' }),
      });
      setState({ sending: false, sent: true, error: '' });
      // Optional: if you’ve created /thanks, you can also do:
      // window.location.assign('/thanks');
    } catch (err) {
      setState({ sending: false, sent: false, error: 'Something went wrong. Please try again.' });
    }
  }

  if (state.sent) {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
        Thanks — you’re subscribed!
      </div>
    );
  }

  return (
    <>
      {/* Build-time copy so Netlify parses the form definition */}
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
        <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>

        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className="h-11 rounded-md border border-gray-300 px-3"
        />
        <button
          type="submit"
          disabled={state.sending}
          className="h-11 rounded-md bg-indigo-600 px-5 text-white hover:bg-indigo-700 disabled:opacity-60"
        >
          {state.sending ? 'Submitting…' : 'Subscribe'}
        </button>
      </form>

      {state.error && (
        <p className="mt-2 text-sm text-red-600">{state.error}</p>
      )}
    </>
  );
}
