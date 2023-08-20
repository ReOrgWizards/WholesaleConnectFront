import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navBar/navBar";
import WCRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <WCNavBarSection />
      <WCRoutes />
      <WCFooter />
    </>
  );
}

export default App;
