import "./App.scss";
import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
import WCTitle from "./components/TItle/TItle";
// import WCSliderProvider from "./components/slider/sliderProvider";

function App() {
  return (
    <>
      <WCTitle title="Category Section" />
      <WCCategoryCard/>
      {/* <WCSliderProvider /> */}
    </>
  );
}

export default App;
