"use client";

import { useMemo, useState } from "react";

const matterOptions = [
  "Business formation",
  "Contract drafting or review",
  "Founder / ownership / governance",
  "Investor / equity issuance",
  "Contractor / team documents",
  "Ongoing deal desk / outside counsel",
  "Other",
];

const baseQuestions = [
  { key: "name", label: "What is your full name?", type: "text", required: true, section: "Contact" },
  { key: "email", label: "What is the best email address to reach you?", type: "email", required: true, section: "Contact" },
  { key: "phone", label: "What is the best phone number to reach you?", type: "tel", section: "Contact" },
  { key: "role", label: "What is your role in the business?", type: "text", placeholder: "Founder, owner, member, manager, etc.", section: "Contact" },
  { key: "matterType", label: "What do you need help with?", type: "select", options: matterOptions, required: true, section: "Matter" },
  { key: "businessName", label: "What is the full legal name of the business or entity?", type: "text", section: "Matter" },
  { key: "state", label: "What state are you or the business located in?", type: "text", section: "Matter" },
  { key: "businessDescription", label: "Briefly, what does the business do?", type: "textarea", section: "Matter" },
  { key: "requestedHelp", label: "What specifically would you like Ascent Legal to help you accomplish?", type: "textarea", required: true, section: "Matter" },
  { key: "deadline", label: "Is there a signing date, launch date, filing deadline, or other urgent date?", type: "text", placeholder: "If none, type None", section: "Matter" },
];

const formationQuestions = [
  { key: "entityStatus", label: "Has the business already been formed?", type: "select", options: ["No", "Yes", "In progress"], section: "Formation" },
  { key: "entityType", label: "What entity type are you considering or currently using?", type: "select", options: ["LLC", "Corporation", "Partnership", "Not sure", "Other"], section: "Formation" },
  { key: "formationState", label: "What state was or will the entity be formed in?", type: "text", section: "Formation" },
  { key: "ownerCount", label: "How many owners or founders will there be?", type: "number", section: "Formation" },
  { key: "owners", label: "List each founder or owner and the proposed ownership percentage for each.", type: "textarea", section: "Formation" },
  { key: "founderRoles", label: "What role and responsibilities will each founder have?", type: "textarea", section: "Formation" },
  { key: "managementStructure", label: "Who will have authority to make day-to-day business decisions?", type: "textarea", section: "Formation" },
  { key: "founderContributions", label: "What is each founder contributing to the business?", type: "textarea", placeholder: "Cash, equipment, IP, services, audience, content, software, etc.", section: "Formation" },
  { key: "existingIP", label: "Will any founder contribute existing intellectual property or other assets to the company?", type: "select", options: ["Yes", "No", "Not sure"], section: "Formation" },
  { key: "existingIPDetails", label: "If yes, what IP or assets will be contributed?", type: "textarea", when: (f) => f.existingIP === "Yes", section: "Formation" },
  { key: "outsideInvestorsExpected", label: "Do you expect outside investors within the next 12 months?", type: "select", options: ["Yes", "No", "Not sure"], section: "Formation" },
  { key: "employeesOrContractors", label: "Will the business use employees, independent contractors, or both?", type: "select", options: ["Employees", "Independent contractors", "Both", "Not sure"], section: "Formation" },
  { key: "formationConcerns", label: "Is there anything about ownership, control, voting, profit sharing, or future exits that you want addressed now?", type: "textarea", section: "Formation" },
];

const contractQuestions = [
  { key: "contractType", label: "What type of agreement is involved?", type: "text", placeholder: "Services agreement, vendor contract, NDA, collaboration, licensing agreement, etc.", section: "Contract" },
  { key: "counterparty", label: "What is the full legal name of the other party?", type: "text", section: "Contract" },
  { key: "contractStatus", label: "What is the current status of the agreement?", type: "select", options: ["No draft yet", "Draft received", "Under negotiation", "Signed / executed", "Other"], section: "Contract" },
  { key: "contractReceivedDate", label: "When did you receive or prepare the current draft?", type: "date", section: "Contract" },
  { key: "contractValue", label: "What is the approximate value of the deal or contract?", type: "text", section: "Contract" },
  { key: "termLength", label: "What is the proposed term or duration of the agreement?", type: "text", section: "Contract" },
  { key: "paymentTerms", label: "What are the proposed payment terms?", type: "textarea", section: "Contract" },
  { key: "deliverables", label: "What are the main deliverables or obligations?", type: "textarea", section: "Contract" },
  { key: "businessTermsAgreed", label: "What business terms have already been agreed upon?", type: "textarea", section: "Contract" },
  { key: "contractConcerns", label: "Which provisions or risks are you most concerned about?", type: "textarea", section: "Contract" },
  { key: "negotiationRequested", label: "Do you want Ascent Legal to negotiate directly with the other side?", type: "select", options: ["Yes", "No", "Not sure"], section: "Contract" },
  { key: "priorRevisions", label: "Have you or the other side already exchanged revisions or redlines?", type: "select", options: ["Yes", "No"], section: "Contract" },
  { key: "priorRevisionsDetails", label: "If yes, briefly describe the main points still being negotiated.", type: "textarea", when: (f) => f.priorRevisions === "Yes", section: "Contract" },
];

const governanceQuestions = [
  { key: "entityType", label: "What type of entity is involved?", type: "text", section: "Governance" },
  { key: "formationState", label: "What state was the entity formed in?", type: "text", section: "Governance" },
  { key: "governanceDocs", label: "Do you have a current Operating Agreement, bylaws, shareholder agreement, or other governing document?", type: "select", options: ["Yes", "No", "Not sure"], section: "Governance" },
  { key: "ownershipDetails", label: "List all current owners, members, or shareholders and their ownership percentages.", type: "textarea", section: "Governance" },
  { key: "managementStructure", label: "Who currently manages the business and who has voting authority?", type: "textarea", section: "Governance" },
  { key: "proposedChange", label: "What ownership or governance change are you considering?", type: "textarea", section: "Governance" },
  { key: "allOwnersAgree", label: "Are all current owners in agreement with the proposed change?", type: "select", options: ["Yes", "No", "Not sure"], section: "Governance" },
  { key: "approvalsOrDisagreements", label: "Describe any disagreements, approvals, consents, or signatures that are still pending.", type: "textarea", section: "Governance" },
  { key: "transferIssues", label: "Are there any buyout, transfer, voting, deadlock, removal, or management issues we should know about?", type: "textarea", section: "Governance" },
  { key: "priorOwnershipChanges", label: "Have there been any prior ownership transfers, issuances, withdrawals, or buyouts?", type: "select", options: ["Yes", "No", "Not sure"], section: "Governance" },
  { key: "priorOwnershipDetails", label: "If yes, briefly describe those prior changes.", type: "textarea", when: (f) => f.priorOwnershipChanges === "Yes", section: "Governance" },
];

const equityIntroQuestions = [
  { key: "formationState", label: "What state was the LLC or entity formed in?", type: "text", section: "Investor / Equity" },
  { key: "entityStatus", label: "Is the LLC currently member-managed or manager-managed?", type: "select", options: ["Member-managed", "Manager-managed", "Not applicable / not sure"], section: "Investor / Equity" },
  { key: "governanceDocs", label: "Do you have a current Operating Agreement or other governing documents?", type: "select", options: ["Yes", "No", "Not sure"], section: "Investor / Equity" },
  { key: "allOwnersAgree", label: "Are all current members or owners in agreement with issuing new equity?", type: "select", options: ["Yes", "No", "Not sure"], section: "Investor / Equity" },
  { key: "ownershipDetails", label: "List all current members or owners, their ownership percentages, and capital contributions.", type: "textarea", section: "Investor / Equity" },
  { key: "investorCount", label: "How many new investors are being added?", type: "number", required: true, section: "Investor / Equity" },
];

