import React from "react";

const ProductCard = ({ product, onAddToCart, onClick }) => {
    const handleClick = () => {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "/product-details.html";
      };

    return (
        <div className="product-card" onClick={handleClick}>
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Rating: ⭐ {product.rating}</p>
            <button onClick={onAddToCart} className="add-to-cart-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
        </div>
    );
};

export default ProductCard;
