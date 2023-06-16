import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTokenSelector } from "../redux/signin/SignInSelector";
import ForgotPassword from "../../pages/ForgotPassword";
import DataCreditStock from "../../pages/DataCreditStock";
import CreateNewPassword from "../../pages/CreateNewPassword";
import LandingPage from "../../pages/LandingPage";
import VerifyEmail from "../../pages/VerifyEmail";
import SignIn from "../../pages/SignIn";
import CustomerData from "../../pages/CustomerData";
import DashboardHome from "../../pages/DashboardHome";
import DashboardProfile from "../../pages/DashboardProfile";
import CashOutStock from "../../pages/CashOutStock";
import AddStock from "../../pages/AddStock";
import CustomerTransaction from "../../pages/CustomerTransaction";

const PrivateRouter = ({ children }) => {
  const token = useTokenSelector();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log("coba ", token);
      navigate("/signin");
    }
  }, [token]);

  if (!token) {
    return null;
  }

  return children;
};

const routers = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardHome />
      </PrivateRouter>
    ),
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/newpassword",
    element: <CreateNewPassword />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRouter>
        <DashboardProfile />
      </PrivateRouter>
    ),
  },
  {
    path: "/customers",
    element: (
      <PrivateRouter>
        <CustomerData />
      </PrivateRouter>
    ),
  },
  {
    path: "/transactions",
    element: (
      <PrivateRouter>
        <CustomerTransaction />
      </PrivateRouter>
    ),
  },
  {
    path: "/stocks",
    element: (
      <PrivateRouter>
        <DataCreditStock />
      </PrivateRouter>
    ),
  },
  {
    path: "/stocks/add",
    element: (
      <PrivateRouter>
        <AddStock />
      </PrivateRouter>
    ),
  },
  {
    path: "/cashout",
    element: (
      <PrivateRouter>
        <CashOutStock />
      </PrivateRouter>
    ),
  },
];

export default routers;
