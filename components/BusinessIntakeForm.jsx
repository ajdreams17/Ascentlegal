"use client";

import { useMemo, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  role: "",
  state: "",
  matterType: "",
  deadline: "",
  businessDescription: "",
  entityStatus: "",
  entityType: "",
  formationState: "",
  owners: "",
  requestedHelp: "",
  contractType: "",
  counterparty: "",
  contractStatus: "",
  contractValue: "",
  contractReceivedDate: "",
  governanceDocs: "",
  ownershipDetails: "",
  allOwnersAgree: "",
  proposedChange: "",
  investorCount: "",
  investor1Name: "",
  investor1Amount: "",
  investor1Percent: "",
  investor2Name: "",
  investor2Amount: "",
  investor2Percent: "",
  investor3Name: "",
  investor3Amount: "",
  investor3Percent: "",
  investor4Name: "",
  investor4Amount: "",
  investor4Percent: "",
  investor5Name: "",
  investor5Amount: "",
  investor5Percent: "",
  investor6Name: "",
  investor6Amount: "",
  investor6Percent: "",
  newClasses: "",
  sameRights: "",
  classRights: "",
  approvalsOrDisagreements: "",
  contractorRole: "",
  contractorServices: "",
  contractorPayment: "",
  contractorWorkProduct: "",
  contractorStartDate: "",
  contractorTerm: "",
  contractorConfidentialInfo: "",
  contractorExistingAgreement: "",
  dealTypes: "",
  monthlyVolume: "",
  turnaroundNeeds: "",
  internalReviewer: "",
  workflowIssues: "",
  preferredFeeStructure: "",
  priorAttorney: "",
  documentsAvailable: "",
  opposingOrRelatedParties: "",
  matterDetails: "",
  finalNotes: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-[#0E2A47]/15 bg-white px-4 py-3 text-sm text-[#0E2A47] outline-none transition placeholder:text-[#7A8794] focus:border-[#B86A2E]";

function Field({ label, name, form, setForm, type = "text", required = false, placeholder = "" }) {
  return (
    <label className="block text-sm font-medium text-[#0E2A47]">
      {label}{required ? " *" : ""}
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={(e) => setForm((current) => ({ ...current, [name]: e.target.value }))}
        className={inputClass}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function TextArea({ label, name, form, setForm, required = false, placeholder = "", rows = 4 }) {
  return (
    <label className="block text-sm font-medium text-[#0E2A47]">
      {label}{required ? " *" : ""}
      <textarea
        name={name}
        value={form[name]}
        onChange={(e) => setForm((current) => ({ ...current, [name]: e.target.value }))}
        className={inputClass}
        placeholder={placeholder}
        rows={rows}
        required={required}
      />
    </label>
  );
}

function Select({ label, name, form, setForm, options, required = false }) {
  return (
    <label className="block text-sm font-medium text-[#0E2A47]">
      {label}{required ? " *" : ""}
      <select
        name={name}
        value={form[name]}
        onChange={(e) => setForm((current) => ({ ...current, [name]: e.target.value }))}
        className={inputClass}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export default function BusinessIntakeForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const matterType = form.matterType;

  const sectionTitle = useMemo(() => {
    const map = {
      "Business formation": "Formation Details",
      "Contract drafting or review": "Contract Details",
      "Founder / ownership / governance": "Ownership & Governance",
      "Investor / equity issuance": "Investor & Equity Details",
      "Contractor / team documents": "Contractor Details",
      "Ongoing deal desk / outside counsel": "Deal Desk Details",
      Other: "Additional Details",
    };
    return map[matterType] || "";
  }, [matterType]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/business-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit the business intake.");
      }

      window.gtag?.("event", "business_intake_submitted", {
        feature: "business_intake",
        matter_type: form.matterType,
      });

      setSubmitted(true);
    } catch (err) {
      setError(err?.message || "We could not submit your intake. Please contact the firm directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-[#0E2A47]/10 bg-white p-8 shadow-[0_20px_60px_rgba(14,42,71,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B86A2E]">Submitted</p>
        <h2 className="mt-4 font-serif text-3xl text-[#0E2A47]">Thank you.</h2>
        <p className="mt-4 text-sm leading-7 text-[#5F7386]">
          Your business intake has been sent to Ascent Legal for attorney review. Submission does not create an
          attorney-client relationship, and the firm has not agreed to represent you. If you have an urgent deadline,
          do not rely on this submission to protect it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="border border-[#0E2A47]/10 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">1. Contact Information</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" form={form} setForm={setForm} required />
          <Field label="Email" name="email" type="email" form={form} setForm={setForm} required />
          <Field label="Phone" name="phone" type="tel" form={form} setForm={setForm} />
          <Field label="Business / entity name" name="businessName" form={form} setForm={setForm} />
          <Field label="Your role" name="role" form={form} setForm={setForm} placeholder="Founder, member, manager, owner, etc." />
          <Field label="State" name="state" form={form} setForm={setForm} placeholder="Where you or the business are located" />
        </div>
      </section>

      <section className="border border-[#0E2A47]/10 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">2. Business Matter</p>
        <div className="mt-6 grid gap-5">
          <Select
            label="What do you need help with?"
            name="matterType"
            form={form}
            setForm={setForm}
            required
            options={[
              "Business formation",
              "Contract drafting or review",
              "Founder / ownership / governance",
              "Investor / equity issuance",
              "Contractor / team documents",
              "Ongoing deal desk / outside counsel",
              "Other",
            ]}
          />
          <TextArea
            label="Briefly describe the business and what it does"
            name="businessDescription"
            form={form}
            setForm={setForm}
            rows={3}
          />
          <Field
            label="Is there a deadline, signing date, launch date, or other urgent date?"
            name="deadline"
            form={form}
            setForm={setForm}
            placeholder="If none, write None"
          />
          <TextArea
            label="What would you like Ascent Legal to help you accomplish?"
            name="requestedHelp"
            form={form}
            setForm={setForm}
            required
            rows={4}
          />
        </div>
      </section>

      {matterType && (
        <section className="border border-[#B86A2E]/25 bg-[#FBFAF7] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">3. {sectionTitle}</p>

          {matterType === "Business formation" && (
            <div className="mt-6 grid gap-5">
              <Select
                label="Has the business already been formed?"
                name="entityStatus"
                form={form}
                setForm={setForm}
                options={["No", "Yes", "In progress"]}
              />
              <Field label="Entity type, if known" name="entityType" form={form} setForm={setForm} placeholder="LLC, corporation, undecided, etc." />
              <Field label="State of formation or intended formation" name="formationState" form={form} setForm={setForm} />
              <TextArea label="List the founders / owners and proposed ownership percentages" name="owners" form={form} setForm={setForm} />
              <Select
                label="Will there be more than one owner?"
                name="allOwnersAgree"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure yet"]}
              />
              <TextArea
                label="Describe each founder's role and expected responsibilities"
                name="proposedChange"
                form={form}
                setForm={setForm}
              />
              <TextArea
                label="Will any founder contribute existing intellectual property, content, trademarks, software, or other assets?"
                name="matterDetails"
                form={form}
                setForm={setForm}
              />
              <Select
                label="Do you expect outside investors in the next 12 months?"
                name="newClasses"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
            </div>
          )}

          {matterType === "Contract drafting or review" && (
            <div className="mt-6 grid gap-5">
              <Field label="Type of agreement" name="contractType" form={form} setForm={setForm} placeholder="Services agreement, vendor agreement, collaboration, NDA, etc." />
              <Field label="Other party / counterparty" name="counterparty" form={form} setForm={setForm} />
              <Select
                label="Current status of the agreement"
                name="contractStatus"
                form={form}
                setForm={setForm}
                options={["No draft yet", "Draft received", "Under negotiation", "Signed / executed", "Other"]}
              />
              <Field label="Approximate contract value, if known" name="contractValue" form={form} setForm={setForm} />
              <Field label="Date the agreement was received or drafted" name="contractReceivedDate" type="date" form={form} setForm={setForm} />
              <TextArea
                label="What are the main business terms already agreed upon?"
                name="proposedChange"
                form={form}
                setForm={setForm}
              />
              <TextArea
                label="What provisions or risks are you most concerned about?"
                name="matterDetails"
                form={form}
                setForm={setForm}
              />
              <Select
                label="Do you want Ascent Legal to negotiate directly with the other side?"
                name="allOwnersAgree"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
            </div>
          )}

          {matterType === "Founder / ownership / governance" && (
            <div className="mt-6 grid gap-5">
              <Field label="Entity type" name="entityType" form={form} setForm={setForm} />
              <Field label="State of formation" name="formationState" form={form} setForm={setForm} />
              <Select
                label="Do you have a current operating agreement, bylaws, or shareholder agreement?"
                name="governanceDocs"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
              <TextArea label="List the current owners / members / shareholders and ownership percentages" name="ownershipDetails" form={form} setForm={setForm} />
              <TextArea label="What ownership or governance change are you considering?" name="proposedChange" form={form} setForm={setForm} />
              <Select
                label="Are all current owners in agreement with the proposed change?"
                name="allOwnersAgree"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
              <TextArea label="Describe any pending approvals or disagreements" name="approvalsOrDisagreements" form={form} setForm={setForm} />
              <TextArea
                label="Are there any buyout, transfer, voting, management, or deadlock issues we should know about?"
                name="matterDetails"
                form={form}
                setForm={setForm}
              />
            </div>
          )}

          {matterType === "Investor / equity issuance" && (
            <div className="mt-6 grid gap-5">
              <Field label="Legal name of the LLC / entity" name="businessName" form={form} setForm={setForm} />
              <Field label="State of formation" name="formationState" form={form} setForm={setForm} />
              <Select
                label="Is the LLC member-managed or manager-managed?"
                name="entityStatus"
                form={form}
                setForm={setForm}
                options={["Member-managed", "Manager-managed", "Not applicable / not sure"]}
              />
              <Select
                label="Do you have a current operating agreement or governing documents?"
                name="governanceDocs"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
              <TextArea
                label="List all current owners, ownership percentages, and capital contributions"
                name="ownershipDetails"
                form={form}
                setForm={setForm}
              />
              <Select
                label="Are all current owners in agreement with issuing new equity?"
                name="allOwnersAgree"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
              <Field label="How many new investors are being added?" name="investorCount" type="number" form={form} setForm={setForm} />

              {[1, 2, 3, 4, 5, 6].map((number) => {
                const count = Number(form.investorCount || 0);
                if (number > count || number > 6) return null;

                return (
                  <div key={number} className="rounded-xl border border-[#0E2A47]/10 bg-white p-5">
                    <p className="text-sm font-semibold text-[#0E2A47]">Investor {number}</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <Field
                        label="Full legal name"
                        name={`investor${number}Name`}
                        form={form}
                        setForm={setForm}
                      />
                      <Field
                        label="Investment amount"
                        name={`investor${number}Amount`}
                        form={form}
                        setForm={setForm}
                        placeholder="$"
                      />
                      <Field
                        label="Ownership percentage"
                        name={`investor${number}Percent`}
                        form={form}
                        setForm={setForm}
                        placeholder="%"
                      />
                    </div>
                  </div>
                );
              })}
              <Select
                label="Are different classes of membership interests or equity being created?"
                name="newClasses"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
              <Select
                label="Will all investors receive the same rights as existing owners?"
                name="sameRights"
                form={form}
                setForm={setForm}
                options={["Yes", "No", "Not sure"]}
              />
              <TextArea
                label="If rights differ, describe voting, distribution, liquidation, or other rights"
                name="classRights"
                form={form}
                setForm={setForm}
              />
              <TextArea
                label="Explain any disagreements, pending approvals, or conditions"
                name="approvalsOrDisagreements"
                form={form}
                setForm={setForm}
              />
            </div>
          )}

          {matterType === "Contractor / team documents" && (
            <div className="mt-6 grid gap-5">
              <Field label="Contractor / role" name="contractorRole" form={form} setForm={setForm} placeholder="Editor, designer, developer, consultant, etc." />
              <TextArea label="Describe the services and deliverables" name="contractorServices" form={form} setForm={setForm} />
              <Field label="Payment structure" name="contractorPayment" form={form} setForm={setForm} placeholder="Flat fee, hourly, milestone, etc." />
              <TextArea label="What will the contractor create or what IP / confidential information will they access?" name="contractorWorkProduct" form={form} setForm={setForm} />
              <Field label="Expected start date" name="contractorStartDate" type="date" form={form} setForm={setForm} />
              <Field label="Expected term or project duration" name="contractorTerm" form={form} setForm={setForm} />
              <TextArea
                label="What confidential information or systems will the contractor access?"
                name="contractorConfidentialInfo"
                form={form}
                setForm={setForm}
              />
              <Select
                label="Do you already have an agreement or template you want reviewed?"
                name="contractorExistingAgreement"
                form={form}
                setForm={setForm}
                options={["Yes", "No"]}
              />
            </div>
          )}

          {matterType === "Ongoing deal desk / outside counsel" && (
            <div className="mt-6 grid gap-5">
              <TextArea label="What types of agreements do you regularly handle?" name="dealTypes" form={form} setForm={setForm} />
              <Field label="Approximate number of agreements per month" name="monthlyVolume" form={form} setForm={setForm} />
              <Field label="Typical turnaround needed" name="turnaroundNeeds" form={form} setForm={setForm} placeholder="Same day, 1–3 days, one week, etc." />
              <Field label="Who currently reviews agreements internally?" name="internalReviewer" form={form} setForm={setForm} />
              <TextArea label="Where does the current contract workflow slow down or create problems?" name="workflowIssues" form={form} setForm={setForm} />
              <Select
                label="What type of support are you looking for?"
                name="preferredFeeStructure"
                form={form}
                setForm={setForm}
                options={["Per-project support", "Monthly / ongoing support", "Not sure"]}
              />
              <TextArea
                label="What would an ideal legal workflow look like for your team?"
                name="matterDetails"
                form={form}
                setForm={setForm}
              />
            </div>
          )}

          {matterType === "Other" && (
            <div className="mt-6">
              <TextArea label="Please describe the matter" name="matterDetails" form={form} setForm={setForm} required rows={6} />
            </div>
          )}
        </section>
      )}

      <section className="border border-[#0E2A47]/10 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">4. Conflicts & Documents</p>
        <div className="mt-6 grid gap-5">
          <TextArea
            label="List any other people or companies involved in this matter"
            name="opposingOrRelatedParties"
            form={form}
            setForm={setForm}
            placeholder="Founders, investors, counterparties, vendors, managers, agencies, etc."
          />
          <Select
            label="Are you currently represented by or working with another attorney on this matter?"
            name="priorAttorney"
            form={form}
            setForm={setForm}
            options={["Yes", "No"]}
          />
          <TextArea
            label="What documents do you currently have available?"
            name="documentsAvailable"
            form={form}
            setForm={setForm}
            placeholder="Operating agreement, draft contract, cap table, formation documents, emails, term sheet, etc."
          />
        </div>
      </section>

      <section className="border border-[#0E2A47]/10 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B86A2E]">5. Final Notes</p>
        <div className="mt-6">
          <TextArea
            label="Anything else you want the attorney reviewing this intake to know?"
            name="finalNotes"
            form={form}
            setForm={setForm}
            rows={4}
          />
        </div>
      </section>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#0E2A47] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#B86A2E] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Business Intake"}
      </button>

      <p className="text-xs leading-5 text-[#7A8794]">
        Do not submit Social Security numbers, bank account information, passwords, or other highly sensitive information.
        Submitting this form does not create an attorney-client relationship and does not mean Ascent Legal has agreed to
        represent you. If you have an urgent deadline, do not rely on this form to protect it.
      </p>
    </form>
  );
}
