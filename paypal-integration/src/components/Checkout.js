import React from 'react'
import './Checkout.css';
import Paypalcheckoutbutton from './Paypalcheckoutbutton.js';

const Checkout = () => {
    const product = {
        description: "Learn How to build a website with react JS",
        price: 10
    };

    return (
        <div className='checkout'><h1>Paypal Checkout</h1>
            <p className='checkout-title'>
                Design and code React Paypal Checkout Procedure
            </p>
            <p className='checkout-description'>
                Learn how to build website with React JS
            </p>
            <h1 className="checkout-price">$10</h1>
            <div className='separator'></div>
            <div className='paypal'>
                <p className='checkout-title'>Pay with PAYPAL</p>
                <div className='paypal-button-container'>
                    <Paypalcheckoutbutton></Paypalcheckoutbutton>
                </div>
            </div>
        </div>
    )
}

export default Checkout