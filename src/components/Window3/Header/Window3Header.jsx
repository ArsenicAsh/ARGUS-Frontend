import { useEffect, useState } from "react";

function getFormattedDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${date} · ${time}`;
}

export default function Window3Header() {
  const [dateTime, setDateTime] = useState(getFormattedDateTime());

  useEffect(() => {
    // Update once every minute
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
      {/* Title */}
      <div className="text-sm font-semibold text-neutral-200">
        ARGUS — Decision Intelligence
      </div>

      {/* Time + Live */}
      <div className="flex items-center gap-4 text-sm text-neutral-300">
        <span>{dateTime}</span>
        <span className="flex items-center gap-1 text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          LIVE
        </span>
      </div>
    </div>
  );
}
