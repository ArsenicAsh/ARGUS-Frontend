import useTrendsData from "./useTrendsData";
import TrendsChart from "./TrendsChart";

export default function TrendsPanel() {
  const data = useTrendsData();

  return (
    <div className="bg-neutral-900 rounded-lg p-4 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-neutral-300">
          Trends & History
        </h3>

        <div className="flex gap-2 text-xs">
          <select className="bg-neutral-800 text-neutral-200 rounded px-2 py-1">
            <option>Last 1h</option>
            <option>Last 12h</option>
            <option>Last 24h</option>
          </select>

          <select className="bg-neutral-800 text-neutral-200 rounded px-2 py-1">
            <option>All Zones</option>
            <option>CAM-03</option>
            <option>Gate 3</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0">
        <TrendsChart data={data} />
      </div>
    </div>
  );
}
