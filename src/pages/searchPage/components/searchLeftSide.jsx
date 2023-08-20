import WCCustomizeAccordion from "./customizeAccordion";

const WCSearchLeftSide = () => {
  return (
    <div className="productleftcomponent__wrapper">
      <WCCustomizeAccordion title={"CATEGORY"} />
      <WCCustomizeAccordion title={"BRAND"} />
      <WCCustomizeAccordion title={"SIZE"} />
    </div>
  );
};

export default WCSearchLeftSide;
