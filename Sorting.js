import React from "react";

const Sorting = ({ onSortChange }) => {
    return (
        <div className="sorting">
            <label>Sort By:</label>
            <select onChange={(e) => onSortChange(e.target.value)}>
                <option value="">Default</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="popularity">Popularity (Ratings)</option>
            </select>
        </div>
    );
};

export default Sorting;
