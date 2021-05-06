export default function Product(props) {
    return (
        <button class="choices" onclick={'memebreak'}>
            <div class="selected-border">
                {/*counter*/}
            </div>            
            <img src={props.img} alt={props.name}/>
            <p class="goods"><strong>{props.name}</strong></p>
            <p class="info">{props.description}</p>
            <p class="goods black">R$ <span class="price black">{props.price}</span></p>
        </button>
    );
}