import React from "react";


import './checkout-item.style.scss';

const CheckoutItem = ({cartItem: {name,imageUrl, price, quantity}})=> (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-btn'>&#10005;</div>
    </div>
)

export default CheckoutItem;