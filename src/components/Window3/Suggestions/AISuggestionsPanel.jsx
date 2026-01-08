import { useState } from "react";
import ConfirmationModal from "../common/ConfirmationModal";
import useAISuggestions from "../hooks/useAISuggestions";

export default function AISuggestionsPanel({ onApprove }) {
  const initialSuggestions = useAISuggestions();
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [pending, setPending] = useState(null);

  function handleApproveClick(suggestion) {
    setPending(suggestion);
  }

  function confirmApprove() {
    onApprove(pending);
    setSuggestions(prev =>
      prev.filter(s => s.id !== pending.id)
    );
    setPending(null);
  }

  function cancelApprove() {
    setPending(null);
  }

  if (!suggestions.length) return null;

  return (
    <div className="bg-neutral-900 rounded-lg p-4 space-y-3">
      <h3 className="text-sm font-semibold text-neutral-300">
        AI Suggestions
      </h3>

      <div className="space-y-3">
        {suggestions.map(s => (
          <div
            key={s.id}
            className="bg-neutral-800 rounded-md p-3 space-y-2"
          >
            <div className="text-sm font-semibold text-neutral-100">
              {s.title}
            </div>

            <div className="text-xs text-neutral-400">
              {s.reason}
            </div>

            <div className="flex justify-between items-center">
              <span
                className={`text-xs font-medium ${
                  s.priority === "CRITICAL"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {s.priority}
              </span>

              <button
                className="px-3 py-1.5 text-xs rounded-md
                           bg-neutral-700 hover:bg-neutral-600
                           text-neutral-200"
                onClick={() => handleApproveClick(s)}
              >
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>

      {pending && (
        <ConfirmationModal
          title="Confirm Deployment Approval"
          message={`This will create an active deployment for: "${pending.title}". Do you want to proceed?`}
          onConfirm={confirmApprove}
          onCancel={cancelApprove}
        />
      )}
    </div>
  );
}
