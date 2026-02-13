import React from 'react';
import './Button.css'; // Assuming you have a CSS file for styles

const Button = ({ variant, children, ...props }) => {
    return (
        <button className={`button ${variant}`} {...props}>
            {children}
        </button>
    );
};

export default Button;