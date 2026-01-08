export default function ConfirmationModal({
  title,
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-neutral-900 rounded-lg p-5 w-96 space-y-4">
        <div className="text-lg font-semibold text-neutral-100">
          {title}
        </div>

        <div className="text-sm text-neutral-300">
          {message}
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            className="px-3 py-1.5 text-sm rounded-md
                       bg-neutral-700 hover:bg-neutral-600
                       text-neutral-200"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="px-3 py-1.5 text-sm rounded-md
                       bg-green-600 hover:bg-green-500
                       text-white"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
