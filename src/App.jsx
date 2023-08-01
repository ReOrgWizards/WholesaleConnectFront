import "./App.scss";
import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
import { books } from "./assets/Images";



function App() {
  return (
    <>
   <WCCategoryCard image={books} title="Books"/>
    </>
  );
}

export default App;
