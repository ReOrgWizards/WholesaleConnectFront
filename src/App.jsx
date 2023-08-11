import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCLogin from "./components/authentication/login/login";
import WCNavBarSection from "./layouts/navBar/navBar";
// import WCLandingPage from "./pages/landingpage/landingPage";

function App() {
  return (
    <>
      <WCNavBarSection />
      {/* <WCLandingPage /> */}
      <WCLogin/>
      <WCFooter/>
    </>
  );
}

export default App;
