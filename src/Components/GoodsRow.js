import Product from "./product/Product";

export default function GoodsRow(props) {
    return (
        <>
            <span>{props.title}</span>
            <div className="choices-box">
                {props.goods.map((e, i) => 
                    <Product key={i} img={e.img} name={e.name} description={e.description} 
                    price={e.price} closeButton={props.closeButton} close={props.close} setEnd={props.setEnd}/>
                )}
            </div>
        </>
    );
}

