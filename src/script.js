let dish
let drink
let desert

function SelectDish(buttonClass) {
    const dishes = document.querySelector('.dishes .selected')
    if (dishes != null) {
        dishes.classList.remove('selected')
    }

    const select = document.querySelector(buttonClass + ' .selected-border')
    select.classList.add('selected')

    dish = buttonClass;
    Done()
}

function SelectDrink(buttonClass) {
    const drinks = document.querySelector('.drinks .selected')
    if (drinks != null) {
        drinks.classList.remove('selected')
    }

    const select = document.querySelector(buttonClass + ' .selected-border')
    select.classList.add('selected')

    drink = buttonClass;
    Done()
}

function SelectDesert(buttonClass) {
    const deserts = document.querySelector('.deserts .selected')
    if (deserts != null) {
        deserts.classList.remove('selected')
    }

    const select = document.querySelector(buttonClass + ' .selected-border')
    select.classList.add('selected')

    desert = buttonClass;
    Done()
}

function Done(){
    if (dish != null && drink != null && desert != null) {
        const done = document.querySelector('.end button');
        done.classList.add('bgreen')
        done.querySelector('p').innerHTML = 'Fechar pedido'
    }
}

function Close() {
    if (dish != null && drink != null && desert != null) {
    const name = prompt("Digite seu nome");
    const address = prompt("Digite seu endereço");

    const dishes = document.querySelector('.dishes ' + dish);
    const drinks = document.querySelector('.drinks ' + drink);
    const deserts = document.querySelector('.deserts ' + desert);

    const pdish = dishes.querySelector('.price').innerHTML;
    const pdrink = drinks.querySelector('.price').innerHTML;
    const pdesert = deserts.querySelector('.price').innerHTML;

    const price = Number(pdish) + Number(pdrink) + Number(pdesert);

    let msg = "Olá, gostaria de fazer o *pedido*:" +
    "\n- *Prato*: " + dishes.querySelector('.goods strong').innerHTML +
    "\n- *Bebida*: " + drinks.querySelector('.goods strong').innerHTML +
    "\n- *Sobremesa*: " + deserts.querySelector('.goods strong').innerHTML +
    "\n*Total*: R$ " + "*" + price.toFixed(2) + "*" +
    "\n\nNome: " + name +
    "\nEndereço: " + address;

    msg = window.encodeURIComponent(msg);
    SendMsg(msg);
    }
}

function SendMsg(mensagem) {
    const celular = "5571992862087";
    const msg = mensagem;
    window.open("https://wa.me/" + celular + "?text=" + msg, "_blank")
}