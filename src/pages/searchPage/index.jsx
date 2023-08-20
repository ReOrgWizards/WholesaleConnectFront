import WCTitle from "../../components/TItle/TItle";
import WCSearchLeftSide from "./components/searchLeftSide";
import WCSearchRightSide from "./components/searchRightSide";

const ProductSearchPage = () => {
  return (
    <>
      <WCTitle title={"You searched for T shirt"} />
      <div className="product__detail__wrapper">
        <WCSearchLeftSide />
        <WCSearchRightSide />
      </div>
    </>
  );
};
 
export default ProductSearchPage;
