import { Routes, Route } from "react-router-dom";
import WCLandingPage from "../pages/landingpage/landingzone";
import WCCategoryDetailPage from "../pages/categoryDetailPage/categoryDetailPage";

const WCRoutes = () => (
  <Routes>
    <Route path="/" element={<WCLandingPage />} />
    <Route path="/category" element={<WCCategoryDetailPage />} />
  </Routes>
);

export default WCRoutes;
