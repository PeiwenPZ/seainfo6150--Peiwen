// Checkout.jsx

import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
    const [shippingAddress, setShippingAddress] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [sameAsShipping, setSameAsShipping] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleCheckboxChange = () => {

        setSameAsShipping(prevState => !prevState);

        if (!sameAsShipping) {
            setBillingAddress(shippingAddress);
        } else {
            setBillingAddress('');
        }
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };


    const handlePlaceOrder = () => {
        // 处理下单逻辑
        console.log('Placing order...');
    };

    return (
        <form className='checkout-container'>
            <h2>Checkout</h2>
            <div className="form-section">
                <label>
                    <h3>Shipping Address:</h3>
                    <input
                        type="text"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                    />
                </label>
            </div>

            <div className="form-section">
                <label>
                    <input
                        type="checkbox"
                        checked={sameAsShipping}
                        onChange={handleCheckboxChange}
                    />
                    <h3>Billing address same as shipping address</h3>
                </label>
            </div>

            <div className="form-section">
                <label >
                    <h3>Billing Address:</h3>
                    <input
                        type="text"
                        value={billingAddress}
                        readOnly={true}
                        onChange={(e) => setBillingAddress(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-section">
                <h3>Payment Method</h3>
                <label>
                    <input
                        type="radio"
                        value="creditCard"
                        checked={selectedPaymentMethod === 'creditCard'}
                        onChange={handlePaymentMethodChange}
                    />
                    Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        value="paypal"
                        checked={selectedPaymentMethod === 'paypal'}
                        onChange={handlePaymentMethodChange}
                    />
                    PayPal
                </label>
            </div>

            <div className="form-section">
                <button onClick={handlePlaceOrder}>Place Order</button>
            </div>
        </form>
    );
};

export default Checkout;