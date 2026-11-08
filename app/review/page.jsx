import TrackedLink from "../../components/TrackedLink";

export const metadata = {
  title: "Leave a Review | Ascent Legal",
  description: "Share your experience with Ascent Legal on Google.",
  robots: {
    index: false,
    follow: true,
  },
};

const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJcW-kUbAnL0wRLUJrajWYxxc";

export default function ReviewPage() {
  return (
    <main className="bg-[#F7F6F3] text-[#0E2A47]">
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B86A2E]">
          Client Feedback
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] sm:text-6xl">
          Share your experience with Ascent Legal.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#5F7386]">
          If you have worked with our firm and would like to leave feedback,
          you can share an honest review on Google. Reviews help prospective
          clients understand what it is like to work with the firm.
        </p>

        <TrackedLink
          href={GOOGLE_REVIEW_URL}
          eventName="google_review_request_clicked"
          placement="review_page"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex bg-[#0E2A47] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#B86A2E]"
        >
          Leave a Google Review →
        </TrackedLink>

        <div className="mx-auto mt-10 max-w-2xl border border-[#0E2A47]/10 bg-white p-6 text-left">
          <p className="text-sm leading-7 text-[#5F7386]">
            Please share only your genuine experience. Ascent Legal does not
            require a positive review, does not offer anything of value in
            exchange for a review, and does not condition services on whether
            you choose to leave feedback.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-[#7A8794]">
          Please avoid including confidential information, legal strategy,
          privileged communications, or sensitive personal information in a
          public review.
        </p>
      </section>
    </main>
  );
}
