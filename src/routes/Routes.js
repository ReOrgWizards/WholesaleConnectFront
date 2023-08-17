import React from "react";
import { Routes, Route } from "react-router-dom";
import WCLandingPage from "../pages/landingpage/landingPage";

const WCRoutes = () => {
  <Routes>
    return <Route path="/" element={<WCLandingPage />} />;
  </Routes>;
};

export default WCRoutes;
