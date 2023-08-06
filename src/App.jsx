import "./App.scss";
import { categoryArr } from "./data";
import WCHotDealsSection from "./layouts/hotDeals/hotdeals";
function App() {
  return (
    <>
      <WCHotDealsSection categoryArr={categoryArr} />
    </>
  );
}

export default App;
