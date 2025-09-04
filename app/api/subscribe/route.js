import { NextResponse } from "next/server";

function requireEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var ${name}`);
  return v;
}

async function acFetch(path, method = "GET", body) {
  const base = requireEnv("AC_API_URL").replace(/\/+$/, ""); // no trailing slash
  const key  = requireEnv("AC_API_KEY");
  const url  = `${base}/api/3${path}`;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Api-Token": key,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  // Help debug: capture body text on non-2xx
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${method} ${path} -> ${res.status} ${res.statusText} :: ${text}`);
  }
  return res.json();
}

export async function POST(req) {
  try {
    // 1) Parse the HTML form post
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

    // 2) Upsert contact
    const sync = await acFetch("/contact/sync", "POST", { contact: { email } });
    const contactId = sync?.contact?.id;
    if (!contactId) throw new Error("No contact id returned from contact/sync");

    // 3) Subscribe to list (status 1 = subscribed)
    const listId = requireEnv("AC_LIST_ID"); // e.g., "4"
    await acFetch("/contactLists", "POST", {
      contactList: { list: listId, contact: contactId, status: 1 },
    });

    // 4) Success → redirect to /thanks
    return NextResponse.redirect(new URL("/thanks", req.url), 303);
  } catch (err) {
    // This shows up in Netlify → **Logs → Functions**
    console.error("[subscribe] error:", err);
    return NextResponse.json({ ok:false, error:"Subscription failed" }, { status: 500 });
  }
}

// Optional: helpful when you accidentally visit /api/subscribe in the browser
export async function GET() {
  return NextResponse.json({ ok:true, hint:"POST an email to subscribe" });
}
