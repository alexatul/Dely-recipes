import "./Search.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useSpring, config, animated } from "react-spring";

function Search({ recipesData }) {
  const [isSearchBarMobile, setIsSearchBarMobile] = useState(false);

  const toggleSearchBar = (event) => {
    setIsSearchBarMobile((current) => !current);
  };

  const [filteredSearch, setFilteredSearch] = useState([]);
  const [searchEntered, setSearchEntered] = useState("");

  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: {
      opacity: isSearchBarMobile ? 1 : 0,
    },
  });

  const handleSearch = (event) => {
    const searchItem = event.target.value;

    setSearchEntered(searchItem);

    const newSearch = recipesData.filter((value) => {
      return value.title.toLowerCase().includes(searchItem.toLowerCase());
    });

    if (searchItem === "") {
      setFilteredSearch([]);
    } else {
      setFilteredSearch(newSearch);
    }
  };

  const clearInput = () => {
    setFilteredSearch([]);
    setSearchEntered("");
  };

  return (
    <div className="search-container">
      <div className="search-button-mobile">
        <button className="mobile-icon-search" onClick={toggleSearchBar}>
          {!isSearchBarMobile && filteredSearch.length === 0 ? (
            <BiSearch title="Cauta" />
          ) : (
            <MdClose className="close-search" onClick={clearInput} />
          )}{" "}
        </button>{" "}
      </div>
      <animated.div style={isSearchBarMobile ? fadeStyles : null}>
        <div className={isSearchBarMobile ? "search-bar-mobile" : "search-bar"}>
          <TextField
            sx={{
              "& .MuiInputLabel-root": { color: "#e4c873" },
              "& label.Mui-focused": {
                color: "#e4c873",
              },
            }}
            className="textfield"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Cauta"
            size="small"
            value={searchEntered}
            onChange={handleSearch}
          />
          <div
            className={
              isSearchBarMobile ? "button-search-mobile" : "button-search"
            }
          >
            {filteredSearch.length === 0 ? (
              <BiSearch title="Cauta" />
            ) : (
              <MdClose className="close-search" onClick={clearInput} />
            )}
          </div>
        </div>
      </animated.div>

      {filteredSearch.length !== 0 && (
        <div
          className={
            isSearchBarMobile
              ? "search-result-container-mobile"
              : "search-result-container"
          }
        >
          {filteredSearch.slice(0, 10).map((recipe, key) => {
            return (
              <div className="search-result">
                <Link
                  className="search-item"
                  to={`/sweets/${recipe.title}`}
                  onClick={clearInput && toggleSearchBar}
                >
                  <img src={recipe.image} alt={recipe.image} />
                </Link>
                <Link
                  className="search-item"
                  to={`/sweets/${recipe.title}`}
                  onClick={clearInput && toggleSearchBar}
                >
                  {recipe.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
