import React, { useEffect, useState } from "react";
import "./BrowseFilter.css";
import { Slider } from "@mui/material";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Search from "../Search/Search";

const BrowseFilter = (props) => {
  const { onFilterChange, filterObject } = props;
  const [filter, setFilter] = useState(filterObject || { price: 100 });
  const [categories, setCategories] = useState([]);

  // get categories
  const getCategories = async () => {
    const res = await fetch("http://localhost:3030/api/categories");
    const cats = await res.json();
    setCategories(cats);
    console.log({ cats });
  };

  const listCategories = () => {
    return categories.map((category) => (
      <option key={category.name} value={category.name}>
        {category.name}
      </option>
    ));
  };

  useEffect(() => {
    getCategories();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ filter });
    onFilterChange(filter);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log({ name, value, type, checked });
    setFilter(() => {
      return {
        ...filter,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="browse-filter-container">
      <form>
        <div>
          <Search />
        </div>
        category:
        <select onChange={handleChange} name="categoryNames">
          {categories.length > 0 ? listCategories() : <p>loading</p>}
        </select>
        {/* <Slider></Slider> */}
        "price" in filter? <p>{filter["price"]}</p>:<p>nada</p>
        {/*       <input type="range" min="0" max="100" value="50" steps="1" /> */}
        <input
          name="price"
          onChange={handleChange}
          type="range"
          min="0"
          max="100"
          defaultValue="100"
        ></input>
        <button onClick={handleSubmit}>filter</button>
      </form>
    </div>
  );
};

export default BrowseFilter;
