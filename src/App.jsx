import "./App.scss";
import { categoryArr } from "./data";
import WCCollaborationSection from "./layouts/collaboration/collaboration";

function App() {
  return (
    <>
      <WCCollaborationSection categoryArr ={categoryArr }/>
    </>
  );
}

export default App;
