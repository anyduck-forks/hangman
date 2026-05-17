import { Link } from "react-router-dom";
import privacyMarkdown from "../../PRIVACY.md?raw";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Back to Start
          </Link>
        </div>
        <pre className="whitespace-pre-wrap text-sm leading-relaxed bg-gray-800/60 border border-gray-700 rounded-lg p-6">
          {privacyMarkdown}
        </pre>
      </div>
    </div>
  );
}
