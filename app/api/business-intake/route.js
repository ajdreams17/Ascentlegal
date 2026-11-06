const FORMSPREE_URL = "https://formspree.io/f/mrbladoo";

function clean(value, maxLength = 5000) {
  return String(value || "").trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function line(label, value) {
  const cleaned = clean(value);
  return cleaned ? `${label}: ${cleaned}` : "";
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 200);
    const phone = clean(body?.phone, 60);
    const matterType = clean(body?.matterType, 120);

    if (!name || !email || !isValidEmail(email) || !matterType) {
      return Response.json(
        { error: "Please provide your name, a valid email address, and the type of business matter." },
        { status: 400 }
      );
    }

    const sections = [
      "BUSINESS INTAKE",
      "",
      line("Potential Client", name),
      line("Email", email),
      line("Phone", phone || "Not provided"),
      line("Business / Entity", body?.businessName),
      line("Role", body?.role),
      line("Location / State", body?.state),
      line("Matter Type", matterType),
      line("Deadline / Urgent Date", body?.deadline || "Not provided"),
      "",
      "GENERAL BUSINESS INFORMATION",
      line("Business Description", body?.businessDescription),
      line("Requested Help", body?.requestedHelp),
      "",
      "MATTER-SPECIFIC INFORMATION",
      line("Entity Status / Management", body?.entityStatus),
      line("Entity Type", body?.entityType),
      line("Formation State", body?.formationState),
      line("Owners / Founders", body?.owners),
      line("Contract Type", body?.contractType),
      line("Counterparty", body?.counterparty),
      line("Contract Status", body?.contractStatus),
      line("Governance Documents", body?.governanceDocs),
      line("Ownership Details", body?.ownershipDetails),
      line("All Owners Agree", body?.allOwnersAgree),
      line("Proposed Change", body?.proposedChange),
      line("Number of New Investors", body?.investorCount),
      line("Investor Details", body?.investorDetails),
      line("New Equity Classes", body?.newClasses),
      line("Same Rights as Existing Owners", body?.sameRights),
      line("Class Rights", body?.classRights),
      line("Approvals / Disagreements", body?.approvalsOrDisagreements),
      line("Contractor Role", body?.contractorRole),
      line("Contractor Services", body?.contractorServices),
      line("Contractor Payment", body?.contractorPayment),
      line("Contractor Work Product / IP", body?.contractorWorkProduct),
      line("Contractor Start Date", body?.contractorStartDate),
      line("Recurring Deal Types", body?.dealTypes),
      line("Monthly Contract Volume", body?.monthlyVolume),
      line("Turnaround Needs", body?.turnaroundNeeds),
      line("Internal Reviewer", body?.internalReviewer),
      line("Workflow Issues", body?.workflowIssues),
      line("Additional Details", body?.otherDetails),
    ].filter(Boolean).join("\\n");

    const deadline = clean(body?.deadline, 160);
    const hasDeadline = deadline && !["none", "no", "n/a", "not applicable"].includes(deadline.toLowerCase());

    const subject = hasDeadline
      ? `New Ascent Legal Business Intake | ${matterType} | DEADLINE: ${deadline}`
      : `New Ascent Legal Business Intake | ${matterType}`;

    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        _replyto: email,
        name,
        email,
        phone: phone || "Not provided",
        business: clean(body?.businessName, 200) || "Not provided",
        matter_type: matterType,
        deadline: deadline || "Not provided",
        business_intake: sections,
        source: "Ascent Legal Business Intake",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      console.error("Business intake Formspree error:", response.status, data || "No JSON response");
      return Response.json(
        { error: "We could not submit your intake right now. Please contact the firm directly." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Business intake submission error:", error?.message || "unknown_error");
    return Response.json(
      { error: "We could not submit your intake right now. Please contact the firm directly." },
      { status: 500 }
    );
  }
}
