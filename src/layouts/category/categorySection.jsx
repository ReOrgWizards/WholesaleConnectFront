import React from "react";
import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
import { categoryArr } from "../../data";
import WCCategoryCard from "../../components/cards/categoryCard/categoryCard";

const WCCategorySection = () => {
  return (
    <WCSliderProvider>
      {categoryArr.map((category, index) => (
        <WCCategoryCard image={category.img} title={category.title} />
      ))}
    </WCSliderProvider>
  );
};

WCCategorySection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WCCategorySection;
