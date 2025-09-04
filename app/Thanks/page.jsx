// app/thanks/page.jsx
export const metadata = {
  title: "Thanks",
  description: "You're subscribed.",
  alternates: { canonical: "/thanks" },
  robots: { index: false, follow: false }, // optional
};

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-semibold">Thanks — you’re in!</h1>
      <p className="mt-2 text-gray-600">You can close this tab.</p>
    </main>
  );
}
