import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Paypalcheckoutbutton = ({ product }) => {
    const [paidFor, setPaidFor] = useState(false)
    const [err, setErr] = useState(null);

    const handleApprove = (orderID) => {
        console.log(orderID);
        setPaidFor(true);
    }

    if (paidFor) {
        alert("Thank you for buying from us")
    }

    if (err) {
        alert(err);
    }

    return (
        <PayPalScriptProvider>
            <PayPalButtons
                onClick={(data, actions) => {
                    const hasAlreadyBoughtCourse = false;
                    if (hasAlreadyBoughtCourse) {
                        setErr("You Already bough this course");
                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}
                createOrder={(data, actions) => {
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
                onError={(err) => {
                    setErr(err);
                }}
            />
        </PayPalScriptProvider>
    )
}

export default Paypalcheckoutbutton