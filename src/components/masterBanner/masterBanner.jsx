import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

const WCMasteraBanner = ({ categoryArr }) => {
  return (
    <Carousel fade>
      {categoryArr.map((category) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={category.bannerimg}
            alt={category.bannerhed}
          />
          <Carousel.Caption>
            <h3>{category.bannerhed}</h3>
            <p>{category.bannerpara}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

WCMasteraBanner.propTypes = {
  categoryArr: PropTypes.array.isRequired,
};

export default WCMasteraBanner;
