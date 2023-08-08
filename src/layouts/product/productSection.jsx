import React from "react";
import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
import WCProductCard from "../../components/cards/productCard/productCard";
import WCTitle from "../../components/TItle/TItle";

const WCProductSection = ({ categoryArr }) => {
  return (
    <>
    <WCTitle title="Product Section"/>
    <WCSliderProvider>
      {categoryArr.map((category, index) => (
        <WCProductCard
          keys={index}
          title={category.title}
          image={category.img}
          price={category.price}
          description={category.description}
        />
      ))}
    </WCSliderProvider>
    </>
  );
};

WCProductSection.propTypes = {
  categoryArr: PropTypes.array.isRequired,
};

export default WCProductSection;
