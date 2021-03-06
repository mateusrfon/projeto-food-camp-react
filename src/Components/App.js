import FixedBars from "./FixedBars";
import GoodsRow from "./GoodsRow";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Checkout from './Checkout/Checkout';

export default function App() {
    const [dish, setDish] = React.useState(0);
    const [drink, setDrink] = React.useState(0);
    const [desert, setDesert] = React.useState(0);

    const [end, setEnd] = React.useState({color: 'bgray', html: <p>Selecione os 3 itens<br/>para fechar o pedido</p>});
    const [receipt, setReceipt] = React.useState({
        dish:[[0,'none',0], [0,'none',0], [0,'none',0]],
        drink:[[0,'none',0], [0,'none',0], [0,'none',0]],
        desert:[[0,'none',0], [0,'none',0], [0,'none',0]]
    })

    return (
        <Router>
            <Route exact path="/">
                <FixedBars end={end} receipt={receipt}/>
                <GoodsRow title='Primeiro, seu prato' type='dish' goods={dishes} closeButton={[dish, setDish]} close={(drink > 0 && desert > 0)} setEnd={setEnd} receipt={receipt} setReceipt={setReceipt}/>
                <GoodsRow title='Agora, sua bebida' type='drink' goods={drinks} closeButton={[drink, setDrink]} close={(dish > 0 && desert > 0)} setEnd={setEnd} receipt={receipt} setReceipt={setReceipt}/>
                <GoodsRow title='Por fim, sua sobremesa' type='desert' goods={deserts} closeButton={[desert, setDesert]} close={(dish > 0 && drink > 0)} setEnd={setEnd} receipt={receipt} setReceipt={setReceipt}/>
            </Route>
            <Route exact path="/checkout">
                <Checkout receipt={receipt} setReceipt={setReceipt}/>
            </Route>
        </Router>
    );
}

const dishes = [
    {img: 'images/frangoassado.jpeg', name: 'Frango Assado',
    description: 'Tradicional frango assado ao ponto', price: '55,00'},
    {img: 'images/frangoassado.jpeg', name: 'Galinha Assada',
    description: 'Prato perfeito para a masculidade frágil', price: '57,50'},
    {img: 'images/frangoassado.jpeg', name: 'Ave Assada',
    description: 'Na dúvida? Essa é a escolha certeira!', price: '59,00'}
];

const drinks = [
    {img: 'images/sucos.jpeg', name: 'Suco Mistério',
    description: 'Receba um suco aleatório', price: '7,00'},
    {img: 'images/alcool.jpg', name: 'Álcool 70',
    description: 'Shot para aqueles destemidos', price: '00,50'},
    {img: 'images/agua-mineral.jpg', name: 'Água Mineral',
    description: 'No precinho para você se hidratar', price: '1,00'}
];

const deserts = [
    {img: 'images/franquias-de-acai-1.jpg', name: 'Açaí 500ml',
    description: 'Delicioso açaí com banana', price: '14,00'},
    {img: 'images/morango-potinho.jpg', name: 'Pavê de morango',
    description: 'É pa vê, não pa cumê!', price: '8,50'},
    {img: 'images/saladadefrutas.jpg', name: 'Salada de Frutas',
    description: 'Quem disse que precisa sair da dieta?', price: '7,00'}
];