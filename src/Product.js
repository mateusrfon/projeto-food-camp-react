import SelectProduct from "./SelectProduct";
import React from "react";

export default function Product(props) {
    const [selected, setSelected] = React.useState('');
    console.log(selected);
    return (
        <button class="choices" onClick={() => SelectProduct(setSelected)}>
            <div class={"selected-border " + selected}>
                {/*counter*/}
            </div>            
            <img src={props.img} alt={props.name}/>
            <p class="goods"><strong>{props.name}</strong></p>
            <p class="info">{props.description}</p>
            <p class="goods black">R$ <span class="price black">{props.price}</span></p>
        </button>
    );
}