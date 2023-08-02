import "./App.scss";
import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
import { books } from "./assets/Images";
import WCTitle from "./components/TItle/TItle";



function App() {
  return (
    <>
   <WCCategoryCard image={books} title="Books"/>
   <WCTitle title="Category Section" />
    </>
  );
}

export default App;
