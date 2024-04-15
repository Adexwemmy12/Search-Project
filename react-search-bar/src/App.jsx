import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./App.css";
import { SearchBar } from './component/SearchBar.jsx'
import Nav from './component/Nav.jsx';

function App() {
  
  return (
    <div className="App">
      <Nav />
      <div className="search-bar-container">
         <SearchBar />

      </div>

      </div>
  );
}


export default App;