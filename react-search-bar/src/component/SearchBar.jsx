import React, {useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import searchLogo from "./../assets/scout.png";
import FavLinks from "./FavLinks";


export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch(e.target.value)
  }
  // constfetchData = (value) => {

  // }

  const handleSearchClick = () => {
    // Handle click event, for example, logging the clicked link
    
    if (search != "") {
      // Perform the search via api here
      console.log(search);
    }
};

  return (
    <>
    <img src={searchLogo} alt="Scout Logo" id="search-logo"/>
    <div className="input-wrapper">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Type to search..." onChange={handleChange} value={search} />
    </div>
    <FavLinks onClick={handleSearchClick}/>
    </>
    
  )
}
  
   