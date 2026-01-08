import { SYSTEM_STATES } from "./statusUtils";

const STATE_STYLES = {
  [SYSTEM_STATES.SAFE]: {
    label: "SAFE",
    classes: "bg-green-500/10 text-green-400 border border-green-500/20",
  },
  [SYSTEM_STATES.WARNING]: {
    label: "WARNING",
    classes: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  },
  [SYSTEM_STATES.CRITICAL]: {
    label: "CRITICAL",
    classes: "bg-red-500/10 text-red-400 border border-red-500/20",
  },
};

export default function SystemStatusBadge({ state }) {
  const config = STATE_STYLES[state] || STATE_STYLES[SYSTEM_STATES.WARNING];

  return (
    <span
      className={`px-2 py-1 rounded text-[11px] font-semibold tracking-wide ${config.classes}`}
    >
      {config.label}
    </span>
  );
}
