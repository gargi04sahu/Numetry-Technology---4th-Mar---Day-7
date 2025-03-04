import React, {useState} from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import Sorting from "./Sorting";


const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);
const ProductList = ({ onAddToCart }) => {
    const [filter, setFilter] = useState({ category: "", priceRange: "", minRating: "" });
    const [sortOption, setSortOption] = useState("");
    const handleProductClick = (product) => {
        localStorage.setItem("selectedProduct", JSON.stringify(product)); // Save product data
        window.location.href = "/product-details.html"; // Redirect to details page
    };

    const dummyProducts = [
        { id: 1, name: "Smartphone", price: 15000, rating: getRandomRating(), image: "assets/products/2.jpg" },
        { id: 2, name: "Laptop", price: 50000, rating: getRandomRating(), image: "assets/products/1.jpg" },
        { id: 3, name: "Best True Wireless Headphones", price: 2999, rating: getRandomRating(), image: "assets/products/6.jpg" },
        { id: 4, name: "Smartwatch", price: 7999, rating: getRandomRating(), image: "assets/products/4.jpg" },
        { id: 5, name: "Printer", price: 14999, rating: getRandomRating(), image: "assets/products/3.jpg" },
        { id: 6, name: "Sandisk", price: 49999, rating: getRandomRating(), image: "assets/products/7.jpg" },
        { id: 7, name: "Samsung Galaxy S25", price: 2999, rating: getRandomRating(), image: "assets/products/5.jpg" },
        { id: 8, name: "Boat Smartwatch", price: 7999, rating: getRandomRating(), image: "assets/products/8.jpg" },
        { id: 9, name: "Men's T-Shirt", price: 999, rating: getRandomRating(), image: "assets/products/9.jpg" },
                { id: 10, name: "Women's Dress", price: 1999, rating: getRandomRating(), image: "assets/products/10.jpg" },
                { id: 11, name: "Men's Shirts", price: 999, rating: getRandomRating(), image: "assets/products/12.jpg" },
                { id: 12, name: "Women's Sarees", price: 1999, rating: getRandomRating(), image: "assets/products/11.jpg" },
                { id: 17, name: "Women's Crop Tops", price: 2499, rating: getRandomRating(), image: "assets/products/17.jpg" },
                { id: 18, name: "Men's Trousers", price: 1299, rating: getRandomRating(), image: "assets/products/18.jpg" },
                { id: 19, name: "Men's Jeans", price: 2499, rating: getRandomRating(), image: "assets/products/19.jpg" },
                { id: 20, name: "Women's Gowns", price: 1299, rating: getRandomRating(), image: "assets/products/20.jpg" },
                { id: 13, name: "Coffee Powder", price: 2499, rating: getRandomRating(), image: "assets/products/13.jpg" },
                { id: 14, name: "Raw Dry Fruits", price: 1299, rating: getRandomRating(), image: "assets/products/14.jpg" },
                { id: 15, name: "Liquid Matte Lipstick", price: 2499, rating: getRandomRating(),image: "assets/products/15.jpg" },
                { id: 16, name: "Wooden Toy Horse", price: 1299, rating: getRandomRating(), image: "assets/products/16.jpg" },
                { id: 21, name: "Trimmers", price: 2499, rating: getRandomRating(), image: "assets/products/21.jpg" },
                { id: 22, name: "Remote Control Toys", price: 1299, rating: getRandomRating(), image: "assets/products/22.jpg" },
                { id: 23, name: "Chocolates", price: 2499, rating: getRandomRating(), image: "assets/products/23.jpg" },
                { id: 24, name: "Raw Dry Fruits", price: 1299, rating: getRandomRating(), image: "assets/products/24.jpg" },
      ];

    const categories = [
        // {
        //     name: "Electronics",
        //     products: [
        //         { 
        //      ],
        // },
        {
            name: "Clothing",
            products: [
                
            ],
        },
        {
            name: "Beauty, Food, Toys & More",
            products: [
                
            ],
        },
    ];
    // Apply Category Filter First
    let filteredProducts = [];
    if (filter.category) {
        const category = categories.find(cat => cat.name === filter.category);
        if (category) {
            filteredProducts = category.products;
        }
    } else {
        filteredProducts = categories.flatMap(category => category.products);
    }

    // Apply Other Filters
    filteredProducts = filteredProducts.filter(product =>
        (filter.priceRange ?
            (filter.priceRange === "0-1000" && product.price <= 1000) ||
            (filter.priceRange === "1000-5000" && product.price > 1000 && product.price <= 5000) ||
            (filter.priceRange === "5000-10000" && product.price > 5000 && product.price <= 10000) ||
            (filter.priceRange === "10000+" && product.price > 10000)
            : true) &&
        (filter.minRating ? product.rating >= filter.minRating : true)
    );

    // Apply Sorting
    if (sortOption === "priceLowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "popularity") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }
        

    
    return (
        <div className="product-container">
            <div className="sidebar">
                <Filters onFilterChange={setFilter} />
                <Sorting onSortChange={setSortOption} />
            </div>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
                    ))
                ) : (
                    <p className="no-products"></p>
                )}

         {dummyProducts.map((product) => (
        <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
    </div>
        
      ))}
            </div>
        </div>
    );
};

export default ProductList;