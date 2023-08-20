import PropTypes from "prop-types";

const WCCategoryCard = ({ image, title }) => (
  <div className="category__card__container">
    <div className="category__card__img__container">
      <img src={image} alt={title} />
    </div>
    <p>{title}</p>
  </div>
);

WCCategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WCCategoryCard;
