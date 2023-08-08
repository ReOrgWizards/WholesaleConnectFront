import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navbar/navBar";
import WCLandingPage from "./pages/landingpage/landingPage";

function App() {
  return (
    <>
      <WCNavBarSection />
      <WCLandingPage />
      <WCFooter/>
    </>
  );
}

export default App;
