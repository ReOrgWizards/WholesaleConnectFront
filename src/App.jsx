import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navbar/navBar";
import WCCategoryDetailPage from "./pages/categoryDetailPage/categoryDetailPage";
import WCLandingPage from "./pages/landingpage/landingPage";

function App() {
  return (
    <>
      <WCNavBarSection />
      {/* <WCLandingPage/> */}
      <WCCategoryDetailPage/>
      <WCFooter/>
     
    </>
  );
}

export default App;
