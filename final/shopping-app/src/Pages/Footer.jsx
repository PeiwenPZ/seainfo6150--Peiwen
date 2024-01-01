// Footer.jsx

import React from 'react';
import './Footer.css';
import Home from './Home.jsx';
import Checkout from './Checkout';
import Sale from './Sale';
import Cart from './Cart';

function Footer({ handlePageChange }) {
    const handleClick = (page) => {
        handlePageChange(page);
    };
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <a href="#" onClick={() => handleClick('home')}>Home</a>
                <a href="#" onClick={() => handleClick('sale')}>Sale</a>
                <a href="#" onClick={() => handleClick('cart')}>Cart</a>

            </div>
            <p>&copy; 2023 Your BookShop. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
