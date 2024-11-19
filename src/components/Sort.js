import React from "react";
import "../css/Sort.css";

const Sort = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="sorting-container">
      <label htmlFor="sort">Sort by Price:</label>
      <select
        id="sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
