import { NextResponse } from "next/server";

// ...your ac() helper + POST logic stays the same up to success...

export async function POST(req) {
  try {
    // read email, upsert contact, subscribe to list...
    // if all good, send a 303 redirect so browsers navigate to /thanks
    const redirectUrl = new URL("/thanks", req.url);
    return NextResponse.redirect(redirectUrl, 303);
  } catch (e) {
    console.error(e);
    // optional: send them to an error page instead of JSON
    return NextResponse.json({ ok: false, error: "Subscription failed" }, { status: 500 });
  }
}
