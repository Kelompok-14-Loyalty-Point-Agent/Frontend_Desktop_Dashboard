import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routers from "../config/routers/index";

const RootRouters = () => {
  return (
    <Router>
      <Routes>
        {routers.map((route) => (
          <Route path={route.path} element={route.element} key={route} />
        ))}
      </Routes>
    </Router>
  );
};

export default RootRouters;
