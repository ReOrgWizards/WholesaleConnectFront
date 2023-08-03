import "./App.scss";
import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
import WCTitle from "./components/TItle/TItle";
// import WCSliderProvider from "./components/slider/sliderProvider";
import WCProductCard from "./components/cards/productCard/productCard";

function App() {
  return (
    <>
      <WCTitle title="Category Section" />
      <WCCategoryCard/>
      {/* <WCSliderProvider /> */}
      <WCCategoryCard image={books} title="Books" />
      <WCTitle title="Category Section" />
      <WCProductCard
        image={books}
        title="Cards & Plays"
        description="This is Card & Plays that every one must play."
        price="1200 /-"
      />
    </>
  );
}

export default App;
