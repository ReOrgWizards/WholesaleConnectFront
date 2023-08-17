import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

const WCCarousel = ({ children }) => {
  return <Carousel fade>{children}</Carousel>;
};

WCCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WCCarousel;
