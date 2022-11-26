import React from 'react';
import {Logo, LogoBookmark, LogoMasterCraft} from "./icons";

import {data} from "./data.js";
import {useId} from "react";
import Product from "./components/Product.jsx";

import mobileViewImg from "./icons/image-hero-mobile.jpg"
import desktopViewImg from "./icons/image-hero-desktop.jpg"
const totalIncome = 100000
const currentIncome = 89914
const currentBackers = 5007
const daysLeft = 57


const mobileView = '375px'
const desktopView = '1440px'


function App() {
    return (
        <>
            <picture>
                <source srcSet={desktopViewImg} media={`(min-width:${desktopView})`} />
                <source srcSet={mobileViewImg} media={`(min-width:${mobileView})`} />
                <img src={mobileViewImg} alt=""/>
            </picture>
            <header className={"header"}>
                <Logo/>
                <ul className={"header__menu"}>
                    <li className="header__menu-option">About</li>
                    <li className="header__menu-option">Discover</li>
                    <li className="header__menu-option">Get Started</li>
                </ul>
            </header>

            <main className={"main"}>
                <div className="intro">
                    <LogoMasterCraft/>
                    <h1 className="intro__title">Mastercraft Bamboo Monitor Riser</h1>
                    <p className="intro__desc"> A beautiful & handcrafted monitor stand to reduce neck and eye
                        strain.</p>
                    <button className="intro__back-btn btn">Back this project</button>
                    <button className="intro__bookmark btn"><LogoBookmark/>Bookmark</button>
                </div>

                <div className="info">
                    <ul className="info__values">
                        <li className="info__parameter`">
                            <p className="info__value">${currentIncome.toLocaleString()}</p>
                            <p className="info__desc">of ${totalIncome.toLocaleString()} backed</p>
                        </li>
                        <li className="info__parameter`">
                            <p className="info__value">${currentBackers.toLocaleString()}</p>
                            <p className="info__desc">total backers</p>
                        </li>
                        <li className="info__parameter`">
                            <p className="info__value">${daysLeft}</p>
                            <p className="info__desc">days left</p>
                        </li>

                    </ul>
                </div>
                <div className="products">
                    <h2 className="products__header">About this project</h2>
                    <p className="products__desc">


                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to
                        improve
                        your posture and make you more comfortable while at work, helping you stay focused on the task
                        at hand.
                        <br/>
                        <br/>
                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your
                        computer
                        to allow notepads, pens, and USB sticks to be stored under the stand.

                    </p>
                    <br/>
                    {data.map(({name, price, desc, amountLeft}) => {
                        return <Product key={useId()} name={name} price={price} amountLeft={amountLeft} desc={desc}/>
                    })}
                </div>
            </main>
        </>
    );
}

export default App;
