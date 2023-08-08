import "./App.scss";
import WCMasteraBanner from "./components/masterBanner/masterBanner";
import WCHeadNavBar from "./components/navbar/headNavBar/headNavBar";
import WCSubNavBar from "./components/navbar/subNavBar/subNavbar";
import {navCategories,categoryArr } from "./data"


function App() {
  return (
    <>
      <WCHeadNavBar />
      <WCSubNavBar  navCategories={navCategories}/>
      <WCMasteraBanner categoryArr={categoryArr}/>
    </>
  );
}

export default App;
