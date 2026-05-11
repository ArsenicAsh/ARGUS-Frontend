import logo from "../assets/argus-logo.png";

export default function SplashScreen() {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl top-[-120px] left-[-120px]" />

      <div className="absolute w-[400px] h-[400px] bg-cyan-700/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <img
          src={logo}
          alt="ARGUS Logo"
          className="w-72 object-contain animate-pulse"
        />

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 tracking-[0.3em] uppercase text-sm">
          Real-Time Crowd Intelligence System
        </p>

        {/* System Init Text */}
        <div className="mt-10 space-y-2 text-center text-sm text-gray-500">
          <p className="animate-pulse">
            Initializing surveillance modules...
          </p>

          <p className="animate-pulse delay-150">
            Connecting operational network...
          </p>

          <p className="animate-pulse delay-300">
            Loading intelligence systems...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-10 w-72 h-1 bg-gray-800 rounded overflow-hidden">
          <div className="h-full bg-amber-500 animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}