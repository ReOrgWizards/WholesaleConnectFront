import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WCProductCard = ({ image, title, description, price }) => {
  return (
    <>
      <div className="productCard_container">
        <div class="card border-0">
          <div className="productCard_img_container">
            <img src={image} alt="product" />
          </div>
          <div class="card-body card__dby__content">
            <p className="product_title">{title}</p>
            <p className="product_description">{description}</p>
            <ul>
              <li>
                <p className="product_price">
                  Rs. <span>1200/-</span>
                </p>
              </li>
              <li>
                <Link
                  to="https://web.whatsapp.com/"
                  target="_blank"
                  class="chat__btn"
                >
                  <button className="btn btn-primary ">Chat</button>
                </Link>
              </li>
            </ul>
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
