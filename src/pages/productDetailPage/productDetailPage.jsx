import React, { useState } from "react";
import WCAddRevieBtn from "../../components/reviewsAddBtn/reviewAddBtn";
import WCCarousel from "../../components/carousel/carousel";
import Carousel from "react-bootstrap/Carousel";
import WCProductCard from "../../components/cards/productCard/productCard";
import WCTitle from "../../components/TItle/TItle";
import WCIncrementDecrement from "../../components/incrementDecrement/incrementDecrement";
import WCStarRating from "../../components/starRating/starRating";

const WCProductDetailPage = () => {
  const [showFullReviews, setShowFullReviews] = useState(false);

  const toggleReviews = () => {
    setShowFullReviews((prevState) => !prevState);
  };
  return (
    <div className="container">
      <div className="product__details">
        <div className="row">
          <div className="col-6">
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
          <div className="col-6 product__model__dtl">
            <h6>BRANDE : NEW ERA MODEL : 13083919-L</h6>
            <h4>
              New Era NBA Miami Heat Back Body Print Men's T-shirt - Black
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
              eos suscipit magnam doloremque reprehenderit autem? Corrupti
              commodi laudantium saepe distinctio voluptatem eveniet est omnis
              dolorem perspiciatis. Molestiae, veritatis dicta.
            </p>
            <div className="product__size">
              <select id="disabledSelect" class="form-select">
                <option>Small</option>
                <option>Large</option>
                <option>extra-large</option>
              </select>
            </div>
            <div className="quantity__select">
              <p>
                Rs.<span>1200/-</span>
              </p>
              <WCIncrementDecrement />
            </div>
            <button type="button" className="addto__cart__btn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <WCTitle title="Related Image" />
      <div className="related__product">
        <WCProductCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpP28MECcQgVVGjJpeUqpjTyWyHB-3vP_AGQ&usqp=CAU"
          title="Books"
          description="Gita is one of the holy books of Hinduism."
          price="1200/-"
        />
        <WCProductCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpP28MECcQgVVGjJpeUqpjTyWyHB-3vP_AGQ&usqp=CAU"
          title="Books"
          description="Gita is one of the holy books of Hinduism."
          price="1200/-"
        />
        <WCProductCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpP28MECcQgVVGjJpeUqpjTyWyHB-3vP_AGQ&usqp=CAU"
          title="Books"
          description="Gita is one of the holy books of Hinduism."
          price="1200/-"
        />
        <WCProductCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpP28MECcQgVVGjJpeUqpjTyWyHB-3vP_AGQ&usqp=CAU"
          title="Books"
          description="Gita is one of the holy books of Hinduism."
          price="1200/-"
        />
        <WCProductCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpP28MECcQgVVGjJpeUqpjTyWyHB-3vP_AGQ&usqp=CAU"
          title="Books"
          description="Gita is one of the holy books of Hinduism."
          price="1200/-"
        />
      </div>
      <div className="description__review__section">
        <ul>
          <li>Description</li>
          <li>Reviews</li>
        </ul>
        <div className="review__add">
          <div className="rating">
            <h6>4.5</h6>
            <WCStarRating number={4} size="large" />
            <p>Based on 216 ratings</p>
          </div>
          <div className="review__add__btn">
            <WCAddRevieBtn title="Add review" />
          </div>
        </div>

        <div className="review__description">
          <h5>User Review's</h5>
          <WCStarRating number={4} size="small" />
          <h6>by Laxmi</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            dicta illo, impedit perferendis error quam id sit rem sed
            exercitationem, omnis quasi doloremque reiciendis sapiente minima
            repellendus voluptatibus cum, repellat excepturi! Minus, voluptatum?
            Consectetur esse assumenda reprehenderit non. Debitis itaque
            reiciendis iure at cupiditate et quibusdam eligendi mollitia
            corporis illum!
          </p>
          <hr />

          {showFullReviews ? (
            <>
              <WCStarRating number={4} size="small" />
              <h6>by Saroj</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                dicta illo, impedit perferendis error quam id sit rem sed
                exercitationem, omnis quasi doloremque reiciendis sapiente
                minima repellendus voluptatibus cum, repellat excepturi! Minus,
                voluptatum? Consectetur esse assumenda reprehenderit non.
                Debitis itaque reiciendis iure at cupiditate et quibusdam
                eligendi mollitia corporis illum!
              </p>
              <hr />

              <WCStarRating number={5} size="small" />
              <h6>by Mamta</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                dicta illo, impedit perferendis error quam id sit rem sed
                exercitationem, omnis quasi doloremque reiciendis sapiente
                minima repellendus voluptatibus cum, repellat excepturi! Minus,
                voluptatum? Consectetur esse assumenda reprehenderit non.
                Debitis itaque reiciendis iure at cupiditate et quibusdam
                eligendi mollitia corporis illum!
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
      </div>
    </div>
  );
};

export default WCProductDetailPage;
