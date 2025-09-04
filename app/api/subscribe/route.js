import { NextResponse } from "next/server";

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

  // If AC returns non-2xx, capture the full body for logs
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err  = new Error(`${method} ${path} -> ${res.status} ${res.statusText} :: ${text}`);
    err.status = res.status;
    err.body   = text;
    throw err;
  }
  return res.json();
}

export async function POST(req) {
  try {
    // accept HTML form or JSON
    const ct = req.headers.get("content-type") || "";
    let email = "";
    if (ct.includes("application/x-www-form-urlencoded")) {
      const form = await req.formData();
      email = String(form.get("email") || "").trim();
    } else {
      const data = await req.json().catch(() => ({}));
      email = String(data.email || "").trim();
    }
    if (!email) return NextResponse.json({ ok:false, error:"Email required" }, { status: 400 });

    // upsert contact
    const sync = await ac("/contact/sync", "POST", { contact: { email } });
    const contactId = sync?.contact?.id;
    if (!contactId) throw new Error("No contact id from /contact/sync");

    // subscribe to list (1=subscribed)
    const listId = need("AC_LIST_ID");
    try {
      await ac("/contactLists", "POST", { contactList: { list: listId, contact: contactId, status: 1 } });
    } catch (e) {
      // If already subscribed / validation noise, treat as success
      const msg = (e.body || "").toLowerCase();
      if (e.status === 422 || msg.includes("already") || msg.includes("exists")) {
        console.warn("[subscribe] already on list, continuing:", e.message);
      } else {
        throw e;
      }
    }

    return NextResponse.redirect(new URL("/thanks", req.url), 303);
  } catch (err) {
    // shows in Netlify → Logs → Functions → subscribe
    console.error("[subscribe] error:", err);
    return NextResponse.json({ ok:false, error:"Subscription failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok:true, hint:"POST email to subscribe" });
}
