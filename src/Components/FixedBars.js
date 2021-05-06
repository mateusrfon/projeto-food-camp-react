import React from 'react';

export default function FixedBars(props) {
    return (
        <>
            <div className="top">
                <div className="title">FoodCamp</div>
                <div className="description">Sua comida em 6 minutos</div>
            </div>

            <div className="end">
                <button className={props.end.color} >{props.end.html}</button>
            </div>
        </>
    );
}