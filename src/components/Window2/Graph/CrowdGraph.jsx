import { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// MOCK CROWD DATA GENERATOR
function generateNext(prev) {
  const delta = Math.floor(Math.random() * 300 - 150);
  return Math.max(0, prev + delta);
}

// STATUS LOGIC
function getStatus(crowd) {
  if (crowd > 5500) return "CRITICAL";
  if (crowd > 4500) return "WARNING";
  return "SAFE";
}

const STATUS_STYLES = {
  SAFE: "bg-green-600 text-white",
  WARNING: "bg-yellow-500 text-black",
  CRITICAL: "bg-red-600 text-white",
};

export default function CrowdGraph({
  title = "Live Crowd Trend",
  camera,
  onReset,
  onClose,
}) {
  const [data, setData] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      time: i,
      crowd: 4000 + i * 40,
    }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1].crowd;
        const next = generateNext(last);

        return [
          ...prev.slice(1),
          {
            time: new Date().toLocaleTimeString(),
            crowd: next,
          },
        ];
      });
    }, 2000);

    return () => clearInterval(id);
  }, []);

  const latestCrowd = data[data.length - 1]?.crowd ?? 0;

  const status = useMemo(() => {
    if (camera?.status) return camera.status;
    return getStatus(latestCrowd);
  }, [camera, latestCrowd]);

  return (
    <div className="w-full h-full bg-neutral-900 rounded-lg p-3 flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-neutral-300">
          {camera ? `Live Crowd — ${camera.id}` : title}
        </div>

        <div className="flex items-center gap-2">
          {/* TOTAL BUTTON */}
          {camera && (
            <button
              onClick={onReset}
              className="text-xs px-2 py-0.5 rounded bg-neutral-700 hover:bg-neutral-600 text-white"
            >
              Total
            </button>
          )}

          {/* STATUS */}
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_STYLES[status]}`}
          >
            {status}
          </span>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="text-xs px-2 py-0.5 rounded bg-neutral-700 hover:bg-neutral-600 text-white"
          >
            ✕
          </button>
        </div>
      </div>

      {/* GRAPH */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="crowd"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
