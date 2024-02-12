import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigation } from "react-router-dom";
import Products from "../components/ProductsCatalogue/Products";
import axios from "axios";
import Search from "../components/Search/Search";
import BrowseFilter from "../components/Browsing/BrowseFilter";

const SearchResults = (props) => {
  // rename search to query_params (search key from navigate)
  const { search: searchQuery } = useLocation();
  const [queryFilters, setQueryFilters] = useState({});

  const [backendProducts, setBackendProducts] = useState([]);

  // grab all data from backend that matches search that was inputted before coming to this page
  const getSetData = async () => {
    const res = await fetch(`http://localhost:3030/api/products${searchQuery}`);
    const data = await res.json();
    setBackendProducts(data);
  };
  useEffect(() => {
    getSetData();
  }, [searchQuery]);

  // add query upon change of filter
  const filterProducts = (filter) => {
    /*     const query = new URLSearchParams(searchQuery);
    for (const key in filter) {
      query.set(key, filter[key]);
    }
    const new_query_params = query.toString();
    // navigate to new url with new query params
    useNavigation().navigate({
      pathname: "/search",
      search: `?${new_query_params}`,
    }); */
  };

  return (
    <>
      <div>
        <Search />
      </div>

      <div>SearchResults </div>
      <Products products={backendProducts} />

      {/* <div>
        <BrowseFilter onFilterChange={filterProducts} />
      </div> */}
    </>
  );
};

export default SearchResults;
