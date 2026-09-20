"use client";

import { useState } from "react";

export default function IntakeTestPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: [],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setReply(data.error || "Something went wrong.");
      } else {
        setReply(data.reply);
      }
    } catch (error) {
      setReply("Unable to connect to the intake assistant.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: "700px", margin: "60px auto", padding: "20px" }}>
      <h1>Ascent Legal AI Intake Test</h1>

      <p>
        This is a private test page for the Ascent Legal intake assistant.
      </p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Example: I need help reviewing an entertainment contract."
        rows={6}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          marginBottom: "12px",
        }}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        style={{
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Sending..." : "Send Test Message"}
      </button>

      {reply && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ccc",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>AI Response:</strong>
          <p>{reply}</p>
        </div>
      )}
    </main>
  );
}
