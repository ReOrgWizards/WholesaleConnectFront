import "./App.scss";
import { categoryArr } from "./data";
import WCMasteraBanner from "./components/masterBanner/masterBanner";
function App() {
  return (
    <>
      <WCMasteraBanner categoryArr={categoryArr} />
    </>
  );
}

export default App;
