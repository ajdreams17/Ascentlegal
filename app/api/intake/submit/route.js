const FORMSPREE_URL = "https://formspree.io/f/mrbladoo";

function clean(value, maxLength = 500) {
  return String(value || "").trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 200);
    const phone = clean(body?.phone, 60);

    if (!name || !email || !isValidEmail(email)) {
      return Response.json(
        { error: "Please provide your name and a valid email address." },
        { status: 400 }
      );
    }

    const messages = Array.isArray(body?.messages)
      ? body.messages.slice(-40)
      : [];

    const transcript = messages
      .map((item) => {
        const role =
          item?.role === "assistant" ? "Ascent Intake Assistant" : "Prospective Client";
        const content = clean(item?.content, 2500);

        return content ? `${role}: ${content}` : "";
      })
      .filter(Boolean)
      .join("\n\n")
      .slice(0, 30000);

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
        source: "Ascent Legal AI Intake Assistant",
        submitted_at: new Date().toISOString(),
        message: transcript || "No intake transcript available.",
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
