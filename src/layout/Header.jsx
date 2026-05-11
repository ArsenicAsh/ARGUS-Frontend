import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-14 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="text-sm text-gray-400">
        Real-Time Crowd Intelligence System
      </div>

      <div className="flex items-center gap-4 text-sm">
        {user && (
          <>
            <span className="text-gray-400">
              {user.username} ({user.role})
            </span>
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}