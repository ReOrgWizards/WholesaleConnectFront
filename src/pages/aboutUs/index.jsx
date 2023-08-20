import WCTitle from "../../components/TItle/TItle";

const WCAboutUs = () => {
  return (
    <div className="about__us__wrapper">
      <div className="about__us__img__wrapper">
        <img
          src="https://t3.ftcdn.net/jpg/00/63/13/38/240_F_63133806_lIp5gzdcAkxfEyPmeyTNy9E6RzUv9wZk.jpg"
          alt=""
        />
      </div>
      <div className="container">
        <WCTitle title="About Us" />
        <div className="about__us__info__wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            culpa harum, porro eaque itaque architecto. Possimus ipsa dolor
            dolores neque beatae cupiditate placeat quo saepe qui voluptas
            inventore minima, asperiores quaerat cumque ratione sed, repellendus
            in reiciendis quasi enim laudantium id. Ab maxime, voluptate
            suscipit voluptatum assumenda officia doloremque expedita molestiae,
            reprehenderit fugiat impedit est. <br /> <br />
            Repellendus doloremque, eos placeat distinctio aut alias autem,
            culpa unde excepturi quae, iusto quaerat. Et quod veniam debitis
            adipisci, ipsam nulla qui quaerat veritatis optio repellat quas
            ipsa, quis, necessitatibus sapiente quidem amet nihil omnis tempore!
            Saepe molestias quis excepturi nostrum sit perspiciatis repudiandae
            reprehenderit.
          </p>
        </div>
        <div className="about__us__content__wrapper">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 ">
              <div className="about__us__content bg__white">
                <h3>Our Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis atque incidunt non quas veritatis, ratione adipisci
                  iusto deserunt perferendis. Cumque!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 ">
              <div className="about__us__content bg__soft__green">
                <h3>Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis atque incidunt non quas veritatis, ratione adipisci
                  iusto deserunt perferendis. Cumque!
                </p>
              </div>
            </div>
          </div>
          <WCTitle title="Our Values" />
          <div className="about__us__values__wrapper">
            <p className="about__us__values__info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui
              ipsa, dolores odit omnis a repellat? Ab, quibusdam ut, assumenda
              quaerat vitae atque voluptatum unde modi dicta ipsa in iusto earum
              libero, amet nihil aliquid. Quasi modi maiores fuga unde?
            </p>
            <div className="about__us__values__section">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-12">
                  <div className="about__us__values__card">
                    <p className="about__us__card__icon">
                      <i className="fa-solid fa-truck"></i>
                    </p>
                    <div className="about__us__values__card__title">
                      <h3>Free Shipping</h3>
                      <p>All orders over Rs 1000.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-12">
                  <div className="about__us__values__card">
                    <p className="about__us__card__icon">
                      <i className="fa-solid fa-shield-halved"></i>
                    </p>
                    <div className="about__us__values__card__title">
                      <h3>100% Privacy</h3>
                      <p>Your Privacy is concerned.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-12">
                  <div className="about__us__values__card">
                    <p className="about__us__card__icon">
                      <i className="fa-solid fa-share"></i>
                    </p>
                    <div className="about__us__values__card__title">
                      <h3>Wholesale Distributor</h3>
                      <p>To Wholeseller for Wholeseller.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__us__queries__wrapper">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="about__us__queries__left">
                  <h3>Find Your Product Distributor</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit odit est tempore, molestiae quaerat earum.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="about__us__queries__right">
                  <button className="queries__btn">
                    Have Queries? Call Us
                  </button>
                  <button className="check__btn">Check Categories</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCAboutUs;
