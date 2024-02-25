import React, { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import "./SearchResults.css";

const Home = () => {
  return (
    <div>
      <div className="search-container">
        <Search />
      </div>

      <Categories />
    </div>
  );
};

export default Home;
