import React from "react";
import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
import WCCategoryCard from "../../components/cards/categoryCard/categoryCard";

const WCCategorySection = ({categoryArr}) => {
  return (
    <WCSliderProvider>
      {categoryArr.map((category,key) => (
        <WCCategoryCard keys={key} image={category.img} title={category.title} />
      ))}
    </WCSliderProvider>
  );
};

WCCategorySection.propTypes = {
  categoryArr:PropTypes.array.isRequired

};

export default WCCategorySection;
