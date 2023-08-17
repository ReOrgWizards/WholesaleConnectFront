import { useState } from "react";
import WCCarousel from "../../components/carousel/carousel";
import Carousel from "react-bootstrap/Carousel";
import WCProductCard from "../../components/cards/productCard/productCard";
import WCTitle from "../../components/TItle/TItle";
import WCStarRating from "../../components/starRating/starRating";
import WCSliderProvider from "../../components/slider/sliderProvider";
import { categoryArr } from "../../data";

const WCProductDetailPage = () => {
  const [showFullReviews, setShowFullReviews] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const toggleReviews = () => {
    setShowFullReviews((prevState) => !prevState);
  };
  return (
    <>
      <div className="container">
        <div className="product__details">
          <div className="row">
            <div className="col-lg-6 col-12">
              <WCCarousel>
                <Carousel.Item>
                  <img
                    className="review__img d-block w-100 "
                    src="https://fullyfilmy.in/cdn/shop/products/Verified-Introvert-T-Shirt.jpg?v=1668084171"
                    alt="this is carousal image"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="review__img d-block w-100 "
                    src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-aaa_98785c10-2a4e-4880-95ad-02da5be2f529_600x600.jpg?v=1641791315"
                    alt="this is carousal image"
                  />
                </Carousel.Item>
              </WCCarousel>
            </div>
            <div className="col-lg-6 col-12 product__model__dtl">
              <h6>BRANDE : NEW ERA MODEL : 13083919-L</h6>
              <h4>New Era NBA Miami Heat Back Body Print s T-shirt - Black</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                veniam eos suscipit magnam doloremque reprehenderit autem?
                Corrupti commodi laudantium saepe distinctio voluptatem eveniet
                est omnis dolorem perspiciatis. Molestiae, veritatis dicta.
              </p>
              <div className="price__section">
                <p>
                  Rs.<span>1200/-</span>
                </p>
              </div>
              <div className="chat__btn__wrapper">
                <button type="button" className="chat__btn">
                  CHAT IN WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="description__review__section">
          <ul>
            {toggleState ? (
              <li onClick={() => setToggleState(false)}>Description</li>
            ) : (
              <li className="product__detail__description__list">
                Description
              </li>
            )}
            {toggleState ? (
              <li className="product__detail__review__list">Reviews</li>
            ) : (
              <li onClick={() => setToggleState(true)}>Reviews</li>
            )}
          </ul>

          {toggleState ? (
            <div className="review__description">
              <h5>User Review</h5>
              <WCStarRating number={4} size="small" />
              <h6>by Laxmi</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                dicta illo,
              </p>
              <hr />

              {showFullReviews ? (
                <>
                  <WCStarRating number={4} size="small" />
                  <h6>by Saroj</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ullam dicta illo,
                  </p>
                  <hr />

                  <WCStarRating number={5} size="small" />
                  <h6>by Mamta</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ullam dicta illo,
                  </p>
                  <hr />
                  <div className="review__more__less__view">
                    <button onClick={toggleReviews}>View Less Review</button>
                  </div>
                </>
              ) : (
                <div className="review__more__less__view">
                  <button onClick={toggleReviews}>View More Review</button>
                </div>
              )}
            </div>
          ) : (
            <div className="product__description__detail">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                dicta illo,
              </p>
            </div>
          )}
        </div>
      </div>
      <WCTitle title="Related Product" />
      <WCSliderProvider>
        {categoryArr.map((category, index) => (
          <WCProductCard
            key={index}
            title={category.title}
            image={category.img}
            price={category.price}
            description={category.description}
          />
        ))}
      </WCSliderProvider>
    </>
  );
};

export default WCProductDetailPage;
