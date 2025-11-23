export default function LivePulse({ status }) {
  const colors = {
    safe: "bg-green-500",
    medium: "bg-yellow-400",
    high: "bg-red-500",
  };

  return (
    <span className="absolute top-2 right-2 flex items-center">
      {/* main dot */}
      <span className={`h-3 w-3 rounded-full ${colors[status]}`}></span>

      {/* pulsing glow */}
      <span
        className={`
          absolute h-3 w-3 rounded-full opacity-75 
          animate-ping ${colors[status]}
        `}
      ></span>
    </span>
  );
}
