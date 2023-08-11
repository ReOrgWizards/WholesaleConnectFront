import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import WCCarousel from "../../components/carousel/carousel";

const WCAddBannerSection = ({ categoryArr }) => {
  return (
    <div className="container">
      <WCCarousel>
        {categoryArr.map((category,id) => (
          <Carousel.Item>
            <img
            key={id}
              className="d-block w-100 add__banner"
              src={category.bannerimg}
              alt={category.bannerhed}
            />
            <Carousel.Caption>
              <h3>{category.bannerhed}</h3>
              <p>{category.bannerpara}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </WCCarousel>
    </div>
  );
};

WCAddBannerSection.propTypes = {
  bannerimg: PropTypes.string.isRequired,
  bannerhed: PropTypes.string.isRequired,
  bannerpara: PropTypes.string.isRequired,
};

export default WCAddBannerSection;