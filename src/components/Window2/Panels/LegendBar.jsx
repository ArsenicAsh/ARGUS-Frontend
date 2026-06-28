export default function LegendBar() {
  return (
    <div className="absolute bottom-6 left-6 z-[1000] w-56 bg-neutral-900/95 border border-neutral-700 rounded-xl shadow-2xl px-3 py-2 text-xs text-neutral-200">

      {/* ===== Crowd Status ===== */}
      <Section title="Crowd Status">
        <ColorItem color="#16a34a" label="Safe" />
        <ColorItem color="#facc15" label="Warning" />
        <ColorItem color="#dc2626" label="Critical" />
      </Section>

      <Divider />

      {/* ===== Resources ===== */}
      <Section title="Resources">
        <ShapeItem shape="square" color="#ef4444" label="Ambulance" />
        <ShapeItem shape="diamond" color="#2563eb" label="Police Unit" />
        <ShapeItem shape="triangle" color="#22c55e" label="Medical Camp" />
        <ShapeItem shape="hexagon" color="#8b5cf6" label="Volunteer Team" />
      </Section>

      <Divider />

      {/* ===== Zones ===== */}
      <Section title="Zones">
        <ZoneItem color="#ff0000" label="High Crowd Density" />
        <ZoneItem color="#38bdf8" label="Low Density / Redirect Zone" />
      </Section>
    </div>
  );
}

/* ---------- Helpers ---------- */

function Section({ title, children }) {
  return (
    <div className="mb-2">
      <div className="text-[11px] font-semibold text-neutral-300 mb-1">
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Divider() {
  return <div className="my-2 border-t border-neutral-700" />;
}

function ColorItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </div>
  );
}

function ShapeItem({ shape, color, label }) {
  return (
    <div className="flex items-center gap-2">
      <ShapeIcon shape={shape} color={color} />
      <span>{label}</span>
    </div>
  );
}

function ZoneItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-3 h-3 rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </div>
  );
}

/* ---------- SVG Shapes ---------- */

function ShapeIcon({ shape, color }) {
  const size = 12;
  const stroke = color;

  switch (shape) {
    case "square":
      return (
        <svg width={size} height={size}>
          <rect
            x="2"
            y="2"
            width="8"
            height="8"
            fill="white"
            stroke={stroke}
            strokeWidth="2"
          />
        </svg>
      );

    case "diamond":
      return (
        <svg width={size} height={size}>
          <polygon
            points="6,1 11,6 6,11 1,6"
            fill="white"
            stroke={stroke}
            strokeWidth="2"
          />
        </svg>
      );

    case "triangle":
      return (
        <svg width={size} height={size}>
          <polygon
            points="6,1 11,11 1,11"
            fill="white"
            stroke={stroke}
            strokeWidth="2"
          />
        </svg>
      );

    case "hexagon":
      return (
        <svg width={size} height={size}>
          <polygon
            points="6,1 11,3.5 11,8.5 6,11 1,8.5 1,3.5"
            fill="white"
            stroke={stroke}
            strokeWidth="2"
          />
        </svg>
      );

    default:
      return null;
  }
}