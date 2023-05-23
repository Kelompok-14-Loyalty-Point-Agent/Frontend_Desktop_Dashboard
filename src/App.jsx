// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Sidebar from "./pages/DashboardHome";
import DataCreditStock from "./pages/DataCreditStock";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboardhome" element={<Sidebar />} />
          <Route path="/stock" element={<DataCreditStock />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
