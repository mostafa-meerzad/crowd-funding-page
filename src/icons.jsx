const Logo =  () => {

    return <svg className={"header__logo"} xmlns="http://www.w3.org/2000/svg" width="127.571" height="20" viewBox="0 0 127.571 20">
        <path id="logo" d="M7.272,20a7.005,7.005,0,0,0,6.2-3.54L9.88,14.4a2.814,2.814,0,0,1-2.662,1.537,3.02,3.02,0,0,1-3.1-3.184,3.019,3.019,0,0,1,3.1-3.183A2.84,2.84,0,0,1,9.88,11.109l3.6-2.086a7.069,7.069,0,0,0-6.2-3.512A7.108,7.108,0,0,0,0,12.755,7.108,7.108,0,0,0,7.272,20Zm11.367-.384v-6.2c0-2.717,2.415-3.4,4.116-3.129V5.62a4.121,4.121,0,0,0-4.116,2.717V5.895H14.523v13.72h4.116ZM30.116,20a7.245,7.245,0,1,0-7.272-7.245A7.192,7.192,0,0,0,30.116,20Zm0-4.007a3.078,3.078,0,0,1-3.156-3.238,3.157,3.157,0,1,1,6.312,0A3.077,3.077,0,0,1,30.116,15.993ZM45.3,19.616l2.2-7.327,2.195,7.327H53.53L57.92,5.895H53.53l-1.976,7.354-2.14-7.354H45.572l-2.14,7.354L41.455,5.895h-4.39l4.39,13.72H45.3ZM64.156,20a5.154,5.154,0,0,0,4.089-1.674v1.29h4.116V.406H68.245V7.184a5.156,5.156,0,0,0-4.089-1.673c-3.6,0-6.559,3.155-6.559,7.244S60.561,20,64.156,20Zm.823-3.9a3.133,3.133,0,0,1-3.265-3.348,3.267,3.267,0,1,1,6.531,0A3.134,3.134,0,0,1,64.979,16.1Zm14.66,3.513V9.846h2.552V5.895H79.64c0-1.592,1.016-2.058,2.552-1.921V.022c-4.555-.274-6.668,2.03-6.668,5.873H73.685V9.846h1.839v9.77H79.64ZM87.9,20a4.7,4.7,0,0,0,3.925-1.674v1.29h4.116V5.895H91.83v7.491c0,1.949-1.043,2.827-2.553,2.827a2.263,2.263,0,0,1-2.387-2.5V5.895H82.774v8.424c0,3.7,2.36,5.681,5.131,5.681Zm14.44-.384V12.124c0-1.948,1.044-2.826,2.553-2.826a2.262,2.262,0,0,1,2.387,2.5v7.82H111.4V11.191c0-3.7-2.36-5.68-5.132-5.68a4.693,4.693,0,0,0-3.924,1.673V5.894H98.229V19.616h4.117Zm17.02.384a5.154,5.154,0,0,0,4.09-1.674v1.29h4.116V.406h-4.116V7.184a5.157,5.157,0,0,0-4.09-1.673c-3.594,0-6.558,3.155-6.558,7.244S115.771,20,119.366,20Zm.824-3.9a3.133,3.133,0,0,1-3.265-3.348,3.267,3.267,0,1,1,6.531,0A3.134,3.134,0,0,1,120.189,16.1Z" fill="#fff"/>
    </svg>

}

const LogoMasterCraft =  () => {
return <svg className={"intro__logo"} id="logo-mastercraft" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
    <circle id="Ellipse_1" data-name="Ellipse 1" cx="28" cy="28" r="28"/>
    <g id="Group_1" data-name="Group 1">
        <path id="Path_2" data-name="Path 2" d="M15.565,28.565a1.93,1.93,0,0,1,2.606-.113l.122.113L28.435,38.707a1.93,1.93,0,0,1-2.606,2.84l-.122-.112L15.565,31.293a1.93,1.93,0,0,1,0-2.728Z" fill="#444"/>
        <path id="Path_3" data-name="Path 3" d="M36.19,17.48a1.65,1.65,0,0,1,2.805,1.026l.005.126V29.368a1.647,1.647,0,0,1-3.288.122l-.005-.122V22.563L27.664,30.52a1.65,1.65,0,0,1-2.806-1.026l0-.126V22.563L16.81,30.52a1.66,1.66,0,0,1-2.224.095l-.105-.095a1.616,1.616,0,0,1-.1-2.2l.1-.1L25.336,17.48a1.65,1.65,0,0,1,2.806,1.026l0,.126v6.8l8.043-7.956Z" fill="#fff"/>
    </g>
</svg>

}

const LogoBookmark =  ({circleFill, labelFill}) => {
return<svg className={"intro__bookmark-icon"} id="icon-bookmark" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
    <circle id="Ellipse_2" data-name="Ellipse 2" cx="28" cy="28" r="28" fill={circleFill || "#2f2f2f"}/>
    <path id="Path_4" data-name="Path 4" d="M23,19V37l5-5.058L33,37V19Z" fill={labelFill || "#b1b1b1"} fillRule="evenodd"/>
</svg>

}

const Check =  () => {
return <svg className={"thanks-giving__check"} width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
}

const Indicator =  () => {
return <svg className={"backing-products__product-indicator"} xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78">
    <g id="indicator" transform="translate(-5880 2017)">
        <g id="outer" transform="translate(5880 -2017)" fill="none" stroke="#d1d1d1" strokeWidth="1">
            <circle cx="39" cy="39" r="39" stroke="none"/>
            <circle cx="39" cy="39" r="38.5" fill="none"/>
        </g>
        <circle id="inner" cx="20" cy="20" r="20" transform="translate(5899 -1998)" fill="#3CB4ACFF"/>
    </g>
</svg>

}
const MenuClose =  () => {
return <svg xmlns="http://www.w3.org/2000/svg" width="14.143" height="14.143" viewBox="0 0 14.143 14.143">
    <path id="icon-close-modal" d="M11.314,0l2.828,2.828L9.9,7.071l4.243,4.243-2.828,2.828L7.07,9.9,2.827,14.143,0,11.314,4.242,7.07,0,2.828,2.828,0,7.071,4.242Z" fillRule="evenodd" fill="#fff" />
</svg>

}
const MenuOpen =  () => {
return<svg   id="icon-hamburger" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15">
    <path id="Path_1" data-name="Path 1" d="M0,0H16V3H0ZM0,6H16V9H0Zm0,6H16v3H0Z" fill="#fff" fillRule="evenodd"/>
</svg>

}
export {Logo, LogoMasterCraft, LogoBookmark, Check, Indicator,MenuClose, MenuOpen}