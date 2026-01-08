const SEVERITY_STYLES = {
  CRITICAL: "text-red-400",
  WARNING: "text-yellow-400",
  INFO: "text-neutral-400",
};

export default function AlertItem({ time, severity, message }) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="text-neutral-500 w-12 shrink-0">
        {time}
      </span>

      <span className={`font-semibold ${SEVERITY_STYLES[severity]}`}>
        {severity}
      </span>

      <span className="text-neutral-300">
        {message}
      </span>
    </div>
  );
}
