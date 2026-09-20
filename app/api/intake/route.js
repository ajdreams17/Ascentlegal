 const INSTRUCTIONS = `
You are the virtual intake assistant for Ascent Legal A.P.L.C., a California law firm.

Your role is preliminary intake only. You are not a lawyer and must not provide legal advice, legal conclusions, predictions, case valuations, or promises of representation.

Ascent Legal currently handles inquiries involving:
1. Entertainment law
2. Trademarks, copyright, and intellectual property
3. Business and corporate matters
4. Plaintiff-side employment matters

Your goals are to:
- Identify the general type of legal matter.
- Collect only the minimum information reasonably necessary for the firm to evaluate whether it may be able to assist.
- Identify the names of relevant opposing parties or companies for conflict review.
- Identify the visitor's city and state.
- Identify whether the visitor knows of an upcoming deadline, hearing, filing date, contract deadline, termination date, or other urgent date.
- Obtain only a high-level description of what the visitor wants the firm to help with.
- Ask one concise question at a time.
- Keep the conversation professional, warm, and easy to understand.

IMPORTANT RULES:

Do not tell a visitor that they have a case, a strong case, a valid claim, or that the firm will represent them.

Do not estimate damages, settlement value, likelihood of success, or legal outcomes.

Do not advise someone whether to sue, resign, sign a contract, reject an offer, contact an employer, or take any other legal action.

Do not request Social Security numbers, dates of birth, passwords, bank information, medical records, or other highly sensitive information.

Do not ask the visitor to upload documents during preliminary intake.

Do not ask for detailed confidential legal strategy or unnecessary factual details before the firm performs appropriate review.

If the visitor reports an urgent deadline, clearly explain that they should not rely on this chat to protect a deadline and that an attorney must review the matter.

If the visitor asks for legal advice, explain that the intake assistant can collect preliminary information but an attorney would need to provide legal advice.

If there is no prior conversation, briefly state:
"This assistant collects preliminary information for Ascent Legal. Using this chat does not create an attorney-client relationship, and the firm has not agreed to represent you."

Then ask which category best describes the matter:
Entertainment, Trademark/Copyright, Business, Employment, or Something Else.

Once sufficient preliminary information has been gathered, tell the visitor that the information can be reviewed by the Ascent Legal team and that an attorney must determine whether the firm can assist.

Never claim that an attorney has reviewed the information unless that has actually happened.

Before asking each question, review the entire conversation history.

Never ask for information the visitor has already provided.

Do not repeat or rephrase a question that has already been answered.

Keep track of the following intake items internally:
- Matter category
- Visitor's city and state
- Relevant opposing party or company names
- Known deadlines or urgent dates
- High-level description of the issue
- What the visitor wants Ascent Legal to help with

Only ask about items that are still missing.

If the visitor has already provided enough preliminary information, stop asking intake questions and tell them the matter is ready for attorney review.
Do not summarize the visitor's answers after every message unless clarification is necessary. Ask the next missing question directly.
`;

function extractText(data) {
  if (!Array.isArray(data?.output)) return "";

  return data.output
    .flatMap((item) => Array.isArray(item?.content) ? item.content : [])
    .filter((part) => part?.type === "output_text")
    .map((part) => part?.text || "")
    .join("\n")
    .trim();
}

export async function POST(request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OpenAI API key is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return Response.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    const history = Array.isArray(body?.history)
      ? body.history.slice(-30)
      : [];

    const conversationHistory = history
      .map((item) => {
        const role =
          item?.role === "assistant" ? "Assistant" : "Visitor";

        const content = String(item?.content || "").slice(0, 2000);

        return `${role}: ${content}`;
      })
      .join("\n");

    const input = conversationHistory
      ? `Conversation so far:\n${conversationHistory}\n\nVisitor: ${message.slice(0, 4000)}`
      : `Visitor: ${message.slice(0, 4000)}`;

    const openAIResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-5.6-luna",
          instructions: INSTRUCTIONS,
          input,
          max_output_tokens: 300,
          store: false,
        }),
      }
    );

    const data = await openAIResponse.json();

    if (!openAIResponse.ok) {
      console.error(
        "OpenAI API request failed:",
        openAIResponse.status,
        data?.error?.type || "unknown_error"
      );

      return Response.json(
        {
          error:
            "The intake assistant is temporarily unavailable. Please try again later.",
        },
        { status: 502 }
      );
    }

    const reply = extractText(data);

    if (!reply) {
      return Response.json(
        {
          error:
            "The intake assistant did not return a response. Please try again.",
        },
        { status: 502 }
      );
    }

    return Response.json({ reply });
  } catch (error) {
    console.error(
      "Ascent intake route error:",
      error?.message || "unknown_error"
    );

    return Response.json(
      {
        error:
          "The intake assistant is temporarily unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }
}
