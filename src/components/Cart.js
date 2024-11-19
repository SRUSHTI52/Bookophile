import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Cart.css";
import Navbar from "./Navbar";

const Cart = ({ cart }) => {

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <div className="back">
    <Navbar cart={cart} />
  </div>
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="cart-image"  src={item.image} alt={item.name} />
              <div className="details">
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2>Total Amount: ₹{totalAmount}</h2>
    </div>
    </>
  );
};

export default Cart;
