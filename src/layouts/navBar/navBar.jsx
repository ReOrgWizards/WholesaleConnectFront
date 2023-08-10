import React from "react";
import WCHeadNavBar from "../../components/navbar/headNavBar/headNavBar";
import WCSubNavBar from "../../components/navbar/subNavBar/subNavbar";
import { navCategories } from "../../data";

const WCNavBarSection = () => {
  return (
    <>
        <WCHeadNavBar />
        <WCSubNavBar navCategories={navCategories} />
    </>
  );
};

export default WCNavBarSection;
