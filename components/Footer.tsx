import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <div>
                <h4>Contact Us</h4>
                <p>Email: contact@panto-furniture.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div>
                <h4>Links</h4>
                <a href="/privacy-policy">Privacy Policy</a> | 
                <a href="/terms-of-service">Terms of Service</a>
            </div>
            <div>
                <h4>Follow Us</h4>
                <a href="https://facebook.com/pantofurniture">Facebook</a> | 
                <a href="https://twitter.com/pantofurniture">Twitter</a> | 
                <a href="https://instagram.com/pantofurniture">Instagram</a>
            </div>
            <div>
                <p>&copy; 2026 Panto Furniture</p>
            </div>
        </footer>
    );
};

export default Footer;