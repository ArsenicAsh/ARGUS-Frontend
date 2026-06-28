import useKeyMetrics from "../hooks/useKeyMetrics";
import MetricItem from "./MetricItem";

export default function KeyMetricsPanel() {
  const metrics = useKeyMetrics();

  return (
    <div className="bg-neutral-900 rounded-lg p-4 space-y-4">
      <h3 className="text-sm font-semibold text-neutral-300">
        Key Metrics
      </h3>

      <div className="space-y-3">
        {metrics.map((metric, idx) => (
          <MetricItem key={idx} {...metric} />
        ))}
      </div>
    </div>
  );
}