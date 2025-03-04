import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";

const FloatingCart = ({ cartItems , onRemoveFromCart}) => {

    const [isOpen, setIsOpen] = useState(false);
    console.log("Cart Items:", cartItems);
  return (
    <div className="floating-cart">
       
       
        <button onClick={() => setIsOpen(!isOpen)} className="cart-button">
        <FaShoppingCart />
        <span className="cart-count">{cartItems.length}</span>{/* ✅ Cart count */}
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <h3>Shopping Cart</h3>
           {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                <span>{item.name} - ₹{item.price}</span>
                <button onClick={() => onRemoveFromCart(item.id)}>🗑️ Delete</button>
            </li>
              ))}
            </ul>
          )}
        </div>
      )}

    </div>
  );
};

export default FloatingCart;
