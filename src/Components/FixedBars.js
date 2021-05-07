import React from 'react';
import Finish from './Finish';

export default function FixedBars(props) {
    function banana() {
        Finish(props.receipt);
    }
    const func = props.end.color === 'bgreen' ? banana : null;
    return (
        <>
            <div className="top">
                <div className="title">FoodCamp</div>
                <div className="description">Sua comida em 6 minutos</div>
            </div>

            <div className="end" onClick={func}>
                <button className={props.end.color} >{props.end.html}</button>
            </div>
        </>
    );
}