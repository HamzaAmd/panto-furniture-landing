import React from 'react';
import './HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-banner">
                <h1>Your Dream Furniture Awaits</h1>
                <p>Discover the perfect pieces to elevate your living space.</p>
                <button className="cta-button">Shop Now</button>
            </div>
        </div>
    );
};

export default HeroSection;