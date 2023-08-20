import { Routes, Route } from "react-router-dom";
import WCLandingPage from "../pages/landingPage/landingzone";
import WCCategoryDetailPage from "../pages/categoryDetailPage/categoryDetailPage";
import WCProductDetailsSection from "../pages/productDetailPage/productDetailPage";
import WCBlogPage from "../pages/blogDetail";
import ProductSearchPage from "../pages/searchPage";
import WCAddToCartPage from "../pages/addToCart";
import WCAboutUs from "../pages/aboutUs";
import WCAuthLoginRegistration from "../layouts/authentication/authLoginRegistration";

const WCRoutes = () => (
  <Routes>
    <Route path="/" element={<WCLandingPage />} />
    <Route path="/category" element={<WCCategoryDetailPage />} />
    <Route path="/product-detail" element={<WCProductDetailsSection />} />
    <Route path="/blog-detail" element={<WCBlogPage />} />
    <Route path="/cart" element={<WCAddToCartPage />} />
    <Route path="/search" element={<ProductSearchPage />} />
    <Route path="/about-us" element={<WCAboutUs />} />
    <Route path="/login" element={<WCAuthLoginRegistration />} />
  </Routes>
);

export default WCRoutes;
