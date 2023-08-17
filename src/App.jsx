import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navbar/navBar";
import WCRoutes from "./routes/Routes";
import WCProductDetailPage from "./pages/productDetailPage/productDetailPage";

function App() {
  return (
    <>
      <WCNavBarSection />
      <WCRoutes/>
      <WCFooter />
      <WCProductDetailPage/>
      <WCFooter/>
    </>
  );
}

export default App;
