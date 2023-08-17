import React from "react";
import WCTitle from "../../components/TItle/TItle";
import { Link } from "react-router-dom";

const WCCategoryDetailPage = () => {
  return (
    <div className="container">
      <div className="category__detail__wrapper">
        <WCTitle title="Category" />
        <div className="category__description">
          <p>
            Discover the latest Apple Products in Qatar. Whether you’re looking
            for the newest iPhone, Apple Watch, Mac book, AirPods, or Apple TV,
            you will certainly find it here in our latest models. Shop the
            latest iPhone 14 range and enjoy 5G connectivity and blazing fast
            speed.
          </p>
          <Link to="#">
            <button type="button">View all Category</button>
          </Link>
        </div>
        <div className="clicked__category__images">
          <img
            src="https://images.unsplash.com/photo-1678524493115-cc22b4789d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=937&q=80"
            alt="list of the category images are here"
          />
        </div>
      </div>
    </div>
  );
};

export default WCCategoryDetailPage;
