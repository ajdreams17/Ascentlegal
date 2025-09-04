import { NextResponse } from "next/server";

// ... your AC logic above ...

export async function POST(req) {
  try {
    // upsert contact + subscribe to list...
    const redirectUrl = new URL("/thanks", req.url);
    return NextResponse.redirect(redirectUrl, 303);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Subscription failed" }, { status: 500 });
  }
}
