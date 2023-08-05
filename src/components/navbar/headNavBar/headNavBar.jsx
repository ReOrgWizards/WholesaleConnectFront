import { SearchIcon } from "../../../assets/Icons";

const WCNavSearchBar = () => {
  return (
    <div className="searchbar__container">
      <input
        type="text"
        className="search__bar"
        placeholder="What are you looking for?"
      />
      <div className="search__icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default WCNavSearchBar;
