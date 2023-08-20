import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import WCCarousel from "../../components/carousel/carousel";

const WCMasterBannerSection = ({ categoryArr }) => {
  return (
    <WCCarousel>
      {categoryArr.map((category, id) => (
        <Carousel.Item key={id}>
          <img
            key={id}
            className="d-block w-100 master__banner"
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
  );
};

WCMasterBannerSection.propTypes = {
  categoryArr: PropTypes.arrayOf(PropTypes.shape),
};

export default WCMasterBannerSection;
