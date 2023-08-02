import React from "react";
import { CartIcon, FavoriteIcon } from "../../../assets/Icons";
const WCProductCard = ({ image, title, description }) => {
  return (
    <>
      <div className="product__card__container">
        <div className="product__card__img__container">
          <img src={image} alt={title} />
        </div>
        <div className="product__card__content">
          <p className="product__card__title ">{title}</p>
          <p className="product__card__description">{description}</p>
          <div className="product__price__icon__container">
            <p>
              <span>Rs. </span>1200/-
            </p>
            <p className="icon">
              <CartIcon />
              <FavoriteIcon />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WCProductCard;
