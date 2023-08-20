import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
import WCCategoryCard from "../../components/cards/categoryCard/categoryCard";
import WCTitle from "../../components/TItle/TItle";

const WCCategorySection = ({ categoryArr }) => {
  return (
    <>
      <WCTitle title="Trendy Category" />
      <WCSliderProvider>
        {categoryArr.map((category, id) => (
          // eslint-disable-next-line react/jsx-key
          <WCCategoryCard
            key={id}
            image={category.img}
            title={category.title}
          />
        ))}
      </WCSliderProvider>
    </>
  );
};

WCCategorySection.propTypes = {
  categoryArr: PropTypes.array.isRequired,
};

export default WCCategorySection;
