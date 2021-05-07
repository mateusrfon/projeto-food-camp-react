import React from 'react';
import {
    Link
  } from 'react-router-dom';

export default function FixedBars(props) {

    const link = (props.end.color === 'bgreen') ? '/checkout' : '/';

    return (
        <>
            <div className="top">
                <div className="title">FoodCamp</div>
                <div className="description">Sua comida em 6 minutos</div>
            </div>

            <Link to={link}>
                <div className="end">
                    <button className={props.end.color} >{props.end.html}</button>
                </div>
            </Link>
        </>
    );
}