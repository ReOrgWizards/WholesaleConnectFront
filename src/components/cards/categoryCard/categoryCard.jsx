import PropTypes from "prop-types";

const WCCategoryCard = (props) => (
  <div className="category__card__container">
    <div className="category__card__img__container">
      <img src={props.image} alt="category" />
    </div>
    <p>{props.title}</p>
  </div>
);

WCCategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WCCategoryCard;
