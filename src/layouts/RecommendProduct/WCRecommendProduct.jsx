import PropTypes from "prop-types";
import WCSliderProvider from "../../components/slider/sliderProvider";
import WCProductCard from "../../components/cards/productCard/productCard";
import WCTitle from "../../components/TItle/TItle";

const WCRecommendProduct = ({ categoryArr }) => {
  return (
    <>
      <WCTitle title="Recommend Product" />
      <WCSliderProvider>
        {categoryArr?.map((category, id) => (
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

WCRecommendProduct.propTypes = {
  categoryArr: PropTypes.array,
};

export default WCRecommendProduct;
