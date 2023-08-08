import React from "react";
import Carousel from "react-bootstrap/Carousel";
import WCCarousel from "../../components/carousel/carousel";

const WCAddBannerSection = ({ categoryArr }) => {
  return (
    <div className="container">
      <WCCarousel>
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
      </WCCarousel>
    </div>
  );
};

export default WCAddBannerSection;
