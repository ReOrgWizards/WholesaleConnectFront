import "./App.scss";
import WCTitle from "./components/TItle/TItle";
import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
import WCHeadNavBar from "./components/navbar/headNavBar/headNavBar";

function App() {
  return (
    <>
      <WCTitle title="Category Section" />
      <WCCategoryCard />
      <WCHeadNavBar/>
    </>
  );
}

export default App;
