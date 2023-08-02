import "./App.scss";
import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
import { books } from "./assets/Images";
import WCTitle from "./components/TItle/TItle";



function App() {
  return (
    <>
     <WCTitle title="Category Section" />
   <WCCategoryCard image={books} title="Books"/>
  
    </>
  );
}

export default App;
