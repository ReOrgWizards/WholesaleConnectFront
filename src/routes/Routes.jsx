import { Routes, Route } from "react-router-dom";
import WCLandingPage from "../pages/landingPage/landingzone";
import WCCategoryDetailPage from "../pages/categoryDetailPage/categoryDetailPage";
import WCProductDetailsSection from "../pages/productDetailPage/productDetailPage";
import WCBlogPage from "../pages/blogDetail";

const WCRoutes = () => (
  <Routes>
    <Route path="/" element={<WCLandingPage />} />
    <Route path="/category" element={<WCCategoryDetailPage />} />
    <Route path="/product-detail" element={<WCProductDetailsSection />} />
    <Route path="/blog-detail" element={<WCBlogPage />} />
  </Routes>
);

export default WCRoutes;
