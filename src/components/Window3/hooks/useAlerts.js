import { useEffect, useState } from "react";

export default function useAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const mockAlerts = [
      {
        id: 1,
        time: "00:42",
        severity: "CRITICAL",
        message: "CAM-03 entered critical density",
      },
      {
        id: 2,
        time: "00:38",
        severity: "WARNING",
        message: "Crowd rising rapidly near Tapovan Road",
      },
      {
        id: 3,
        time: "00:31",
        severity: "INFO",
        message: "Ambulance linked to Panchavati zone",
      },
    ];

    setAlerts(mockAlerts);
  }, []);

  return alerts;
}
