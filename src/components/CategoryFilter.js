
import React from "react";
import '../css/CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-button ${selectedCategory === category ? "active" : ""}`}
          onClick={() => setSelectedCategory(category === selectedCategory ? "" : category)} 
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
