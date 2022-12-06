import React from 'react';
import {motion} from "framer-motion";
import {AnimatedAmount} from "../AnimatedAmount.jsx";


function Product({name, price, desc, amountLeft, callback}) {
    return (
        <div className={amountLeft === 0 ? "product disable": "product"}>
            <h3 className="product__name">{name}</h3>
            <p className="product__price">Pledge $<AnimatedAmount from={0} to={price}/> or more</p>
            <br/>
            <p className="product__desc">{desc}</p>
            <br/>
            <h4 className="product__left  product__left--value"><AnimatedAmount from={300} to={amountLeft}/> <span className={"product__left"}>left</span></h4>
            <motion.button whileTap={{scale:.95}} className="product__btn" onClick={callback}>{amountLeft ? "Select Reward": "out of stock"}</motion.button>


        </div>
    );
}

export default Product;