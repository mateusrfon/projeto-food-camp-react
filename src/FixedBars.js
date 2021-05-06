export default function FixedBars() {
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
        </>
    );
}