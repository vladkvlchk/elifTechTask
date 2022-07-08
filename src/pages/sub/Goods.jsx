import ShopItem from "../../components/ShopItem"

function Goods({ items }){
    return(
        <div className="goods">
            {items.map((item)=>{
                return <ShopItem {...item} />
            })}
        </div>
    )
}

export default Goods