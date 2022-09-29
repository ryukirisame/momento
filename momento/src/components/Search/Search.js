import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";
import "./Search.css";

const Search = ({ handleSearchMoment }) => {
  return (
    <div className="search">
      <SearchIcon
        className="search-icon"
        style={{ color: grey[800] }}
      ></SearchIcon>
      <input
        onChange={(event) => {
          handleSearchMoment(event.target.value);
        }}
        type="text"
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default Search;
