import style from './shopItem.module.scss';

function ShopItem({imageUrl, title, price, id}){
    return(
        <div className={style.shopItem}>
            <img src={imageUrl} alt={`${title.toUpperCase()}_image`} />
            <p>{title}</p>
        </div>
    )
}

export default ShopItem