export default function AIDecisionIntelligence() {
  return (
    <div className="bg-neutral-900 rounded-lg p-4 h-full flex flex-col">
      {/* Header */}
      <h3 className="text-sm font-semibold text-neutral-300 mb-4">
        AI Decision Intelligence
      </h3>

      {/* Recommended Action */}
      <div className="mb-4">
        <p className="text-xs text-neutral-500 mb-1">
          Recommended Action
        </p>

        <div className="text-sm font-semibold text-neutral-100">
          Deploy Police Unit near Gate 3
        </div>
      </div>

      {/* Confidence */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-neutral-500 mb-1">
          <span>Prediction Confidence</span>
          <span>94%</span>
        </div>

        <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-cyan-500"
            style={{ width: "94%" }}
          />
        </div>
      </div>

      {/* AI Reason */}
      <div className="mb-4">
        <p className="text-xs text-neutral-500 mb-1">
          AI Reasoning
        </p>

        <p className="text-sm text-neutral-300 leading-relaxed">
          Sustained crowd growth has been detected over the last 5
          minutes. Current trend indicates the congestion threshold
          will likely be exceeded within the next 8 minutes if no
          intervention is performed.
        </p>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-3 mt-auto">

        <div className="bg-neutral-800 rounded-md p-3">
          <p className="text-[11px] text-neutral-500">
            Prediction Model
          </p>

          <p className="text-sm font-semibold text-neutral-100 mt-1">
            Attention-LSTM
          </p>
        </div>

        <div className="bg-neutral-800 rounded-md p-3">
          <p className="text-[11px] text-neutral-500">
            Predicted Peak
          </p>

          <p className="text-sm font-semibold text-neutral-100 mt-1">
            8 Minutes
          </p>
        </div>

      </div>
    </div>
  );
}