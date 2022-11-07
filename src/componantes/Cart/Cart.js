import React from 'react';

const Cart = (props) => {
    const { cart, clearCart, children } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className=' sticky top-0'>
            <h4 className='text-indigo-500 text-xl font-bold mb-6'>Order Summary</h4>
            <p className='text-green-500 text-xl font-semibold mb-3'>Selected Items: {quantity}</p>
            <p className='text-green-500 text-xl font-semibold mb-3'>Total Prcie: ${total} </p>
            <p className='text-green-500 text-xl font-semibold mb-3'>Total Shipping: ${shipping} </p>
            <p className='text-green-500 text-xl font-semibold mb-3'>Tax: ${tax} </p>
            <p className='text-green-500 text-xl font-semibold mb-6' ><h2>Grand Total: ${grandTotal.toFixed(2)} </h2></p>
            {/* <button onClick={clearCart} className="btn btn-success text-white flex justify-center items-center m-auto mb-6">Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;