import "./App.scss";
import WCAddBannerSection from "./layouts/addBanner/addBanner";
import { categoryArr } from "./data";
import WCMasterBannerSection from "./layouts/masterBanner/masterBanner";
function App() {
  return (
    <>
      <WCAddBannerSection categoryArr={categoryArr} />
      <WCMasterBannerSection categoryArr={categoryArr} />
    </>
  );
}

export default App;
