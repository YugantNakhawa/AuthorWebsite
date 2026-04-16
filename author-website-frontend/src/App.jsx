import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./modals/AuthModal";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import SpeechesPage from "./pages/SpeechesPage";
import VideosPage from "./pages/VideosPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

// Split into AppInner so useNavigate/useLocation can be called inside BrowserRouter
const AppInner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Drop-in replacement for the old setPage prop — all existing pages work unchanged
  const setPage = (pageName) => navigate(pageName === "home" ? "/" : `/${pageName}`);

  // Preserve reset-password token handling
  useEffect(() => {
    if (location.pathname === "/reset-password") {
      const token = new URLSearchParams(location.search).get("token");
      if (token) sessionStorage.setItem("resetToken", token);
    }
  }, [location]);

  return (
    <>
      <GlobalStyles />
      <div className="bg-mesh" />
      <Navbar setPage={setPage} />
      <AuthModal />

      <Routes>
        <Route path="/"               element={<HomePage        setPage={setPage} />} />
        <Route path="/books"          element={<BooksPage                          />} />
        <Route path="/speeches"       element={<SpeechesPage                       />} />
        <Route path="/videos"         element={<VideosPage                         />} />
        <Route path="/about"          element={<AboutPage       setPage={setPage} />} />
        <Route path="/contact"        element={<ContactPage                        />} />
        <Route path="/cart"           element={<CartPage        setPage={setPage} />} />
        <Route path="/checkout"       element={<CheckoutPage    setPage={setPage} />} />
        <Route path="/reset-password" element={<ResetPasswordPage setPage={setPage} />} />
        <Route path="*"               element={<Navigate to="/" replace />}           />
      </Routes>

      <Footer setPage={setPage} />
    </>
  );
};

export default function App() {
  return (
    
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
            <AppInner />
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
  );
}