function investorQuestions(form) {
  const count = Math.min(Math.max(Number(form.investorCount || 0), 0), 6);
  const questions = [];
  for (let i = 1; i <= count; i += 1) {
    questions.push(
      { key: `investor${i}Name`, label: `What is the full legal name of Investor ${i}?`, type: "text", section: `Investor ${i}` },
      { key: `investor${i}Amount`, label: `What is Investor ${i}'s investment amount?`, type: "text", placeholder: "$", section: `Investor ${i}` },
      { key: `investor${i}Percent`, label: `What ownership percentage is being issued to Investor ${i}?`, type: "text", placeholder: "%", section: `Investor ${i}` }
    );
  }
  return questions;
}

const equityClosingQuestions = [
  { key: "newClasses", label: "Are different classes of membership interests or equity being created?", type: "select", options: ["Yes", "No", "Not sure"], section: "Investor / Equity" },
  { key: "sameRights", label: "Will all new investors receive the same rights as the existing members or owners?", type: "select", options: ["Yes", "No", "Not sure"], section: "Investor / Equity" },
  { key: "classRights", label: "Describe the rights of each class, including voting, distributions, liquidation preferences, or other differences.", type: "textarea", when: (f) => f.newClasses === "Yes" || f.sameRights === "No", section: "Investor / Equity" },
  { key: "approvalsOrDisagreements", label: "Explain any disagreements, pending approvals, conditions, or consents that still need to be addressed.", type: "textarea", section: "Investor / Equity" },
  { key: "securitiesDocs", label: "Have any term sheets, subscription agreements, SAFEs, notes, or other investment documents already been prepared or signed?", type: "select", options: ["Yes", "No", "Not sure"], section: "Investor / Equity" },
  { key: "securitiesDocsDetails", label: "If yes, what investment documents exist and what is their status?", type: "textarea", when: (f) => f.securitiesDocs === "Yes", section: "Investor / Equity" },
];

const contractorQuestions = [
  { key: "contractorRole", label: "What role or type of contractor are you hiring?", type: "text", section: "Contractor" },
  { key: "contractorName", label: "What is the contractor's full legal name or business name, if known?", type: "text", section: "Contractor" },
  { key: "contractorServices", label: "What services will the contractor provide?", type: "textarea", section: "Contractor" },
  { key: "deliverables", label: "What specific deliverables will the contractor be responsible for?", type: "textarea", section: "Contractor" },
  { key: "contractorPayment", label: "How will the contractor be paid?", type: "text", placeholder: "Flat fee, hourly, milestone, commission, etc.", section: "Contractor" },
  { key: "contractorStartDate", label: "When is the contractor expected to start?", type: "date", section: "Contractor" },
  { key: "contractorTerm", label: "How long is the engagement expected to last?", type: "text", section: "Contractor" },
  { key: "contractorWorkProduct", label: "What content, IP, software, designs, materials, or other work product will the contractor create?", type: "textarea", section: "Contractor" },
  { key: "contractorConfidentialInfo", label: "What confidential information, accounts, systems, or client information will the contractor access?", type: "textarea", section: "Contractor" },
  { key: "contractorExistingAgreement", label: "Do you already have a contractor agreement or template you want reviewed?", type: "select", options: ["Yes", "No"], section: "Contractor" },
  { key: "contractorRestrictions", label: "Are there any special restrictions or requirements you want included?", type: "textarea", placeholder: "Confidentiality, non-solicitation, approval rights, return of property, portfolio use, etc.", section: "Contractor" },
];

