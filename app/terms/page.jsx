export const metadata = {
  title: "Terms & Conditions | Ascent Legal",
  description:
    "Website terms and conditions for Ascent Legal. Read the rules that govern use of this website and our online materials.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl md:text-5xl font-bold">
          Terms{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            & Conditions
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
          Effective date: <span className="font-medium">August 17, 2025</span>
        </p>
      </header>

      <section className="prose prose-gray mt-10 max-w-none">
        <h2>1) Acceptance of Terms</h2>
        <p>
          By accessing or using this website (the “Site”), you agree to these Terms & Conditions
          (“Terms”). If you do not agree, please do not use the Site.
        </p>

        <h2>2) No Legal Advice; No Attorney–Client Relationship</h2>
        <p>
          Content on this Site is for general informational purposes only and does not constitute
          legal advice. Viewing or using the Site does not create an attorney–client relationship
          with Ascent Legal or any of its attorneys. Do not send confidential information until a
          written engagement agreement is signed.
        </p>

        <h2>3) Attorney Advertising</h2>
        <p>
          This Site may be considered attorney advertising. Prior results do not guarantee a similar
          outcome. Case studies and testimonials reflect individual experiences.
        </p>

        <h2>4) Permitted Use</h2>
        <p>
          You may use the Site for lawful, personal, and non-commercial purposes. You agree not to:
        </p>
        <ul>
          <li>Access or use the Site in violation of applicable laws or regulations;</li>
          <li>Scrape, copy, or republish content without permission;</li>
          <li>Introduce malware, attempt to gain unauthorized access, or disrupt Site operations.</li>
        </ul>

        <h2>5) Intellectual Property</h2>
        <p>
          The Site, including text, graphics, logos, and other materials, is owned by Ascent Legal
          or its licensors and protected by intellectual property laws. You may not reproduce,
          distribute, or create derivative works without prior written consent.
        </p>

        <h2>6) Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites. We do not control or endorse those
          sites and are not responsible for their content, policies, or practices.
        </p>

        <h2>7) No Warranties</h2>
        <p>
          The Site is provided on an “as is” and “as available” basis without warranties of any kind,
          express or implied, including accuracy, reliability, or fitness for a particular purpose.
        </p>

        <h2>8) Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Ascent Legal and its attorneys will not be liable
          for any indirect, incidental, consequential, or punitive damages arising from your use of
          the Site.
        </p>

        <h2>9) Privacy</h2>
        <p>
          Your use of the Site is also subject to our Privacy Policy. If you submit information
          through forms on the Site, you consent to our processing of that information to respond to
          your inquiry and operate the Site.
        </p>

        <h2>10) State Admissions & Jurisdiction</h2>
        <p>
          Our attorneys are admitted in specific jurisdictions only. We do not seek to represent
          anyone based solely on a visit to this Site in jurisdictions where this Site does not
          comply with all laws and ethical rules.
        </p>

        <h2>11) Governing Law; Venue</h2>
        <p>
          These Terms are governed by the laws of the State of California, without regard to its
          conflicts of law principles. Exclusive venue for any dispute relating to these Terms or
          the Site will be in the state or federal courts located in Los Angeles County, California.
        </p>

        <h2>12) Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Changes are effective when posted on this
          page with an updated effective date.
        </p>

        <h2>13) Contact</h2>
        <p>
          Questions about these Terms? Contact us at{" "}
          <a href="mailto:info@ascentlegal.io">info@ascentlegal.io</a> or by mail at:
        </p>
        <p className="not-prose">
          <span className="block">Ascent Legal</span>
          <span className="block">3780 Kilroy Airport Way, Suite 200</span>
          <span className="block">Long Beach, CA 90806</span>
        </p>
      </section>
    </main>
  );
}
