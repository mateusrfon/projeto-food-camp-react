import SelectProduct from "../SelectProduct";
import React from "react";
import AddProduct from "../AddProduct";
import RemoveProduct from "../RemoveProduct";

import './product.css';

export default function Product(props) {
    const close = props.close;
    const [closeButton, setCloseButton] = props.closeButton;
    const [selected, setSelected] = React.useState('');
    const [numberProducts, setNumberProducts] = React.useState(0);
    
    return (
        <div className="choices" onClick={() => SelectProduct(selected, setSelected, setNumberProducts, closeButton, setCloseButton, close, props.setEnd)}>
            <div className={"selected-border " + selected}>
                <div className="counter">
                    <button className="minus" onClick={() => RemoveProduct(setSelected, numberProducts, setNumberProducts, closeButton, setCloseButton, close, props.setEnd)}>-</button>
                    {numberProducts}
                    <button className="plus" onClick={() => AddProduct(numberProducts, setNumberProducts, closeButton, setCloseButton, close, props.setEnd)}>+</button>
                </div>
            </div>            
            <img src={props.img} alt={props.name}/>
            <p className="goods"><strong>{props.name}</strong></p>
            <p className="info">{props.description}</p>
            <p className="goods black">R$ <span className="price black">{props.price}</span></p>
        </div>
    );
}