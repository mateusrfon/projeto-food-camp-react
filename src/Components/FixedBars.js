export default function FixedBars() {
    return (
        <>
            {/*<!--TOP-->*/}
            <div className="top">
                <div className="title">FoodCamp</div>
                <div className="description">Sua comida em 6 minutos</div>
            </div>
            {/*<!--TOP-->*/}   
            {/*<!--END-->*/}
            <div className="end">
                <button className="bgray" onclick="Close()"><p>Selecione os 3 itens<br/>para fechar o pedido</p></button>
            </div>
            {/*<!--END-->*/}
        </>
    );
}