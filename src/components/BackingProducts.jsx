import React, { useContext, useId, useState } from "react";
import { Indicator, MenuClose, Dollar, Logo } from "../icons";
import { motion } from "framer-motion";
import { AnimatedAmount } from "../AnimatedAmount.jsx";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import { ProductsContext } from "../App";

// import 'react-accessible-accordion/dist/fancy-example.css';
function BackingProducts({ backingItems }) {
  const { setIsCoverShowing, setIsBackingProductsShowing } =
    useContext(ProductsContext);

  const [reward, setReward] = useState(0);
  const handleReward = (e) => {
    setReward(e.target.value);
  };
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={"backing-products"}
    >
      <h2 className="backing-products__title">Back this project</h2>

      <motion.div
        onClick={() => {
          setIsCoverShowing(false);
          setIsBackingProductsShowing(false);
          console.log("testing close icon");
        }}
        className={"backing-products__close"}
        whileTap={{ scale: 0.8 }}
      >
        <MenuClose />
      </motion.div>

      <p className="backing-products__desc">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      <Accordion allowZeroExpanded={true}>
        <AccordionItem
          activeClassName="backing-products__product backing-products__product--active"
          className={"backing-products__product"}
        >
          <AccordionItemButton className="backing-products__product-overview">
            <Indicator />
            <h3 className="backing-products__product-name">
              Pledge with no reward
            </h3>

            <p className="backing-products__product-desc">
              {" "}
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </AccordionItemButton>

          <AccordionItemPanel className="backing-products__product-pricing">
            <label
              htmlFor={"pledge-amount"}
              className="backing-products__product-label"
            >
              Enter your pledge
            </label>
            <div className="backing-products__product-price-to-pay">
              <Dollar />
             <input
                id={"pledge-amount"}
                min={0}
                type="number"
                name="pledgeAmount"
                onChange={handleReward}
                value={reward}
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="backing-products__product-continue"
            >
              {"continue"}
            </motion.button>
          </AccordionItemPanel>
        </AccordionItem>

        {backingItems.map(({ name, price, amountLeft, desc }) => {
          return (
            <BackingProduct
              name={name}
              price={price}
              amountLeft={amountLeft}
              desc={desc}
              key={useId()}
            />
          );
        })}
      </Accordion>
    </motion.section>
  );
}

const BackingProduct = ({ name, price, desc, amountLeft }) => {
  const [priceValue, setPriceValue] = useState(price);
  const handleInput = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <AccordionItem
      activeClassName="backing-products__product backing-products__product--active"
      className={
        amountLeft
          ? "backing-products__product"
          : "backing-products__product disable"
      }
    >
      <AccordionItemButton className="backing-products__product-overview">
        <Indicator />
        <h3 className="backing-products__product-name">{name}</h3>
        <p className="backing-products__product-price">
          Pledge $<AnimatedAmount from={0} to={price} /> or more
        </p>

        <h4 className="backing-products__product-left  backing-products__product-left--value">
          <AnimatedAmount from={300} to={amountLeft} />{" "}
          <span className={"backing-products__product-left"}>left</span>
        </h4>
        <br />
        <p className="backing-products__product-desc">{desc}</p>
      </AccordionItemButton>
      <AccordionItemPanel className="backing-products__product-pricing">
        <label
          htmlFor={"pledge-amount"}
          className="backing-products__product-label"
        >
          Enter your pledge
        </label>
        <div className="backing-products__product-price-to-pay">
  
          <Dollar />

          <input
            id={"pledge-amount"}
            min={price}
            type="number"
            name="pledgeAmount"
            onChange={handleInput}
            value={priceValue}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="backing-products__product-continue"
        >
          {"continue"}
        </motion.button>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default BackingProducts;
