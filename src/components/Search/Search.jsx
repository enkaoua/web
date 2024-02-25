import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({ pathname: "/search", search: `?searchName=${searchText}` });
  };

  return (
    <div>
      <div>What are you looking for today?</div>
      <form onSubmit={handleSubmit}>
        <div className="navbar-search">
          <input
            name="search"
            onChange={handleChange}
            value={searchText}
          ></input>
          <SearchIcon />
        </div>
      </form>

      <p>{searchText}</p>
    </div>
  );
};

export default Search;