const dealDeskQuestions = [
  { key: "dealTypes", label: "What types of agreements does the business regularly handle?", type: "textarea", section: "Deal Desk" },
  { key: "monthlyVolume", label: "Approximately how many agreements do you review or sign each month?", type: "number", section: "Deal Desk" },
  { key: "turnaroundNeeds", label: "What turnaround time do you typically need?", type: "select", options: ["Same day", "1–2 business days", "3–5 business days", "One week or more", "Varies"], section: "Deal Desk" },
  { key: "internalReviewer", label: "Who currently reviews contracts internally?", type: "text", section: "Deal Desk" },
  { key: "approvalProcess", label: "Who has final approval or signing authority?", type: "text", section: "Deal Desk" },
  { key: "workflowIssues", label: "Where does the current contract workflow slow down or create problems?", type: "textarea", section: "Deal Desk" },
  { key: "existingTemplates", label: "Do you already have standard templates or preferred contract forms?", type: "select", options: ["Yes", "No", "Some"], section: "Deal Desk" },
  { key: "negotiationFrequency", label: "How often do agreements require negotiation or redlines?", type: "select", options: ["Rarely", "Sometimes", "Often", "Almost every deal"], section: "Deal Desk" },
  { key: "preferredFeeStructure", label: "What type of support are you looking for?", type: "select", options: ["Per-project support", "Monthly / ongoing support", "Not sure"], section: "Deal Desk" },
  { key: "idealWorkflow", label: "What would an ideal legal workflow look like for your team?", type: "textarea", section: "Deal Desk" },
];

const finalQuestions = [
  { key: "opposingOrRelatedParties", label: "List any other people or companies involved in this matter.", type: "textarea", placeholder: "Founders, investors, counterparties, vendors, managers, agencies, etc.", section: "Conflicts" },
  { key: "priorAttorney", label: "Are you currently represented by or working with another attorney on this matter?", type: "select", options: ["Yes", "No"], section: "Conflicts" },
  { key: "documentsAvailable", label: "What documents do you currently have available?", type: "textarea", placeholder: "Operating agreement, draft contract, cap table, formation documents, emails, term sheet, etc.", section: "Documents" },
  { key: "finalNotes", label: "Is there anything else you want the attorney reviewing this intake to know?", type: "textarea", section: "Final" },
];

function getMatterQuestions(form) {
  switch (form.matterType) {
    case "Business formation":
      return formationQuestions;
    case "Contract drafting or review":
      return contractQuestions;
    case "Founder / ownership / governance":
      return governanceQuestions;
    case "Investor / equity issuance":
      return [...equityIntroQuestions, ...investorQuestions(form), ...equityClosingQuestions];
    case "Contractor / team documents":
      return contractorQuestions;
    case "Ongoing deal desk / outside counsel":
      return dealDeskQuestions;
    case "Other":
      return [
        { key: "matterDetails", label: "Please describe the business matter in detail.", type: "textarea", required: true, section: "Other" },
      ];
    default:
      return [];
  }
}

function QuestionInput({ question, value, onChange, onEnter }) {
  const base =
    "mt-6 w-full border-b-2 border-[#0E2A47]/20 bg-transparent px-1 py-4 text-xl text-[#0E2A47] outline-none transition placeholder:text-[#7A8794]/70 focus:border-[#B86A2E] sm:text-2xl";

  if (question.type === "textarea") {
    return (
      <textarea
        autoFocus
        rows={5}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder || "Type your answer here..."}
        className={base + " resize-none"}
      />
    );
  }

  if (question.type === "select") {
    return (
      <div className="mt-7 grid gap-3">
        {question.options.map((option, index) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option, true)}
              className={`flex items-center gap-4 border px-5 py-4 text-left text-base transition sm:text-lg ${
                selected
                  ? "border-[#B86A2E] bg-[#B86A2E]/5 text-[#0E2A47]"
                  : "border-[#0E2A47]/15 bg-white hover:border-[#B86A2E]/70"
              }`}
            >
              <span className="flex h-7 w-7 items-center justify-center border border-[#0E2A47]/20 text-xs font-bold">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <input
      autoFocus
      type={question.type || "text"}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onEnter();
        }
      }}
      placeholder={question.placeholder || "Type your answer here..."}
      className={base}
    />
  );
}

