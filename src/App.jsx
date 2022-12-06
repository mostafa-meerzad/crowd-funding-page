import React, { createContext, useEffect, useState } from "react";
import {
  Logo,
  LogoBookmark,
  LogoMasterCraft,
  MenuClose,
  MenuOpen
} from "./icons";

import { motion } from "framer-motion";
import { data } from "./data.js";
import { useId } from "react";
import Product from "./components/Product.jsx";
import "./style.css";

import mobileViewImg from "./icons/image-hero-mobile.jpg";
import desktopViewImg from "./icons/image-hero-desktop.jpg";
import { AnimatedAmount, AnimatedProgress } from "./AnimatedAmount";
import BackingProducts from "./components/BackingProducts.jsx";

const ProductsContext = createContext();

function App() {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const [isCoverShowing, setIsCoverShowing] = useState(false);

  const handleMenu = () => {
    setIsMenuShowing(!isMenuShowing);
    setIsCoverShowing(!isCoverShowing);
  };
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const [isBackingProductsShowing, setIsBackingProductsShowing] =
    useState(false);

  const totalIncome = 100000;
  const currentIncome = 89914;
  const currentBackers = 5007;
  const daysLeft = 57;

  const mobileView = 375;
  const desktopView = 1440;

  const bookmarkCircleActive = "#147B74FF";
  const bookmarkLabelActive = "#FFF";

  const menuIconInitial = { opacity: 0, scale: 0 };
  const menuIconAnimate = { opacity: 1, scale: 1 };

  const menuVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1
    }
  };

  // get window width to make App rerender when window-size changes
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };
      useEffect(() => {
  if(windowWidth >= desktopView ){
              setIsMenuShowing(true)
              if(!isBackingProductsShowing){
                  setIsCoverShowing(false)
              }
          }
          else if(windowWidth <= desktopView ){
              console.log("less than desktop view");
            //   setIsMenuShowing(false)
              if(isMenuShowing){
                  setIsCoverShowing(true)


              }
          }

          window.addEventListener("resize", resizeWindow)
          return () => {
              window.removeEventListener("resize", resizeWindow)
          }
      })
  return (
    <>
      <picture className={"picture"}>
        <source
          className={"picture__desktop"}
          srcSet={desktopViewImg}
          media={`(min-width:${desktopView}px)`}
        />
        <source
          className={"picture__mobile"}
          srcSet={mobileViewImg}
          media={`(min-width:${mobileView}px)`}
        />
        <img className={"picture__mobile"} src={mobileViewImg} alt="" />
      </picture>
      <header className={"header"}>
        <Logo />
        <div className="header__menu-icon">
          <motion.div
            className={"header__close"}
            initial={menuIconInitial}
            animate={isMenuShowing ? menuIconAnimate : {}}
            onClick={handleMenu}
          >
            <MenuClose />
          </motion.div>
          <motion.div
            className={"header__open"}
            initial={menuIconInitial}
            animate={!isMenuShowing ? menuIconAnimate : {}}
            onClick={handleMenu}
          >
            <MenuOpen />
          </motion.div>
        </div>
        <motion.ul
          variants={menuVariants}
          initial={"hidden"}
          animate={isMenuShowing ? "visible" : {}}
          transition={{ staggerChildren: 0.1 }}
          className={"header__menu"}
        >
          <motion.li variants={menuVariants} className="header__menu-option">
            About
          </motion.li>
          <motion.li variants={menuVariants} className="header__menu-option">
            Discover
          </motion.li>
          <motion.li variants={menuVariants} className="header__menu-option">
            Get Started
          </motion.li>
        </motion.ul>
      </header>

      <main className={"main"}>
        <div className="intro ">
          <LogoMasterCraft />
          <h1 className="intro__title">Mastercraft Bamboo Monitor Riser</h1>
          <p className="intro__desc">
         
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="intro__btns-container">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="intro__back-btn"
              onClick={() => {
               setIsBackingProductsShowing(true) 
               setIsCoverShowing(true)
              }}
            >
              Back this project
            </motion.button>
            <motion.button
              style={isBookmarked && { color: "#147B74FF" }}
              onClick={handleBookmark}
              whileTap={{ scale: 0.9 }}
              className="intro__bookmark-btn"
            >
              <LogoBookmark
                circleFill={isBookmarked && bookmarkCircleActive}
                labelFill={isBookmarked && bookmarkLabelActive}
              />
              <span className="intro__bookmark-txt">Bookmark</span>
            </motion.button>
          </div>
        </div>

        <div className="info ">
          <ul className="info__values">
            <li className="info__parameter">
              <h2 className="info__value">
                $<AnimatedAmount duration={1.5} from={0} to={currentIncome} />
              </h2>
              <p className="info__desc">
                of ${totalIncome.toLocaleString()} backed
              </p>
            </li>
            <hr className={"info__bar"} />
            <li className="info__parameter">
              <h2 className="info__value">
                <AnimatedAmount from={0} to={currentBackers} duration={1} />
              </h2>
              <p className="info__desc">total backers</p>
            </li>
            <hr className={"info__bar"} />
            <li className="info__parameter">
              <h2 className="info__value">
                <AnimatedAmount from={100} to={daysLeft} duration={0.5} />
              </h2>
              <p className="info__desc">days left</p>
            </li>
          </ul>
          <AnimatedProgress
            from={0}
            to={currentIncome}
            max={totalIncome}
            duration={1.5}
          />
        </div>

        <div className="products main__section">
          <h2 className="products__header">About this project</h2>
          <p className="products__desc">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
            <br />
            <br />
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <br />
          {data.map(({ name, price, desc, amountLeft }) => {
            return (
              <Product
                key={useId()}
                name={name}
                price={price}
                amountLeft={amountLeft}
                desc={desc}
              />
            );
          })}
        </div>

        {isBackingProductsShowing && (
          <ProductsContext.Provider
            value={{ setIsCoverShowing, setIsBackingProductsShowing }}
          >
            <BackingProducts backingItems={data} />
          </ProductsContext.Provider>
        )}
      </main>

      <motion.div
        onClick={() => {
            if(isBackingProductsShowing){
                setIsBackingProductsShowing(false)
                setIsCoverShowing(false)
            } else{
                handleMenu()
            }
        }}
        initial={{ opacity: 0, zIndex: -1 }}
        animate={isCoverShowing ? { opacity: 1, zIndex: 1 } : {}}
        transition={{ duration: 0.05 }}
        className="cover"
      />

    </>
  );
}

export default App;
export { ProductsContext };
