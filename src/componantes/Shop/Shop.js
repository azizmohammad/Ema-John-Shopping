import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';
const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products])

    const handelAddToCard = (seletedProduct) => {
        // console.log('clickd');
        let newCart = [];
        const exists = cart.find(product => product.id === seletedProduct.id);
        if (!exists) {
            seletedProduct.quantity = 1;
            newCart = [...cart, seletedProduct];
        } else {
            const rest = cart.filter(product => product.id !== seletedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(seletedProduct.id)
    }

    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCard={handelAddToCard}
                    ></Product>)
                }
            </div>

            <div className="card-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/oders'>
                        <button className="btn btn-outline btn-primary flex justify-center items-center mx-auto">Review Oders</button>
                    </Link>
                </Cart>
            </div>


        </div>
    );
};

export default Shop;