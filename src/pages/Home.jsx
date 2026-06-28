import { useAuth } from "../context/AuthContext";
import { useAlert } from "../context/AlertContext";
import { Link } from "react-router-dom";

import ResourceAvailability from "../components/Window3/Resources/ResourceAvailability";

export default function Home() {
  const { user } = useAuth();
  const { createAlert } = useAlert();

  const stats = {
    activeCameras: 24,
    totalCrowd: 12435,
    activeAlerts: 3,
    criticalZones: 1,
  };

  return (
    <div className="p-6 space-y-6">

      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome, {user.username}
        </h1>

        <p className="text-gray-400 text-sm">
          ARGUS Real-Time Crowd Intelligence Overview
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">

        <StatCard
          title="Active Cameras"
          value={stats.activeCameras}
        />

        <StatCard
          title="Total Crowd Count"
          value={stats.totalCrowd.toLocaleString()}
        />

        <StatCard
          title="Active Alerts"
          value={stats.activeAlerts}
        />

        <StatCard
          title="Critical Zones"
          value={stats.criticalZones}
        />

      </div>

      {/* Quick Access */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">

        <h2 className="text-lg font-semibold mb-5">
          Quick Access
        </h2>

        <div className="grid grid-cols-3 gap-4">

          <QuickCard
            to="/surveillance"
            icon="🎥"
            title="Live Monitoring"
            description="Monitor CCTV feeds"
          />

          <QuickCard
            to="/analytics"
            icon="🗺️"
            title="Crowd Intelligence"
            description="Analyze hotspots"
          />

          <QuickCard
            to="/operations"
            icon="🧠"
            title="Decision Intelligence"
            description="Review AI decisions"
          />

        </div>

      </div>

      {/* Status + Resources */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">

          <h2 className="text-lg font-semibold mb-4">
            System Status
          </h2>

          <div className="flex gap-8 text-sm">

            <StatusIndicator
              label="Backend Server"
              status="Online"
            />

            <StatusIndicator
              label="AI Models"
              status="Running"
            />

            <StatusIndicator
              label="Database"
              status="Connected"
            />

          </div>

        </div>

        <ResourceAvailability />

      </div>

      {/* Test Alert */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">

        <h2 className="text-lg font-semibold mb-4">
          Test Alert System
        </h2>

        <button
          onClick={() =>
            createAlert({
              severity: "critical",
              message:
                "Critical crowd density detected in Sector B",
              source: "Sector B - Camera 14",
            })
          }
          className="bg-red-700 hover:bg-red-600 transition-colors px-4 py-2 rounded"
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

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <p className="text-2xl font-semibold mt-2">
        {value}
      </p>

    </div>
  );
}

function QuickCard({
  to,
  icon,
  title,
  description,
}) {
  return (
    <Link
      to={to}
      className="group bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-amber-500 hover:bg-gray-800 transition-all duration-200"
    >

      <div className="text-3xl mb-3">
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-4">
        {description}
      </p>

      <div className="text-amber-400 text-sm group-hover:translate-x-1 transition-transform">
        Open →
      </div>

    </Link>
  );
}

function StatusIndicator({
  label,
  status,
}) {
  return (
    <div>

      <p className="text-gray-400">
        {label}
      </p>

      <p className="text-green-400">
        {status}
      </p>

    </div>
  );
}