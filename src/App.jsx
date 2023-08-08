import "./App.scss";
import WCMasteraBanner from "./components/masterBanner/masterBanner";
import WCAddBannerSection from "./layouts/addBanner/addBanner";
import { categoryArr } from "./data";
function App() {
  return (
    <>
      <WCMasteraBanner categoryArr={categoryArr} />
      <WCAddBannerSection categoryArr={categoryArr} />
    </>
  );
}

export default App;
