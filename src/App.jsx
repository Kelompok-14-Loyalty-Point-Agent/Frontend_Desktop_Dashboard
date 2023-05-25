// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Sidebar from "./pages/DashboardHome";
import DataCreditStock from "./pages/DataCreditStock";
import CreateNewPassword from "./pages/CreateNewPassword";
import LandingPage from "./pages/LandingPage";
import VerifyEmail from "./pages/VerifyEmail";
import DashboardProfile from "./pages/DashboardProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/newpassword" element={<CreateNewPassword />} />
          <Route path="/dashboard" element={<Sidebar />} />
          <Route path="/profile" element={<DashboardProfile />} />
          <Route path="/customers" />
          <Route path="/transactions" />
          <Route path="/stocks" element={<DataCreditStock />} />
          <Route path="/cashout" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
