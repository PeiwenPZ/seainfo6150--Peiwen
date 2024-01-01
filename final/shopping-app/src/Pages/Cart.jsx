import React from 'react';
import './Cart.css';


function Cart({ cartItems }) {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + price;
        }, 0);
    };


    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {cartItems && cartItems.length > 0 ? (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="item">
                                <div className="item-info">
                                    <p className="item-name">{item.title}</p>
                                    <p className="item-price">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total-section">
                        <p className="total-title">Total:</p>
                        <p className="total-amount">${calculateTotal()}</p>
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    )
};

export default Cart;

