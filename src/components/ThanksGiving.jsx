import React from 'react';
import {Check} from "../icons";

function ThanksGiving() {
    return (
        <div className={"thanks-giving"}>
            <Check/>
        <h2 className="thanks-giving__header">Thanks for your support!</h2>
           <p className="thanks-giving__desc"> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
               an email once our campaign is completed.
               Got it!</p>
            <button className="thanks-giving__btn btn">Got it!</button>
        </div>
    );
}
export default ThanksGiving;