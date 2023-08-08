import React from "react";
import { Routes, Route } from "react-router-dom";
import WCLandingPage from "../pages/landingpage/landingPage";

const WCRoutes = () => {
  return <Route path="/" element={<WCLandingPage />} />;
};

export default WCRoutes;
