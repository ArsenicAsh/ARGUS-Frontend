export default function LegendBar() {
  return (
    <div className="absolute bottom-4 left-4 z-[1000] w-64 bg-white/90 backdrop-blur-md rounded-xl shadow-lg px-4 py-3 text-sm">
      
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
      <div className="text-xs font-semibold text-gray-700 mb-1">
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Divider() {
  return <div className="my-2 border-t border-gray-200" />;
}

function ColorItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-3 h-3 rounded-full"
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
        className="w-4 h-4 rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </div>
  );
}

/* ---------- SVG Shapes ---------- */

function ShapeIcon({ shape, color }) {
  const size = 14;
  const stroke = color;

  switch (shape) {
    case "square":
      return <svg width={size} height={size}><rect x="2" y="2" width="10" height="10" fill="white" stroke={stroke} strokeWidth="2"/></svg>;
    case "diamond":
      return <svg width={size} height={size}><polygon points="7,1 13,7 7,13 1,7" fill="white" stroke={stroke} strokeWidth="2"/></svg>;
    case "triangle":
      return <svg width={size} height={size}><polygon points="7,1 13,13 1,13" fill="white" stroke={stroke} strokeWidth="2"/></svg>;
    case "hexagon":
      return <svg width={size} height={size}><polygon points="7,1 13,4 13,10 7,13 1,10 1,4" fill="white" stroke={stroke} strokeWidth="2"/></svg>;
    default:
      return null;
  }
}
