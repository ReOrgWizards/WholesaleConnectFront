import React from "react";
import WCTitle from "../../components/TItle/TItle";
import PropTypes from "prop-types";

const WCColloborationSection = ({ categoryArr }) => {
  return (
    <div className="colloboration__container">
      <WCTitle title="Brand Colloboration" />
      <div className="coloboration__wrapper">
        {categoryArr.map((category, index) => (
          <img
            keys={index}
            src={category.brand_img}
            alt={category.brand_name}
          />
        ))}
      </div>
    </div>
  );
};

WCColloborationSection.PropTypes = {
  categoryArr: PropTypes.array.isRequired,
};

export default WCColloborationSection;
