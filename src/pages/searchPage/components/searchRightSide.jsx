import Form from "react-bootstrap/Form";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import WCSmallScreenButtonNav from "./smallScreenButtonNav";
import { categoryArr } from "../../../data";
import WCProductCard from "../../../components/cards/productCard/productCard";

const WCSearchRightSide = () => {
  return (
    <div className="product__right__component">
      <div className="secound__bar__wrapper">
        <p className="search__result__stats" style={{ margin: "0px" }}>
          358 Products found
        </p>
        <div className="sort__by__wrapper">
          <p className="sort__by__text">SORT BY:</p>
          <Form.Select
            aria-label="Default select example"
            className="form__select"
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div className="search__card__wrapper row">
        {categoryArr.map((item, keys) => {
          return (
            <div className=" col-6 col-lg-3 col-md-6 " key={keys}>
              <WCProductCard
                title={item.title}
                image={item.img}
                price={item.price}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination__wrapper">
        <Stack spacing={2}>
          <Pagination count={3} size="large" color="primary" />
        </Stack>
      </div>
      <WCSmallScreenButtonNav />
    </div>
  );
};

export default WCSearchRightSide;
