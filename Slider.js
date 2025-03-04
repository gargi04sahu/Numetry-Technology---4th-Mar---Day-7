import React, { useState, useEffect } from "react";

const Slider = ({ slides = [] }) => {  // ✅ Default value ensures `slides` is never undefined
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = 3000; // 3 seconds

    useEffect(() => {
        if (!slides || slides.length === 0) return; // ✅ Prevents running interval if slides are empty

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, slideInterval);

        return () => clearInterval(interval);
    }, [slides]); // ✅ Ensuring effect runs only when `slides` changes

    if (!slides || slides.length === 0) {
        return <div></div>;  // ✅ Prevents error when `slides` is undefined
    }

    return (
        <div>
        <div className="some-containers">
            <div className="sli">
                <div class="slid"><img src="/assets/images/5.jpg" alt=" 1"/>Mobiles</div>
                <div class="slid"><img src="/assets/images/6.jpg" alt="2"/>Mens Wear</div>
                <div class="slid"><img src="/assets/images/7.jpg" alt="3"/>Womens Wear</div>
                <div class="slid"><img src="/assets/images/9.jpg" alt="4"/>Home & Furniture</div>
                <div class="slid"><img src="/assets/images/10.jpg" alt="5"/>Appliances</div>
                <div class="slid"><img src="/assets/images/11.avif" alt="6"/>Flight Booking</div>
                <div class="slid"><img src="/assets/images/12.png" alt="7"/>Toys & More</div>            
            </div>
        </div>
    
        <div class="slider-container">
        <div class="slider">
            
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
           
            
        </div>
        <button class="prev" onclick="prevSlide()">&#10094;</button>
        <button class="next" onclick="nextSlide()">&#10095;</button>
        
        <div class="dots-container">
            <span class="dot" onclick="currentSlide(0)"></span>
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>
    </div>
    );
}

export default Slider;
