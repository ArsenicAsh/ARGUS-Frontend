import { useState } from "react";
import DeploymentItem from "./DeploymentItem";
import { useDeploymentsContext } from "../context/DeploymentsContext";

export default function DeploymentPanel() {
  const { activeDeployments, advanceDeployment } =
    useDeploymentsContext();

  const [selectedId, setSelectedId] = useState(
    activeDeployments[0]?.id
  );

  const selected = activeDeployments.find(
    d => d.id === selectedId
  );

  return (
    <div className="bg-neutral-900 rounded-lg p-4 space-y-3">
      <h3 className="text-sm font-semibold text-neutral-300">
        Active Actions & Deployments
      </h3>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-5 space-y-2">
          {activeDeployments.map(dep => (
            <button
              key={dep.id}
              onClick={() => setSelectedId(dep.id)}
              className={`w-full text-left p-2 rounded-md ${
                dep.id === selectedId
                  ? "bg-neutral-800"
                  : "bg-neutral-900 hover:bg-neutral-800"
              }`}
            >
              <div className="text-sm text-neutral-200">
                {dep.title}
              </div>
              <div className="text-xs text-neutral-400">
                Status: {dep.status.replace("_", " ")}
              </div>
            </button>
          ))}
        </div>

        <div className="col-span-7">
          {selected && (
            <DeploymentItem
              {...selected}
              onAdvance={() => advanceDeployment(selected.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
