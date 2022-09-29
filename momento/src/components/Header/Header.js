import Search from "../Search/Search";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { grey } from "@material-ui/core/colors";
import "./Header.css";

const Header = ({ handleToggleDarkMode, handleSearchMoment, darkMode }) => {
  return (
    <div className={`${darkMode && "dark-mode-header"} header`}>
      <h1 className="logo">Momento</h1>
      <div className="search-container">
        <Search handleSearchMoment={handleSearchMoment} />
      </div>

      <button
        onClick={() => handleToggleDarkMode((prev) => !prev)}
        className={`${darkMode && "dark-mode-activated"} dark-mode-icon`}
      >
        <Brightness2Icon style={{ color: grey[900] }} />
      </button>
    </div>
  );
};

export default Header;
