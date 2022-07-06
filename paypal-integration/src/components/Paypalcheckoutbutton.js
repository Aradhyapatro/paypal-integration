import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Paypalcheckoutbutton = ({ product }) => {
    const handleApprove = (orderID) => {
        console.log(orderID);
    }


    return (
        <PayPalScriptProvider>
            <PayPalButtons createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.amount
                            }
                        }
                    ]
                })
            }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);

                    handleApprove(data.orderID);
                }}

                onCancel={() => { }}
                onError={() => { }}
            />
        </PayPalScriptProvider>
    )
}

export default Paypalcheckoutbutton