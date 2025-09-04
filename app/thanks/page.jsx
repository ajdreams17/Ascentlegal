export const metadata = {
  title: "Thanks",
  description: "You're subscribed.",
  alternates: { canonical: "/thanks" },
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-semibold">Thanks — you’re in!</h1>
    </main>
  );
}
