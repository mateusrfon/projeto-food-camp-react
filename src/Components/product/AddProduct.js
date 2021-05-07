export default function AddProduct(numberProducts, setNumberProducts, closeButton, setCloseButton, close, setEnd, receiptInfo) {
    setNumberProducts(numberProducts + 1);
    setCloseButton(closeButton + 1);

    const {i, type, receipt, setReceipt, name, price} = receiptInfo;
    const newReceipt = {...receipt};
    if (type === 'dish'){
        newReceipt.dish[i] = [numberProducts + 1, name, Number(price)];
    } else if (type === 'drink') {
        newReceipt.drink[i] = [numberProducts + 1, name, Number(price)];
    } else if (type === 'desert') {
        newReceipt.desert[i] = [numberProducts + 1, name, Number(price)];
    }
    setReceipt(newReceipt);

    if (close && (closeButton + 1)) {
        setEnd({color: 'bgreen', html: <p>Fechar pedido</p>});
    } else {
        setEnd({color: 'bgray', html: <p>Selecione os 3 itens<br/>para fechar o pedido</p>});
    }
}