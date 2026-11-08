"use client";

import { useEffect, useState } from "react";
import { getLeadAttribution } from "./leadAttribution";

const EMPTY_ATTRIBUTION = {
  first_landing_page: "",
  first_referrer: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
};

export default function ContactForm() {
  const [attribution, setAttribution] = useState(EMPTY_ATTRIBUTION);
  const [service, setService] = useState("");
  const [heardFrom, setHeardFrom] = useState("");

  useEffect(() => {
    setAttribution(getLeadAttribution());
  }, []);

  function handleSubmit() {
    window.gtag?.("event", "contact_form_submit_clicked", {
      placement: "contact_page",
      service_requested: service || "not_selected",
      reported_source: heardFrom || "not_selected",
      utm_source: attribution.utm_source || "none",
      utm_medium: attribution.utm_medium || "none",
      utm_campaign: attribution.utm_campaign || "none",
      first_landing_page: attribution.first_landing_page || "unknown",
    });
  }

  return (
    <form
      action="https://formspree.io/f/mrbladoo"
      method="POST"
      onSubmit={handleSubmit}
      className="border border-[#0E2A47]/10 bg-white p-7 shadow-[0_20px_50px_rgba(14,42,71,0.06)] sm:p-8"
    >
      <input type="hidden" name="_redirect" value="https://ascentlegal.io/thank-you?source=contact-form" />
      <input type="hidden" name="_subject" value="New Ascent Legal Inquiry" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />
      <input type="email" name="_replyto" className="hidden" />

      {Object.entries(attribution).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} readOnly />
      ))}

      <div className="grid grid-cols-1 gap-5">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" required />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" name="email" className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" required />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="company">
            Company <span className="normal-case tracking-normal text-[#7A8794]">(optional)</span>
          </label>
          <input id="company" name="company" className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="service">
            What do you need help with?
          </label>
          <select
            id="service"
            name="service_requested"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 text-[#0E2A47] outline-none focus:border-[#B86A2E]"
            required
          >
            <option value="">Select a service</option>
            <option value="Creator Contract Review">Creator Contract Review</option>
            <option value="Entertainment & Brand Deals">Entertainment & Brand Deals</option>
            <option value="Trademark">Trademark</option>
            <option value="Copyright & Licensing">Copyright & Licensing</option>
            <option value="Contract Drafting & Review">Contract Drafting & Review</option>
            <option value="Business Formation">Business Formation</option>
            <option value="Deal Desk Support">Deal Desk Support</option>
            <option value="Contractor Agreements">Contractor Agreements</option>
            <option value="Other / Unsure">Other / Unsure</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="source">
            How did you hear about us? <span className="normal-case tracking-normal text-[#7A8794]">(optional)</span>
          </label>
          <select
            id="source"
            name="reported_source"
            value={heardFrom}
            onChange={(event) => setHeardFrom(event.target.value)}
            className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 text-[#0E2A47] outline-none focus:border-[#B86A2E]"
          >
            <option value="">Select one</option>
            <option value="Google Search">Google Search</option>
            <option value="Google Maps / Business Profile">Google Maps / Business Profile</option>
            <option value="Referral">Referral</option>
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Speaking Event / Bar Association">Speaking Event / Bar Association</option>
            <option value="Existing Client">Existing Client</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="message">
            How can we help?
          </label>
          <textarea id="message" name="message" rows={6} className="w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 py-3 outline-none focus:border-[#B86A2E]" required />
        </div>

        <button
          type="submit"
          className="mt-1 w-full bg-[#0E2A47] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#B86A2E]"
        >
          Send Inquiry →
        </button>
      </div>

      <p className="mt-5 text-xs leading-5 text-[#7A8794]">
        Contacting Ascent Legal or submitting this form does not create an attorney-client relationship.
        Do not send confidential or time-sensitive information. We do not represent you unless and until
        we confirm that no conflict prevents the representation and both you and the firm sign a written
        engagement agreement. By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-[#B86A2E]">privacy policy</a>.
      </p>
    </form>
  );
}
