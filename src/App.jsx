import "./App.scss";
import WCHeadNavBar from "./components/navbar/headNavBar/headNavBar";
import WCSubNavBar from "./components/navbar/subNavBar/subNavbar";
import {navCategories } from "./data"

function App() {
  return (
    <>
      <WCHeadNavBar />
      <WCSubNavBar  navCategories={navCategories}/>
    </>
  );
}

export default App;
