import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navbar/navBar";
import WCProductDetailPage from "./pages/productDetailPage/productDetailPage";

function App() {
  return (
    <>
      <WCNavBarSection />
      <WCProductDetailPage/>
      <WCFooter/>
    </>
  );
}

export default App;
