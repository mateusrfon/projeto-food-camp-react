export default function Finish(receipt) {
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

    const celular = "5571992862087";

    window.open("https://wa.me/" + celular + "?text=" + msg, "_blank")
}

