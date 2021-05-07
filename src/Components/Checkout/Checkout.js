import FinishCheckout from './FinishCheckout';
import React from 'react';
import {
    Link
  } from 'react-router-dom';
import './checkout.css';

export default function Checkout(props) {
    function checkout() {
        FinishCheckout(props.receipt);
    }

    const receipt = props.receipt;
    function products(array, type) {
        let text = '';
        if (type === 'dish') {
            text = "\n- *Prato*: ";
        } else if (type === 'drink') {
            text = "\n- *Bebida*: ";
        } else {
            text = "\n- *Sobremesa*: ";
        }
        array.forEach((e, i) => {
            if (e[0] > 0) {
                if (array.length - 1 === i) {
                    text += `${e[1]}${e[0] > 1 ? ` (${e[0]}x)` : ''}`;
                } else {
                    text += `${e[1]}${e[0] > 1 ? ` (${e[0]}x)` : ''}, `;
                }
            }
        })
        return text;
    }
    
    function price(obj) {
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
        return price.toFixed(2).replace('.',',');
    }
    
    const msg = window.encodeURIComponent(
        "Olá, gostaria de fazer o *pedido*:" +
        products(receipt.dish, 'dish') +
        products(receipt.drink, 'drink') +
        products(receipt.desert, 'desert') +
        "\n*Total*: R$ " + "*" + price(receipt) + "*"
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
                </div>

                <div className='finish-checkout' onClick={checkout}>Tudo certo, pode pedir!</div>
                <Link to='/' style={{ textDecoration: 'none'}}>
                    <div className='cancel'>
                        Cancelar
                    </div>
                </Link>
            </div>
        </>
    );
}

