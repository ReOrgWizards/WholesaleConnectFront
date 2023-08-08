import React from "react";
import WCMasterBannerSection from "../../layouts/masterBanner/masterBanner";
import WCCategorySection from "../../layouts/category/categorySection";
import WCCollaborationSection from "../../layouts/collaboration/collaboration";
import WCAddBannerSection from "../../layouts/addBanner/addBanner";
import { categoryArr } from "../../data";
import WCHotDealsSection from "../../layouts/hotDeals/hotdeals";
import WCProductCard from "../../components/cards/productCard/productCard";
import WCProductSection from "../../layouts/product/productSection";

const WCLandingPage = () => {
  return (
    <>
      <WCMasterBannerSection categoryArr={categoryArr} />
      <WCCategorySection categoryArr={categoryArr} />
      <WCCollaborationSection categoryArr={categoryArr} />
      <WCProductSection categoryArr={categoryArr}/>
      <WCAddBannerSection categoryArr={categoryArr} />
      <WCHotDealsSection categoryArr={categoryArr}/>
    </>
  );
};

export default WCLandingPage;
