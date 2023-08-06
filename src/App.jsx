import "./App.scss";
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
