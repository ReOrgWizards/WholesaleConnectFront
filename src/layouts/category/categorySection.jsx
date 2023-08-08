import React from "react";
import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
import WCCategoryCard from "../../components/cards/categoryCard/categoryCard";
import WCTitle from "../../components/TItle/TItle";

const WCCategorySection = ({categoryArr}) => {
  return (
    <>
    <WCTitle title="Category Section" />
    <WCSliderProvider>
      {categoryArr.map((category,key) => (
        <WCCategoryCard keys={key} image={category.img} title={category.title} />
      ))}
    </WCSliderProvider>
    </>
  );
};

WCCategorySection.propTypes = {
  categoryArr:PropTypes.array.isRequired

};

export default WCCategorySection;
