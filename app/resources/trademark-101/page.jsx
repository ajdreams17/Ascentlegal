export const metadata = {
  title: "Trademark 101: What Every Small Business Should Know | Ascent Legal",
  description:
    "A beginner-friendly guide to trademarks for small business owners — why they matter, what can be trademarked, and how to register yours.",
};

export default function Trademark101Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article className="prose prose-slate lg:prose-lg">
        <h1>Trademark 101: What Every Small Business Should Know</h1>

        <p>
          Starting a business is an exciting journey, but protecting your brand
          is just as crucial as building it. One of the most effective ways to
          safeguard your business identity is through trademark registration.
        </p>

        <h2>Why Every Business Needs a Trademark</h2>
        <ul>
          <li><strong>Brand Protection:</strong> Prevents competitors from using similar names or logos.</li>
          <li><strong>Consumer Trust:</strong> Builds credibility and recognition in the marketplace.</li>
          <li><strong>Legal Advantage:</strong> Provides exclusive rights and recourse against infringement.</li>
          <li><strong>Business Growth:</strong> Increases valuation and attractiveness to investors.</li>
        </ul>

        <h2>What Can & Cannot Be Trademarked</h2>
        <p>Understanding what qualifies is essential.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>✅ Can Be Trademarked</h3>
            <ul>
              <li>Business Names</li>
              <li>Logos</li>
              <li>Slogans & Taglines</li>
              <li>Product Names</li>
              <li>Unique Packaging (Trade Dress)</li>
            </ul>
          </div>
          <div>
            <h3>❌ Cannot Be Trademarked</h3>
            <ul>
              <li>Generic Terms (e.g., "Best Coffee")</li>
              <li>Common Phrases</li>
              <li>Government Symbols</li>
              <li>Offensive or Misleading Marks</li>
            </ul>
          </div>
        </div>

        <h2>The Process of Registering a Trademark</h2>
        <ol>
          <li><strong>Search:</strong> Check the USPTO database.</li>
          <li><strong>Choose Class:</strong> Select the right goods/services class.</li>
          <li><strong>File Application:</strong> Submit via USPTO.</li>
          <li><strong>Review:</strong> Address any Office Actions.</li>
          <li><strong>Approval:</strong> Get your certificate if unopposed.</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>🚫 Skipping the trademark search</li>
          <li>🚫 Choosing a weak trademark</li>
          <li>🚫 Not monitoring for infringements</li>
          <li>🚫 Forgetting to renew</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>
          Registering a trademark is a crucial step in building a strong brand.
          Whether you’re launching a new business or protecting an existing one,
          securing a trademark can save you from costly legal battles in the
          future.
        </p>

        <div className="p-6 mt-8 border rounded-xl bg-indigo-50 text-indigo-800">
          💡 Need help with your trademark?{" "}
          <a href="/contact" className="underline hover:text-indigo-600">
            Contact our experts
          </a>{" "}
          for a free consultation and ensure your brand is legally protected!
        </div>
      </article>
    </main>
  );
}
