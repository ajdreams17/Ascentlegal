"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const INITIAL_MESSAGE = {
  role: "assistant",
  content:
    "Hi, I’m Ascent Legal’s AI-assisted virtual intake assistant. I can collect limited preliminary information for our team. I am not a lawyer and cannot provide legal advice. Using this chat does not create an attorney-client relationship, and the firm has not agreed to represent you.\n\nPlease do not send Social Security numbers, financial account information, passwords, medical records, or other highly sensitive or unnecessary confidential information.\n\nInformation you provide through this intake may be processed by technology service providers used by Ascent Legal to operate and review the intake process.\n\nWhat can we help you with?",
};

const PRACTICE_AREAS = [
  "Entertainment",
  "Trademark",
  "Copyright / Licensing",
  "Business",
  "Employment",
  "Something Else",
];

function trackIntakeEvent(eventName) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, {
    feature: "ai_intake",
  });
}

export default function IntakeChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [readyForSubmission, setReadyForSubmission] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, open]);

  async function sendMessage(customMessage) {
    const text = (customMessage ?? message).trim();

    if (!text || loading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((current) => [...current, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to process intake.");
      }

      if (data.readyForSubmission) {
        setReadyForSubmission(true);
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I’m sorry, the intake assistant is temporarily unavailable. You can contact Ascent Legal directly through our consultation form.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function submitIntake(event) {
    event.preventDefault();

    if (!contact.name.trim() || !contact.email.trim() || submitting) return;

    setSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("/api/intake/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit intake.");
      }

      setSubmitted(true);
      setReadyForSubmission(false);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Thank you. Your inquiry has been submitted to Ascent Legal for attorney review. Submission does not create an attorney-client relationship, and the firm has not agreed to represent you. An attorney must review the matter and determine whether the firm can assist. If you have an urgent deadline, do not rely on this submission to protect it.",
        },
      ]);
    } catch (error) {
      setSubmissionError(
        error?.message ||
          "We could not submit your inquiry. Please use the Contact the firm link."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  function resetChat() {
    setMessages([INITIAL_MESSAGE]);
    setMessage("");
    setReadyForSubmission(false);
    setSubmitted(false);
    setSubmitting(false);
    setSubmissionError("");
    setContact({
      name: "",
      email: "",
      phone: "",
    });
  }

  return (
    <>
      {/* FLOATING BUTTON */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[1000] flex items-center gap-3 rounded-full bg-[#0E2A47] px-5 py-4 text-sm font-semibold text-white shadow-xl transition hover:bg-[#091F34]"
          aria-label="Open Ascent Legal intake assistant"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B86A2E] text-lg">
            ↑
          </span>

          <span className="hidden sm:inline">
            Tell Us About Your Legal Matter
          </span>

          <span className="sm:hidden">Start Intake</span>
        </button>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-4 right-4 z-[1000] flex h-[min(720px,calc(100vh-32px))] w-[calc(100vw-32px)] max-w-[430px] flex-col overflow-hidden rounded-2xl border border-[#0E2A47]/10 bg-[#FBFAF7] shadow-2xl sm:bottom-6 sm:right-6">

          {/* HEADER */}
          <div className="flex items-center justify-between bg-[#0E2A47] px-5 py-4 text-white">
            <div>
              <p className="font-serif text-xl">
                Ascent Legal
              </p>

              <p className="mt-1 text-xs text-white/70">
                Virtual Intake Assistant
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-2xl text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Close intake assistant"
            >
              ×
            </button>
          </div>

          {/* STATUS */}
          <div className="border-b border-[#0E2A47]/10 bg-white px-5 py-3">
            <div className="flex items-center gap-2 text-xs text-[#5F7386]">
              <span className="h-2 w-2 rounded-full bg-[#B86A2E]" />
              Preliminary intake only
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
            {messages.map((item, index) => {
              const isUser = item.role === "user";

              return (
                <div
                  key={`${item.role}-${index}`}
                  className={`flex ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                      isUser
                        ? "rounded-br-sm bg-[#0E2A47] text-white"
                        : "rounded-bl-sm border border-[#0E2A47]/10 bg-white text-[#0E2A47]"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}

            {messages.length === 1 && (
              <div className="grid gap-2">
                {PRACTICE_AREAS.map((area) => (
                  <button
                    type="button"
                    key={area}
                    onClick={() => sendMessage(area)}
                    disabled={loading}
                    className="rounded-xl border border-[#0E2A47]/15 bg-white px-4 py-3 text-left text-sm font-medium text-[#0E2A47] transition hover:border-[#B86A2E] hover:text-[#B86A2E]"
                  >
                    {area}
                  </button>
                ))}
              </div>
            )}

            {readyForSubmission && !submitted && (
              <form
                onSubmit={submitIntake}
                className="rounded-2xl border border-[#B86A2E]/30 bg-white p-4"
              >
                <p className="font-serif text-lg text-[#0E2A47]">
                  Submit for Attorney Review
                </p>

                <p className="mt-1 text-xs leading-5 text-[#5F7386]">
                  Please provide your contact information so Ascent Legal can
                  receive this inquiry. Phone number is optional.
                </p>

                <div className="mt-4 grid gap-3">
                  <input
                    type="text"
                    value={contact.name}
                    onChange={(event) =>
                      setContact((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    placeholder="Full name"
                    autoComplete="name"
                    required
                    className="rounded-xl border border-[#0E2A47]/15 px-3 py-3 text-sm text-[#0E2A47] outline-none focus:border-[#B86A2E]"
                  />

                  <input
                    type="email"
                    value={contact.email}
                    onChange={(event) =>
                      setContact((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="rounded-xl border border-[#0E2A47]/15 px-3 py-3 text-sm text-[#0E2A47] outline-none focus:border-[#B86A2E]"
                  />

                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(event) =>
                      setContact((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                    placeholder="Phone number (optional)"
                    autoComplete="tel"
                    className="rounded-xl border border-[#0E2A47]/15 px-3 py-3 text-sm text-[#0E2A47] outline-none focus:border-[#B86A2E]"
                  />

                  {submissionError && (
                    <p className="text-xs leading-5 text-red-700">
                      {submissionError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={
                      submitting ||
                      !contact.name.trim() ||
                      !contact.email.trim()
                    }
                    className="rounded-xl bg-[#B86A2E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#9F5925] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit for Attorney Review"}
                  </button>
                </div>

                <p className="mt-3 text-[10px] leading-4 text-[#5F7386]">
                  Submitting this inquiry does not create an attorney-client
                  relationship and does not mean Ascent Legal has agreed to
                  represent you.
                </p>
              </form>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-[#0E2A47]/10 bg-white px-4 py-3 text-sm text-[#5F7386]">
                  Thinking...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-[#0E2A47]/10 bg-white p-4"
          >
            <div className="flex gap-2">
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={
                  submitted
                    ? "Inquiry submitted."
                    : readyForSubmission
                      ? "Complete the contact form above to submit."
                      : "Type your response..."
                }
                rows={2}
                disabled={loading || readyForSubmission || submitted}
                className="min-h-[52px] flex-1 resize-none rounded-xl border border-[#0E2A47]/15 px-3 py-3 text-sm text-[#0E2A47] outline-none transition placeholder:text-[#5F7386]/70 focus:border-[#B86A2E]"
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
              />

              <button
                type="submit"
                disabled={
                  loading ||
                  readyForSubmission ||
                  submitted ||
                  !message.trim()
                }
                className="self-end rounded-xl bg-[#B86A2E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#9F5925] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={resetChat}
                className="text-xs text-[#5F7386] underline-offset-2 hover:underline"
              >
                Start over
              </button>

              <Link
                href="/contact"
                className="text-xs font-semibold text-[#B86A2E] hover:underline"
              >
                Contact the firm
              </Link>
            </div>

           <p className="mt-3 text-[10px] leading-4 text-[#5F7386]">
  This AI-assisted tool is for preliminary intake only and does not provide
  legal advice. Do not use this chat for emergencies or to protect a legal
  deadline. Please provide only information reasonably necessary for
  preliminary review.
</p>
          </form>
        </div>
      )}
    </>
  );
}
