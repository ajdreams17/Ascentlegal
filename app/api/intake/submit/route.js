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
      "See full intake transcript below.",
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

Use ONLY the information provided in the intake transcript and contact information.

Do not:
- Give legal advice.
- Evaluate the strength of a claim.
- Predict outcomes.
- Estimate damages.
- Invent facts.
- Infer facts that are not reasonably clear from the transcript.

If information is missing, write "Not provided."

Return a concise attorney-facing summary using exactly this general format:

Matter:
Potential Client:
Location:
Other Party / Counterparty:
Matter or Agreement Status:
Requested Help:
Deadline:
Key Facts:

Keep Key Facts to no more than 3 short sentences.

For trademark matters, identify the proposed mark and proposed owner when available.

For employment matters, identify the employer and high-level workplace issue when available.

For entertainment matters, identify the type of agreement or transaction and relevant counterparty when available.

For business matters, identify the entity or transaction involved when available.

For copyright matters, identify the type of work and nature of the request when available.

Do not include disclaimers in this internal summary.
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
      throw new Error("Summary request failed.");
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

    const formspreeResponse = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "New Ascent Legal AI Intake",
        _replyto: email,

        name,
        email,
        phone: phone || "Not provided",

        attorney_summary: attorneySummary,

        full_transcript:
          transcript || "No intake transcript available.",

        source: "Ascent Legal AI Intake Assistant",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!formspreeResponse.ok) {
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
