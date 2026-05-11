import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/argus-logo.png";

export default function Sidebar() {
  const { user } = useAuth();

  if (!user) return null;

  const linkStyle =
    "block px-4 py-3 hover:bg-gray-800 transition-colors";

  const activeStyle =
    "bg-gray-800 border-l-4 border-amber-500";

  const role = user.role;

  const canAccess = {
    surveillance: ["Operator", "Authority", "Admin"],
    analytics: ["Analyst", "Authority", "Admin"],
    operations: ["Authority", "Admin"],
  };

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">

      {/* Logo / Branding */}
      <div className="flex items-center justify-center px-4 py-5 border-b border-gray-800">
        <img
          src={logo}
          alt="ARGUS Logo"
          className="w-44 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          Home
        </NavLink>

        {canAccess.surveillance.includes(role) && (
          <NavLink
            to="/surveillance"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Surveillance
          </NavLink>
        )}

        {canAccess.analytics.includes(role) && (
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Analytics
          </NavLink>
        )}

        {canAccess.operations.includes(role) && (
          <NavLink
            to="/operations"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Operations
          </NavLink>
        )}
      </nav>
    </aside>
  );
}