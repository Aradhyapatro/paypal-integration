import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Paypalcheckoutbutton = ({ product }) => {
<<<<<<< HEAD
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
=======
    const [paidFor, setPaidFor] = useState(false)
    const [err, setErr] = useState(null);

    const handleApprove = (orderID) => {
        console.log(orderID);
>>>>>>> master
        setPaidFor(true);
    }

    if (paidFor) {
<<<<<<< HEAD
        alert("Thank You for purchasing from Aradhya");
    }

    if (error) {
        alert(error);
=======
        alert("Thank you for buying from us")
    }

    if (err) {
        alert(err);
>>>>>>> master
    }

    return (
        <PayPalScriptProvider>
<<<<<<< HEAD
            <PayPalButtons onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false;
                if (hasAlreadyBoughtCourse) {
                    setError("You Already bough this course");
                    return actions.reject();
                } else {
                    return actions.resolve();
                }
            }}
=======
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
>>>>>>> master
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.description,
                                amount: {
<<<<<<< HEAD
                                    value: product.price,
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, action) => {
                    const order = await action.order.capture();
                    console.log("order", order);
=======
                                    value: product.amount
                                }
                            }
                        ]
                    })
                }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
>>>>>>> master

                    handleApprove(data.orderID);
                }}
                onCancel={() => { }}
                onError={(err) => {
<<<<<<< HEAD
                    setError(err);
                    console.log("PayPal Checkout onError", err);
=======
                    setErr(err);
>>>>>>> master
                }}
            />
        </PayPalScriptProvider>
    )
}

export default Paypalcheckoutbutton