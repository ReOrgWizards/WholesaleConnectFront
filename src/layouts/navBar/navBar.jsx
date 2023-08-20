import WCHeadNavBar from "../../components/navbar/headNavBar/headNavBar";
import WCSubNavBar from "../../components/navbar/subNavBar/subNavbar";
import { navCategories } from "../../data";

const WCNavBarSection = () => {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <WCHeadNavBar />
        <WCSubNavBar navCategories={navCategories} />
      </div>
    </>
  );
};

export default WCNavBarSection;
