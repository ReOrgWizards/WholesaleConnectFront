import React from "react";
import PropTypes from "prop-types";
const WCProductCard = ({ image, title, description, price }) => {
  return (
    <>
      <div className="productCard_container">
        <div className="productCard_img_container">
          <img src={image} alt="product" />
        </div>

        <div className="row">
          <p className="product_title">{title}</p>
          <p className="product_description">{description}</p>
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <p className="product_price">
              Rs. <span>1200/-</span>{" "}
            </p>
          </div>
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <p className="product_icon">
              <span>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
              <span>
                <i class="fa-solid fa-heart"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

WCProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default WCProductCard;
