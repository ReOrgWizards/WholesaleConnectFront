import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navbar/navBar";
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
