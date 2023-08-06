import "./App.scss";
import WCHotDealsSection from "./layouts/hotDeals/hotdeals";
// import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
// import WCTitle from "./components/TItle/TItle";
import { categoryArr } from "./data";

function App() {
  return (
    <>
      {/* <WCTitle title="Category Section" />
      <WCCategoryCard/> */}
      <WCHotDealsSection categoryArr={categoryArr} />
    </>
  );
}

export default App;
