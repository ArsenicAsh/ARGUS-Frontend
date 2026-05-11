import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/argus-logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(username, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-950 text-gray-100 relative overflow-hidden">

      {/* Background Accent Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-cyan-700/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Login Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-gray-900/95 backdrop-blur-md p-8 rounded-2xl w-[420px] space-y-5 border border-gray-800 shadow-2xl"
      >

        {/* Logo */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src={logo}
            alt="ARGUS Logo"
            className="w-52 object-contain"
          />

          <div className="text-center">
            <p className="text-sm text-gray-400 tracking-wide">
              Operational Access Portal
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Real-Time Crowd Intelligence System
            </p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-900/40 border border-red-700 text-red-300 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Username */}
        <div>
          <label className="text-sm text-gray-400">
            Username
          </label>

          <input
            type="text"
            required
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="w-full p-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-400">
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-500 transition-colors p-3 rounded-lg font-semibold"
        >
          Secure Login
        </button>

        {/* Footer */}
        <div className="text-xs text-gray-500 text-center pt-2">
          Unauthorized access prohibited • ARGUS Control
        </div>
      </form>
    </div>
  );
}