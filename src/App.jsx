import "./App.scss";
// import WCTitle from "./components/TItle/TItle";
// import WCCategorySection from "./layouts/category/categorySection";
import { categoryArr } from "./data";
import WCHotDealsSection from "./layouts/hotDeals/hotdeals";
function App() {
  return (
    <>
      {/* <WCTitle title="Category Section" /> */}
      {/* <WCCategorySection categoryArr={categoryArr} /> */}
      <WCHotDealsSection categoryArr ={categoryArr }/>

    </>
  );
}

export default App;
