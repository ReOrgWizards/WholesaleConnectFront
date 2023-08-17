import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
import WCProductCard from "../../components/cards/productCard/productCard";
import WCTitle from "../../components/TItle/TItle";

const WCProductDetailsSection = ({ categoryArr }) => {
  return (
    <>
      <WCTitle title="Product Section" />
      <WCSliderProvider>
        {categoryArr.map((category, id) => (
          <WCProductCard
            key={id}
            title={category.title}
            image={category.img}
            price={category.price}
            description={category.description}
          />
        ))}
      </WCSliderProvider>
    </>
  );
};

WCProductDetailsSection.propTypes = {
  categoryArr: PropTypes.array.isRequired,
};

export default WCProductDetailsSection;
