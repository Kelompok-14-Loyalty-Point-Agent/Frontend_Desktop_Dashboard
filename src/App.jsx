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
          <Route path="/" />
          <Route path="/signin" />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/verify" />
          <Route path="/newpassword" />
          <Route path="/dashboard" element={<Sidebar />} />
          <Route path="/profile" />
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
