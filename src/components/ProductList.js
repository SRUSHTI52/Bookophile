import React from "react";
import ProductItem from "./ProductItem";
import "../css/ProductList.css";  

const ProductList = ({ filteredBooks }) => {
  return (
    <div className="product-list">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <ProductItem key={book.id} product={book} />
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
};

export default ProductList;
