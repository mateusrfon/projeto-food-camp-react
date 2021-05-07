import SelectProduct from "./SelectProduct";
import React from "react";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";

import './product.css';

export default function Product(props) {
    const close = props.close; //boolean for check.
    const [closeButton, setCloseButton] = props.closeButton;
    const [selected, setSelected] = React.useState('');
    const [numberProducts, setNumberProducts] = React.useState(0);
    const receiptInfo = {i: props.indice, type: props.type, receipt: props.receipt, 
        setReceipt: props.setReceipt, name: props.name, price: props.price.replace(',','.')};
    //receipt.type[i] = [numberProducts, props.name, parseFloat(props.price.replace(',','.'))]

    return (
        <div className="choices" onClick={() => SelectProduct(selected, setSelected, setNumberProducts, closeButton, setCloseButton, close, props.setEnd, receiptInfo)}>
            <div className={"selected-border " + selected}>
                <div className="counter">
                    <button className="minus" onClick={() => RemoveProduct(setSelected, numberProducts, setNumberProducts, closeButton, setCloseButton, close, props.setEnd, receiptInfo)}>-</button>
                    {numberProducts}
                    <button className="plus" onClick={() => AddProduct(numberProducts, setNumberProducts, closeButton, setCloseButton, close, props.setEnd, receiptInfo)}>+</button>
                </div>
            </div>            
            <img src={props.img} alt={props.name}/>
            <p className="goods"><strong>{props.name}</strong></p>
            <p className="info">{props.description}</p>
            <p className="goods black">R$ <span className="price black">{props.price}</span></p>
        </div>
    );
}

//sempre que der um add, select ou remove preciso pegar
// {id{props.key}: [numberProducts, props.name, parseFloat(props.price.replace(',','.'))] }
//type = props.type
//i = props.key

//no add, selec e remove:
//receipt.type[i] = [numberProducts, props.name, parseFloat(props.price.replace(',','.'))]