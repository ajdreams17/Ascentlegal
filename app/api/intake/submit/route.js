const FORMSPREE_URL = "https://formspree.io/f/mrbladoo";

function clean(value, maxLength = 500) {
  return String(value || "").trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function extractText(data) {
  if (!Array.isArray(data?.output)) return "";

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

  return data.output
    .flatMap((item) =>
      Array.isArray(item?.content) ? item.content : []
    )
    .filter((part) => part?.type === "output_text")
    .map((part) => part?.text || "")
    .join("\n")
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

Do not:
- Give legal advice.
- Evaluate the strength of a claim.
- Predict outcomes.
- Estimate damages.
- Invent facts.
- Infer facts that are not reasonably clear from the transcript.
- Make legal conclusions.
- Characterize a matter as strong, weak, valid, invalid, actionable, or non-actionable.

If information is missing, write "Not provided."

Do not infer whether an agreement has been signed, executed, negotiated, accepted, rejected, or completed unless the transcript expressly says so.

If the prospective client says they have a contract or agreement but does not state whether it has been signed, write:
"Contract received; signature status not provided."

Do not infer deadlines.

If the prospective client says there is no known deadline, write:
"None reported."

Do not infer a legal relationship, legal status, claim, or conclusion that the prospective client did not expressly provide.

Return a concise attorney-facing summary using exactly this format:

Matter:
Potential Client:
Location:
Other Party / Counterparty:
Matter or Agreement Status:
Requested Help:
Deadline:
Key Facts:

Keep each field short.

Keep Key Facts to no more than 2 short sentences.

Do not repeat information unnecessarily.

For entertainment matters:
- Identify the type of agreement or transaction.
- Identify the relevant counterparty when available.
- Identify whether a contract or proposal has been received when expressly stated.

For trademark matters:
- Identify the proposed mark when available.
- Identify the proposed owner or applicant when available.
- Identify the general goods or services when available.
- Identify use status only if expressly stated.

For copyright matters:
- Identify the type of work involved.
- Identify whether the issue concerns registration, licensing, ownership, assignment, infringement, or another issue when available.

For business matters:
- Identify the entity, agreement, or transaction involved when available.
- Identify relevant founders, partners, investors, vendors, or counterparties when expressly stated.

For employment matters:
- Identify the employer.
- Identify the high-level workplace issue.
- Identify employment status and termination or event date only if expressly stated.

Do not include disclaimers in this internal summary.

Do not add generic characterizations such as "brand-related entertainment matter" when the matter type and counterparty are already identified.

Key Facts should contain only concrete facts that materially assist attorney review.
          `,

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

const emailSubject = deadlineReported
  ? `New Ascent Legal AI Intake | DEADLINE: ${reportedDeadline}`
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
