import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import GlobalAlertPopup from "../components/GlobalAlertPopup";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        {/* Restore scrolling */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      <GlobalAlertPopup />
    </div>
  );
}