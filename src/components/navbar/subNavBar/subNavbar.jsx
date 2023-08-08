import React, { useState } from "react";
import { SearchIcon } from "../../../assets/Icons";
import PropTypes from "prop-types";

const WCSubNavBar = ({ navCategories }) => {
  const [hoverShowData, setHoverShowData] = useState(null);
  return (
    <>
      <div className="sub__menu__container">
        <div className="sub__menu">
          <ul>
            {navCategories.map((get, keys) => {
              return (
                <li
                  onMouseEnter={() => setHoverShowData(get)}
                  onMouseLeave={() => setHoverShowData(null)}
                >
                  <p>{get?.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {hoverShowData && (
        <div
          className="mega__menu__container"
          onMouseEnter={() => setHoverShowData(hoverShowData)}
          onMouseLeave={() => setHoverShowData(null)}
        >
          <div className="mega__menu">
            <div className="row">
              <div className="col-2">
                <div className="mega__menu__first">
                  <h5>{hoverShowData?.name}</h5>
                  <ul>
                    {hoverShowData?.navCategories?.map((get, keys) => {
                      return (
                        <li>
                          <p>{get?.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div className="mega__menu__first">
                  <h5>CATEGORY</h5>
                  <ul>
                    <li>
                      <p>Sub Category 1</p>
                    </li>
                    <li>
                      <p>Sub Category 2</p>
                    </li>
                    <li>
                      <p>Sub Category 3</p>
                    </li>
                    <li>
                      <p>Sub Category 4</p>
                    </li>
                    <li>
                      <p>Sub Category 5</p>
                    </li>
                    <li>
                      <p>Sub Category 6</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="mega__menu__third">
                  <h5>TOP BRANDS</h5>
                  <div className="mega__menu__brands">
                  {navCategories.map((navData, keys) =>(
                    <img
                      src={navData.brand}
                      alt="images"
                    />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="mega__menu__forth">
                  <h5>POPULAR PICKS</h5>
                  <div className="maga__popular">
                    <div className="mega__popular__picks">
                      <img
                        src="https://media.vogue.co.uk/photos/62c45cb547517a27cb1e505e/2:3/w_1920,c_limit/00003-gucci-fall-22-ready-to-wear-milan-credit-gorunway.jpg"
                        alt="popular"
                      />
                      <p>
                        Chosen from the best and best is solution for
                        everything.
                      </p>
                    </div>
                    <div className="mega__popular__picks">
                      <img
                        src="https://media.vogue.co.uk/photos/62c45cb547517a27cb1e505e/2:3/w_1920,c_limit/00003-gucci-fall-22-ready-to-wear-milan-credit-gorunway.jpg"
                        alt="popular"
                      />
                      <p>
                        Chosen from the best and best is solution for
                        everything.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="search__bar__menu">
        <input
          type="text"
          className="search__bar"
          placeholder="What are you looking for?"
        />
        <div className="search__icon">
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

WCSubNavBar.propTypes = {
  navCategories: PropTypes.array.isRequired,
};

export default WCSubNavBar;
