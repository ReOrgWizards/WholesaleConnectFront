import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WCProductCard = ({ image, title, description, price }) => {
  return (
    <>
      <div className="product__card__container">
        <div className="card border-0">
          <div className="product__card__img__container">
            <Link to="/product-detail">
            <img src={image} alt={title} />
            </Link>
          </div>
          <div className="card-body card__dby__content">
            <p className="product__title">{title}</p>
            <p className="product__description">{description}</p>
            <ul>
              <li>
                <p className="product__price">
                  Rs. <span>{price}</span>
                </p>
              </li>
              <li>
                {/* <Link
                  to="https://web.whatsapp.com/"
                  target="_blank"
                  class="chat__btn"
                  rel="noopener"
                > */}
                  <button className="btn btn-primary ">Chat</button>
                {/* </Link> */}
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
