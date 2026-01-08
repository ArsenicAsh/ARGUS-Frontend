export default function useAISuggestions() {
  return [
    {
      id: "S-001",
      title: "Deploy Ambulance near Tapovan Road",
      reason: "Crowd density rising rapidly (+14% / min)",
      priority: "CRITICAL",
      resourceType: "AMBULANCE",
      location: "Tapovan Road",
      suggestedBy: "ARGUS AI",
      time: "00:49",
    },
    {
      id: "S-002",
      title: "Deploy Police Unit near Gate 3",
      reason: "Sustained congestion detected",
      priority: "WARNING",
      resourceType: "POLICE",
      location: "Gate 3",
      suggestedBy: "ARGUS AI",
      time: "00:46",
    },
  ];
}
