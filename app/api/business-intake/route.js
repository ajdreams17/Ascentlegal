const FORMSPREE_URL = "https://formspree.io/f/mrbladoo";

function clean(value, maxLength = 5000) {
  return String(value || "").trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
      line("Investor 1 Name", body?.investor1Name),
      line("Investor 1 Investment", body?.investor1Amount),
      line("Investor 1 Ownership %", body?.investor1Percent),
      line("Investor 2 Name", body?.investor2Name),
      line("Investor 2 Investment", body?.investor2Amount),
      line("Investor 2 Ownership %", body?.investor2Percent),
      line("Investor 3 Name", body?.investor3Name),
      line("Investor 3 Investment", body?.investor3Amount),
      line("Investor 3 Ownership %", body?.investor3Percent),
      line("Investor 4 Name", body?.investor4Name),
      line("Investor 4 Investment", body?.investor4Amount),
      line("Investor 4 Ownership %", body?.investor4Percent),
      line("Investor 5 Name", body?.investor5Name),
      line("Investor 5 Investment", body?.investor5Amount),
      line("Investor 5 Ownership %", body?.investor5Percent),
      line("Investor 6 Name", body?.investor6Name),
      line("Investor 6 Investment", body?.investor6Amount),
      line("Investor 6 Ownership %", body?.investor6Percent),
      line("New Equity Classes", body?.newClasses),
      line("Same Rights as Existing Owners", body?.sameRights),
      line("Class Rights", body?.classRights),
      line("Approvals / Disagreements", body?.approvalsOrDisagreements),
      line("Contractor Role", body?.contractorRole),
      line("Contractor Services", body?.contractorServices),
      line("Contractor Payment", body?.contractorPayment),
      line("Contractor Work Product / IP", body?.contractorWorkProduct),
      line("Contractor Start Date", body?.contractorStartDate),
      line("Contractor Term", body?.contractorTerm),
      line("Contractor Confidential Access", body?.contractorConfidentialInfo),
      line("Existing Contractor Agreement", body?.contractorExistingAgreement),
      line("Recurring Deal Types", body?.dealTypes),
      line("Monthly Contract Volume", body?.monthlyVolume),
      line("Turnaround Needs", body?.turnaroundNeeds),
      line("Internal Reviewer", body?.internalReviewer),
      line("Workflow Issues", body?.workflowIssues),
      line("Preferred Support Structure", body?.preferredFeeStructure),
      "",
      "CONFLICTS / DOCUMENTS",
      line("Other People / Companies Involved", body?.opposingOrRelatedParties),
      line("Other Attorney Involved", body?.priorAttorney),
      line("Documents Available", body?.documentsAvailable),
      "",
      line("Matter-Specific Details", body?.matterDetails),
      line("Final Notes", body?.finalNotes),
    ].filter(Boolean).join("\n");

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
