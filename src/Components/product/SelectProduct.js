export default function SelectProduct(selected, setSelected, setNumberProducts, closeButton, setCloseButton, close, setEnd, receiptInfo) {
    if (selected !== 'selected') {
        const numberProducts = 1;
        setSelected('selected');
        setNumberProducts(1);
        setCloseButton(closeButton + 1);

        if (close && (closeButton + 1)) {
            setEnd({color: 'bgreen', html: <p>Fechar pedido</p>});
        } else {
            setEnd({color: 'bgray', html: <p>Selecione os 3 itens<br/>para fechar o pedido</p>});
        }

        const {i, type, receipt, setReceipt, name, price} = receiptInfo;
        const newReceipt = {...receipt};
        if (type === 'dish'){
            newReceipt.dish[i] = [numberProducts, name, Number(price)];
        } else if (type === 'drink') {
            newReceipt.drink[i] = [numberProducts, name, Number(price)];
        } else if (type === 'desert') {
            newReceipt.desert[i] = [numberProducts, name, Number(price)];
        }
        setReceipt(newReceipt);
    }
}