import { useEffect, useState } from "react";

export default function useKeyMetrics() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    // 🔧 Dummy backend data
    const mockMetrics = {
      totalCrowd: 12480,
      highestDensity: {
        label: "CAM-03",
        value: "High",
      },
      fastestRising: {
        label: "Tapovan Road",
        rate: "+14% / min",
      },
    };

    setMetrics(mockMetrics);
  }, []);

  if (!metrics) return [];

  return [
    {
      label: "Total Crowd",
      value: metrics.totalCrowd.toLocaleString(),
    },
    {
      label: "Highest Density",
      value: metrics.highestDensity.label,
      subtext: metrics.highestDensity.value,
    },
    {
      label: "Fastest Rising Zone",
      value: metrics.fastestRising.label,
      subtext: metrics.fastestRising.rate,
    },
  ];
}
