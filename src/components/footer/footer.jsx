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
    <div className="footer__container">
      <div className="social__media__touch">
        <div>
          <p>Get connected with us on social networks.</p>
        </div>
        <div className="social__media__icons">
          <InstagramIcon className="icon" />
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
      </div>
      <hr />
      <div className="contact__info__links">
        <div className="shopify_nepal">
          <h3 className="foot__links__heading">SHOPIFY NEPAL</h3>
          <p>
            With decades of maintenance of way expertise ,
            <br />
            and experience no one knows the rail like Loram.
          </p>
        </div>
        <div className="products_list">
          <h3 className="foot__links__heading">PRODUCTS</h3>
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
        <div className="useful_links">
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
        <div className="contact_us">
          <h3 className="foot__links__heading">CONTACT</h3>
          <ul>
            <li>
              <span>
                <HomeWorkIcon className="custom-icon" />
              </span>
              <a href="#">Kathmandu, Nepal</a>
            </li>
            <li>
              <span>
                <EmailIcon />
              </span>
              <a href="#">info@example.com</a>
            </li>
            <li>
              <span>
                <PhoneIcon />
              </span>
              <a href="#">+12 345 897 89</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright__date__section">
        <p>
          ©{new Date().getFullYear()} Copyright:&nbsp;
          <a href="#">Shopify Nepal</a>
        </p>
      </div>
    </div>
  );
};

export default WCFooter;
