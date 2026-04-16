import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const API = import.meta.env.VITE_API_URL;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [showLogin, setShowLogin] = useState(false);

  // ALWAYS SEND COOKIES
  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  const login = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = async () => {
    try {
      await axios.post(`${API}/auth/logout`);
    } catch (err) {
      console.error(err);
    }

    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      showLogin,
      setShowLogin
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };