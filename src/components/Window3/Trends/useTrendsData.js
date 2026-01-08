import { useEffect, useState } from "react";

const MAX_POINTS = 60;

export default function useTrendsData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1]?.value ?? 14000;

        // realistic up + down fluctuation
        const fluctuation =
          Math.sin(Date.now() / 6000) * 120 +
          (Math.random() - 0.5) * 80;

        const nextValue = Math.max(8000, last + fluctuation);

        const next = {
          time: Date.now(),   // MUST be number (timestamp)
          value: Math.round(nextValue),
        };

        const updated = [...prev, next];

        return updated.length > MAX_POINTS
          ? updated.slice(-MAX_POINTS)
          : updated;
      });
    }, 1000); // 1 second updates

    return () => clearInterval(interval);
  }, []);

  return data;
}
