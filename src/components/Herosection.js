import React from "react";
import "../css/Herosection.css";
import Navbar from "./Navbar";
import img from "../image/bckg.png";



const Herosection = () => {
  return (
    <div
      className="hero-section"
    >
    <img src={img}/>
    <div className="nav">  <Navbar/></div>
      <div className="overlay">

        <h1>Discover the Joy of Reading</h1>
        <p>Your next adventure awaits in the pages of a book.</p>
      </div>
    </div>
  );
};

export default Herosection;

