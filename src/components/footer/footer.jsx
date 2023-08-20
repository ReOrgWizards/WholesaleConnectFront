import React from "react";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  EmailIcon,
  PhoneIcon,
  HomeWorkIcon,
} from "../../assets/Icons";

const WCFooter = () => {
  return (
    <div className="container">
    <div className="footer__container">
      <div className="social__media__wrapper">
        <div>
          <p>Get connected with us on social networks.</p>
        </div>
        <div className="social__media__icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
      <hr />
      <div className="footer__menu__wrapper">
        <div className="footer__menu__header">
          <h3>SHOPIFY NEPAL</h3>
          <p>
            With decades of maintenance of way expertise,and experience 
            no one knows the rail like Loram.no one knows the rail like Loram.
          </p>
        </div>
        <div className="footer__menu">
          <h3>PRODUCTS</h3>
          <ul>
            <li>
              <a href="#">Laptops</a>
            </li>
            <li>
              <a href="#">Mobile Phone</a>
            </li>
            <li>
              <a href="#">Dell Laptop</a>
            </li>
            <li>
              <a href="#">React & Laravel</a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <h3 className="foot__links__heading">USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="#">Pricing list</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Most orders</a>
            </li>
            <li>
              <a href="#">Helps section</a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <h3 className="foot__links__heading">CONTACT</h3>
          <ul>
            <li>
              <a href="#">
                <HomeWorkIcon /> Kathmandu, Nepal
              </a>
            </li>
            <li>
              <a href="#">
                <EmailIcon />
                info@example.com
              </a>
            </li>
            <li>
              <a href="#">
                <PhoneIcon/>+12 345 897 89
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright__date__wrapper">
        <p>
          ©{new Date().getFullYear()} Copyright:&nbsp;
          <a href="#">Shopify Nepal</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default WCFooter;
