export default function MetricItem({ label, value, subtext }) {
  return (
    <div className="bg-neutral-900 rounded-lg p-3">
      <div className="text-sm text-neutral-400 font-medium">{label}</div>
      <div className="text-lg font-semibold text-neutral-100">
        {value}
      </div>
      {subtext && (
        <div className="text-sm text-neutral-400 font-medium">{subtext}</div>
      )}
    </div>
  );
}
