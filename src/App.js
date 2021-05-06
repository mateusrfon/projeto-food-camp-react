export default function App() {
    console.log('On business baby');
    return (
        <>
            {/*<!--TOP-->*/}
            <div class="top">
                <div class="title">FoodCamp</div>
                <div class="description">Sua comida em 6 minutos</div>
            </div>
            {/*<!--TOP-->*/}   
            {/*<!--END-->*/}
            <div class="end">
                <button class="bgray" onclick="Close()"><p>Selecione os 3 itens<br/>para fechar o pedido</p></button>
            </div>
            {/*<!--END-->*/}
            {/*<!--CONTEUDO-->*/}
            <span>Primeiro, seu prato</span>
            <div class="choices-box dishes">
                <button class="choices dish1" onclick="SelectDish('.dish1')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/frangoassado.jpeg" alt=""/>
                    <p class="goods"><strong>Frango Assado</strong></p>
                    <p class="info">Tradicional frango assado no ponto</p>
                    <p class="goods black">R$ <span class="price black">55.00</span></p>
                </button>
                <button class="choices dish2" onclick="SelectDish('.dish2')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/frangoassado.jpeg" alt=""/>
                    <p class="goods"><strong>Galinha Assada</strong></p>
                    <p class="info">Prato perfeito para a masculidade frágil</p>
                    <p class="goods black">R$ <span class="price black">57.50</span></p>
                </button>
                <button class="choices dish3" onclick="SelectDish('.dish3')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/frangoassado.jpeg" alt=""/>
                    <p class="goods"><strong>Ave Assada</strong></p>
                    <p class="info">Na dúvida? Essa é a escolha certeira!</p>
                    <p class="goods black">R$ <span class="price black">59.00</span></p>
                </button>
            </div>
            <span>Agora, sua bebida</span>
            <div class="choices-box drinks">
                <button class="choices drink1" onclick="SelectDrink('.drink1')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/sucos.jpeg" alt=""/>
                    <p class="goods"><strong>Suco Mistério</strong></p>
                    <p class="info">Receba um suco aleatório</p>
                    <p class="goods black">R$ <span class="price black">7.00</span></p>
                </button>
                <button class="choices drink2" onclick="SelectDrink('.drink2')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/alcool.jpg" alt=""/>
                    <p class="goods"><strong>Álcool 70</strong></p>
                    <p class="info">Shot para aqueles destemidos</p>
                    <p class="goods black">R$ <span class="price black">0.50</span></p>
                </button>
                <button class="choices drink3" onclick="SelectDrink('.drink3')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/agua-mineral.jpg" alt=""/>
                    <p class="goods"><strong>Água Mineral</strong></p>
                    <p class="info">No precinho para você se hidratar</p>
                    <p class="goods black">R$ <span class="price black">1.00</span></p>
                </button>
            </div>
            <span>Por fim, sua sobremesa</span>
            <div class="choices-box deserts">
                <button class="choices desert1" onclick="SelectDesert('.desert1')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/franquias-de-acai-1.jpg" alt=""/>
                    <p class="goods"><strong>Açaí 500ml</strong></p>
                    <p class="info">Delicioso açaí com banana</p>
                    <p class="goods black">R$ <span class="price black">14.00</span></p>
                </button>
                <button class="choices desert2" onclick="SelectDesert('.desert2')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/morango-potinho.jpg" alt=""/>
                    <p class="goods"><strong>Pavê de morango</strong></p>
                    <p class="info">É pa vê, não pa cumê!</p>
                    <p class="goods black">R$ <span class="price black">8.50</span></p>
                </button>
                <button class="choices desert3" onclick="SelectDesert('.desert3')">
                    <div class="selected-border">
                        <ion-icon name="checkmark-circle" class="selected-icon"></ion-icon>
                    </div>            
                    <img src="images/saladadefrutas.jpg" alt=""/>
                    <p class="goods"><strong>Salada de Frutas</strong></p>
                    <p class="info">Quem disse que precisa sair da dieta?</p>
                    <p class="goods black">R$ <span class="price black">7.00</span></p>
                </button>
            </div>
            {/*<!--CONTEUDO-->*/}
        </>
    );
}