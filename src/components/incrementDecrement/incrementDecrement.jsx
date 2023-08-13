import React, { useState } from "react";
import {RemoveIcon,AddIcon } from '../../assets/Icons';

const WCIncrementDecrement = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product_quantity_btn">
      <button className="quantity_btn" onClick={handleDecrement}><RemoveIcon/></button>
      <button className="product_quantity">{quantity}</button>
      <button className="quantity_btn" onClick={handleIncrement}><AddIcon/></button>
    </div>
  );
};

export default WCIncrementDecrement;

