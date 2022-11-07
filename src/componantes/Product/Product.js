import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { name, img, seller, price, ratings } = props?.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h3 className='productName text-indigo-600 font-semibold'>{name}</h3>
                <p className='text-orange-500 font-semibold mt-3'>Price: ${price} </p>
                <p className='text-orange-500 font-semibold mt-2'><small>Seller:{seller} </small></p>
                <p className='text-orange-500 font-semibold mt-2'><small>Ratings:{ratings}stars </small></p>
            </div>
            {/* <button onClick={() => props?.handelAddToCard(props?.product)} className='btn-card'>
                <p className='btn-icon'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
            <button onClick={() => props?.handelAddToCard(props?.product)} className="btn btn-outline btn-primary bg-orange-200 font-semibold flex justify-center items-center mx-auto w-full absolute bottom-0">
                Add To Cart
                <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;