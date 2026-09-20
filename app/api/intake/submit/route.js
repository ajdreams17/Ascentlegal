const FORMSPREE_URL = "https://formspree.io/f/mrbladoo";

function clean(value, maxLength = 500) {
  return String(value || "").trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

 function extractText(data) {
  if (!Array.isArray(data?.output)) return "";

  return data.output
    .flatMap((item) =>
      Array.isArray(item?.content) ? item.content : []
    )
    .filter((part) => part?.type === "output_text")
    .map((part) => part?.text || "")
    .join("\n")
    .trim();
}

function extractSummaryField(summary, fieldName) {
  const pattern = new RegExp(`^${fieldName}:\\s*(.+)$`, "mi");
  const match = String(summary || "").match(pattern);

  return match?.[1]?.trim() || "";
}

function hasReportedDeadline(deadline) {
  if (!deadline) return false;

  const normalized = deadline.toLowerCase();

  return ![
    "none",
    "none reported",
    "not provided",
    "no",
    "no known deadline",
  ].includes(normalized);
}

function cleanDeadlineForSubject(deadline) {
  return String(deadline || "")
    .replace(/^signing deadline:\s*/i, "")
    .replace(/^deadline:\s*/i, "")
    .trim();
}

async function createAttorneySummary({
  name,
  email,
  phone,
  transcript,
}) {
  if (!process.env.OPENAI_API_KEY) {
    return [
      `Potential Client: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Automated summary unavailable. See full intake transcript below.",
    ].join("\n");
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-5.6-luna",
          store: false,
          max_output_tokens: 500,

          instructions: `
You are preparing a short internal intake summary for attorneys at Ascent Legal A.P.L.C.

Use ONLY the information expressly provided in the intake transcript and contact information.

ACCURACY RULES

Do not:
- Give legal advice.
- Evaluate the strength of a claim or matter.
- Predict outcomes.
- Estimate damages, settlement value, or case value.
- Invent facts.
- Infer facts that are not reasonably clear from the transcript.
- Make legal conclusions.
- Characterize a matter as strong, weak, valid, invalid, actionable, or non-actionable.
- Correct or substitute the spelling of a person's, company's, employer's, studio's, or brand's name.

Preserve names and spellings exactly as provided by the prospective client.

If information is missing, write:
"Not provided."

Do not infer whether an agreement has been signed, executed, negotiated, accepted, rejected, or completed unless the transcript expressly says so.

If the prospective client says they have a contract or agreement but does not state whether it has been signed, write:
"Contract received; signature status not provided."

Do not infer deadlines.

If the prospective client says there is no known deadline, write:
"None reported."

If a deadline is expressly provided, reproduce the deadline accurately.

Do not infer a legal relationship, legal status, claim, violation, or conclusion that the prospective client did not expressly provide.

SUMMARY FORMAT

Return a concise attorney-facing summary using exactly this format:

Matter:
Potential Client:
Location:
Other Party / Counterparty:
Matter or Agreement Status:
Requested Help:
Deadline:
Key Facts:

Do not add additional headings.

Keep each field short.

Keep Key Facts to no more than 2 short sentences.

Do not repeat information unnecessarily.

MATTER FIELD

For the Matter field:
- Include only the broad practice area and specific matter type when both are known.
- Do not include the counterparty, contract status, deadline, or other facts in parentheses.
- Do not use a more specific description than the transcript supports.

Examples:

Entertainment – Creator Agreement
Entertainment – Writer Agreement
Entertainment – Brand Deal
Trademark – Registration
Trademark – Clearance
Trademark – Dispute
Copyright – Registration
Copyright – Licensing
Business – LLC Formation
Business – Operating Agreement
Employment – Termination
Employment – Wage and Hour

ENTERTAINMENT MATTERS

For entertainment matters:
- Identify the type of agreement or transaction.
- Identify the relevant counterparty when available.
- Identify whether a contract or proposal has been received when expressly stated.
- Identify the requested services, such as review, negotiation, or drafting.
- Do not characterize the transaction beyond the facts provided.

TRADEMARK MATTERS

For trademark matters:
- Identify whether the matter concerns registration, clearance, filing, or a dispute when clear from the transcript.
- Identify the proposed mark when available.
- Identify the proposed owner or applicant when available.
- Identify the general goods or services when available.
- Identify use status only if expressly stated.
- Do not state or imply that a mark is available, registrable, protectable, or clear for use.

COPYRIGHT MATTERS

For copyright matters:
- Identify the type of work involved.
- Identify whether the issue concerns registration, licensing, ownership, assignment, infringement, or another issue when available.
- Identify relevant other parties when provided.
- Do not conclude that a work is protected, infringed, registrable, or owned by a particular person or entity.

BUSINESS MATTERS

For business matters:
- Identify the entity, agreement, or transaction involved when available.
- Identify relevant founders, partners, investors, vendors, customers, or counterparties when expressly stated.
- Identify the requested assistance.
- Do not provide or imply tax, entity-selection, or business-strategy advice.

EMPLOYMENT MATTERS

For employment matters:
- Identify the employer.
- Identify whether the prospective client is a current or former employee when expressly stated.
- Identify the high-level workplace issue.
- Identify termination or other relevant event dates only when expressly provided.
- Identify internal complaints, leave requests, accommodation requests, or other relevant activity only when expressly stated.
- Do not state that the prospective client was wrongfully terminated, discriminated against, harassed, retaliated against, or otherwise subjected to unlawful conduct.

DEADLINES

The Deadline field is important for attorney triage.

If the prospective client provides a deadline, reproduce it accurately and do not minimize or reinterpret it.

If the prospective client says there is no known deadline, write:
"None reported."

If the transcript does not address a deadline, write:
"Not provided."

KEY FACTS

Key Facts should contain only concrete facts that materially assist attorney review.

Do not include the prospective client's email address or phone number.

Do not repeat contact information.

Do not add generic characterizations such as:
- "brand-related entertainment matter"
- "potential legal dispute"
- "possible employment claim"
- "potentially protectable trademark"

Do not repeat the Matter, Location, Deadline, or Requested Help fields unless necessary to make the key facts understandable.

Do not include disclaimers in this internal summary.
          input: `
CONTACT INFORMATION

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

INTAKE TRANSCRIPT

${transcript}
          `,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error?.message || "Summary request failed."
      );
    }

    const summary = extractText(data);

    if (!summary) {
      throw new Error("No summary returned.");
    }

    return summary;
  } catch (error) {
    console.error(
      "Attorney summary generation error:",
      error?.message || "unknown_error"
    );

    return [
      `Potential Client: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Automated summary unavailable. See full intake transcript below.",
    ].join("\n");
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 200);
    const phone = clean(body?.phone, 60);

    if (!name || !email || !isValidEmail(email)) {
      return Response.json(
        {
          error:
            "Please provide your name and a valid email address.",
        },
        { status: 400 }
      );
    }

    const messages = Array.isArray(body?.messages)
      ? body.messages.slice(-40)
      : [];

    const transcript = messages
      .map((item) => {
        const role =
          item?.role === "assistant"
            ? "Ascent Intake Assistant"
            : "Prospective Client";

        const content = clean(item?.content, 2500);

        return content
          ? `${role}: ${content}`
          : "";
      })
      .filter(Boolean)
      .join("\n\n")
      .slice(0, 30000);

    const attorneySummary = await createAttorneySummary({
      name,
      email,
      phone,
      transcript,
    });

    const reportedDeadline = extractSummaryField(
  attorneySummary,
  "Deadline"
);

const deadlineReported = hasReportedDeadline(
  reportedDeadline
);
const subjectDeadline = cleanDeadlineForSubject(reportedDeadline);

const emailSubject = deadlineReported
  ? `New Ascent Legal AI Intake | DEADLINE: ${subjectDeadline}`
  : "New Ascent Legal AI Intake";

    const formspreeResponse = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: emailSubject,
        _replyto: email,

        name,
        email,
        phone: phone || "Not provided",
        deadline_reported: deadlineReported
  ? reportedDeadline
  : "None reported",

        attorney_summary: attorneySummary,

        full_transcript:
          transcript || "No intake transcript available.",

        source: "Ascent Legal AI Intake Assistant",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!formspreeResponse.ok) {
      const formspreeData = await formspreeResponse
        .json()
        .catch(() => null);

      console.error(
        "Formspree submission failed:",
        formspreeResponse.status,
        formspreeData || "No JSON response"
      );

      return Response.json(
        {
          error:
            "We could not submit your inquiry right now. Please use the Contact the firm link.",
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error(
      "Ascent intake submission error:",
      error?.message || "unknown_error"
    );

    return Response.json(
      {
        error:
          "We could not submit your inquiry right now. Please use the Contact the firm link.",
      },
      { status: 500 }
    );
  }
}
