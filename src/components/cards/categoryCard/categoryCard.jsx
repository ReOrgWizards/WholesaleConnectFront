import PropTypes from "prop-types";
import WCSliderProvider from "../../slider/sliderProvider";
import { categoryArr } from "../../../data";

const WCCategoryCard = () => (
  <WCSliderProvider>
    {categoryArr.map((category, index) => (
      <div className="category__card__container">
        <div className="category__card__img__container">
          <img src={category.img} alt="category" />
        </div>
        <p>{category.title}</p>
      </div>
    ))}
  </WCSliderProvider>
);

WCCategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WCCategoryCard;
