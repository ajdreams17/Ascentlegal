export const metadata = {
  title: "Privacy Policy | Ascent Legal",
  description:
    "How Ascent Legal collects, uses, and protects your information, and the privacy rights available to you under CCPA/CPRA, GDPR, and other laws.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl md:text-5xl font-bold">
          Privacy{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Policy
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
          Effective date: <span className="font-medium">August 17, 2025</span>
        </p>
      </header>

      <section className="prose prose-gray mt-10 max-w-none">
        <p>
          This Privacy Policy explains how Ascent Legal A.P.L.C (“Ascent Legal,” “we,” “our,” or
          “us”) collects, uses, and shares information when you visit{" "}
          <a href="https://ascentlegal.io/">https://ascentlegal.io/</a> (including subdomains) or
          interact with our services (the “Services”). Your use of the Services is also governed by
          our Terms &amp; Conditions.
        </p>

        <h2>1) Scope</h2>
        <p>
          This Policy applies to information we collect online (website, contact forms, email
          communications) and in the course of providing legal services. Where we act as a service
          provider / processor for clients, our processing may be governed by a separate agreement.
        </p>

        <h2>2) Information We Collect</h2>
        <ul>
          <li>
            <strong>Identifiers &amp; Contact Data:</strong> name, email, phone, company,
            mailing address.
          </li>
          <li>
            <strong>Professional &amp; Commercial Info:</strong> matter details you provide,
            engagement history, communications, and documents you upload.
          </li>
          <li>
            <strong>Usage Data:</strong> pages viewed, links clicked, IP address, device/browser
            info, and general location (derived from IP).
          </li>
          <li>
            <strong>Cookies &amp; Similar Technologies:</strong> analytics, preference, and session
            cookies that help operate and improve the site.
          </li>
        </ul>

        <h2>3) Sources of Information</h2>
        <p>
          We collect information directly from you; automatically via the website; and from third
          parties (e.g., referral partners or service providers) consistent with applicable law.
        </p>

        <h2>4) How We Use Information</h2>
        <ul>
          <li>Deliver and improve the website and Services.</li>
          <li>Respond to inquiries, schedule consultations, and manage engagements.</li>
          <li>Protect our users, our firm, and comply with legal/ethical obligations.</li>
          <li>Analyze site performance and security (aggregate, de-identified where possible).</li>
          <li>Communicate updates, events, or changes to our Terms/Policies.</li>
        </ul>

        <h2>5) Legal Bases (GDPR, where applicable)</h2>
        <ul>
          <li><strong>Contract:</strong> to perform a contract or take steps at your request.</li>
          <li><strong>Legitimate Interests:</strong> to operate, improve, and secure our Services.</li>
          <li><strong>Consent:</strong> for certain cookies/marketing where required.</li>
          <li><strong>Legal Obligation:</strong> to comply with laws and regulations.</li>
        </ul>

        <h2>6) Sharing of Information</h2>
        <p>
          We may share information with: (i) service providers (hosting, analytics, communications,
          document management) under confidentiality and data protection terms; (ii) professional
          advisors (e.g., insurers, auditors); (iii) authorities where required by law or to protect
          rights; and (iv) with your consent or direction.
        </p>

        <h2>7) Cookies &amp; Analytics</h2>
        <p>
          We use cookies and similar technologies to operate the site and understand usage. You can
          adjust your browser settings to refuse cookies or show a consent banner where applicable.
          Disabling cookies may affect site functionality.
        </p>

        <h2>8) “Do Not Sell or Share” (CCPA/CPRA)</h2>
        <p>
          We do not sell personal information for money. To the extent analytics or ad-tech could be
          considered “sharing” under California law, you may opt out by adjusting cookie preferences
          (via your browser or any cookie banner we provide) or by contacting us using the details
          below.
        </p>

        <h2>9) Your Privacy Rights</h2>
        <p><strong>California (CCPA/CPRA):</strong> You may have the right to request access, correction, deletion,
          portability, and to opt out of certain sharing. We will not discriminate against you for
          exercising your rights.</p>
        <p><strong>EEA/UK (GDPR):</strong> You may have rights to access, rectify, erase, restrict or object to
          processing, and data portability. You may also withdraw consent where processing is based
          on consent.</p>
        <p>
          To exercise rights, email{" "}
          <a href="mailto:privacy@ascentlegal.io">privacy@ascentlegal.io</a>. We may verify your
          identity before completing your request and may be unable to fulfill requests that conflict
          with legal or ethical duties (e.g., confidentiality).
        </p>

        <h2>10) Data Retention</h2>
        <p>
          We retain information for as long as needed to provide Services, comply with legal and
          ethical obligations (including professional responsibility and record-keeping rules),
          resolve disputes, and enforce agreements.
        </p>

        <h2>11) Security</h2>
        <p>
          We use commercially reasonable administrative, technical, and physical safeguards designed
          to protect information. No method of transmission or storage is 100% secure.
        </p>

        <h2>12) Children’s Privacy</h2>
        <p>
          Our Services are not directed to children under 13 (or 16 where applicable), and we do not
          knowingly collect their information.
        </p>

        <h2>13) International Transfers</h2>
        <p>
          If you access the site from outside the United States, you understand your information may
          be processed in the U.S., which may have different data protection laws than your
          jurisdiction.
        </p>

        <h2>14) Third-Party Links</h2>
        <p>
          Our site may link to third-party sites. We are not responsible for their content or
          privacy practices. Review their policies before providing information.
        </p>

        <h2>15) Changes to This Policy</h2>
        <p>
          We may update this Policy from time to time. Changes are effective when posted with an
          updated effective date at the top of this page.
        </p>

        <h2>16) Contact Us</h2>
        <address className="not-italic">
          <div>Ascent Legal A.P.L.C</div>
          <div>3780 Kilroy Airport Way, Suite 200</div>
          <div>Long Beach, CA 90806</div>
          <div>Phone: (562) 481-4168</div>
          <div>
            Email: <a href="mailto:privacy@ascentlegal.io">privacy@ascentlegal.io</a>
          </div>
        </address>
      </section>
    </main>
  );
}
