// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './App.css';
// import ProductList from './components/ProductList';
// import Herosection from './components/Herosection';
// import SearchBar from "./components/SearchBar";
// import CategoryFilter from './components/CategoryFilter';  
// import ProductDetails from "./components/ProductDetails";
// import booksData from "./data.js"; 

// function App() {
//   const categories = [
//     "Fiction", "Biography", "Historical Fiction", "History", "Mythology",
//     "Adventure", "Non-Fiction", "Self-Help", "Satire", "Romance"
//   ];

//   const [searchTerm, setSearchTerm] = useState(""); 
//   const [selectedCategory, setSelectedCategory] = useState("");  

//   const filteredBooks = booksData.filter((book) => {
//     const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route 
//             path="/" 
//             element={
//               <>
//                 <Herosection />
//                 <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//                 <CategoryFilter 
//                   categories={categories} 
//                   selectedCategory={selectedCategory} 
//                   setSelectedCategory={setSelectedCategory} 
//                 />
//                 <ProductList filteredBooks={filteredBooks} />
//               </>
//             } 
//           />
//           <Route 
//             path="/product/:id" 
//             element={<ProductDetails booksData={booksData} />} 
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ProductList from './components/ProductList';
import Herosection from './components/Herosection';
import SearchBar from "./components/SearchBar";
import CategoryFilter from './components/CategoryFilter';  
import ProductDetails from "./components/ProductDetails";
import Sort from './components/Sort'; 
import Cart from './components/Cart'; 
import booksData from "./data.js"; 

function App() {
  const categories = [
    "Fiction", "Biography", "Historical Fiction", "History", "Mythology",
    "Adventure", "Non-Fiction", "Self-Help", "Satire", "Romance"
  ];

  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("");  
  const [sortOrder, setSortOrder] = useState("asc"); 
  const [cart, setCart] = useState([]);

  // Filter and sort books
  const filteredBooks = booksData
    .filter((book) => {
      const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Herosection cart={cart}/>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <CategoryFilter 
                  categories={categories} 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory} 
                />
                <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <ProductList filteredBooks={filteredBooks} />
              </>
            } 
          />
          {/* <Route 
            path="/product/:id" 
            element={<ProductDetails booksData={booksData} />} 
          /> */}
           <Route
            path="/product/:id"
            element={<ProductDetails booksData={booksData} setCart={setCart} cart={cart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
