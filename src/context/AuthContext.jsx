import { createContext, useContext, useState, useEffect } from "react";
import mockUsers from "../data/mockUsers";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("argus_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    const foundUser = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Invalid credentials" };
    }

    const userData = {
      username: foundUser.username,
      role: foundUser.role
    };

    localStorage.setItem("argus_user", JSON.stringify(userData));
    setUser(userData);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("argus_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}