import React from "react";
import '../css/SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for books, authors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;
