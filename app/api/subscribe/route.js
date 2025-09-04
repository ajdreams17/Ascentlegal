import { NextResponse } from "next/server";

/* ---------- helpers ---------- */
function need(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var ${name}`);
  return v;
}

async function ac(path, method = "GET", body) {
  const base = need("AC_API_URL").replace(/\/+$/, "");
  const key  = need("AC_API_KEY");
  const url  = `${base}/api/3${path}`;

  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json", "Api-Token": key },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err  = new Error(`${method} ${path} -> ${res.status} ${res.statusText} :: ${text}`);
    err.status = res.status;
    err.body   = text;
    throw err;
  }
  return res.json();
}

/** Parse request body from HTML form or JSON (very defensive). */
async function readFields(req) {
  const ct = (req.headers.get("content-type") || "").toLowerCase();

  // 1) application/json
  if (ct.includes("application/json")) {
    const data = await req.json().catch(() => ({}));
    return {
      email: String(data.email || "").trim(),
      firstName: String(data.firstName || "").trim(),
      lastName: String(data.lastName || "").trim(),
    };
  }

  // 2) x-www-form-urlencoded or multipart/form-data
  // Some runtimes make formData() flaky; fall back to URLSearchParams.
  try {
    const form = await req.formData();
    if (form && form.has("email")) {
      return {
        email: String(form.get("email") || "").trim(),
        firstName: String(form.get("firstName") || "").trim(),
        lastName: String(form.get("lastName") || "").trim(),
      };
    }
  } catch { /* ignore */ }

  // Fallback: parse raw text like a classic POST
  const text = await req.text().catch(() => "");
  const params = new URLSearchParams(text);
  return {
    email: String(params.get("email") || "").trim(),
    firstName: String(params.get("firstName") || "").trim(),
    lastName: String(params.get("lastName") || "").trim(),
  };
}

/* ---------- handlers ---------- */
export async function POST(req) {
  try {
    const { email, firstName, lastName } = await readFields(req);
    if (!email) {
      return NextResponse.json({ ok:false, error:"Email required" }, { status: 400 });
    }

    // Build contact payload including name if present
    const contact = { email };
    if (firstName) contact.firstName = firstName;
    if (lastName)  contact.lastName  = lastName;

    // Upsert contact
    const sync = await ac("/contact/sync", "POST", { contact });
    const contactId = sync?.contact?.id;
    if (!contactId) throw new Error("No contact id from /contact/sync");

    // Subscribe to list (1 = subscribed)
    const listId = need("AC_LIST_ID");
    try {
      await ac("/contactLists", "POST", {
        contactList: { list: listId, contact: contactId, status: 1 },
      });
    } catch (e) {
      const msg = (e.body || "").toLowerCase();
      if (!(e.status === 422 || msg.includes("already") || msg.includes("exists"))) {
        throw e;
      }
      console.warn("[subscribe] already on list:", e.message);
    }

    return NextResponse.redirect(new URL("/thanks", req.url), 303);
  } catch (err) {
    console.error("[subscribe] error:", err);
    return NextResponse.json({ ok:false, error:"Subscription failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok:true, hint:"POST email (+firstName/lastName)" });
}
