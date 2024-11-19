import React from "react";
import "../css/ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">Rs {product.price}</p>
        <Link to={`/product/${product.id}`} state={{ product }}>
        <button className="view-details-btn">View Details</button>
      </Link>
      </div>
    </div>
  );
};

export default ProductItem;
