import React, { useEffect, useState } from "react";
import Slider from "../components/Slider/Slider";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import axios from "axios";
import "./SearchResults.css";
import { useQuery } from "react-query";

const Home = () => {
  const fetchData = () => {};

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
