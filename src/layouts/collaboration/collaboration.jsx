import React from "react";
import WCTitle from "../../components/TItle/TItle";
import PropTypes from "prop-types";

const WCCollaborationSection = ({ categoryArr }) => {
  return (
    <div className="container">
    <div className="collaboration__container">
           <WCTitle title="Brand Collaboration" />
      <div className="collaboration__wrapper">

        {categoryArr.map((category,id) => (
          <img
            keys={id}
            src={category.brand_img}
            alt={category.brand_name}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

WCCollaborationSection.PropTypes = {
  categoryArr: PropTypes.array.isRequired,
};

export default WCCollaborationSection;
