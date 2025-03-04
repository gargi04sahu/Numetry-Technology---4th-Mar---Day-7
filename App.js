import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from './components/Slider'; 
import ProductList from "./components/ProductList";
import FloatingCart from "./components/FloatingCart";
import "./style.css";

const slides = [
  "/assets/images/1.jpg",
  "/assets/images/2.jpg",
  "/assets/images/3.jpg"
];



function App() {


  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
}, []);

// Save cart items to localStorage whenever cartItems change
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
};

  return (
    <div>
      <Navbar />
      <Slider />
      <Slider slides={slides} /> 

      <ProductList onAddToCart={handleAddToCart} />
      <FloatingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <Footer />
    </div>



  );
}

export default App;
