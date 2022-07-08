import style from './shopItem.module.scss';

function ShopItem({ imageUrl, title, price, id }) {
  return (
    <div className={style.shopItem}>
      <img src={imageUrl} alt={`${title.toUpperCase()}_image`} />
      <div className={style.description}>
        <p>{title}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default ShopItem;
