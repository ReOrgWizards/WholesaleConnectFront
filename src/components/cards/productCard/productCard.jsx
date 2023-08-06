import React from "react";
import PropTypes from "prop-types";
import { CartIcon, FavoriteIcon } from "../../../assets/Icons";
const WCProductCard = ({ image, title, description, price }) => {
  return (
    <>
      <div className="product__card__container">
        <div className="product__card__img">
          <img src={image} alt={title} />
        </div>
        <div className="product__card__content">
          <p className="product__card__title ">{title}</p>
          <p className="product__card__description">{description}</p>
          <div className="product__card__content">
            <div className="product__price__container">
              <span>Rs. </span>
              {price}
            </div>
            <div className="price__icon__container">
              <CartIcon />
              <FavoriteIcon />
            </div>
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
