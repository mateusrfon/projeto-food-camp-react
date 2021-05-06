export default function RemoveProduct(setSelected, numberProducts, setNumberProducts, closeButton, setCloseButton, close, setEnd) {
    if (numberProducts === 1) {
        setSelected('');
        setNumberProducts(0);
    } else {
        setNumberProducts(numberProducts - 1);
    }
    setCloseButton(closeButton - 1);

    if (close && (closeButton - 1)) {
        setEnd({color: 'bgreen', html: <p>Fechar pedido</p>});
    } else {
        setEnd({color: 'bgray', html: <p>Selecione os 3 itens<br/>para fechar o pedido</p>});
    }
}