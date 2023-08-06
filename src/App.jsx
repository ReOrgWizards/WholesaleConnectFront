import "./App.scss";
import WCHotDealsSection from "./layouts/hotDeals/hotdeals";
import { categoryArr } from "./data";
import WCFooter from "./components/footer/footer";

function App() {
  return (
    <>
      <WCHotDealsSection categoryArr={categoryArr} />
      <WCFooter />
    </>
  );
}

export default App;
