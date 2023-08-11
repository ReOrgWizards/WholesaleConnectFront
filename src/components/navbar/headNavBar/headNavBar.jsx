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
import { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="searchbar__container">
      <input
        type="text"
        className="search__bar"
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={handleInputChange}
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
              background: "transparent",
              color: "#25d366",
              border: "none",
              outline: "none",
            }}
            className="toggle__btn"
          >
            <PersonIcon />
          </Dropdown.Toggle>
          <Dropdown.Menu className="user__dropdown__manu">
            <Dropdown.Item className="user__dropdown__items">
              <Link to="#">
                <button className="signIn__btn">Sign In</button>
              </Link>
              <Link to="#">
                <button className="register__btn">Register</button>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "transparent",
              color: "#25d366",
              border: "none",
              outline: "none",
            }}
          >
            <NavLink to="#">
              <FavoriteIcon />
            </NavLink>
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "transparent",
              color: "#25d366",
              border: "none",
              outline: "none",
            }}
          >
            <NavLink to="/cart">
              <ShoppingBagIcon />
            </NavLink>
          </Dropdown.Toggle>
        </Dropdown>
      </div>
    </div>
  );
};

export default WCHeadNavBar;
