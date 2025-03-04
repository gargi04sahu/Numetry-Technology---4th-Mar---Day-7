import React, { useState } from "react";

const Filters = ({ onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [minRating, setMinRating] = useState("");

    const handleFilterChange = () => {
        onFilterChange({
            category: selectedCategory,
            priceRange,
            minRating
        });
    };

    return (
        <div className="filters">
            <h3>Filters</h3>
            
            {/* Category Filter */}
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); handleFilterChange(); }}>
                <option value="">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Beauty, Food, Toys & More">Beauty, Food, Toys & More</option>
            </select>

            {/* Price Filter */}
            <label>Price Range:</label>
            <select value={priceRange} onChange={(e) => { setPriceRange(e.target.value); handleFilterChange(); }}>
                <option value="">All</option>
                <option value="0-1000">₹0 - ₹1000</option>
                <option value="1000-5000">₹1000 - ₹5000</option>
                <option value="5000-10000">₹5000 - ₹10000</option>
                <option value="10000+">₹10000+</option>
            </select>

            {/* Rating Filter */}
            <label>Minimum Rating:</label>
            <select value={minRating} onChange={(e) => { setMinRating(e.target.value); handleFilterChange(); }}>
                <option value="">All</option>
                <option value="1">⭐ 1 & above</option>
                <option value="2">⭐ 2 & above</option>
                <option value="3">⭐ 3 & above</option>
                <option value="4">⭐ 4 & above</option>
            </select>
        </div>
    );
};

export default Filters;
