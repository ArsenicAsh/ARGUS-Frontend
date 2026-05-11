import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [activeAlerts, setActiveAlerts] = useState([]);
  const [alertHistory, setAlertHistory] = useState([]);
  const [visibleNotifications, setVisibleNotifications] = useState([]);

  const createAlert = ({ severity, message, source }) => {
    const alert = {
      id: Date.now(),
      severity,
      message,
      source,
      status: "active",
      timestamp: new Date().toISOString(),
      acknowledgedBy: null,
    };

    // Active operational queue (latest on top)
    setActiveAlerts((prev) => [alert, ...prev]);

    // Temporary popup notifications
    setVisibleNotifications((prev) => [alert, ...prev]);

    // Auto-hide popup after 5 seconds
    setTimeout(() => {
      removeNotification(alert.id);
    }, 5000);
  };

  const removeNotification = (id) => {
    setVisibleNotifications((prev) =>
      prev.filter((a) => a.id !== id)
    );
  };

  const acknowledgeAlert = (id, username) => {
    // Update active queue
    setActiveAlerts((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status: "acknowledged",
              acknowledgedBy: username,
            }
          : a
      )
    );

    // Update popup copy too
    setVisibleNotifications((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status: "acknowledged",
              acknowledgedBy: username,
            }
          : a
      )
    );
  };

  const resolveAlert = (id) => {
    setActiveAlerts((prev) => {
      const alertToResolve = prev.find((a) => a.id === id);

      if (alertToResolve) {
        // Move to history
        setAlertHistory((history) => [
          {
            ...alertToResolve,
            status: "resolved",
          },
          ...history,
        ]);
      }

      return prev.filter((a) => a.id !== id);
    });

    removeNotification(id);
  };

  // Remove alert once operational response begins
  const removeActiveAlert = (id) => {
    setActiveAlerts((prev) =>
      prev.filter((a) => a.id !== id)
    );

    removeNotification(id);
  };

  return (
    <AlertContext.Provider
      value={{
        activeAlerts,
        alertHistory,
        visibleNotifications,
        createAlert,
        acknowledgeAlert,
        resolveAlert,
        removeNotification,
        removeActiveAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}