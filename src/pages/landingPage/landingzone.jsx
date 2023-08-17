import WCMasterBannerSection from "../../layouts/masterBanner/masterBanner";
import WCCategorySection from "../../layouts/category/categorySection";
import WCCollaborationSection from "../../layouts/collaboration/collaboration";
import WCAddBannerSection from "../../layouts/addBanner/addBanner";
import WCHotDealsSection from "../../layouts/hotDeals/hotdeals";
import WCRecommendProduct from "../../layouts/RecommendProduct/WCRecommendProduct";
import WCBlogSection from "../../layouts/blogSection";
import { blogData, categoryArr } from "../../data";

const WCLandingPage = () => {
  return (
    <>
      <WCMasterBannerSection categoryArr={categoryArr} />
      <WCCategorySection categoryArr={categoryArr} />
      <WCCollaborationSection categoryArr={categoryArr} />
      <WCRecommendProduct categoryArr={categoryArr} />
      <WCAddBannerSection categoryArr={categoryArr} />
      <WCHotDealsSection categoryArr={categoryArr} />
      <WCBlogSection blogArr={blogData} />
    </>
  );
};

export default WCLandingPage;
