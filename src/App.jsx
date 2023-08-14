import "./App.scss";
import WCFooter from "./components/footer/footer";
import WCNavBarSection from "./layouts/navbar/navBar";
import WCCategoryDetailPage from "./pages/categoryDetailPage/categoryDetailPage";

function App() {
  return (
    <>
      <WCNavBarSection />
      <WCCategoryDetailPage />
      <WCFooter />
    </>
  );
}

export default App;
