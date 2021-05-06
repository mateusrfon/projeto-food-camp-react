import FixedBars from "./FixedBars";
import GoodsRow from "./GoodsRow";
import React from 'react';

export default function App() {
    const [dish, setDish] = React.useState(0);
    const [drink, setDrink] = React.useState(0);
    const [desert, setDesert] = React.useState(0);

    const [end, setEnd] = React.useState({color: 'bgray', html: <p>Selecione os 3 itens<br/>para fechar o pedido</p>});

    return (
        <>
            <FixedBars end={end}/>
            <GoodsRow title='Primeiro, seu prato' goods={dishes} closeButton={[dish, setDish]} close={(drink > 0 && desert > 0)} setEnd={setEnd}/>
            <GoodsRow title='Agora, sua bebida' goods={drinks} closeButton={[drink, setDrink]} close={(dish > 0 && desert > 0)} setEnd={setEnd}/>
            <GoodsRow title='Por fim, sua sobremesa' goods={deserts} closeButton={[desert, setDesert]} close={(dish > 0 && drink > 0)} setEnd={setEnd}/>
        </>
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