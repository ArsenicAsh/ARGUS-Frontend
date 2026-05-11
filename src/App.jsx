import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./layout/Layout";
import ProtectedRoute from "./layout/ProtectedRoute";

import Window1 from "./pages/Window1";
import Window2 from "./pages/Window2";
import Window3 from "./pages/Window3";
import Login from "./pages/Login";
import Home from "./pages/Home";

import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Layout Wrapper */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          {/* Home */}
          <Route index element={<Home />} />

          {/* Surveillance */}
          <Route
            path="surveillance"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "Operator",
                  "Authority",
                  "Admin",
                ]}
              >
                <Window1 />
              </ProtectedRoute>
            }
          />

          {/* Analytics */}
          <Route
            path="analytics"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "Analyst",
                  "Authority",
                  "Admin",
                ]}
              >
                <Window2 />
              </ProtectedRoute>
            }
          />

          {/* Operations */}
          <Route
            path="operations"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "Authority",
                  "Admin",
                ]}
              >
                <Window3 />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}