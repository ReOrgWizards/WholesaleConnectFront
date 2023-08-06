import React from "react";
import { companylogo } from "../../../assets/Images";
import {
  PersonIcon,
  FavoriteIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "../../../assets/Icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, NavLink } from "react-router-dom";

const Searchbar = () => {
  return (
    <div className="searchbar__container">
      <input
        type="text"
        className="search__bar"
        placeholder="What are you looking for?"
      />
      <div className="search__icon">
        <SearchIcon />
      </div>
    </div>
  );
};

const WCHeadNavBar = () => {
  return (
    <div className="navbar__container">
      <Link to="/">
        <img src={companylogo} alt="image" className="image__logo" />
      </Link>
      <Searchbar />
      <div className="right__side__container">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#407ED2",
              color: "#407ED2",
              border: "none",
              outline: "none",
            }}
          >
            <PersonIcon
              sx={{ fontSize: 30 }}
              style={{ cursor: "pointer", color: "white" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown__menu__container">
            <Dropdown.Item disabled className="dropdown__title">
              WELCOME!
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="dropdown__items__one">
              <Link to="/login_or_register">
                <button className="signIn__btn">Sign In</button>
              </Link>
              <Link to="/login_or_register">
                <button className="register__btn">Register</button>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#407ED2",
              color: "#407ED2",
              border: "none",
              outline: "none",
            }}
          >
            <NavLink to="/wishlist">
              <FavoriteIcon
                sx={{ fontSize: 30 }}
                style={{ cursor: "pointer", color: "white" }}
              />
            </NavLink>
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#407ED2",
              color: "#407ED2",
              border: "none",
              outline: "none",
            }}
          >
            <NavLink to="/cart">
              <ShoppingBagIcon
                sx={{ fontSize: 30 }}
                style={{ cursor: "pointer", color: "white" }}
              />
            </NavLink>
          </Dropdown.Toggle>
        </Dropdown>
      </div>
    </div>
  );
};

export default WCHeadNavBar;
