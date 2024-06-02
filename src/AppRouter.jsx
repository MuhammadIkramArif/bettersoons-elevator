import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import HeaderPrimary from "./components/headers/HeaderPrimary";
import SignInPage from "./pages/Auth/SignInPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import Footer from "./components/ui/Footer";
import DoctorLandingPage from "./pages/DoctorLandingPage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import DoctorSchedulePage from "./pages/DoctorSchedulePage";
import PatientDashboardPage from "./pages/PatientDashboardPage";
import ProfileEditPage from "./pages/profile/ProfileEditPage";
import PetOwnerFormPage from "./pages/profile/PetOwnerFormPage";
import DoctorSignUp from "./pages/Auth/DoctorSignUp";

const HideHeaderOnSignIn = () => {
  const location = useLocation();
  return (
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/doctor-schedule" ||
    location.pathname === "/patient-dashboard" ||
    location.pathname === "/profile" ||
    location.pathname === "/petowner-form" ||
    location.pathname === "/doctor-sign-up"
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const shouldHideHeader = HideHeaderOnSignIn();

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideHeader && <HeaderPrimary />}
      <div className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctor-homepage" element={<DoctorLandingPage />} />
          <Route path="/doctor-schedule" element={<DoctorSchedulePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/patient-dashboard" element={<PatientDashboardPage />} />
          <Route path="/profile" element={<ProfileEditPage />} />
          <Route path="/petowner-form" element={<PetOwnerFormPage />} />
          <Route path="/doctor-sign-up" element={<DoctorSignUp />} />
        </Routes>
      </div>
      {!shouldHideHeader && <Footer />}
    </div>
  );
};

export default AppRouter;
