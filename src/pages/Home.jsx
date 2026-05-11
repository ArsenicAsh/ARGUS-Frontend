import { useAuth } from "../context/AuthContext";
import { useAlert } from "../context/AlertContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();
  const { createAlert } = useAlert();

  // Temporary mock values
  const stats = {
    activeCameras: 24,
    totalCrowd: 12435,
    activeAlerts: 3,
    criticalZones: 1,
  };

  return (
    <div className="p-6 space-y-6">

      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome, {user.username}
        </h1>
        <p className="text-gray-400 text-sm">
          ARGUS Real-Time Crowd Intelligence Overview
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Active Cameras" value={stats.activeCameras} />
        <StatCard title="Total Crowd Count" value={stats.totalCrowd} />
        <StatCard title="Active Alerts" value={stats.activeAlerts} />
        <StatCard title="Critical Zones" value={stats.criticalZones} />
      </div>

      {/* Quick Access */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Access</h2>

        <div className="flex gap-4 flex-wrap">
          <QuickButton to="/surveillance" label="Go to Surveillance" />
          <QuickButton to="/analytics" label="View Analytics" />
          <QuickButton to="/operations" label="Manage Operations" />
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">System Status</h2>

        <div className="flex gap-8 text-sm">
          <StatusIndicator label="Backend Server" status="Online" />
          <StatusIndicator label="AI Models" status="Running" />
          <StatusIndicator label="Database" status="Connected" />
        </div>
      </div>

      {/* Test Alert Section (Temporary for development) */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Test Alert System</h2>

        <button
          onClick={() =>
            createAlert({
              severity: "critical",
              message: "Critical crowd density detected in Sector B",
              source: "Sector B - Camera 14"
            })
          }
          className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded"
        >
          Trigger Critical Alert
        </button>
      </div>

    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}

function QuickButton({ to, label }) {
  return (
    <Link
      to={to}
      className="bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded"
    >
      {label}
    </Link>
  );
}

function StatusIndicator({ label, status }) {
  return (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="text-green-400">{status}</p>
    </div>
  );
}