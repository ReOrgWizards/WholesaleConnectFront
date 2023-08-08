import React from "react";
import { Routes, Route } from "react-router-dom";
import WCLandingPage from "../pages/landingpage/landingPage";

const Routes = () => {
  return <Route path="/" element={<WCLandingPage />} />;
};

export default Routes;
