export const DEPLOYMENT_FLOW = [
  "APPROVED",
  "COMMAND_SENT",
  "ACKNOWLEDGED",
  "EN_ROUTE",
  "ON_SITE",
  "RESOLVED",
];

export function getNextState(current) {
  const idx = DEPLOYMENT_FLOW.indexOf(current);
  if (idx === -1 || idx === DEPLOYMENT_FLOW.length - 1) return current;
  return DEPLOYMENT_FLOW[idx + 1];
}
