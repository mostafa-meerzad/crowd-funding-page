import React from 'react';

function Product({name, price, desc, amountLeft, callback}) {
    return (
        <div className={amountLeft === 0 ? "product disable": "product"}>
            <p className="product__name">{name}</p>
            <p className="product__price">Pledge ${price} or more</p>
            <br/>
            <p className="product__desc">{desc}</p>
            <br/>
            <p className="product__left  product__left--value">{amountLeft} <span className={"product__left"}>left</span></p>
            <button className="product__btn btn" onClick={callback}>Select Reward</button>
        </div>
    );
}

export default Product;