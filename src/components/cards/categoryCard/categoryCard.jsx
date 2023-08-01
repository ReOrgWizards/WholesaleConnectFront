import React from "react";




const WCCategoryCard = ({ image, title }) => (
  <div className="category__card__container">
    <div className="category__card__img__container">
      <img src={image} alt="category" />
    </div>
    <p>{title}</p>
  </div>
);

export default WCCategoryCard;
