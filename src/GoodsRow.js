import Product from "./Product";

export default function GoodsRow(props) {
    return (
        <>
            <span>{props.title}</span>
            <div class="choices-box deserts">
                {props.goods.map((e) => 
                    <Product img={e.img} name={e.name} 
                    description={e.description} price={e.price}/>
                )}
            </div>
        </>
    );
}

