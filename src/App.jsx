import "./App.scss";
import WCColloborationSection from "./layouts/colloboration/colloboration";
// import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
// import WCTitle from "./components/TItle/TItle";
import { categoryArr } from "./data";

function App() {
  return (
    <>
      {/* <WCTitle title="Category Section" />
      <WCCategoryCard/> */}
      <WCColloborationSection categoryArr={categoryArr} />
    </>
  );
}

export default App;
