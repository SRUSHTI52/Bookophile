// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../css/ProductDetails.css";
// import Navbar from "./Navbar";

// const ProductDetails = () => {
//   const location = useLocation(); 
//   const navigate = useNavigate(); 

//   const [quantity, setQuantity] = useState(1); 

//   const product = location.state?.product; 


//   if (!product) {
//     return (
//       <div className="product-details">
//         <h2>Product not found</h2>
//         <button onClick={() => navigate("/")}>Go Back to Home</button>
//       </div>
//     );
//   }

//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     if (newQuantity >= 1 && newQuantity <= 10) {
//       setQuantity(newQuantity);
//     }
//   };

//   const totalPrice = product.price * quantity; 

//   return (
//     <div >
//     <div className="back"><Navbar/></div>
//     <div className="product-details-container">


//       <div className="product-details-content">
//         <div className="image">
//           <img src={product.image} alt={product.name} />
//         </div>

//         <div className="product-info">
//           <h1 className="product-name">{product.name}</h1>
//           <p className="product-author">
//             <strong>Author:</strong> {product.author}
//           </p>
//           <p className="product-publication">
//             <strong>Publication:</strong> {product.publication}
//           </p>
//           <p className="product-category">
//             <strong>Category:</strong> {product.category}
//           </p>
//           <p className="product-description">{product.description}</p>


//           <div className="quantity-selector">
//             <label htmlFor="quantity">Quantity:</label>
//             <input
//               type="number"
//               id="quantity"
//               value={quantity}
//               min="1"
//               max="4"
//               onChange={handleQuantityChange}
//             />
//           </div>

//           <p className="total-price">
//             <strong>Price:</strong> ₹{totalPrice}
//           </p>

//           <button className="add-to-cart-btn">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";
import "../css/ProductDetails.css";
import Navbar from "./Navbar";

const ProductDetails = ({cart, setCart }) => {

  const location = useLocation(); 

  const product = location.state?.product; 


  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
    );
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    alert(`${product.name} has been added to the cart!`);
  };

  const totalPrice = product.price * quantity;

  return (
    <div>
      <div className="back">
        <Navbar cart={cart} />
      </div>
      <div className="product-details-container">
        <div className="product-details-content">
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-author">
              <strong>Author:</strong> {product.author}
            </p>
            <p className="product-publication">
              <strong>Publication:</strong> {product.publication}
            </p>
            <p className="product-category">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="product-description">{product.description}</p>

            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                max="4"
                onChange={handleQuantityChange}
              />
            </div>

            <p className="total-price">
              <strong>Price:</strong> ₹{totalPrice}
            </p>

            <button className="add-to-cart-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
