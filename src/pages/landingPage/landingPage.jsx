import React from "react";
import WCMasterBannerSection from "../../layouts/masterBanner/masterBanner";
import WCCategorySection from "../../layouts/category/categorySection";
import WCCollaborationSection from "../../layouts/collaboration/collaboration";
import WCAddBannerSection from "../../layouts/addBanner/addBanner";
import { categoryArr } from "../../data";
import WCHotDealsSection from "../../layouts/hotDeals/hotdeals";
import WCProductDetailsSection from "../../layouts/productDetails/productDetails";

const WCLandingPage = () => {
  return (
    <>
      <WCMasterBannerSection categoryArr={categoryArr} />
      <WCCategorySection categoryArr={categoryArr} />
      <WCCollaborationSection categoryArr={categoryArr} />
      <WCProductDetailsSection categoryArr={categoryArr}/>
      <WCAddBannerSection categoryArr={categoryArr} />
      <WCHotDealsSection categoryArr={categoryArr}/>
    </>
  );
};

export default WCLandingPage;
