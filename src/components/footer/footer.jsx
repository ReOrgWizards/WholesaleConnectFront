import { Link } from "react-router-dom";
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
            <h3>Wholesale Connect</h3>
            <p>
              With decades of maintenance of way expertise,and experience no one
              knows the rail like Loram.no one knows the rail like Loram.
            </p>
          </div>
          <div className="footer__menu">
            <h3>PRODUCTS</h3>
            <ul>
              <li>
                <Link to="/category">Category Page</Link>
              </li>
              <li>
                <Link to="/blog-detail">Blog Page</Link>
              </li>
              <li>
                <Link to="/cart">Cart Page</Link>
              </li>
              <li>
                <Link to="/login">Login & Register</Link>
              </li>
            </ul>
          </div>
          <div className="footer__menu">
            <h3 className="foot__links__heading">USEFUL LINKS</h3>
            <ul>
              <li>
                <Link to="/about-us">About US</Link>
              </li>
              <li>
                <Link to="/product-detail">Product Detail</Link>
              </li>
              <li>
                <Link to="/search">Search Page</Link>
              </li>
              <li>
                <Link to="#">Helps section</Link>
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
                  <PhoneIcon />
                  +12 345 897 89
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
