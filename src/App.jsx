import "./App.scss";
import WCCategoryCard from "./components/cards/categoryCard/categoryCard";
import { books } from "./assets/Images";
import WCTitle from "./components/TItle/TItle";
import WCProductCard from "./components/cards/productCard/productCard";

function App() {
  return (
    <>
     <WCTitle title="Category Section" />
   <WCCategoryCard image={books} title="Books"/>
  
      <WCCategoryCard image={books} title="Books" />
      <WCTitle title="Category Section" />
      <WCProductCard
        image={books}
        title="Cards & Plays"
        description="This is Card & Plays that every one must play."
        price="1200 /-"
      />
    </>
  );
}

export default App;
