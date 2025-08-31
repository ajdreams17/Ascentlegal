// components/DownloadDisclaimer.jsx
export default function DownloadDisclaimer() {
  return (
    <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-gray-200 bg-white/70 p-5 text-sm text-gray-600">
      <p>
        <strong>Disclaimer:</strong> The templates and checklists on this page are
        provided for informational purposes only and do not constitute legal advice.
        Use of these materials does not create an attorney–client relationship with
        Ascent Legal. Laws change and may vary by jurisdiction and facts. You should
        consult an attorney for advice about your specific situation.
      </p>
      <p className="mt-3">
        By downloading, you agree to the{" "}
        <a href="/legal/download-terms" className="underline decoration-indigo-500 underline-offset-4 hover:text-indigo-600">
          Download Terms
        </a>.
      </p>
    </div>
  );
}