export default function BusinessIntakeForm() {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const questions = useMemo(() => {
    const all = [...baseQuestions, ...getMatterQuestions(form), ...finalQuestions];
    return all.filter((q) => !q.when || q.when(form));
  }, [form]);

  const current = questions[Math.min(step, Math.max(questions.length - 1, 0))];
  const progress = questions.length ? Math.round(((step + 1) / questions.length) * 100) : 0;

  function updateValue(value, advance = false) {
    setForm((currentForm) => ({ ...currentForm, [current.key]: value }));
    setError("");
    if (advance) {
      setTimeout(() => setStep((s) => Math.min(s + 1, questions.length - 1)), 120);
    }
  }

  function canContinue() {
    if (!current?.required) return true;
    return String(form[current.key] || "").trim().length > 0;
  }

  function next() {
    if (!current) return;
    if (!canContinue()) {
      setError("Please answer this question before continuing.");
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, questions.length - 1));
  }

  function back() {
    setError("");
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit() {
    if (!current) return;
    if (!canContinue()) {
      setError("Please answer this question before submitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const visibleQuestions = questions.filter((q) => !q.when || q.when(form));
      const response = await fetch("/api/business-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          answers: visibleQuestions.map((q) => ({
            key: q.key,
            label: q.label,
            section: q.section || "Business Intake",
            value: form[q.key] || "",
          })),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Unable to submit the business intake.");

      window.gtag?.("event", "business_intake_submitted", {
        feature: "business_intake",
        matter_type: form.matterType || "Not provided",
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
      <div className="mx-auto max-w-3xl py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B86A2E]">Submitted</p>
        <h2 className="mt-5 font-serif text-4xl text-[#0E2A47] sm:text-5xl">Thank you.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F7386]">
          Your business questionnaire has been sent to Ascent Legal for attorney review. Submission does not create an
          attorney-client relationship, and the firm has not agreed to represent you. If you reported an urgent date,
          do not rely on this submission to protect that deadline.
        </p>
      </div>
    );
  }

  if (!current) return null;

  const isLast = step === questions.length - 1;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#7A8794]">
          <span>{current.section || "Business Intake"}</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden bg-[#0E2A47]/10">
          <div
            className="h-full bg-[#B86A2E] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-[430px] border border-[#0E2A47]/10 bg-white px-6 py-10 shadow-[0_20px_60px_rgba(14,42,71,0.05)] sm:px-10 sm:py-14">
        <div className="flex gap-3">
          <span className="pt-1 text-sm font-semibold text-[#B86A2E]">{step + 1} →</span>
          <div className="flex-1">
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-[#0E2A47] sm:text-4xl">
              {current.label}
              {current.required && <span className="ml-1 text-[#B86A2E]">*</span>}
            </h2>

            <QuestionInput
              question={current}
              value={form[current.key]}
              onChange={updateValue}
              onEnter={next}
            />

            {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {step > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="border border-[#0E2A47]/20 px-5 py-3 text-sm font-semibold text-[#0E2A47] hover:border-[#B86A2E]"
                >
                  Back
                </button>
              )}

              {!isLast ? (
                <button
                  type="button"
                  onClick={next}
                  className="bg-[#0E2A47] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#B86A2E]"
                >
                  OK →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={submitting}
                  className="bg-[#B86A2E] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#9F5925] disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Questionnaire"}
                </button>
              )}

              {current.type !== "select" && !isLast && (
                <span className="text-xs text-[#7A8794]">Press Enter ↵</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-[#7A8794]">
        Please do not provide Social Security numbers, bank account information, passwords, or other highly sensitive
        information. Submission does not create an attorney-client relationship.
      </p>
    </div>
  );
}
