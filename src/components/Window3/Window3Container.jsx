import Window3Header from "./Header/Window3Header";
import SystemStatus from "./Status/SystemStatus";
import KeyMetricsPanel from "./Metrics/KeyMetricsPanel";
import AlertsPanel from "./Alerts/AlertsPanel";
import AISuggestionsPanel from "./Suggestions/AISuggestionsPanel";
import DeploymentPanel from "./Deployments/DeploymentPanel";
import DeploymentLog from "./Deployments/DeploymentLog";
import TrendsPanel from "./Trends/TrendsPanel";
import {
  DeploymentsProvider,
  useDeploymentsContext,
} from "./context/DeploymentsContext";

function Window3Content() {
  const {
    resolvedDeployments,
    createDeploymentFromSuggestion,
  } = useDeploymentsContext();

  return (
    <>
      {/* Header */}
      <Window3Header />

      {/* Main Content */}
      <div className="p-4 grid grid-cols-12 gap-4 min-h-[calc(100vh-56px)]">
        {/* Left Panel — Trends & History */}
        <div className="col-span-8 flec flex-col">
          <TrendsPanel />
        </div>

        {/* Right Panel — Decision & Control */}
        <div className="col-span-4 space-y-4">
          <SystemStatus />
          <KeyMetricsPanel />
          <AlertsPanel />

          <AISuggestionsPanel
            onApprove={createDeploymentFromSuggestion}
          />

          <DeploymentPanel />

          <DeploymentLog items={resolvedDeployments} />
        </div>
      </div>
    </>
  );
}

export default function Window3Container() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <DeploymentsProvider>
        <Window3Content />
      </DeploymentsProvider>
    </div>
  );
}
