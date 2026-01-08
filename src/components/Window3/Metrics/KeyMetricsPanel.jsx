import useKeyMetrics from "../hooks/useKeyMetrics";
import MetricItem from "./MetricItem";

export default function KeyMetricsPanel() {
  const metrics = useKeyMetrics();

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-neutral-300">
        Key Metrics
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {metrics.map((metric, idx) => (
          <MetricItem key={idx} {...metric} />
        ))}
      </div>
    </div>
  );
}
