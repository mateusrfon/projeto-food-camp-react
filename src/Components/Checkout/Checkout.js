import FinishCheckout from './FinishCheckout';
import React from 'react';
import {
    Link
  } from 'react-router-dom';
import './checkout.css';

export default function Checkout(props) {
    const receipt = props.receipt;

    function resetReceipt() {
        props.setReceipt({
            dish:[[0,'none',0], [0,'none',0], [0,'none',0]],
            drink:[[0,'none',0], [0,'none',0], [0,'none',0]],
            desert:[[0,'none',0], [0,'none',0], [0,'none',0]]
        });
    }

    function checkout() {
        FinishCheckout(receipt);
    }

    function productsCheckout(array) {
        const text = [];
        array.forEach((e, i) => {
            if (e[0] > 0) {
                text.push(<div><p>{e[1]}</p><p>{(e[0]*e[2]).toFixed(2).replace('.',',')}</p></div>);
            }
        });
        return (
            <>
                {text}
            </>
        );
    }

    function priceCheckout(obj) {
        let price = 0;
        obj.dish.forEach((e) => {
            price += e[0]*e[2];
        });
        obj.drink.forEach((e) => {
            price += e[0]*e[2];
        });
        obj.desert.forEach((e) => {
            price += e[0]*e[2];
        });
        return (
            <div>
                <p className='bold'>TOTAL</p>
                <p className='bold'>R$ {price.toFixed(2).replace('.',',')}</p>
            </div>
        );
    }
    
    const checkoutItems = (
        <>
        {productsCheckout(receipt.dish)}
        {productsCheckout(receipt.drink)}
        {productsCheckout(receipt.desert)}
        {priceCheckout(receipt)}
        </>
    );

    return (
        <>
            <div className="top">
                <div className="title">FoodCamp</div>
                <div className="description">Sua comida em 6 minutos</div>
            </div>

            <div className='checkout'>
                <span>Revise seu pedido</span>

                <div className="checkout-box">
                    {checkoutItems}
                </div>

                <div className='finish-checkout' onClick={checkout}>Tudo certo, pode pedir!</div>
                <Link to='/' style={{ textDecoration: 'none'}} onClick={resetReceipt}>
                    <div className='cancel'>
                        Cancelar
                    </div>
                </Link>
            </div>
        </>
    );
}

