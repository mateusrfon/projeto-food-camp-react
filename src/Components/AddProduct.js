export default function AddProduct(numberProducts, setNumberProducts, closeButton, setCloseButton, close, setEnd) {
    setNumberProducts(numberProducts + 1);
    setCloseButton(closeButton + 1);

    if (close && (closeButton + 1)) {
        setEnd({color: 'bgreen', html: <p>Fechar pedido</p>});
    } else {
        setEnd({color: 'bgray', html: <p>Selecione os 3 itens<br/>para fechar o pedido</p>});
    }
}