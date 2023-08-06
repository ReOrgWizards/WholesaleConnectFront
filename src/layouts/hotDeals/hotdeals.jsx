import React from "react";
import WCTitle from "../../components/TItle/TItle";
import WCProductCard from "../../components/cards/productCard/productCard";
import WCSliderProvider from "../../components/slider/sliderProvider";

const WCHotDealsSection = ({ categoryArr }) => {
  return (
    <div className="hot__deals__container">
      <WCTitle title="Hot Deals" />
        <div className="hot__deals__cards">
        <WCSliderProvider>
          {categoryArr.map((category, index) => (
            <WCProductCard
              keys={index}
              title={category.title}
              image={category.img}
              price={category.price}
              description={category.description}
            />
          ))}
          </WCSliderProvider  >
        </div>
    
    </div>
  );
};

export default WCHotDealsSection;
