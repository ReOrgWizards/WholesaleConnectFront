import "./App.scss";
import WCTitle from "./components/TItle/TItle";
import WCCategorySection from "./layouts/category/categorySection";
import { categoryArr } from "./data";
function App() {
  return (
    <>
      <WCTitle title="Category Section" />
      <WCCategorySection categoryArr={categoryArr} />
    </>
  );
}

export default App;
