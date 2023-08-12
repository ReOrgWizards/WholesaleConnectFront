import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navBar/navBar";
import WCAuthLoginRegistration from "./layouts/authentication/authLoginRegistration";

function App() {
  return (
    <>
      <WCNavBarSection />
      {/* <WCLandingPage /> */}
      <WCAuthLoginRegistration />
      <WCFooter />
    </>
  );
}

export default App;
