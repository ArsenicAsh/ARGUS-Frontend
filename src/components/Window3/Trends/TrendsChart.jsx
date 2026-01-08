import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TrendsChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
      >
        {/* Time axis (hidden, continuous) */}
        <XAxis
          dataKey="time"
          type="number"
          scale="time"
          domain={["dataMin", "dataMax"]}
          tick={false}
          axisLine={false}
        />

        <YAxis
          stroke="#737373"
          tick={{ fontSize: 12 }}
          domain={[
            (min) => Math.floor(min - 300),
            (max) => Math.ceil(max + 300),
          ]}
        />

        <Tooltip
          cursor={{ stroke: "#404040", strokeDasharray: "3 3" }}
          formatter={(value) => [`${value}`, "Crowd"]}
          labelFormatter={(label) =>
            new Date(label).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })
          }
          contentStyle={{
            backgroundColor: "#171717",
            border: "1px solid #404040",
          }}
          labelStyle={{ color: "#e5e5e5" }}
        />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
          isAnimationActive={false} // 🔥 THIS IS CRITICAL
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
