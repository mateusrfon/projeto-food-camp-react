import SelectProduct from "../SelectProduct";
import React from "react";
import AddProduct from "../AddProduct";
import RemoveProduct from "../RemoveProduct";

import './product.css';

//no RemoveProduct se qtd = 1 setSelected('')

export default function Product(props) {
    const [selected, setSelected] = React.useState('');
    const [counter, setCounter] = React.useState(0);
    
    return (
        <button className="choices" onClick={() => SelectProduct(selected, setSelected, setCounter)}>
            <div className={"selected-border " + selected}>
                <div className="counter">
                    <button className="minus" onClick={() => RemoveProduct(counter, setCounter, setSelected)}>-</button>
                    {counter}
                    <button className="plus" onClick={() => AddProduct(counter, setCounter)}>+</button>
                </div>
            </div>            
            <img src={props.img} alt={props.name}/>
            <p className="goods"><strong>{props.name}</strong></p>
            <p className="info">{props.description}</p>
            <p className="goods black">R$ <span className="price black">{props.price}</span></p>
        </button>
    );
}