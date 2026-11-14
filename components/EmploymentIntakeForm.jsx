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

export default function EmploymentIntakeForm() {
  const [attribution, setAttribution] = useState(EMPTY_ATTRIBUTION);
  const [issue, setIssue] = useState("");
  const [heardFrom, setHeardFrom] = useState("");

  useEffect(() => {
    setAttribution(getLeadAttribution());
  }, []);

  function handleSubmit() {
    try {
      window.sessionStorage.setItem(
        "ascent_last_employment_lead",
        JSON.stringify({
          service_requested: "Employment Pre-Litigation",
          employment_issue: issue || "not_selected",
          reported_source: heardFrom || "not_selected",
          ...attribution,
        })
      );
    } catch {
      // Tracking context should never block form submission.
    }

    window.gtag?.("event", "employment_inquiry_submit_clicked", {
      placement: "employment_landing_page",
      employment_issue: issue || "not_selected",
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
      <input type="hidden" name="_redirect" value="https://ascentlegal.io/employment/thank-you" />
      <input type="hidden" name="_subject" value="New Employment Pre-Litigation Inquiry" />
      <input type="hidden" name="service_requested" value="Employment Pre-Litigation" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />

      {Object.entries(attribution).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} readOnly />
      ))}

      <div className="grid grid-cols-1 gap-5">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employment-name">
            Name
          </label>
          <input id="employment-name" name="name" required className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employment-email">
            Email
          </label>
          <input id="employment-email" type="email" name="email" required className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employment-phone">
            Phone
          </label>
          <input id="employment-phone" name="phone" className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employer">
            Employer or former employer
          </label>
          <input id="employer" name="employer" required className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" />
          <p className="mt-2 text-xs leading-5 text-[#7A8794]">
            We ask for the employer name at the outset so we can begin a conflict review before receiving detailed facts.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employment-issue">
            What issue best describes your situation?
          </label>
          <select
            id="employment-issue"
            name="employment_issue"
            value={issue}
            onChange={(event) => setIssue(event.target.value)}
            required
            className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 text-[#0E2A47] outline-none focus:border-[#B86A2E]"
          >
            <option value="">Select one</option>
            <option value="Retaliation">Retaliation</option>
            <option value="Wrongful Termination">Wrongful Termination</option>
            <option value="Discrimination">Discrimination</option>
            <option value="Harassment">Harassment</option>
            <option value="Leave or Accommodation">Leave or Accommodation</option>
            <option value="Whistleblower">Whistleblower</option>
            <option value="Wage and Hour">Wage and Hour</option>
            <option value="Severance Agreement">Severance Agreement</option>
            <option value="Other or Unsure">Other / Unsure</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employment-deadline">
            Known deadline or urgent date <span className="normal-case tracking-normal text-[#7A8794]">(if any)</span>
          </label>
          <input id="employment-deadline" name="reported_deadline" placeholder="Example: severance deadline, hearing, agency date" className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 outline-none focus:border-[#B86A2E]" />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employment-source">
            How did you hear about us? <span className="normal-case tracking-normal text-[#7A8794]">(optional)</span>
          </label>
          <select
            id="employment-source"
            name="reported_source"
            value={heardFrom}
            onChange={(event) => setHeardFrom(event.target.value)}
            className="h-12 w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 text-[#0E2A47] outline-none focus:border-[#B86A2E]"
          >
            <option value="">Select one</option>
            <option value="Attorney Referral">Attorney Referral</option>
            <option value="Google Search">Google Search</option>
            <option value="Google Maps / Business Profile">Google Maps / Business Profile</option>
            <option value="Existing Client">Existing Client</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="Bar Association / Event">Bar Association / Event</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5F7386]" htmlFor="employment-message">
            Brief description
          </label>
          <textarea id="employment-message" name="message" rows={6} required className="w-full border border-[#0E2A47]/20 bg-[#FBFAF7] px-4 py-3 outline-none focus:border-[#B86A2E]" />
        </div>

        <button type="submit" className="mt-1 w-full bg-[#0E2A47] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#B86A2E]">
          Request a Matter Review →
        </button>
      </div>

      <p className="mt-5 text-xs leading-5 text-[#7A8794]">
        Submitting this form does not create an attorney-client relationship. Please do not send confidential documents or rely on this submission to protect a deadline. Representation begins only after conflict clearance and a written engagement agreement.
      </p>
    </form>
  );
}
