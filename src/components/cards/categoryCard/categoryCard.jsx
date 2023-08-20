import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WCCategoryCard = ({ image, title }) => (
  <div className="category__card__container">
    <div className="category__card__img__container">
      <Link to="/category">
        <img src={image} alt={title} />
      </Link>
    </div>
    <p>{title}</p>
  </div>
);

WCCategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WCCategoryCard;
