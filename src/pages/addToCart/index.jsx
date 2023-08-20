import WCTitle from "../../components/TItle/TItle";
import { categoryArr } from "../../data";

const WCAddToCartPage = () => {
  return (
    <div className="add__to__cart__container">
      <WCTitle title="Add To Cart" />
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="cart__title__container">
                  <th>IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>UNIT PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {categoryArr.map((get, keys) => {
                  return (
                    <tr key={keys}>
                      <td>
                        <div className="add__to__cart__img">
                          <img src={get.brand_img} alt={get.title} />
                        </div>
                      </td>
                      <td>
                        <p className="cart__name">{get.title}</p>
                      </td>
                      <td>
                        <p className="cart__name">{get.price}</p>
                      </td>
                      <td>
                        <div className="cart__quantity__container d-flex gap-2">
                          <button className="cart__quantity">-</button>
                          <p className="cart__name">0</p>
                          <button className="cart__quantity">+</button>
                        </div>
                      </td>
                      <td>
                        <p className="cart__name">Rs 12000 /-</p>
                      </td>
                      <td>
                        <div className="cart__icon__container">
                          <span className="edit__icon">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </span>
                          <span className="delete__icon">
                            <i className="fa-solid fa-trash"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cart__btn__container">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default WCAddToCartPage;
