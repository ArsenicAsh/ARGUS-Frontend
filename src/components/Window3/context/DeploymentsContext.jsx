import { createContext, useContext, useState } from "react";
import { getNextState } from "../Deployments/deploymentStates";

const DeploymentsContext = createContext(null);

export function DeploymentsProvider({ children }) {
  const [deployments, setDeployments] = useState([
    {
      id: "D-001",
      title: "Deploy Ambulance near Tapovan Road",
      status: "COMMAND_SENT",
      assigned: "AMB-07",
      approvedBy: "Operator-2",
      time: "01:12",
    },
    {
      id: "D-002",
      title: "Deploy Police Unit near Gate 3",
      status: "EN_ROUTE",
      assigned: "PL-12",
      approvedBy: "Operator-1",
      time: "01:05",
    },
  ]);

  function advanceDeployment(id) {
    setDeployments(prev =>
      prev.map(dep =>
        dep.id === id
          ? { ...dep, status: getNextState(dep.status) }
          : dep
      )
    );
  }

  function createDeploymentFromSuggestion(suggestion) {
    setDeployments(prev => [
      {
        id: `D-${Date.now()}`,
        title: suggestion.title,
        status: "APPROVED",
        assigned: "Unassigned",
        approvedBy: "Operator-1",
        time: suggestion.time,
      },
      ...prev,
    ]);
  }

  const activeDeployments = deployments.filter(
    d => d.status !== "RESOLVED"
  );

  const resolvedDeployments = deployments.filter(
    d => d.status === "RESOLVED"
  );

  return (
    <DeploymentsContext.Provider
      value={{
        activeDeployments,
        resolvedDeployments,
        advanceDeployment,
        createDeploymentFromSuggestion,
      }}
    >
      {children}
    </DeploymentsContext.Provider>
  );
}

export function useDeploymentsContext() {
  const ctx = useContext(DeploymentsContext);
  if (!ctx) {
    throw new Error(
      "useDeploymentsContext must be used inside DeploymentsProvider"
    );
  }
  return ctx;
}
